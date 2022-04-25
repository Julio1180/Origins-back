const router = require('express').Router();
const usuariosModel = require('../../models/usuario.model');
const bcrypt = require('bcryptjs');
const utils = require('../../helpers/utils');
const suscribeModel = require('../../models/suscribe.model');
const bookingModel = require('../../models/booking.model');




router.post('/registro', async (req, res) => {
    // res.json(req.body)
    console.log(req.body);
    const hash = bcrypt.hashSync(req.body.password, 12);
    req.body.password = hash;

    try {
        const [result] = await usuariosModel.create(req.body);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.json(error);
    }

});
router.post('/login', async (req, res) => {

    const [result] = await usuariosModel.getByEmail(req.body.email);


    if (result.length === 0) {
        return res.json({ error: 'email y/ o contraseña incorrectos' }
        );
    }
    const user = result[0];

    const iguales = bcrypt.compareSync(req.body.password, user.password);

    if (!iguales) {
        return res.json({ error: 'email y/ o contraseña incorrectos' })
    }
    else {
        return res.json({ success: 'email y/ o contraseña correctos' })
    }

});


router.post('/suscribe', async (req, res) => {
    const [result] = await suscribeModel.create(req.body.email);


    return res.json({ success: 'ok' })


})


router.post('/booking', async (req, res) => {
    const [result] = await bookingModel.create(req.body);


    return res.json({ success: 'ok' })


})



module.exports = router;