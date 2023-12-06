import express  from "express"; // version import


const router = express.Router();

router.get('/', (req, res) => { //req - lo q enviamos, res -> lo q express responde
    res.send('Inicio');
});

router.get('/nosotros', (req, res) => { //req - lo q enviamos, res -> lo q express responde
    const viajes = 'Viaje a Alemania';
    
    res.render('nosotros', {
        textoViajes : viajes
    });


});


export default router;
