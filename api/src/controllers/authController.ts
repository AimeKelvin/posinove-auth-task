// src/controllers/authController.ts
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User, { IUser } from "../models/User";
import { generateToken } from "../utils/generateToken";

// Register
export const register = async (req: Request, res: Response) => {
  const { fullName, username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
    fullName,
      username,
      email,
      password: hashedPassword,
      plan: "basic", // default plan
    }) as IUser & { _id: any };


    // Cast _id to string for JWT
    const token = generateToken(user._id.toString());

    res.status(201).json({ user, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Login
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }) as (IUser & { _id: any }) | null;
    if (!user || !user.password) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Cast _id to string for JWT
    const token = generateToken(user._id.toString());

    res.status(200).json({ user, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
