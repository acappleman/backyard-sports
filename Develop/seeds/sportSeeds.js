const { Sport } = require('../models');

const sportData = [
    {
        name: 'Basketball',
    },
    {
        name: 'Baseball',
    },
    {
        name: 'Swimming',
    },
    {
        name: 'Golf',
    },
];

const seedSportsData = () => Sport.bulkCreate(sportData);

module.exports = seedSportsData;