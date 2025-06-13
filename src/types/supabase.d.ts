declare module '@supabase/supabase-js' {
  export interface Session {
    user: {
      id: string;
      email: string;
      user_metadata: any;
    };
    expires_at: number;
    access_token: string;
    refresh_token: string;
  }

  export type AuthChangeEvent = 'SIGNED_IN' | 'SIGNED_OUT' | 'PASSWORD_RECOVERY' | 'TOKEN_REFRESHED';
}
