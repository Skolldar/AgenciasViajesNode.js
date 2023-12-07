import express  from "express"; // version import
import {paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales} from '../controllers/paginasControllers.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);


router.get('/viajes', paginaViajes);


router.get('/testimoniales', paginaTestimoniales);

export default router;
