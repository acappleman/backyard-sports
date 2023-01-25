const router = require('express').Router();
const { Sport, Team, User } = require('../models');
const userAuth = require('../utils/auth');

// homepage
router.get('/', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: 'password' },
      include: [{ 
        model: Team,
        include: [{ model: User }]
      }],
    });

    const currentUser = userData.get({ plain: true });
    
    let where = {};
    if (req.query.sport) {
      where.sport = req.query.sport;
    }
    if (req.query.zip) {
      where.team_zip_code = req.query.zip;
    }
    if (req.query.state) {
      where.state = req.query.state;
    }
    if (req.query.city) {
      where.city = req.query.city;
    }

    const teamData = await Team.findAll({
      where,
      include: [
        {
          model: User,
        }
      ],
    });
    const sportData = await Sport.findAll();

    const teams = teamData.map((x) => x.get({ plain: true }));
    const sports = sportData.map((x) => x.get({ plain: true }));

    const states = [
      { name: 'Alabama', value: 'AL' },
      { name: 'Alaska', value: 'AK' },
      { name: 'Arizona', value: 'AZ' },
      { name: 'Arkansas', value: 'AR' },
      { name: 'California', value: 'CA' },
      { name: 'Colorado', value: 'CO' },
      { name: 'Connecticut', value: 'CT' },
      { name: 'Delaware', value: 'DE' },
      { name: 'District of Columbia', value: 'DC' },
      { name: 'Florida', value: 'FL' },
      { name: 'Georgia', value: 'GA' },
      { name: 'Hawaii', value: 'HI' },
      { name: 'Idaho', value: 'ID' },
      { name: 'Illinois', value: 'IL' },
      { name: 'Indiana', value: 'IN' },
      { name: 'Iowa', value: 'IA' },
      { name: 'Kansas', value: 'KS' },
      { name: 'Kentucky', value: 'KY' },
      { name: 'Louisiana', value: 'LA' },
      { name: 'Maine', value: 'ME' },
      { name: 'Maryland', value: 'MD' },
      { name: 'Massachusetts', value: 'MA' },
      { name: 'Michigan', value: 'MI' },
      { name: 'Minnesota', value: 'MN' },
      { name: 'Mississippi', value: 'MS' },
      { name: 'Missouri', value: 'MO' },
      { name: 'Montana', value: 'MT' },
      { name: 'Nebraska', value: 'NE' },
      { name: 'Nevada', value: 'NV' },
      { name: 'New Hampshire', value: 'NH' },
      { name: 'New Jersey', value: 'NJ' },
      { name: 'New Mexico', value: 'NM' },
      { name: 'New York', value: 'NY' },
      { name: 'North Carolina', value: 'NC' },
      { name: 'North Dakota', value: 'ND' },
      { name: 'Ohio', value: 'OH' },
      { name: 'Oklahoma', value: 'OK' },
      { name: 'Oregon', value: 'OR' },
      { name: 'Pennsylvania', value: 'PA' },
      { name: 'Rhode Island', value: 'RI' },
      { name: 'South Carolina', value: 'SC' },
      { name: 'South Dakota', value: 'SD' },
      { name: 'Tennessee', value: 'TN' },
      { name: 'Texas', value: 'TX' },
      { name: 'Utah', value: 'UT' },
      { name: 'Vermont', value: 'VT' },
      { name: 'Virginia', value: 'VA' },
      { name: 'Washington', value: 'WA' },
      { name: 'West Virginia', value: 'WV' },
      { name: 'Wisconsin', value: 'WI' },
      { name: 'Wyoming', value: 'WY' },
    ];

    res.render('home', {
      ...currentUser,
      teams,
      sports,
      states,
      where,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// login
router.get('/login', (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/profile');
    }

    res.render('login');
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// profile
router.get('/profile', userAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: 'password' },
      include: [{ 
        model: Team,
        include: [{ model: User }]
      }],
    });

    const currentUser = userData.get({ plain: true });

    res.render('profile', {
      ...currentUser,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

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