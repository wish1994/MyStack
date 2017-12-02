var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', function (req, res) {
  res.send("got a get request");
});
router.post('/', function (req, res) {
  res.send("got a post request");
});

module.exports = router;
