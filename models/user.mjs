import mongoose from "mongoose";

//User schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true  //validation
    },
    email: {
        type:String,
        required:true//validation
      },
  });
  const User = mongoose.model('User', userSchema);

export default User;

//reference to post to be added 