import supabase from "../services/supabase";

export default async function getParfums() {
  const { data, error } = await supabase.from("parfums").select("*");
  if (error) {
    console.error("Error fetching parfums:", error);
    throw new Error("Could not fetch parfums");
  }
  return data;
}
