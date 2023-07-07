import User from '../models/User.js';

export const addUser = async (req, res) => {
    try {
       let userExist = await User.findOne({ sub: req.body.sub })
        if(userExist){
            res.status(200).json({meg: "User already exist"});
            return; 
        }
        const newUser = new User(req.body);
        await newUser.save();
        return res.status(200).json(newUser)
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getUsers = async (req, res) => {
    try {
       const users = await User.find({});
       return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error.message);
    }
};