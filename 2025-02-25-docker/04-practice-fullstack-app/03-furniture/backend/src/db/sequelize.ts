import { Sequelize } from "sequelize-typescript";
import config from 'config'
import Type from "../models/type";
import Furniture from "../models/furniture";


const logging = config.get<boolean>('sequelize.logging') ? console.log : false

const sequelize = new Sequelize({
    models: [Type, Furniture],
    dialect: 'mysql',
    ...config.get('db'),
    logging,
})

export default sequelize