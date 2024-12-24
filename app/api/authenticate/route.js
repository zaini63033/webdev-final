import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key';


export async function POST(req) {
  const { username, password } = await req.json();
  const MONGO_CON = `mongodb+srv://bscs21083:1234@cluster0.go60h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

  try {

    // Fetch Data from MongoDB

    let users = [
        {
          "username": "zain",
          "password": "password123",
        },
        {
            "username": "ajwad",
            "password": "4321",
        },
      ];

    const user = users.find(
      (user) =>
        user.username === username &&
        password === user.password
    );

    if (user) {

      const token = jwt.sign(
        { username: user.username, role: user.role },
        SECRET_KEY,
        { expiresIn: '1h' }
      );

      console.log("Token created!", token);
      return NextResponse.json({ success: true, name: user.name, token });
    } else {

      console.log("User not found!");
      return NextResponse.json({ success: false });
    }
  } catch (error) {
    console.error('Error fetching users from MongoDB:', error);
    return NextResponse.json({ success: false, error: 'Server error' });
  }
}