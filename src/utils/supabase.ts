import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";
import Constants from "expo-constants";

// Better put your these secret keys in .env file
export const supabaseClient = createClient(
  Constants.expoConfig.extra.supabaseURL,
  Constants.expoConfig.extra.supabaseKey,
  {
    // @ts-ignore
    localStorage: AsyncStorage as any,
    detectSessionInUrl: false, // Prevents Supabase from evaluating window.location.href, breaking mobile
  }
);
