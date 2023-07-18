import { NextResponse } from "next/server";

const { MongoClient } = require("mongodb");

export async function GET(request) {
  // Replace the uri string with your connection string.
  const uri = "mongodb+srv://mongodb:admin@cluster0.kstrcyy.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    const database = client.db("stock");
    const inventory = database.collection("product");

    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const allProducts = await inventory.find(query).toArray();

    revalidatePath("/");

    return NextResponse.json({ success: true, allProducts });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function POST(request) {
  // Replace the uri string with your connection string.
  const uri = "mongodb+srv://mongodb:admin@cluster0.kstrcyy.mongodb.net/";
  const client = new MongoClient(uri);
  try {
    let { name, quantity, price } = await request.json();
    console.log(request.body);

    console.log(await request.json());
    if ((!name, !quantity, !price)) {
      return NextResponse.json({
        success: false,
        message: "Please given required fields",
      });
    }

    const database = client.db("stock");
    const inventory = database.collection("product");

    // Query for a movie that has the title 'Back to the Future'
    const query = { name, price, quantity };
    const product = await inventory.insertOne(query);

    return NextResponse.json({
      success: true,
      message: "added to database",
      data: product,
    });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
