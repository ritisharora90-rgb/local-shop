import { connectDB } from "@/lib/mongodb";
import Order from "@/models/Order";
import { NextResponse } from "next/server";



export async function GET() {

try {

await connectDB();

const orders = await Order.find();

return Response.json(
orders,
{ status: 200 }
);

} catch (error) {

return Response.json(
{
error:"Failed to fetch orders"
},
{
status:500
}
);

}

}

export async function POST(req){

try{

await connectDB();

const body =
await req.json();

const order =
await Order.create(body);

return NextResponse.json({
success:true,
order
});

}catch(error){

console.log(error);

return NextResponse.json(
{
success:false
},
{
status:500}
);

}

}