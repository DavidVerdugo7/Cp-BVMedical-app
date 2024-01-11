import React, { useState } from "react";
import CardEquipment from "./CardEquipment";
import { useLocation } from "react-router-dom";

export default function Thermometer() {
  const initialTempValues = [36, 40]; // Valores iniciales de temperatura

  const [tempValues, setTempValues] = useState(initialTempValues);

  const [isFunctionalYes, setIsFunctionalYes] = useState(null);

  const [comments, setComments] = useState("");
  const initialCommentValues = ["", ""]; // Valores iniciales de las áreas de texto
  const [commentValues, setCommentValues] = useState(initialCommentValues);

  const initialTextAreaValues = ["", ""]; // Asegúrate de que esto coincide con la cantidad de temperaturas
  const [textAreaValues, setTextAreaValues] = useState(initialTextAreaValues);
  //Card Details
  const location = useLocation();
  const { selectedEquipment } = location.state || {};

  const handleChange = (type, index, value, comment) => {
    if (type === "temperature") {
      const updatedValues = [...tempValues];
      updatedValues[index] = value;
      setTempValues(updatedValues);

      const updatedComments = [...commentValues];
      updatedComments[index] = comment;
      setCommentValues(updatedComments);

      const updatedTextAreaValues = [...textAreaValues];
      updatedTextAreaValues[index] = comment;
      setTextAreaValues(updatedTextAreaValues);
    }
  };

  const incrementValue = (type, index) => {
    if (type === "temperature") {
      const updatedValues = [...tempValues];
      if (updatedValues[index] < 100) {
        updatedValues[index] += 1;
        setTempValues(updatedValues);
      }
    }
  };

  const decrementValue = (type, index) => {
    if (type === "temperature") {
      const updatedValues = [...tempValues];
      if (updatedValues[index] > 0) {
        updatedValues[index] -= 1;
        setTempValues(updatedValues);
      }
    }
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
  };

  const handleStatus = (status) => {
    if (status === "Failed") {
      handlePostRequest(status, selectedEquipment.id);
    } else if (status === "Verified") {
      handlePostRequest(status, selectedEquipment.id);
    }
  };
  return (
    <div className="cardForm  p-2 sm:py-6 lg:p-6 justify-center my-2 mx-12  lg:mt-6  sm:mx-24 lg:mx-64">
      {selectedEquipment ? (
        <CardEquipment equipment={selectedEquipment} />
      ) : (
        <p>No equipment selected</p>
      )}
      <div>
        <div>
          <h1>Temperature (c)</h1>
          {tempValues.map((temperature, index) => (
            <div
              className="flex justify-evenly items-center flex-wrap mt-4 sm:w-full"
              key={index}
            >
              <button
                className="btn btn-outline btn-warning"
                onClick={() => decrementValue("temperature", index)}
              >
                -
              </button>
              <input
                className="input input-bordered w-20 max-w-xs m-4"
                placeholder="temp"
                type="number"
                value={temperature}
                onChange={(e) =>
                  handleChange("temperature", index, parseInt(e.target.value))
                }
              />
              <button
                className="btn btn-outline btn-success"
                onClick={() => incrementValue("temperature", index)}
              >
                +
              </button>
              <textarea
                className="textarea textarea-bordered"
                placeholder="°C"
                value={textAreaValues[index]}
                onChange={(e) =>
                  handleChange(
                    "temperature",
                    index,
                    temperature,
                    e.target.value
                  )
                }
                rows="1"
                cols="2"
              />
            </div>
          ))}
        </div>
        <br />
      </div>

      {/*  CHECKBOX */}

      <h2>Functional</h2>
      <div className="flex justify-evenly items-center flex-wrap mt-4 sm:w-full ">
        <div className="form-control  items-center">
          <label className="cursor-pointer label">
            <p className="label-text">Yes</p>

            <input
              type="checkbox"
              className="ml-6 checkbox checkbox-success "
              name="functional"
              value="yes"
              checked={isFunctionalYes === true}
              onChange={() => setIsFunctionalYes(true)}
            />
          </label>
        </div>

        <div className="form-control  items-center mb-4">
          <label className="cursor-pointer label">
            <p className="label-text">No</p>

            <input
              type="checkbox"
              className="ml-6  checkbox checkbox-error "
              name="functional"
              value="no"
              checked={isFunctionalYes === false}
              onChange={() => setIsFunctionalYes(false)}
            />
          </label>
        </div>
      </div>

      {/* TEST AREA LOCATION, COMMENTS */}

      <div>
        <h2>Comments</h2>
        <textarea
          className="textarea textarea-bordered"
          placeholder="comments"
          value={comments}
          onChange={handleCommentsChange}
          rows="3"
          cols="40"
        />
      </div>
      {/* BUTTONS TO SUBMMIT */}
      <div className="flex justify-evenly items-center flex-wrap sm:flex-nowrap md:flex-wrap">
        <button
          className="btn mt-10 mr-10 btn-error"
          onClick={() => handleStatus("Failed")}
        >
          Failed
        </button>

        <button
          className="btn mt-10 ml-10 btn-success"
          onClick={() => handleStatus("Verified")}
        >
          Verified
        </button>
      </div>
    </div>
  );
}
