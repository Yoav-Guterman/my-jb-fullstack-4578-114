import { Sequelize } from "sequelize-typescript";
import User from "../models/user";
import config from 'config'
import Post from "../models/post";
import Comment from "../models/comment";
import Follows from "../models/follows";

const isLogging = config.get<boolean>('app.sequelizeLogging')

const sequelize = new Sequelize({
    models: [User, Post, Comment, Follows],
    logging: isLogging ? console.log : false,
    dialect: 'mysql',
    ...config.get('db')
})

export default sequelize