var express = require('express');
var router = express.Router();

router.use('/', (req, res, next) => {
    var date = new Date();
    console.log("A new request received at " + req.path + " " + date.toISOString());
    next();
})
router.get('/', function (req, res) {
    res.send('GET route on things.');
});
router.get('/hello', function (req, res) {
    res.send('GET route on things/hello.');
});
router.get('/hello/:name', function (req, res) {
    res.send('GET route on things/hello - ' + req.params.name);
});

//export this router to use in our index.js
module.exports = router;
