const { Team } = require('../models');

const teamData = [
    {
        name: 'Best Basketball Team',
        captain: 1,
        players: 1,
        sport: 'Basketball',
        state: 'FL',
        city: 'Orlando',
        team_zip_code: 32826,
    },
    {
        name: 'Best Baseball Team',
        captain: 2,
        players: 2,
        sport: 'Baseball',
        state: 'FL',
        city: 'Miami',
        team_zip_code: 33101,
    },
    {
        name: 'Best Swimming Team',
        captain: 3,
        players: 3,
        sport: 'Swimming',
        state: 'FL',
        city: 'Tampa',
        team_zip_code: 33592,
    },
    {
        name: 'Best Golf Team',
        captain: 4,
        players: 4,
        sport: 'Golf',
        state: 'FL',
        city: 'Tampa',
        team_zip_code: 33592,
    },
];

const seedTeamData = () => Team.bulkCreate(teamData);

module.exports = seedTeamData;