import {Viaje} from '../models/Viajes.js';
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async (req, res) => { //req - lo q enviamos, res -> lo q express responde
    //consulta de viajes del modelo de viaje

        //Promise para que se ejecuten al mismo tiempo
        const promiseDB = [];
        promiseDB.push(Viaje.findAll({limit: 3}) );
        promiseDB.push(Testimonial.findAll({limit: 3}) );

    try {
        const resultado = await Promise.all( promiseDB );

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales : resultado[1]
        });
    } catch (error) {
        console.log(error);
    }

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