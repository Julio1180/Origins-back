const getAll = () => {
    return db.query('select * from origins_surfskate.spots');

}

module.exports = {
    getAll
};