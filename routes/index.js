import express from "express";
import { addUser, getUsers } from "../controllers/UserController.js";
import { addConversation, getConversation } from "../controllers/ConversationController.js";
import { getMessages, newMessage } from "../controllers/MessageController.js";
import { getFile, uploadFile } from "../controllers/FileController.js";
import UploadFile from '../utils/UploadFile.js';

const route = express.Router();
//================ User ===============
route.post("/user", addUser);
route.get("/users", getUsers);

//============== Conversation =========
route.post("/conversation/add", addConversation);
route.post("/conversation/get", getConversation);

//============== Message ==============
route.post('/message', newMessage);
route.get('/message/:id', getMessages);

//=============== upload file =========
route.post('/file/upload', UploadFile.single('file') ,uploadFile);
route.get('/file/:filename', getFile);

export default route;
