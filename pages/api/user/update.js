import { prisma } from "@/config/db";


export default function handler(req, res) {
  const { role, email, password, id } = req.body;
  const new_userdata = { 
    role: role,
    email: email,
    password: password,
  };
  if (role && email && password && id) {
    prisma.user.update({
      where: {
        id: parseInt(id),
      },
      data: new_userdata,
    })
      .then((user) => {
        res.status(200).json({
          message: "User updated successfully!",
          data: user,
        });
      })
      .catch((error) => {
        res.status(500).json({
          message: error || "Error occured! Please contact the admin for more information.",
        });
      });
  } else {
    res.status(400).json({
      message: "Please fill all the fields!",
    });
  }
}