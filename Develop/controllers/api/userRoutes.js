const router = require('express').Router();
const { User } = require('../../models');

// create new account
router.post('/newUser', async (req, res) => {
  try {
    const newUser = await User.create({
      currently_available: true,
      zip: req.body.zip,
      state: req.body.state,
      city: req.body.city,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = newUser.id;
      res.status(200).json(newUser);
    });
    
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// Login
router.post('/loginNow', async (req, res) => {
  try {
    const userDataBase = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userDataBase) {
      res
        .status(400)
        .json({ message: 'Incorrect email. Please try again!' });
      return;
    }

    const correctPassword = await userDataBase.checkPassword(req.body.password);

    if (!correctPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = userDataBase.id;

      res
        .status(200)
        .json({ user: userDataBase, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// logout user
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(500).end();
  }
});

module.exports = router;