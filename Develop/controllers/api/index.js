const router = require('express').Router();
const userRoutes = require('./userRoutes');
const teamRoutes = require('./teamRoutes');
const sportRoutes = require('./sportRoutes');
const searchRoutes = require('./searchRoutes');
const chatRoutes = require('./chatRoutes'); //Added this to incorporate chatRoutes

router.use('/user', userRoutes);
router.use('/team', teamRoutes);
router.use('/sport', sportRoutes);
router.use('/search', searchRoutes);
router.use('/chat', chatRoutes); //Added this to incorporate chatRoutes

module.exports = router;