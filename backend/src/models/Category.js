import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    categoryId: { // The categoryId is for the business and receipts. MongoDB also generates its own _id, which we use for database relationships.
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