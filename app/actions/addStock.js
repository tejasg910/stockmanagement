"use server";

export const createStock = async (formdata) => {
  try {
    console.log(formdata);
    const response = await fetch("http://localhost:3000/api/product", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
