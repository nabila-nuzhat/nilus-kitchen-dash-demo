import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/connectDB.js";

const PORT = process.env.PORT || 5000;

const startServer = async () => { 
  await connectDB(); // // ????????? why needed  await connectDB(); ?

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();