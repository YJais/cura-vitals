// import express from "express";
// import { createClient } from "@supabase/supabase-js";

// const router = express.Router();
// const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// // Create record
// router.post("/", async (req, res) => {
//   const { user_id, type, value, description } = req.body;
//   const { data, error } = await supabase
//     .from("records")
//     .insert([{ user_id, type, value, description }])
//     .select();
//   if (error) return res.status(400).json({ error: error.message });
//   res.json(data);
// });

// // Fetch records
// router.get("/:userId", async (req, res) => {
//   const { userId } = req.params;
//   const { data, error } = await supabase
//     .from("records")
//     .select("*")
//     .eq("user_id", userId);
//   if (error) return res.status(400).json({ error: error.message });
//   res.json(data);
// });

// export default router;

import express from "express";
import { createClient } from "@supabase/supabase-js";

const router = express.Router();
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

router.post("/", async (req, res) => {
  const { user_id, type, value, description } = req.body;
  const { data, error } = await supabase
    .from("records")
    .insert([{ user_id, type, value, description }])
    .select();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  const { data, error } = await supabase
    .from("records")
    .select("*")
    .eq("user_id", userId);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

export default router;
