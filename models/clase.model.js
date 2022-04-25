const create = ({ modalidad, hora_entrada, hora_salida }) => {
    return db.query(
        'INSERT into clases (modalidad, hora_entrada, hora_salida) values(?, ?, ?); ',
        [modalidad, hora_entrada, hora_salida]
    )
}

module.exports = {
    create
};