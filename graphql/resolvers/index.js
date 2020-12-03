const postResolvers = require("./posts");
const usersResolvers = require("./users");
const commentsResolvers = require("./comments");


module.exports = {
    Post: {
        likeCount(parent){
            // console.log(parent);
            return parent.likes.length;
        },
        commentCount(parent){
            return parent.comments.length;
        }
    },
    Query: {
        ...postResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postResolvers.Mutation,
        ...commentsResolvers.Mutation
    }
};