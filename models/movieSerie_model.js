import { INTEGER, TEXT, BLOB } from 'sequelize';
import { define } from '../database/db';


const movieSerie = define('character', {
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

export default movieSerie;
