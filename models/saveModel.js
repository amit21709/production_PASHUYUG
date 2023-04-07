import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const saveSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    address: {
      type: {},
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
export default mongoose.model("saves", saveSchema);
