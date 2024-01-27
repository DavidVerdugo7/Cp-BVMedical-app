// export async function FetchAssessment() {
//   try {
//     const response = await fetch("http://localhost:8080/api/assessments");

//     if (!response.ok) {
//       throw new Error(`Error fetching data: ${response.statusText}`);
//     }

//     const data = await response.json();

//     console.log("Data received:", data);

//     return Array.isArray(data) ? data : [];
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     throw error;
//   }
// }
export async function FetchAssessment() {
  try {
    const response = await fetch("http://localhost:8080/api/assessments");

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();

    console.log("Data received:", data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
