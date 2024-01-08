import React from "react";
import { useNavigate } from "react-router-dom";

const EquipmentDetails = ({ equipment }) => {
  const navigate = useNavigate();

  const handleAssessment = (equipment) => {
    navigate(`/${equipment.equipmentType}`, {
      state: { selectedEquipment: equipment },
    });
  };

  return (
    <div className="card w-96 mb-8 sm:p-2 bg-base-100 shadow-xl ">
      <div className="card-body">
        <h2 className="card-title justify-center mb-3">
          Short Code: {equipment.shortCode}
        </h2>

        <p>Equipment Type: {equipment.equipmentType}</p>
        <p>Made By: {equipment.madeBy}</p>
        <p>Model: {equipment.model}</p>

        <div className="card-actions justify-center mt-8">
          <button
            className="btn btn-primary"
            onClick={() => handleAssessment(equipment)}
          >
            Assessment
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetails;
