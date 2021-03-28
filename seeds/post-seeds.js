const { Post } = require('../models');

const postdata = [
    {
        title: "Moment of Truth",
        text: "https://www.accenture.com/ca-en/insights/technology/technology-trends-2021?c=acn_ca_technologyvisiogoogle_11976128&n=psgs_0221&gclid=Cj0KCQjwi7yCBhDJARIsAMWFScPyUeTEfQJ9AeHwQVhF0dK3I_xGK5xRBsR8V6AyERWRjbcuX7RWxX8aAp39EALw_wcB&gclsrc=aw.ds",
        user_id: 1
    },
    {
        title: "Most Expensive Apps",
        text: "https://coolmaterial.com/tech/most-expensive-apps/",
        user_id: 5
    },
    {
        title: "WFH",
        text: "https://www.cnn.com/2021/03/15/success/remote-work-changed-lives-pandemic/index.html",
        user_id: 8
    },
    {
        title: "Most Valuable Startup in America",
        text: "https://www.cnn.com/2021/03/15/investing/stripe-valuation/index.html",
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;