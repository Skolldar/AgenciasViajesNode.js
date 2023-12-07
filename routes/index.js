import express  from "express"; // version import


const router = express.Router();

router.get('/', (req, res) => { //req - lo q enviamos, res -> lo q express responde
    res.render('inicio');
});

router.get('/nosotros', (req, res) => { //req - lo q enviamos, res -> lo q express responde    
    res.render('nosotros');


});


export default router;
