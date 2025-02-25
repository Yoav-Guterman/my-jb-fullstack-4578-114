"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFeed = getFeed;
const user_1 = __importDefault(require("../../models/user"));
const post_1 = __importDefault(require("../../models/post"));
const post_includes_1 = __importDefault(require("../common/post-includes"));
async function getFeed(req, res, next) {
    try {
        const userId = req.userId;
        const user = await user_1.default.findByPk(userId, {
            include: [{
                    model: user_1.default,
                    as: 'following',
                    include: [Object.assign({ model: post_1.default }, post_includes_1.default)]
                }]
        });
        const feed = user.following.reduce((cum, { posts }) => {
            return [...cum, ...posts];
        }, []).sort((a, b) => a.createdAt < b.createdAt ? 1 : -1);
        res.json(feed);
        // example how to do the same with RAW QUERY using sequelize:
        // const feed = await sequelize.query(`
        //     select	posts.*
        //     from 	posts
        //     JOIN	follows on posts.user_id = follows.followee_id
        //     AND		follows.follower_id = ?
        // `, {
        //     replacements: [ userId ],
        //     model: Post
        // })        
        // await Promise.all(feed.map(post => post.reload({...postIncludes})))
        // res.json(feed)
    }
    catch (e) {
        next(e);
    }
}
