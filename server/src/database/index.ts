import { connect } from "mongoose";

export const connectMongoDB = async () => {
  const databaseConnectionURI = process.env.MONGODB_CONNECTION_URI;

  if (!databaseConnectionURI) {
    throw new Error("Database Connection URI is not defined in environment variables.");
  }

  try {
    await connect(databaseConnectionURI);

    console.log("Successfully connected to the MongoDB database.");
  } catch (connectionError) {
    console.error("Failed to connect to the MongoDB database:", connectionError);
    process.exit(1);
  }
};
