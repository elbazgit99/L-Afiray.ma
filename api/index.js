import app from "../Backend/app.js";
import { connectDB } from "../Backend/Config/database.js";

// Initiate the database connection when the serverless function starts up
connectDB().catch(err => {
  console.error("Database connection failed during serverless startup:", err);
});

// Export the Express app instance so Vercel can run it as a serverless function
export default app;
