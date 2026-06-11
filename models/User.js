import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String },
  role:      { type: String, enum: ["admin", "customer"], default: "customer" },
  image:     { type: String },
  provider:  { type: String, default: "credentials" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);