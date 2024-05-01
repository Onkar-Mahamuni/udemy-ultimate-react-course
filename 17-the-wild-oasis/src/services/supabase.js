import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://dqnjgzgpnmssazwaugbs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxbmpnemdwbm1zc2F6d2F1Z2JzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzMjA0NjEsImV4cCI6MjAyOTg5NjQ2MX0.qfJ9PtdesgyDY8cLfde3MWG7xOAefJs8JAIZXm8PGpg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
