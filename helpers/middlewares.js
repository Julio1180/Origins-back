const jwt = require('jsonwebtoken');
const usuarioModel = require('../models/usuario.model');
const dayjs = require('dayjs');



const checkToken = async (req, res, next) => {
    if (!req.headers['authentication']) {
        return res.json({ error: 'debes incluir la cabecera de autenticacion' });

    }
    const token = req.headers['authentication'];

    let obj;
    try {
        obj = jwt.verify(token, 'en un lugar de la mundo');
    } catch (error) {
        return res.json({ error: 'el token es incorrecto' });
    }

    const currentDate = dayjs().unix();
    if (currentDate > obj.expira) {
        return res.json({ error: 'el token ha caducado. pide otro' });
    }
    console.log(obj);
    const [result] = await usuarioModel.getById(obj.usuarioId);

    req.user = result[0];

    next();
}



module.exports = {
    checkToken
}