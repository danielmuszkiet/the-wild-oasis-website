import { createClient } from "./supabase/server";
const supabaseServerClient = await createClient();

export async function getCabin(id: number) {
  const { data, error } = await supabaseServerClient
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log(error);
  }

  return data;
}
