import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://zstwxxjeisnfqpzdddca.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzdHd4eGplaXNuZnFwemRkZGNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1ODk2NjQsImV4cCI6MjA3NzE2NTY2NH0.y6fZweMWdAPo_ZCwSMc2m3Qqn_L2kO3BD9Bv67IT6PQ";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
