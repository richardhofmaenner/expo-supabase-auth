import { Session } from "@supabase/supabase-js";
import React, { createContext, useState, useEffect } from "react";

import { supabaseClient as supabase } from "@/utils/supabase";
type ContextProps = {
  user: null | boolean;
  session: Session | null;
};

const AuthContext = createContext<Partial<ContextProps>>({});

interface Props {
  children: React.ReactNode;
}

const AuthProvider = (props: Props) => {
  // user null = loading
  const [user, setUser] = useState<null | boolean>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.refreshSession().then(({ data, error }) => {
      const { session } = data;
      setSession(session);
      setUser(!!session);
      const { data: authListener } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          console.log(`Supabase auth event: ${event}`);
          setSession(session);
          setUser(!!session);
        }
      );
      return () => {
        authListener.subscription.unsubscribe();
      };
    });
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
