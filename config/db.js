// Import mongoose for MongoDB interaction
import mongoose from "mongoose";

// Async function to connect to MongoDB
const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB using URI from environment variables
    await mongoose.connect(process.env.DB_URI);

    // Log success message on successful connection
    console.log("Database has been Connected Successfully!");
  } catch (error) {
    // Log any connection errors and terminate the process with a non-zero status code
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Export the function for use in other modules
export default connectDB;
