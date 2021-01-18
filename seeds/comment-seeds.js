const { Comment } = require('../models');

const commentData = [{
        comment_text: "Revolutionary!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Stupendous, If I do say so myself",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Well done sir, please accept this Nobel Prize",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;