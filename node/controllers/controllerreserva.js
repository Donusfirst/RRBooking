import ReservaModel from "../models/reserva.js";

//* Métodos para el CRUD de Reservas

//* Mostrar todas las reservas
export const getAllReservas = async (req, res) => {
    try {
        const reservas = await ReservaModel.findAll();
        res.json(reservas);
    } catch (error) {
        res.json({ message: error.message });
    }
};

//* Encontrar una reserva
export const getReserva = async (req, res) => {
    try {
        const reserva = await ReservaModel.findAll({
            where: { reserva_id: req.params.reserva_id },
        });
        if (reserva) {
            res.json(reserva);
        } else {
            res.json({ message: "Reserva no encontrada" });
        }
    } catch (error) {
        res.json({ message: error.message });
    }
};

//* Crear una reserva
export const createReserva = async (req, res) => {
    try {
        await ReservaModel.create(req.body);
        res.json({ message: "Reserva creada correctamente!" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

//* Actualizar un registro de reserva
export const actualizarReserva = async (req, res) => {
    try {
        await ReservaModel.update(req.body, {
            where: { reserva_id: req.params.reserva_id },
        });
        res.json({ message: "Reserva actualizada correctamente!" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

//* Eliminar una reserva
export const borrarReserva = async (req, res) => {
    try {
        await ReservaModel.destroy({
            where: { reserva_id: req.params.reserva_id },
        });
        res.json({ message: "Reserva eliminada correctamente!" });
    } catch (error) {
        res.json({ message: error.message });
    }
};
