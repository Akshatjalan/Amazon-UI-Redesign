export const addToCart = async (productId, quantity) => {
  const token = localStorage.getItem("token");

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  // const API_BASE_URL = "http://localhost:5000"; //local work

  try {
    const response = await fetch(`${API_BASE_URL}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ productId, quantity }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.error || "Failed to add to cart");
    }

    return data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    alert(error.message);
  }
};
