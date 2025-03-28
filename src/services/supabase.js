import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://geqjazvquaykhqcevulh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlcWphenZxdWF5a2hxY2V2dWxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwOTM3MzcsImV4cCI6MjA1ODY2OTczN30.2Q-dHE5P9IHfrjF1_6nvQz9g44OjBBmhCgjzh1-AtGA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
