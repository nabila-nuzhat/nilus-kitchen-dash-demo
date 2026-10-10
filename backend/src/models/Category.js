import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    categoryId: {
      type: String,
      required: true,
      unique: true,
      trim: true, // ???????? is trim  needed in Category Id????
    },

    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Category", categorySchema);