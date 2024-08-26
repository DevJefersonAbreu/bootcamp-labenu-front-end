import { useParams } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams(); // Pega o parâmetro da URL
  return (
    <section>
      <h1>Página do Produto</h1>
      <p>ID do produto: {id}</p>
      {/* Aqui você pode adicionar lógica para exibir detalhes do produto */}
    </section>
  );
}

export default ProductPage;
