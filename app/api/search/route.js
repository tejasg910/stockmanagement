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
    const allProducts = await inventory.aggregate([
      {
        $match: {
          name: {
            $regex: "a",
            $options: "i",
          },
        },
      },
    ]);

    return NextResponse.json({ success: true, allProducts });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
