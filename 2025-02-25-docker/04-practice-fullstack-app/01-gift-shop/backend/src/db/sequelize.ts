import { Sequelize } from "sequelize-typescript";
import config from 'config'
import Gift from "../models/gift";
import TargetAudience from "../models/audienceTarget";


const logging = config.get<boolean>('sequelize.logging') ? console.log : false

const sequelize = new Sequelize({
    models: [Gift, TargetAudience],
    dialect: 'mysql',
    ...config.get('db'),
    logging,
})

export default sequelize