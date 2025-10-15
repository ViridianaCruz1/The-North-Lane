import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xpxfacujdaiugphvpili.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhweGZhY3VqZGFpdWdwaHZwaWxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAzNjk3MTMsImV4cCI6MjA3NTk0NTcxM30.Mq6XOYmtWaZnNKS61Nus9m6IKdXHtcVQAMniFox9Jc0";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
