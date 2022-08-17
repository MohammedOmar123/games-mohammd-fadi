const router = require('express').Router();
const {getHome, getSearchValue } = require('./controllers');

router.get('/', getHome);
router.post('/handel-search', getSearchValue);

module.exports = router;
