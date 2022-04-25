const dayjs = require('dayjs');
const jwt = require('jsonwebtoken');


const createToken = (pUser) => {
    const obj = {
        usuarioId: pUser.id,
        expira: dayjs().add(5, 'minutes').unix()

    }
    return jwt.sign(obj, 'en un lugar de la mancha');

}

module.exports = {
    createToken
}