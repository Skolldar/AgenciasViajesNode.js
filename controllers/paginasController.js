import {Viaje} from '../models/Viajes.js';
import { Testimonial } from '../models/Testimoniales.js';
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

const paginaTestimoniales = async(req, res) => { //req - lo q enviamos, res -> lo q express responde    
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error)
    }
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