// api/user/update.js
import { prisma } from "@/config/db";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  const { email, password, id } = req.body;
  const newUserData = {
    email: email,
  };

  if (password) {
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds

    newUserData.password = hashedPassword;
  }

  if (email && id) {
    try {
      const updatedUser = await prisma.user.update({
        where: {
          id: parseInt(id),
        },
        data: newUserData,
      });

      res.status(200).json({
        message: "User updated successfully!",
        data: updatedUser,
      });
    } catch (error) {
      res.status(500).json({
        message: "Error occurred! Please contact the admin for more information.",
      });
    }
  } else {
    res.status(400).json({
      message: "Please provide email and user ID!",
    });
  }
}
