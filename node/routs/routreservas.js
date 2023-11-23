import  express  from "express";
import { getAllReservas,getReserva,createReserva,actualizarReserva, borrarReserva} from "../controllers/controllerreserva.js";

const router = express.Router()

router.get('/',getAllReservas)
router.get('/:id',getReserva)
router.post('/',createReserva)
router.put('/:id',actualizarReserva)
router.delete('/:id',borrarReserva)

export default router


