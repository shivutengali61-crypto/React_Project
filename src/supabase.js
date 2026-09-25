import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wzijmfqdowiederuxrph.supabase.co";
const supabaseKey = "sb_publishable_0Zfvs5VPlOjw2d8OlmPlGg__J02a2Zg";
export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);