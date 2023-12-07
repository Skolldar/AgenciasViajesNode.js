import express  from "express"; // version import


const router = express.Router();

router.get('/', (req, res) => { //req - lo q enviamos, res -> lo q express responde

    res.render('inicio', {
        pagina: 'Inicio'
    });
});

router.get('/nosotros', (req, res) => { //req - lo q enviamos, res -> lo q express responde    
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
});


router.get('/viajes', (req, res) => { //req - lo q enviamos, res -> lo q express responde    
    res.render('viajes', {
        pagina: 'Viajes'
    });
});


router.get('/testimoniales', (req, res) => { //req - lo q enviamos, res -> lo q express responde    
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
});

export default router;
