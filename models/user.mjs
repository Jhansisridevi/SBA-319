import mongoose from "mongoose";

//User schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type:String,
        required:true,
        unique: true
      },
  });
  const User = mongoose.model('User', userSchema);

export default User;