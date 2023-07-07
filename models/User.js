import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    iss: {
        type: String
    },
    nbf: {
        type: Number
    },
    aud:{
        type: String
    },
    sub: {
        type: Number,
        require: true
    },
    email: {
        type: String
    },
    email_verified: {
        type: Boolean
    },
    azp: {
        type: String
    },
    name: {
        type: String,
        require: true
    },
    picture: {
        type: String,
        require: true
    },
    given_name: {
        type: String
    },
    family_name: {
        type: String
    },
    iat: {
        type: Number
    },
    exp: {
        type: Number
    },
    jti:{
        type: String
    }  
})

const User = mongoose.model('User', userSchema);
export default User;