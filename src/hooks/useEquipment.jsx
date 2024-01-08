import { useState, useEffect } from "react";
import { FetchEquipmentData } from "../API/FetchEquipment";

export function useEquipment() {
  const [equipmentData, setEquipmentData] = useState([]);
  const [searchID, setSearchID] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  const fetchData = async () => {
    try {
      const data = await FetchEquipmentData();
      setEquipmentData(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/medical-equipment/${searchID}`
      );
      if (!response.ok) {
        throw new Error("Network response error");
      }
      const searchData = await response.json();
      if (Array.isArray(searchData)) {
        setEquipmentData(searchData);
      } else {
        setEquipmentData([searchData]); // esto Convierte el objeto en un array
      }
      setIsSearched(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    equipmentData,
    setSearchID,
    handleSearch,
    isSearched,
    setIsSearched,
  };
}
