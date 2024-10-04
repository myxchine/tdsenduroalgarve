import fs from "fs";
import path from "path";

// Specify the directory where your images are stored
const imageDirectory = "./public/images/moments";

// Array to store image file names
let imageFiles = [];

// Function to collect image file names
function collectImageFiles(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const fileExt = path.extname(file).toLowerCase();

      // Check if the file is an image (jpg, png, gif, etc.)
      if (
        fileExt === ".jpg" ||
        fileExt === ".jpeg" ||
        fileExt === ".png" ||
        fileExt === ".gif"
      ) {
        imageFiles.push(file);
      }
    });

    console.log("Image files:", imageFiles);
  });
}

// Call the function with the directory
collectImageFiles(imageDirectory);
