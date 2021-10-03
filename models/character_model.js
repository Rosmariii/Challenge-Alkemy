import { INTEGER, BLOB, TEXT } from 'sequelize';
import sequelize from '../database/db';
import movieSerie, { belongsTo } from './movieSerie_model';


const character = sequelize('character', {
    id: {
        type: INTEGER,
        primaryKey: true
    },
    image: {
        type: BLOB
    },
    name: {
        type:TEXT
    },
    age: {
        type: INTEGER
    },
    weight: {
        type: INTEGER
    },
    History: {
        type: TEXT
    },
    associated_movieSerie: {
        type: TEXT
    }
});

character.hasMany(movieSerie, {foreingKey: 'associated_character', sourceKey: 'id'})
movieSerie.belongsTo(character, {foreingKey: 'associated_character', sourceKey: 'id'})


export default character;