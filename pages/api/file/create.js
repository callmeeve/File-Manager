import { prisma } from '@/config/db';
import multer from 'multer';
import path from 'path';
import { getSession } from 'next-auth/react';

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/files',
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);
      cb(null, `${name}-${Date.now()}${ext}`);
    },
  }),
  limits: {
    // 10mb
    fileSize: 10 * 1024 * 1024,
  },
});

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const session = await getSession({ req });

      if (!session) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      upload.single('file')(req, res, async (err) => {
        if (err) {
          return res.status(400).json({ error: err.message });
        }

        const { filename, size } = req.file;
        const url = `/files/${filename}`;

        try {
          const file = await prisma.files.create({
            data: {
              nama_file: filename,
              tgl_upload: new Date(),
              user: { connect: { id: session.user.id } },
            },
          });

          res.status(201).json(file);
        } catch (error) {
          res.status(500).json({ error: 'Unable to create file' });
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error });
  }
}
