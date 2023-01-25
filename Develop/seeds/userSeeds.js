const { User } = require('../models');

const userData = [
    {
        state: 'FL',
        zip: 32826,
        city: 'Orlando',
        username: 'player1',
        email: 'player1@gmail.com',
        password: 'password123!'
    },
    {
        state: 'FL',
        zip: 33101,
        city: 'Miami',
        username: 'player2',
        email: 'player2@gmail.com',
        password: 'password123!'
    },
    {
        zip: 33592,
        state: 'FL',
        city: 'Tampa',
        username: 'player3',
        email: 'player3@gmail.com',
        password: 'password123!'
    },
    {
        state: 'FL',
        zip: 33592,
        city: 'Tampa',
        username: 'player4',
        email: 'player4@gmail.com',
        password: 'password123!'
    },
]

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;