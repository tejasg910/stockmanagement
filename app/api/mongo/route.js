import { NextResponse } from "next/server";

const { MongoClient } = require("mongodb");

export async function GET(request) {
  // Replace the uri string with your connection string.
  const uri = "mongodb+srv://mongodb:admin@cluster0.kstrcyy.mongodb.net/";

  const client = new MongoClient(uri);

  try {
    const database = client.db("quiz-app");
    const movies = database.collection("quizzes");

    // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const movie = await movies.findOne(query);

    console.log(movie);
    return NextResponse.json({ name: "Tejas" });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
