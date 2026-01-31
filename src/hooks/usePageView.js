import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function usePageView() {
  const { pathname } = useLocation();

  useEffect(() => {
    supabase.from('page_views').insert({
      page: pathname,
      referrer: document.referrer || null,
      user_agent: navigator.userAgent,
    }).then(() => {});
  }, [pathname]);
}
