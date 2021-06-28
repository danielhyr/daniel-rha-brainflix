// Initialize
const express = require("express");
const router = express.Router();
const fs = require("fs");
const uuid = require("uuid");
const videoInfo = require("../data/videos.json");

const updateData = (object) => {
  return new Promise((res, rej) => {
    const stringData = JSON.stringify(object, null, 2);
    res(stringData);
  });
};

// GET REQUEST

router.get("/", (req, res) => {
  let shortVideoList = [];

  videoInfo.forEach((video) => {
    let shortVideo = {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
    };
    shortVideoList.push(shortVideo);
  });

  res.status(200).json(shortVideoList);
});

// POST REQEUST

router.post("/", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  lordList = videoInfo.slice();
  let newVideo = {
    id: uuid.v4(),
    title: title,
    channel: "Anonymous User",
    image: "http://localhost:8080/img-10.jpg",
    description: description,
    views: "0",
    likes: "0",
    duration: "4:50",
    video: "http://localhost:8080/img-99.mp4",
    timestamp: Date.now(),
    comments: [],
  };

  videoInfo.push(newVideo);

  updateData(videoInfo).then((result) => {
    fs.writeFile("../server/data/videos.json", result, (err) => {
      console.log("File write succes!");
      if (err) {
        res.status(403).json("error, not found");
      } else {
        res.status(201).json("Success, video posted");
      }
    });
  });
});

// GET REQUEST FOR SPEICIC VIDEOasd

router.get("/:id", (req, res) => {
  let id = req.params.id;
  let selectedVideo = videoInfo.find((video) => video.id === id);
  if (!selectedVideo) {
    res.status(420).json("no such video, keep calm and look again");
  } else {
    res.json(selectedVideo);
  }
});

// PUT REQUEST FOR A SPECIFIC VIDEO'S LIKES

router.put("/:id/likes", (req, res) => {
  let id = req.params.id;
  let selectedVideo = videoInfo.find((video) => video.id === id);
  let inNumber = Number(selectedVideo.likes.replace(",", ""));

  if (!selectedVideo) {
    res.status(420).json("no such video,stay calm and try again");
  } else {
    inNumber = inNumber + 1;
    selectedVideo.likes = inNumber.toLocaleString();
    res.json(selectedVideo.likes);
    updateData(videoInfo).then((result) => {
      fs.writeFileSync("../server/data/videos.json", result, (err) => {
        console.log("File write succes!");
        if (err) {
          res.status(403).json("error, not found");
        } else {
          res.status(201).json("Success, video posted");
        }
      });
    });
  }
});

//Export router to use in root of Express application.
module.exports = router;
