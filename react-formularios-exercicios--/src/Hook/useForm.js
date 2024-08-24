import { useState } from 'react';

const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const clearForm = () => {
    setForm(initialValues);
  };

  return { form, onChange, clearForm };
};

export default useForm;


const handleSubmit = (event) => {
    event.preventDefault();
    if (form.modulos < 2) {
      alert("O número de módulos deve ser maior que 2");
      return;
    }
    if (form.responsavel.length < 5) {
      alert("O nome do responsável deve ter pelo menos 5 caracteres");
      return;
    }
    // Processar os dados do formulário
  };
  