import { Sequelize } from "sequelize-typescript";
import config from 'config'
import Product from "../models/product";
import Category from "../models/category";


const logging = config.get<boolean>('sequelize.logging') ? console.log : false

const sequelize = new Sequelize({
    models: [Product, Category],
    dialect: 'mysql',
    ...config.get('db'),
    logging,
})

export default sequelize