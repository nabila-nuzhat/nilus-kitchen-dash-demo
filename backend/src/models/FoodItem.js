import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema(
  {
    foodItemId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId, // Changing category from a "String" to an "ObjectId" reference turns it from a piece of text into a relationship between two collections.
      ref: "Category",
      required: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("FoodItem", foodItemSchema);