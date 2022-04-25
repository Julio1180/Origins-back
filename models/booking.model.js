const create = ({ nombre, apellidos, email, fecha, nivel, profesor, material, skateparks, surfspots }) => {
    return db.query(
        'INSERT into booking (nombre, apellidos, email, fecha, nivel, profesor, material, skateparks, surfspots ) values(?, ?, ?, ?, ?, ?, ?, ?, ?); ',
        [nombre, apellidos, email, fecha, nivel, profesor, material, skateparks, surfspots]
    )
}

module.exports = {
    create
};