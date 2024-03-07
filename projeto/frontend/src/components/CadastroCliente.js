import React, { useState } from 'react';
import axios from 'axios';

const CadastroCliente = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    coordenadaX: '',
    coordenadaY: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/clientes', formData);
      alert('Cliente cadastrado com sucesso!');
      console.log('Cliente cadastrado:', response.data);

      // Limpar o formulário após o cadastro
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        coordenadaX: '',
        coordenadaY: ''
      });
    } catch (error) {
      alert('Erro ao cadastrar cliente. Por favor, tente novamente.');
      console.error('Erro ao cadastrar cliente:', error);
    }
  };

  return (
    <div>
      <h2>Cadastro de Cliente</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Nome" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Telefone" />
        <input type="number" name="coordenadaX" value={formData.coordenadaX} onChange={handleChange} placeholder="Coordenada X" required />
        <input type="number" name="coordenadaY" value={formData.coordenadaY} onChange={handleChange} placeholder="Coordenada Y" required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastroCliente;
