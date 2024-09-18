import express from "express";
import multer from "multer";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

// GET route for testing
router.get("/", (req, res) => {
  res.send("Hello API routes");
});

// GET route to retrieve all photos
router.get("/photos", (req, res) => {
  const photos = fs.readFileSync("./data/photos.json");
  res.send(JSON.parse(photos));
});

// GET route to retrieve a single photo by ID
router.get("/photos/:id", (req, res) => {
  const photos = JSON.parse(fs.readFileSync("./data/photos.json"));
  const foundPhoto = photos.find((photo) => photo.id === req.params.id);
  res.send(JSON.stringify(foundPhoto));
});

// POST route to upload a new photo
router.post("/photos", upload.single("poster"), (req, res) => {
  console.log(req.file);
  const photosData = JSON.parse(fs.readFileSync("./data/photos.json", "utf8"));
  const photoDate = req.body.date ? req.body.date : new Date().toISOString();

  const newPhoto = {
    id: uuidv4(),
    title: req.body.title,
    image: req.file.originalname,
    timestamp: photoDate,
  };

  photosData.push(newPhoto);

  fs.writeFileSync("./data/photos.json", JSON.stringify(photosData));

  console.log(req.body);
  res.send(newPhoto);
});

// DELETE route to remove a photo by ID
router.delete("/photos/:id", (req, res) => {
  const photosPath = "./data/photos.json";
  const photosData = JSON.parse(fs.readFileSync(photosPath, "utf8"));

  const updatedPhotos = photosData.filter(
    (photo) => photo.id !== req.params.id
  );

  if (updatedPhotos.length === photosData.length) {
    return res.status(404).send("Photo not found");
  }

  fs.writeFileSync(photosPath, JSON.stringify(updatedPhotos));

  const photoToDelete = photosData.find((photo) => photo.id === req.params.id);
  if (photoToDelete) {
    fs.unlink(`./public/${photoToDelete.image}`, (err) => {
      if (err) {
        console.error("Error deleting photo file:", err);
      }
    });
  }

  res.send("Photo deleted successfully");
});

export default router;
