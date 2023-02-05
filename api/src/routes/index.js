const {Router} = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipe = require('./recipe.js')
const diet = require('./diet.js')
const home = require('./home.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
    router.use('/recipe', recipe);
    router.use('/diet', diet);
    router.use('/recipes', home);


module.exports = router;
