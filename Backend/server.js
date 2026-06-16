import app from "./app.js";
import { connectDB } from "./Config/database.js";

const PORT = process.env.PORT || 5000;

// Connect to DB and start server
try {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.error("Failed to connect to DB, starting server without database...");
  // Start server without database for testing
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} (without database)`);
  });
}
