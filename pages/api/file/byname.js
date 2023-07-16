import { prisma } from "@/config/db";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name } = req.query;

  try {
    const files = await prisma.files.findMany({
      where: {
        nama_file: {
          contains: name,
        },
      },
      include: { user: true },
    });

    res.status(200).json(files);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
