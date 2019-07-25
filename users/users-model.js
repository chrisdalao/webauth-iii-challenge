const db = require('../database/db-config.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find(department) {
    const query = db('users').select('id', 'username', 'password');

    if (department) {//only execute query if user has a department
        query.where({ department });
    }

    return query;
}

function findBy(filter) {
    return db('users').where(filter);
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}