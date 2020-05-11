import React from 'react';
import logo from './logo.svg';
import 'materialize-css';
import { useRoutes } from './routes';

function App() {
  const routes = useRoutes(false)
  return (
    <div className="container">
      {routes}
    </div>
  );
}

export default App;
