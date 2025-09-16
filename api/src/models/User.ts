// src/models/User.ts
import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  fullName: string;
  username: string;
  email: string;
  password?: string;
  plan: "basic" | "premium";
  googleId?: string;
}

const UserSchema: Schema<IUser> = new Schema({
  fullName: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  plan: { type: String, enum: ["basic","premium"], default: "basic" },
  googleId: { type: String },
}, { timestamps: true });

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default User;
