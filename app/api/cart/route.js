import { NextResponse } from 'next/server';
import { connectDB } from "@/lib/mongodb"; // Adjust this path to match where your database connection utility lives
import Cart from '@/models/Cart';        // Adjust this path to match your Cart model file location
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route'; // Adjust this path to match your NextAuth route configuration

// ==========================================
// 1. GET: Fetch the cart items when a user refreshes the page
// ==========================================
export async function GET() {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);

    // If no user is logged in, return an unauthorized response
    if (!session || !session.user) {
      return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }

    // Match 'user_id' exactly as it looks in your MongoDB Atlas document
    const userId = session.user.id || session.user._id;
    const cart = await Cart.findOne({ user_id: userId });

    // If a cart exists, return its array items. If not, return an empty array.
    return NextResponse.json(cart ? cart.items : []);
  } catch (error) {
    console.error("Error in GET /api/cart:", error);
    return NextResponse.json({ message: 'Error fetching cart', error: error.message }, { status: 500 });
  }
}

// ==========================================
// 2. POST: Save the cart items when a user adds/removes products
// ==========================================
export async function POST(request) {
  try {
    await dbConnect();
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }

    const { items } = await request.json();
    const userId = session.user.id || session.user._id;

    // This updates the items array, or creates a new document if it doesn't exist (upsert: true)
    // It passes 'items' as a raw JavaScript array so MongoDB doesn't save it as a string "[]"
    const updatedCart = await Cart.findOneAndUpdate(
      { user_id: userId },
      { items: items },
      { new: true, upsert: true }
    );

    return NextResponse.json({ message: 'Cart updated successfully', cart: updatedCart });
  } catch (error) {
    console.error("Error in POST /api/cart:", error);
    return NextResponse.json({ message: 'Error updating cart', error: error.message }, { status: 500 });
  }
}