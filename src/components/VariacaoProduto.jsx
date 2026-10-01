import React from 'react';
import styles from './VariacaoProduto.module.css';
import ProdutoCard from './ProdutoCard';

export default function VariacaoProduto({ produtoAtivo, selecionarVariacao, executarComAtraso, setProdutoAtivo }) {
  return (
    <div className={styles["options-container"]}>
      <button 
        className={styles["btn-voltar-inline"]} 
        onClick={() => executarComAtraso(() => setProdutoAtivo(null))}
      >
        ← Voltar
      </button>

      <h2>Escolha o tamanho da porção:</h2>

      <div className={styles["produtos-grid"]}>
        {produtoAtivo.category?.name?.toLowerCase().includes('massa') ? (
          <>
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Individual', 0)}
              nomeOpcao="Individual"
            />
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Para 2 Pessoas', 12.00)}
              nomeOpcao="Para 2 Pessoas"
              precoExtra={12.00}
            />
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Família (4 Pessoas)', 25.00)}
              nomeOpcao="Família (4 Pessoas)"
              precoExtra={25.00}
            />
          </>
        ) : produtoAtivo.category?.name?.toLowerCase().includes('bebida') ? (
          <>
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Lata 350ml', 0)}
              nomeOpcao="Lata 350ml"
            />
            <ProdutoCard
              produto={produtoAtivo}
              onClick={() => selecionarVariacao('Jarra 1L', 8.00)}
              nomeOpcao="Jarra 1L"
              precoExtra={8.00}
            />
          </>
        ) : (
          <ProdutoCard
            produto={produtoAtivo}
            onClick={() => selecionarVariacao('Porção Padrão', 0)}
            nomeOpcao="Porção Padrão"
          />
        )}
      </div>
    </div>
  );
}