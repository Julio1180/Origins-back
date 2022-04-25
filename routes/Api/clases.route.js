const router = require('express').Router();
const clasesModel = require('../../models/clase.model');
const bcrypt = require('bcryptjs');


router.post('/new', async (req, res) => {
    try {
        const [result] = await clasesModel.create(req.body);
        res.json(result);
    } catch (error) {
        res.json(error);
    }

});

module.exports = router;


