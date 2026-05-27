# 🧪 React Performance Lab: useCallback & useMemo

Este repositório é um laboratório prático focado exclusivamente no estudo, compreensão e aplicação dos Hooks de otimização de performance do React (`useCallback` e `useMemo`), utilizando **React**, **TypeScript** e **Vite**.

O objetivo principal é entender na prática como evitar re-renderizações desnecessárias e como impedir que cálculos pesados reduzam a fluidez da interface.

---

## 🚀 Tecnologias Utilizadas

* **React 18** (Functional Components)
* **TypeScript** (Segurança e tipagem estática)
* **Vite** (Ambiente de desenvolvimento ultra-rápido)

---

## 📂 Estrutura de Componentes Desenvolvidos

Dentro da pasta `src/components/`, os seguintes laboratórios independentes foram criados para isolar cada conceito:

### 1. ⚡ `ExemploCallback.tsx` (Memorização de Funções)
* **Conceito:** Evitar que funções sejam recriadas na memória a cada ciclo de renderização do componente principal.
* **Prática:** Uma interface (como um input e um contador) onde o `useCallback` impede que a digitação de texto paralela force a recriação das funções de clique dos botões.
* **Benefício:** Estabilidade de referências na memória e otimização de performance ao passar funções para componentes filhos.

### 2. 🧠 `UseMemo.tsx` (Memorização de Cálculos Pesados)
* **Conceito:** Guardar o resultado final de uma operação computacional complexa (CPU intensive) e só recalculá-lo se as suas dependências reais mudarem.
* **Prática:** Um sistema de listagem com filtros simultâneos por **Nome** e **Categoria** (Fruta/Legume). O código possui um loop intencional de `10.000.000` de iterações para simular latência de processamento real.
* **Benefício:** Garante que interações paralelas (como digitar algo que não altere o filtro principal) não causem travamentos ("engasgos") na interface do usuário.

---

## 💻 Como Alternar entre os Exemplos no Localhost

Para rodar e estudar cada um dos hooks de forma isolada, basta alterar qual componente está ativo dentro do arquivo principal `src/App.tsx`. 

Deixe descomentado apenas o componente que você deseja renderizar na tela:

```tsx
import UseMemo from './components/UseMemo';
// import ExemploCallback from './components/ExemploCallback';

function App() {
  return (
    <div>
      <UseMemo /> {/* Altere aqui para <ExemploCallback /> quando quiser trocar */}
    </div>
  );
}

export default App;

🛠️ Como Executar o Projeto Localmente
Clone o repositório:

Bash


Bash
cd usereducer-e-callback
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
npm run dev
Abre o navegador no endereço indicado pelo terminal (geralmente http://localhost:5173).