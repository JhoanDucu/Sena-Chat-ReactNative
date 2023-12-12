import React from 'react';

import { AuthProvider } from './src/sesion/AuthContext';
import AppNav from './src/navigation/navigation';

export default function App() {
  
  
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}



