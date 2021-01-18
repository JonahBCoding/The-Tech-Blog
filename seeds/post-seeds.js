const { Post } = require('../models');

const postData = [{ 
    title: 'Why Internet Explorer is the web browser of the future.',
    content: 'Any computer user would agree that Internet Explorer is an amazing browser',
    user_id: 1
},
{
    title: 'Is Quantum Computing just around the corner?',
    content: 'Quantum computing is the next step in computer evolution but how close are we?',
    user_id: 2
},
{
    title: ''
}];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;