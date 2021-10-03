import { INTEGER, BLOB, TEXT, DataTypes} from 'sequelize';
import db from '../database/db';

export const genreMovie = db.define('character', {
    id: {
        type: INTEGER,
        primaryKey: true
    },
    image: {
        type: BLOB
    },
    title: {
        type: TEXT
    },
    create_at: {
        type : DataTypes.NOW
    },
    qualification: {
        type: INTEGER
    },
    associated_movieSerie: {
        type: TEXT
    }
});
