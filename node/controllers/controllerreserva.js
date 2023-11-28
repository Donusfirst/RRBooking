import ReservaModel from "../models/reservas.js";

// Métodos para el CRUD

// Mostrar todos los reservas
export const getAllReservas = async (req, res) => {
    try {
        const reserva = await ReservaModel.findAll();
        res.json(reserva);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const getReserva = async (req, res) => {
    try {
        const reserva = await ReservaModel.findAll({
            where: { reserva_id: req.params.reserva_id }
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

export const createReserva = async (req, res) => {
    try {
        await ReservaModel.create(req.body);
        res.json({ message: "Reserva creada correctamente!" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const actualizarReserva = async (req, res) => {
    try {
        await ReservaModel.update(req.body, {
            where: { reserva_id: req.params.reserva_id }
        });
        res.json({ message: "Registro reserva actualizado correctamente!" });
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const borrarReserva = async (req, res) => {
    try {
        await ReservaModel.destroy({
            where: { reserva_id: req.params.reserva_id }
        });
        res.json({ message: "Registro Reserva eliminado correctamente!" });
    } catch (error) {
        res.json({ message: error.message });
    }
};
