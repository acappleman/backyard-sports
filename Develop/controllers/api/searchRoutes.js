const router = require('express').Router();
const { Team, User } = require('../../models');
const userAuth = require('../../utils/auth');
const NodeGeocoder = require('node-geocoder');

router.get('/', async (req, res) => {
  try {
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
        },
      ],
    });

    const geocoder = NodeGeocoder({
        provider: 'tomtom',
        apiKey: process.env.GEOCODER_API_KEY
    });

    let teams = []
    for (let i = 0; i < teamData.length; i++) {
        let team = teamData[i];
        const address = `${team.city}, ${team.state} ${team.team_zip_code}`;
        const geocode = await geocoder.geocode(address);
        team.dataValues.geocode = geocode[0];
        teams.push(team)
    };

    res.status(200).json(teams);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;