import { Schema, model, type InferSchemaType } from 'mongoose';

const UserSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2, maxlength: 100 },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, minlength: 8, select: false }
  },
  { timestamps: true }
);

export type User = InferSchemaType<typeof UserSchema>;
export default model<User>('User', UserSchema);
