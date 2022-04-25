const create = ({ nombre, apellidos, email, direccion, edad, genero, cuota, fecha_nacimiento, dni, codigo_postal, movil, nivel, experiencia, ciudad, username, password, hora_entrada, hora_salida, modalidad }) => {
    console.log('QUERY', nombre);
    return db.query(
        'INSERT into usuarios (nombre, apellidos, email, direccion, edad, genero, cuota, fecha_nacimiento, dni, codigo_postal, movil, nivel, experiencia, ciudad, username, password, hora_entrada, hora_salida, modalidad) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?); ',
        [nombre, apellidos, email, direccion, edad, genero, cuota, fecha_nacimiento, dni, codigo_postal, movil, nivel, experiencia, ciudad, username, password, hora_entrada, hora_salida, modalidad]
    )
}
const getByEmail = (pEmail) => {
    return db.query(
        'select * from usuarios where email = ?', [pEmail])
}


module.exports = {
    create, getByEmail
};