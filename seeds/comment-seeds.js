const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Fascinating findings',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'Not interested',
    user_id: 5,
    post_id: 5
  },
  {
    comment_text: 'I love working from home as well, I am more productive this way',
    user_id: 8,
    post_id: 8
  },
  {
    comment_text: 'I beg to differ',
    user_id: 3,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;