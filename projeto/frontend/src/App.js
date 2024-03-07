import React from 'react';
import CadastroCliente from './components/CadastroCliente';
import ListaClientes from './components/ListaClientes';
import RotaOtimizada from './components/RotaOtimizada';
import './App.css';

function App() {
  return (
    <div className="App">
      <CadastroCliente />
      <ListaClientes />
      <RotaOtimizada />
    </div>
  );
}

export default App;
