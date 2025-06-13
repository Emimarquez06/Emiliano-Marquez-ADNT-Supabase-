import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import Wheel from '../components/Wheel';
import type { Session, AuthChangeEvent } from '@supabase/supabase-js';

const styles = {
  buttons: {
    display: 'flex',
    gap: '1rem',
    margin: '1rem 0',
    justifyContent: 'center',
  },
} as const;

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for current session
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error('Error getting session:', error.message);
        navigate('/login');
        return;
      }
      
      if (!data.session) {
        // No active session, redirect to login
        navigate('/login');
        return;
      }
      
      // Session exists, get user data
      setUser(data.session);
      setLoading(false);
    };
    
    checkSession();
    
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        if (event === 'SIGNED_OUT') {
          navigate('/login');
        } else if (session) {
          setUser(session);
        }
      }
    );
    
    return () => {
      // Clean up the subscription
      subscription.unsubscribe();
    };
  }, [navigate]);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error.message);
        return;
      }
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.user.email}</h1>
      <div className="wheel-container">
        <Wheel userId={user.user.id} />
      </div>
      <div style={styles.buttons}>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Home; 