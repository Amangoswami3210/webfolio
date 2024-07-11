const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static("public"));

// Route to download resume
app.get("/download", (req, res) => {
  const file = path.join(__dirname, "public", "resume.pdf");
  res.download(file, "Aman_Goswami_Resume.pdf", (err) => {
    if (err) {
      console.error("Error downloading the file:", err);
      res.status(500).send("Error downloading the file.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
