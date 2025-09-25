// // import express from "express";
// // import { createClient } from "@supabase/supabase-js";

// // const router = express.Router();
// // const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// // // Register
// // router.post("/register", async (req, res) => {
// //   const { email, password, name } = req.body;
// //   const { data, error } = await supabase.auth.signUp({
// //     email,
// //     password,
// //     options: { data: { name } }
// //   });
// //   if (error) return res.status(400).json({ error: error.message });
// //   res.json(data);
// // });

// // // Login
// // router.post("/login", async (req, res) => {
// //   const { email, password } = req.body;
// //   const { data, error } = await supabase.auth.signInWithPassword({ email, password });
// //   if (error) return res.status(400).json({ error: error.message });
// //   res.json(data);
// // });

// // export default router;

// import express from "express";
// import { createClient } from "@supabase/supabase-js";

// const router = express.Router();

// // Load from environment variables
// const supabaseUrl = process.env.SUPABASE_URL || 'https://dyxmwrqcectlhhppatwmt.supabase.co';
// const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5eG13cmNxZWN0bHdocHBhd210Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyMjAxMTIsImV4cCI6MjA3Mzc5NjExMn0.pjfCLPW2o6a8zARgDyxFsBAWfTLr-3L5i4lbQkd7hNU';

// if (!supabaseUrl || !supabaseKey) {
//   throw new Error("Missing Supabase credentials in .env");
// }

// const supabase = createClient(supabaseUrl, supabaseKey);

// // Example signup route
// router.post("/signup", async (req, res) => {
//   const { email, password } = req.body;
//   const { data, error } = await supabase.auth.signUp({ email, password });

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

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

export default router;
