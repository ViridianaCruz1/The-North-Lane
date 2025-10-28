import supabase from "../services/supabase";

export default async function getProducts() {
  const { data, error } = await supabase.from("inventario").select("*");
  if (error) {
    console.error("Error fetching products:", error);
    throw new Error("Could not fetch products");
  }
  return data;
}
