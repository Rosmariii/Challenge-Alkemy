import { INTEGER, BLOB, TEXT} from 'sequelize';
import db from '../database/db';
import movieSerie, { belongsTo } from './movieSerie_model';


export const character = db.define('character', {
    id: {
        type: INTEGER,
        primaryKey: true
    },
    image: {
        type: BLOB
    },
    name: {
        type: TEXT
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
belongsTo(character, {foreingKey: 'associated_character', sourceKey: 'id'})