var express = require("express");
var router = express.Router();
var QRCode = require("qrcode");

router.post("/qrcode", function (req, res) {
  console.log(req.body.password);
  QRCode.toDataURL(req.body.password, function (err, url) {
    res.render("qrcode", { url: url });
  });
});

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

module.exports = router;
