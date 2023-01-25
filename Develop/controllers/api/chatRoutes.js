const router = require('express').Router();

router.get('/chat', (req, res) => { //Have this here until I can figure oout how to incorporate chatRoutes
    try {
      res.render('chat');
      //res.sendFile(__dirname, '../views/chat.html');
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });
  
  module.exports = router;