import Sequelize from 'sequelize';

const db = new Sequelize(
    "postgres",
    "postgres",
    "rosmari92",
    {
        host : "localhost",
        dialect : "postgres",
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)

export default db;
