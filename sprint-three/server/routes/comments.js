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

// Get the comments for that specific video
router.get("/:id/comments", (req, res) => {
  let id = req.params.id;
  let selectedVideo = videoInfo.find((video) => video.id === id);

  res.json(selectedVideo.comments);
});

// Post to the comments array of that specific video
router.post("/:id/comments", (req, res) => {
  let id = req.params.id;
  let selectedVideo = videoInfo.find((video) => video.id === id);
  const name = req.body.name;
  const comment = req.body.comment;
  let newComment = {
    name: name,
    comment: comment,
    id: uuid.v4(),
    likes: 0,
    timestamp: Date.now(),
  };

  selectedVideo.comments.push(newComment);

  updateData(videoInfo).then((result) => {
    fs.writeFile("../server/data/videos.json", result, (err) => {
      console.log("File write succes!");
      if (err) {
        res.status(403).json("error, not found");
      } else {
        res.status(201).json("Success, comment posted");
      }
    });
  });
});

// Delete the specific comment inside the comments array of the video

router.delete("/:id/comments/:cid", (req, res) => {
  let id = req.params.id;
  let cid = req.params.cid;
  let selectedVideo = videoInfo.find((video) => video.id === id);
  commentsArray = selectedVideo.comments;
  let selectedComment = selectedVideo.comments.find(
    (comment) => comment.id === cid
  );
  selectedIndex = selectedVideo.comments.indexOf(selectedComment);

 
    res.json(selectedComment);
    commentsArray.splice(selectedIndex, 1);
    updateData(videoInfo).then((result) => {
      fs.writeFileSync("../server/data/videos.json", result, (err) => {
        console.log("File write succes!");
        if (err) {
          res.status(403).json("error, not found");
        } else {
          res.status(201).json("Success, comment posted");
        }
      });
    });

});

//Export router to use in root of Express application.
module.exports = router;
