import mongoose from "mongoose";
//Post schema
const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minlength: 1, // Minimum length for content
    maxlength: 250, // Maximum length for content
  },
  media: [
    {
      type: String,
      validate: {
        validator: isURL, //validator to check if the URL is valid
        message: "Invalid URL format for media",
      },
    },
  ],
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", //userschema reference 
    required: true,
  },
});
//validator function for URL validation
function isURL(value) {
  const urlRegex =
    /^(http|ftp|https):\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+$/;
  //const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/; allows special characters
  //console.log(value);
  return urlRegex.test(value);
}

//   postSchema.virtual("titledContent").get(function(){  //throws undefined
//     console.log(`${this.title} <${this.content}>`)
//     return `${this.title} <${this.content}>`
//   })

const Post = mongoose.model("Post", postSchema);

export default Post;
