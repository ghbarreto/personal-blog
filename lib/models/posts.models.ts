const { Schema } = require('mongoose');
const { _connection } = require('../config/db');

const options = { collection: 'posts', strict: false };

const postsSchema = new Schema({}, options);

const Posts = _connection.model('postsSchema', postsSchema);

export default Posts
