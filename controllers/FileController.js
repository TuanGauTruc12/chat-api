import mongoose from 'mongoose';
import grid from 'gridfs-stream';

let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});

export const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(404).json("File not found!");
  }
  const imageUrl = `https://chat-api-navy.vercel.app/file/${req.file.filename}`;
  return res.status(200).json(imageUrl);
};

export const getFile = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readStream = gridfsBucket.openDownloadStream(file._id);
    readStream.pipe(res);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
