import { Sequelize } from "sequelize-typescript";
import config from 'config'
import Job from "../models/job";
import Employee from "../models/employee";


const logging = config.get<boolean>('sequelize.logging') ? console.log : false

const sequelize = new Sequelize({
    models: [Job, Employee],
    dialect: 'mysql',
    ...config.get('db'),
    logging,
})

export default sequelize