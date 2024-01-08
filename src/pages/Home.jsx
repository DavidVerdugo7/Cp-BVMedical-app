import React from "react";
import { useEquipment } from "../hooks/useEquipment";
import EquipmentDetails from "../components/EquipmentDetails";
import { useNavigate } from "react-router-dom";

import "../styles/Home.css";

const Home = () => {
  const { equipmentData, searchID, setSearchID, handleSearch, isSearched } =
    useEquipment();
  //navigate is to go to the especific pageform for after click assessment
  const navigate = useNavigate();

  const handleAssessment = (equipmentType) => {
    navigate(`/${equipmentType}`);
  };

  return (
    <>
      <h1>Search here your equipment Id</h1>
      <div className="cardForm p-20 md:p-20 sm:p-20 flex justify-center mt-20 mx-12  lg:mt-6 md:mx-64 sm:mx-24 lg:mx-64">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Product ID"
            className="inputStyles input input-bordered w-full max-w-xs"
            value={searchID}
            onChange={(e) => setSearchID(e.target.value)}
          />

          <br />

          <button className="btn mt-20 btn-success" onClick={handleSearch}>
            Search
          </button>
        </form>
      </div>

      {/* Mostrar los datos en el div */}
      {isSearched && (
        <div className="flex justify-center sm:mt-10">
          {equipmentData.map((equipment, index) => (
            <EquipmentDetails
              key={`${equipment.id}-${index}`}
              equipment={equipment}
              goToAssessment={(equipmentType) =>
                handleAssessment(equipmentType)
              }
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
