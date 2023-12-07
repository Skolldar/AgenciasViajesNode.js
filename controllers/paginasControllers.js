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

const paginaViajes = (req, res) => { //req - lo q enviamos, res -> lo q express responde    
    res.render('viajes', {
        pagina: 'Viajes'
    });
}

const paginaTestimoniales = (req, res) => { //req - lo q enviamos, res -> lo q express responde    
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
}
export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales
}