const { User } = require('../models');

const userData = [{
    username: 'Jeff',
    password: 'jeff1'
},
{
    username: 'Stephanie',
    password: 'steph45'
},
{
    username: 'harriet23',
    password: 'harriet456'
}]

const User = () => User.bulkCreate(userData);

module.exports = seedUsers;