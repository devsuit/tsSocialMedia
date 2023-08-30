"use strict";
var _a, _b;
function findMostLikedPost(posts) {
    let mostLikedPost = null;
    let mostLikesCount = 0;
    let mostLikedUser = null;
    for (const post of posts) {
        const likesCount = post.likes.length;
        if (likesCount > mostLikesCount) {
            mostLikesCount = likesCount;
            mostLikedPost = post;
            mostLikedUser = post.user;
        }
    }
    return { post: mostLikedPost, user: mostLikedUser };
}
// Example usage
const user1 = {
    id: 1,
    username: "Abbas",
    bio: "A passionate writer."
};
const user2 = {
    id: 2,
    username: "Qalbe-Abbas",
    bio: "Explorer of life."
};
const user3 = {
    id: 3,
    username: "Emperor",
    bio: "Explorer of Programming."
};
const user4 = {
    id: 4,
    username: "Qasemi",
    bio: "Explorer of Typescript."
};
const post1 = {
    id: 1,
    user: user1,
    content: "Having a great day",
    likes: [{ user: user1, timestamp: new Date() },
        { user: user2, timestamp: new Date() }],
    comments: []
};
const post2 = {
    id: 2,
    user: user2,
    content: "Learning Typescript!",
    likes: [{ user: user3, timestamp: new Date() },
        { user: user3, timestamp: new Date() },
        { user: user4, timestamp: new Date() }],
    comments: []
};
const post3 = {
    id: 3,
    user: user2,
    content: "Social Media Assignment!",
    likes: [{ user: user3, timestamp: new Date() }],
    comments: []
};
const post4 = {
    id: 4,
    user: user2,
    content: "Make your Profile on Linked!",
    likes: [{ user: user4, timestamp: new Date() }],
    comments: []
};
const posts = [post1, post2, post3, post4];
const mostLikedInfo = findMostLikedPost(posts);
console.log("Most Liked Post:", (_a = mostLikedInfo.post) === null || _a === void 0 ? void 0 : _a.content);
console.log("Posted by:", (_b = mostLikedInfo.user) === null || _b === void 0 ? void 0 : _b.username);
// console.log("Posted by:", mostLikedInfo.user?.username);
