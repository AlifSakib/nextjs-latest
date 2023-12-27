// Import necessary modules
import fs from "fs";
import path from "path";

// Function to read the JSON file
const readJsonFile = () => {
  // Get the path to the JSON file
  const filePath = path.join(process.cwd(), "public", "/data/data.json");

  // Read the JSON file synchronously
  const jsonData = fs.readFileSync(filePath, "utf-8");

  // Parse the JSON data
  const parsedData = JSON.parse(jsonData);

  return parsedData;
};

export default readJsonFile;
