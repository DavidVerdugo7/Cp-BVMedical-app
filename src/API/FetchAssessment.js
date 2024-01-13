import axios from "axios";

export async function FetchAssessment() {
  try {
    const response = await axios.get("http://localhost:8080/api/assessments/");

    const data = Array.isArray(response.data) ? response.data : [];

    console.log("Datos establecidos:", data);

    console.log("Data received:", data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
