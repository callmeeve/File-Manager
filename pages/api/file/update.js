import { prisma } from '@/config/db';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id, nama_file } = req.body;

  try {
    const updatedFile = await prisma.files.update({
      where: { id },
      data: { nama_file },
    });

    res.status(200).json(updatedFile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
