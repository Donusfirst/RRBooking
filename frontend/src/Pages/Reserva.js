import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../Components/Navbar';
import "../App.css"

function Reserva() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedMesa, setSelectedMesa] = useState('');
  const [reservaData, setReservaData] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleMesaChange = (e) => {
    setSelectedMesa(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar si se han seleccionado fecha, hora y mesa
    if (selectedDate && selectedTime && selectedMesa) {
      // Crear un objeto con los datos de la reserva
      const reserva = {
        fecha: selectedDate.toDateString(),
        hora: selectedTime,
        mesa: selectedMesa,
      };

      // Establecer los datos de la reserva en el estado
      setReservaData(reserva);

      // Restablecer los campos del formulario
      setSelectedDate(null);
      setSelectedTime('');
      setSelectedMesa('');
    }
  };

  return (
    <div>
      <Navbar />
      <br/>
      <div className="reserva">
        <h2 className='titulo_reserva'>Haz tu reserva</h2>
    
        <form onSubmit={handleSubmit}>
          <div className="form-group_edit">
            <label>Selecciona una fecha:</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()} // Solo fechas futuras
              isClearable
              placeholderText="Selecciona una fecha"
            />
          </div>
          <br/>
          <div className="form-group_edit">
            <label>Selecciona una hora: </label>
            <select value={selectedTime} onChange={handleTimeChange}>
              <option value="">Selecciona una hora</option>
              <option value="09:00">09:00 AM</option>
              <option value="11:00">11:00 AM</option>
              <option value="14:00">02:00 PM</option>
              <option value="16:00">04:00 PM</option>
            </select>
          </div>
          <br/>
          <div className="form-group_edit">
            <label>Selecciona la Mesa:</label>
            <select value={selectedMesa} onChange={handleMesaChange}>
              <option value="">Selecciona una Mesa</option>
              <option value="Mesa 1">Mesa 1</option>
              <option value="Mesa 2">Mesa 2</option>
              <option value="Mesa 3">Mesa 3</option>
              <option value="Mesa 4">Mesa 4</option>
            </select>
          </div>
          <br/>
          <button className='reserva_boton' type="submit">Reservar</button>

        </form>
        <br/>
        <br/>
        <br/>
        {reservaData && (
          <div className="confirmation">
            <p>¡Reserva confirmada!</p>
            <p>Fecha: {reservaData.fecha}</p>
            <p>Hora: {reservaData.hora}</p>
            <p>Mesa: {reservaData.mesa}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reserva;

