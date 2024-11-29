import { createClient } from "@supabase/supabase-js";

// Pastikan variabel lingkungan sudah didefinisikan di .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validasi variabel lingkungan
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL and ANON KEY must be provided in the .env file");
}

// Buat instance Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
