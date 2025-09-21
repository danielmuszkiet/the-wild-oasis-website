import { notFound } from "next/navigation";
import { supabase } from "./supabase";
import { TableKeys } from "./definitions";

export async function getCabin(id: number) {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    notFound();
  }

  return data;
}

export async function getCabins() {
  const { data, error } = await supabase
    .from("cabins")
    .select("id, name, maxCapacity, regularPrice, discount, image")
    .order("name");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function getEntryCount(tableName: TableKeys) {
  const { count, error } = await supabase
    .from(tableName)
    .select("id", { count: "exact", head: true });

  if (error) {
    console.error(error);
    throw new Error("Count could not be loaded");
  }

  return count;
}
