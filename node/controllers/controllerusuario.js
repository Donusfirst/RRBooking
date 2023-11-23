import UsuarioModel from "../models/usuario.js";

//*medotos para el CRUD

//*mostrar todos los usuairos

export const getAllUsuarios = async(req,res)=>{
    try {
        const usuarios = await UsuarioModel.findAll()
        res.json(usuarios)
    } catch (error) {
        res.json({message: error.message})
    }

}

//*encontrar un usuario
export const getUsuario = async(req,res)=>{
    try {
        const usuario = await UsuarioModel.findAll({
            where:{usuario_id:req.params.usuario_id
            }
        })
        if (usuario){
            res.json(usuario)
        }
        else{
            res.json({message: error.mesagge})
        }

    } catch (error) {
        res.json({message: error.message})
        
    }
}

//* crear un usuario

export const createUsuario = async (req,res) => {
    try {
        await UsuarioModel.create(req.body)
        res.json({"message":"registro creado correctamente!"})
    } catch (error) {
        res.json({mesagge: error.mesagge})
        
    }
}

//* actulizar un registro

export const actualizarUsuario = async (req, res) => {
    try {
        await UsuarioModel.update(req.body, {
            where: { usuario_id: req.params.usuario_id }
        });
        res.json({ "message": "registro actualizado correctamente!" });
    } catch (error) {
        res.json({ "message": error.message }); // Corregir "mesagge" a "message"
    }
}


//*eliminar un usuario

export const borrarUsuario = async (req, res) => {
    try {
        await UsuarioModel.destroy({
            where: { usuario_id: req.params.usuario_id }
        });
        res.json({ "message": "Registro eliminado correctamente!" });
    } catch (error) {
        res.json({ "message": error.message }); // Corregir "mesagge" a "message"
    }
};
