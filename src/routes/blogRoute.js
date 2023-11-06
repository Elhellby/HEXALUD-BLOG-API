const router = require('express-promise-router')();

const {
    create,
    getAll
} = require('../controllers/blogController');

router.post('/create', create);
router.get('/', getAll);

module.exports = router;