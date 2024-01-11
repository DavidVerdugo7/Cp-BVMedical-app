// ESTE COMPONENTE MUESTRA LAS ESPECIFICACIONES DEL ITEM SELECCIONADO RECOGIENDO LOS DATOS DE LA API:

import React from "react";

const CardEquipment = ({ equipment }) => {
  return (
    <div className="card w-90 md:p-5 sm:p-3 bg-base-100 shadow-xl mb-8 lg:px-8  ">
      <div className="card-body p-0">
        <h2 className="card-title justify-center mb-3">
          Short Code: {equipment.shortCode}
        </h2>

        <p>Equipment Type: {equipment.equipmentType}</p>
        <p>Made By: {equipment.madeBy}</p>
        <p>Model: {equipment.model}</p>
      </div>
    </div>
  );
};

export default CardEquipment;
