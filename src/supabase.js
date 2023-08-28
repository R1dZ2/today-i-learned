import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yjhfuwbgrxfmiuidzlgi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqaGZ1d2JncnhmbWl1aWR6bGdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1MDA1ODEsImV4cCI6MjAwNzA3NjU4MX0.NXwOqm17MLiUFvwC95Y21s57DX1mMoFly9PGO7di5ss";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
