// Import and configure dotenv at the top of your file
import { config as configDotenv } from "dotenv";

configDotenv();

import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Database Connection Successfully");
})
.catch((error) => {
    console.error("Database Connection Failed:", error);
});
