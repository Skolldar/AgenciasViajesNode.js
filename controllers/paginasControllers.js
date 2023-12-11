import {Viaje} from '../models/Viajes.js';

const paginaInicio =  (req, res) => { //req - lo q enviamos, res -> lo q express responde

    res.render('inicio', {
        pagina: 'Inicio'
    });
}


const paginaNosotros = (req, res) => { //req - lo q enviamos, res -> lo q express responde    
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => { //req - lo q enviamos, res -> lo q express responde    
    //consultar BD
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes,
    });
}

const paginaTestimoniales = (req, res) => { //req - lo q enviamos, res -> lo q express responde    
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
}


//Muestra un viaje por slug
const paginaDetalleViaje = async (req, res) => {
    const {slug} = req.params;

    try{
        const viaje = await Viaje.findOne({where: {slug}})
        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}