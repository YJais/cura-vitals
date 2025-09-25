import express from "express";
import { Pinecone } from "@pinecone-database/pinecone";
import OpenAI from "openai";

const router = express.Router();

const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const index = pinecone.index(process.env.PINECONE_INDEX);

// Store embedding
router.post("/store", async (req, res) => {
  try {
    const { id, text } = req.body;
    const embedding = await openai.embeddings.create({ model: "text-embedding-ada-002", input: text });

    await index.upsert([{ id, values: embedding.data[0].embedding }]);
    res.json({ message: "Embedding stored" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Search embedding
router.post("/query", async (req, res) => {
  try {
    const { text } = req.body;
    const embedding = await openai.embeddings.create({ model: "text-embedding-ada-002", input: text });

    const results = await index.query({
      vector: embedding.data[0].embedding,
      topK: 5,
      includeValues: false,
      includeMetadata: true
    });

    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
