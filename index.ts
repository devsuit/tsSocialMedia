
interface User {
    id: number;
    username: string;
    bio: string;
}

interface Profile extends User {
    posts: Post[];
}

interface Like {
    user: User;
    timestamp: Date;
}

interface Comment {
    id: number;
    user: User;
    content: string;
    timestamp: Date;
}

interface Post {
    id: number;
    user: User;
    content: string;
    likes: Like[];
    comments: Comment[];
}

function findMostLikedPost(posts: Post[]): { post: Post | null; user: User | null } {
    let mostLikedPost: Post | null = null;
    let mostLikesCount = 0;
    let mostLikedUser: User | null = null;

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
const user1: User = {
    id: 1,
    username: "Abbas",
    bio: "A passionate writer."
};

const user2: User = {
    id: 2,
    username: "Qalbe-Abbas",
    bio: "Explorer of life."
};
const user3: User = {
    id: 3,
    username: "Emperor",
    bio: "Explorer of Programming."
};
const user4: User = {
    id: 4,
    username: "Qasemi",
    bio: "Explorer of Typescript."
};
const post1: Post = {
    id: 1,
    user: user1,
    content: "Having a great day",
    likes: [{ user: user1, timestamp: new Date() },
        { user: user2, timestamp: new Date() }],
    comments: []
};

const post2: Post = {
    id: 2,
    user: user2,
    content: "Learning Typescript!",
    likes: [{ user: user3, timestamp: new Date() },
        { user: user3, timestamp: new Date() },
        { user: user4, timestamp: new Date() }],
    comments: []
};
const post3: Post = {
    id: 3,
    user: user2,
    content: "Social Media Assignment!",
    likes: [{ user: user3, timestamp: new Date() }],
    comments: []
};
const post4: Post = {
    id: 4,
    user: user2,
    content: "Make your Profile on Linked!",
    likes: [{ user: user4, timestamp: new Date() }],
    comments: []
};


const posts: Post[] = [post1, post2,post3,post4];

const mostLikedInfo = findMostLikedPost(posts);
console.log("Most Liked Post:", mostLikedInfo.post?.content);
console.log("Posted by:", mostLikedInfo.user?.username);
// console.log("Posted by:", mostLikedInfo.user?.username);