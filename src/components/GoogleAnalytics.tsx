'use client';

import { GoogleAnalytics as GA } from '@next/third-parties/google';

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  
  if (!GA_MEASUREMENT_ID) {
    console.warn('GA_MEASUREMENT_ID is not configured');
    return null;
  }

  return <GA gaId={GA_MEASUREMENT_ID} />;
}