const create = (email) => {
    console.log('QUERY', email);
    return db.query(
        'INSERT into suscribe (email) values(?); ',
        [email]
    )
}



module.exports = {
    create
};