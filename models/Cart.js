import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema(
  {
    // Match the exact snake_case name from your Atlas screenshot
    user_id: {
      type: String,
      required: true,
      unique: true,
    },
    // Explicitly define this as an array of objects
    items: {
      type: Array, 
      default: []
    },
  },
  { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } } // Matches snake_case timestamps
);

export default mongoose.models.Cart || mongoose.model('Cart', CartSchema);