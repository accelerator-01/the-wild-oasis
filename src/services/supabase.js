import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cysvxncighuccofyjywg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN5c3Z4bmNpZ2h1Y2NvZnlqeXdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE2NjAyMTksImV4cCI6MjAxNzIzNjIxOX0.GUzjRyHsP2mAljHvV10lPp8FQtFUncUUDHUO9cYuQPY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
