import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListaClientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/clientes');
        setClientes(response.data);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
      }
    };

    fetchClientes();
  }, []);

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <ul>
        {clientes.map(cliente => (
          <li key={cliente.id}>{cliente.nome} - {cliente.email} - {cliente.telefone}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaClientes;
