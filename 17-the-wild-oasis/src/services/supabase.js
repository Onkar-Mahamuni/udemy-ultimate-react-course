import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ywivquvqogkcoeboguyw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3aXZxdXZxb2drY29lYm9ndXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxNTcwNTEsImV4cCI6MjA1NTczMzA1MX0.27lvTHlaZKhhsYoohr29WPzQtp0WnOHTMSwf5lX-lI4";
const supabase = createClient(supabaseUrl, supabaseKey);

// import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dqnjgzgpnmssazwaugbs.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxbmpnemdwbm1zc2F6d2F1Z2JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzMjA0NjEsImV4cCI6MjAyOTg5NjQ2MX0.qfJ9PtdesgyDY8cLfde3MWG7xOAefJs8JAIZXm8PGpg";
// const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
