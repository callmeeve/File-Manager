import { prisma } from '@/config/db';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id } = req.body;

  try {
    // Delete the file based on the provided ID
    const deletedFile = await prisma.files.delete({
      where: { id },
    });

    res.status(200).json(deletedFile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
