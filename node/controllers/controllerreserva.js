import UsuarioModel from "../models/usuario.js";

//*medotos para el CRUD

//*mostrar todos los usuairos

export const getAllReservas = async(req,res)=>{
    try {
        const reservas = await ReservaModel.findAll()
        res.json(reservas)
    } catch (error) {
        res.json({message: error.message})
    }

}

//*encontrar un usuario
export const getReserva = async(req,res)=>{
    try {
        const reserva = await ReservaModel.findAll({
            where:{reserva_id:req.params.reserva_id
            }
        })
        if (reserva){
            res.json(reserva)
        }
        else{
            res.json({message: error.mesagge})
        }

    } catch (error) {
        res.json({message: error.message})
        
    }
}

//* crear un usuario

export const createReserva = async (req,res) => {
    try {
        await ReservaModel.create(req.body)
        res.json({"message":"registro creado correctamente!"})
    } catch (error) {
        res.json({mesagge: error.mesagge})
        
    }
}

//* actulizar un registro

export const actualizarReserva = async (req, res) => {
    try {
        await ReservaModel.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({ "message": "registro actualizado correctamente!" });
    } catch (error) {
        res.json({ "message": error.message }); // Corregir "mesagge" a "message"
    }
}


//*eliminar un usuario

export const borrarReserva = async (req, res) => {
    try {
        await ReservaModel.destroy({
            where: { id: req.params.id }
        });
        res.json({ "message": "Registro eliminado correctamente!" });
    } catch (error) {
        res.json({ "message": error.message }); // Corregir "mesagge" a "message"
    }
};
