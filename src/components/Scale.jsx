import React, { useState, useContext } from "react";
import CardEquipment from "./CardEquipment";

import { useLocation } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";

export default function Scale() {
  const INITIAL_SCALE_VALUES = [50, 90];
  const INITIAL_READING_VALUES = [60, 60];

  const [scaleValues, setScaleValues] = useState(INITIAL_SCALE_VALUES);
  const [readingValues, setReadingValues] = useState(INITIAL_READING_VALUES);
  //
  const [isFunctionalYes, setIsFunctionalYes] = useState(null);

  // State initialization
  const [scaleComment1, setScaleComment1] = useState("");
  const [scaleComment2, setScaleComment2] = useState("");
  const [generalComments, setGeneralComments] = useState("");

  //calling the user id
  // const { userId } = useContext(AuthContext);
  const { userId, isLoggedIn } = useContext(AuthContext);
  const location = useLocation();
  const { selectedEquipment } = location.state || {};

  //Handlers

  const handleChange = (type, index, value) => {
    if (type === "scale") {
      const updatedValues = [...scaleValues];
      updatedValues[index] = value;
      setScaleValues(updatedValues);

      if (index === 0) {
        setScaleComment1(value);
      } else if (index === 1) {
        setScaleComment2(value);
      }
    } else if (type === "reading") {
      const updatedValues = [...readingValues];
      updatedValues[index] = value;
      setReadingValues(updatedValues);
    }
  };

  // Handler
  const handleScaleCommentChange = (index, value) => {
    if (index === 1) {
      setScaleComment1(value);
    } else if (index === 2) {
      setScaleComment2(value);
    }
  };

  const handleGeneralCommentsChange = (e) => {
    const value = e.target.value;

    setGeneralComments(value);
  };

  //POST request to DB

  const handlePostRequest = async (status, equipmentId, userId) => {
    try {
      // Constructing dataInput for scale comments
      const scaleComments = [scaleComment1, scaleComment2];
      const dataInput = scaleComments
        .map((comment, index) => `Scale Reading ${index + 1}: ${comment} kg`)
        .join("; ");

      // Extracting other required values
      const functional = isFunctionalYes === true;
      const verified = status === "Verified";
      console.log("generalComments:", generalComments);
      // Making the POST request
      const response = await fetch(
        "http://localhost:8080/api/assessments/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            equipmentID: equipmentId,
            userID: userId,
            dataInput: dataInput,
            comments: generalComments,
            Functional: functional,
            verified: verified,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleStatus = (status) => {
    if (isLoggedIn && (status === "Failed" || status === "Verified")) {
      handlePostRequest(status, selectedEquipment.id, userId);
      console.log("userId:", userId);
    }
  };

  //Button + and - functions
  const incrementValue = (type, index) => {
    if (type === "scale") {
      const updatedValues = [...scaleValues];
      if (updatedValues[index] < 100) {
        updatedValues[index] += 1;
        setScaleValues(updatedValues);
      }
    } else if (type === "reading") {
      const updatedValues = [...readingValues];
      if (updatedValues[index] < 100) {
        updatedValues[index] += 1;
        setReadingValues(updatedValues);
      }
    }
  };

  const decrementValue = (type, index) => {
    if (type === "scale") {
      const updatedValues = [...scaleValues];
      if (updatedValues[index] > 0) {
        updatedValues[index] -= 1;
        setScaleValues(updatedValues);
      }
    } else if (type === "reading") {
      const updatedValues = [...readingValues];
      if (updatedValues[index] > 0) {
        updatedValues[index] -= 1;
        setReadingValues(updatedValues);
      }
    }
  };

  return (
    <>
      <div className="cardForm  p-2 sm:py-6 lg:p-6 justify-center my-2 mx-12  lg:mt-6  sm:mx-24 lg:mx-64 ">
        {selectedEquipment ? (
          <CardEquipment equipment={selectedEquipment} />
        ) : (
          <p>No equipment selected</p>
        )}
        <div>
          <div>
            <h1>Scale (kg)</h1>
            {scaleValues.map((scale, index) => (
              <div
                className="flex justify-evenly items-center flex-wrap mt-4 sm:w-full"
                key={index}
              >
                <button
                  className="btn btn-outline btn-warning"
                  onClick={() => decrementValue("scale", index)}
                >
                  -
                </button>
                <input
                  className="input input-bordered  w-20 max-w-xs m-4"
                  type="number"
                  value={scale}
                  onChange={(e) =>
                    handleChange(
                      "scale",
                      index,
                      parseInt(e.target.value),
                      generalComments[index]
                    )
                  }
                />
                <button
                  className="btn btn-outline btn-success"
                  onClick={() => incrementValue("scale", index)}
                >
                  +
                </button>

                {index === 0 || index === 1 ? (
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="kg"
                    name={`scaleComment${index + 1}`}
                    value={index === 0 ? scaleComment1 : scaleComment2}
                    onChange={(e) =>
                      handleScaleCommentChange(index + 1, e.target.value)
                    }
                    rows="1"
                    cols="2"
                  />
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/*  CHECKBOX */}

        <h2 className="mt-4">Functional</h2>

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
        <h2>Comments</h2>
        <div className="flex justify-evenly items-center flex-wrap">
          <textarea
            name="generalComments"
            className=" textarea textarea-bordered mt-4 "
            placeholder="comments"
            value={generalComments}
            onChange={handleGeneralCommentsChange}
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
    </>
  );
}
