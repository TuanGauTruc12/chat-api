import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import { URL_MONGOOSE } from "../database/db";

const storage = new GridFsStorage({
  url: URL_MONGOOSE,
  options: { useUnifiedTopology: true, useNewUrlParser: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpg"];
    if(match.indexOf(file.mineType) === -1){
        return `${Date.now()}-file-${file.originalname}`;
    }
    return {
        bucketName: "photos",
        filename: `${Date.now()}-file-${file.originalname}`
    };
  }
});

export default multer({ storage });