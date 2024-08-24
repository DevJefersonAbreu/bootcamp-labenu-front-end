import React from 'react';
import useForm from '../../hooks/useForm'; // Importa o hook personalizado
import { MainContainer, Form, Input, Button } from './styles';

function MainPage() {
  const { form, onChange, clearForm } = useForm({
    nome: '',
    modulos: '',
    tecnologias: '',
    responsavel: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para submissão do formulário
  };

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          name="nome"
          value={form.nome}
          onChange={(e) => onChange(e.target.name, e.target.value)}
          placeholder="Digite o nome do curso"
        />
        {/* Outros inputs semelhantes */}
        <Button type="submit">Criar curso</Button>
      </Form>
    </MainContainer>
  );
}

export default MainPage;
