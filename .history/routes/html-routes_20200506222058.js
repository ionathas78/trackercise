const router = require("express").Router();

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  router.get("/", function(req, res) {
    res.sendFile("../public/index.html");
  });

  // cms route loads cms.html
  router.get("/exercise", function(req, res) {
    res.sendFile("../public/exercise.html");
  });

  // blog route loads blog.html
  router.get("/stats", function(req, res) {
    res.sendFile("../public/stats.html");
  });

  // authors route loads author-manager.html
  router.get("/index", function(req, res) {
    res.sendFile("../public/index.html");
  });

module.exports = router;
