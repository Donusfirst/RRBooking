import  express  from "express";
import { getAllReservas,getReserva,createReserva,actualizarReserva, borrarReserva} from "../controllers/controllereserva.js";

const router = express.Router()

router.get('/',getAllReservas)
router.get('/:reserva_id',getReserva)
router.post('/',createReserva)
router.put('/:reserva_id',actualizarReserva)
router.delete('/:reserva_id',borrarReserva)

export default router
