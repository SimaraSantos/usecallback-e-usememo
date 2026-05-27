import { useState, useMemo } from 'react';
// Exemplo prático de useMemo: filtrando e ordenando uma lista
const itensExemplo = [
  { id: 1, nome: 'Banana', categoria: 'Fruta' },
  { id: 2, nome: 'Cenoura', categoria: 'Legume' },
  { id: 3, nome: 'Maçã', categoria: 'Fruta' },
  { id: 4, nome: 'Batata', categoria: 'Legume' },
  { id: 5, nome: 'Abacaxi', categoria: 'Fruta' },
];
function App() {
  const [filtro, setFiltro] = useState('');
  const [categoria, setCategoria] = useState('Todas');
  // Cálculo "pesado" memorizado: filtra e ordena a lista
  const itensFiltrados = useMemo(() => {
    let resultado = itensExemplo;
    if (categoria !== 'Todas') {
      resultado = resultado.filter(item => item.categoria === categoria);
    }
    if (filtro.trim()) {
      resultado = resultado.filter(item => item.nome.toLowerCase().includes(filtro.toLowerCase()));
    }
    // Simula um processamento pesado
    for (let i = 0; i < 10000000; i++) {
      // Processamento intensivo
    } // NÃO FAÇA ISSO EM PRODUÇÃO, é só para simular!
    return resultado.sort((a, b) => a.nome.localeCompare(b.nome));
  }, [filtro, categoria]);
  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: 16, border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Exemplo: useMemo</h2>
      <div style={{ marginBottom: 16 }}>
        <input
          value={filtro}
          onChange={e => setFiltro(e.target.value)}
          placeholder="Filtrar por nome..."
          style={{ padding: 8, fontSize: 16, marginRight: 8 }}
        />
        <select value={categoria} onChange={e => setCategoria(e.target.value)} style={{ padding: 8, fontSize: 16 }}>
          <option value="Todas">Todas</option>
          <option value="Fruta">Fruta</option>
          <option value="Legume">Legume</option>
        </select>
      </div>
      <ul>
        {itensFiltrados.map(item => (
          <li key={item.id}>{item.nome} <span style={{ color: '#888', fontSize: 12 }}>({item.categoria})</span></li>
        ))}
      </ul>
      <p style={{ color: '#888', fontSize: 12, marginTop: 16 }}>
        A lista só é recalculada quando filtro ou categoria mudam.<br />
        O useMemo evita processamento desnecessário.
      </p>
    </div>
  );
}
export default App;