const router = require("express").Router();
const path = require("path");

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  router.get(path.join(__dirname, "/"), function(req, res) {
    res.sendFile("../public/index.html");
  });

  // cms route loads cms.html
  router.get(path.join(__dirname, "/exercise"), function(req, res) {
    res.sendFile("../public/exercise.html");
  });

  // blog route loads blog.html
  router.get(path.join(__dirname, "/stats"), function(req, res) {
    res.sendFile("../public/stats.html");
  });

  // authors route loads author-manager.html
  router.get(path.join(__dirname, "/index"), function(req, res) {
    res.sendFile("../public/index.html");
  });

module.exports = router;
