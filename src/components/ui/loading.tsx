
import React from 'react';

export const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-job"></div>
  </div>
);

export const LoadingCard = () => (
  <div className="glass-card p-6 animate-pulse">
    <div className="h-4 bg-foreground/20 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-foreground/20 rounded w-1/2"></div>
  </div>
);

export const LoadingChart = () => (
  <div className="glass-card p-6 animate-pulse">
    <div className="h-4 bg-foreground/20 rounded w-1/2 mb-4"></div>
    <div className="h-64 bg-foreground/10 rounded"></div>
  </div>
);
