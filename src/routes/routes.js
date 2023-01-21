const router = require('express').Router();

const personajesController = require('../controllers/personajes.controller');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/personajes', personajesController.getPersonajes);

//personajes por pagina
router.get('/personajes/:page', personajesController.getPersonajesPage);




module.exports = router;