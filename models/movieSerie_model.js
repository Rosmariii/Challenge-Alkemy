import { INTEGER, TEXT, BLOB } from 'sequelize';
import db from '../database/db';


export const movieSerie = db.define('character', {
    id: {
        type: INTEGER,
        primaryKey: true
    },
    name: {
        type: TEXT
    },
    image: {
        type: BLOB
    },
    associated_character: {
        type: TEXT
    }
});

