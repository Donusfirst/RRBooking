import  express  from "express";
import { getAllUsuarios,getUsuario,createUsuario,actualizarUsuario, borrarUsuario} from "../controllers/controllerusuario.js";

const router = express.Router()

router.get('/',getAllUsuarios)
router.get('/:usuario_id',getUsuario)
router.post('/',createUsuario)
router.put('/:usuario_id',actualizarUsuario)
router.delete('/:usuario_id',borrarUsuario)

export default router


