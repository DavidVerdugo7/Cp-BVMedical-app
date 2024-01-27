export async function FetchEquipmentData() {
  try {
    const response = await fetch(
      "http://localhost:8080/api/medical-equipment/"
    );

    if (!response.ok) {
      throw new Error("Network response error");
    }
    const data = await response.json();

    console.log("Data received:", data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
