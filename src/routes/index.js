const { Router } = require('express');

const router = Router();

const {
    getJokes
} = require("../handlers/Handlers")

router.get('/jokes', getJokes)



module.exports = router;
