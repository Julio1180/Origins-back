const router = require('express').Router();
const spotsModel = require('../../models/spots.model');



router.get('/', async (req, res) => {
    const [result] = await spotsModel.getAll(req.body);


    return res.json(result)


})

module.exports = router;