const Sequelize = require('sequelize');
const sequelize = require('../database/db');

const genreMovie = sequelize.define('character', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    image: {
        type: Sequelize.BLOB
    },
    title: {
        type: Sequelize.TEXT
    },
    create_at: {
        type: Sequelize.DataTypes
    },
    qualification: {
        type: Sequelize.INTEGER
    },
    associated_movieSerie: {
        type: Sequelize.TEXT
    }
});
