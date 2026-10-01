import React from 'react';
import styles from './QuantidadeProduto.module.css';

export default function QuantidadeProduto({ 
  produtoAtivo, variacaoSelecionada, quantidade, setQuantidade, 
  executarComAtraso, setVariacaoSelecionada, setProdutoAtivo, adicionarAoCarrinho 
}) {
  const ehImagem =
    typeof produtoAtivo?.image === 'string' &&
    (/\.(png|jpe?g|webp|svg|gif)(\?.*)?$/i.test(produtoAtivo.image) ||
      produtoAtivo.image.startsWith('data:image') ||
      produtoAtivo.image.startsWith('/') ||
      produtoAtivo.image.includes('static') ||
      produtoAtivo.image.includes('assets'));

  const precoTotal = (produtoAtivo.price + (variacaoSelecionada?.preco || 0)) * quantidade;

  return (
    <div className={styles["quantity-container"]}>
      <button 
        className={styles["btn-voltar-inline"]} 
        onClick={() => executarComAtraso(() => setVariacaoSelecionada(null))}
      >
        ← Voltar
      </button>

      <h2 className={styles["titulo-produto"]}>
        {produtoAtivo.name} ({variacaoSelecionada?.nome})
      </h2>

      <div className={styles["produto-img-container"]}>
        {ehImagem ? (
          <img
            src={produtoAtivo.image}
            alt={produtoAtivo.name}
            className={styles["img-item"]}
          />
        ) : (
          <span className={styles["emoji-item"]}>{produtoAtivo.image}</span>
        )}
      </div>

      <div className={styles["quantity-controls"]}>
        <button 
          className={styles["btn-qty"]} 
          onClick={() => setQuantidade(Math.max(1, quantidade - 1))}
        >
          -
        </button>
        <span className={styles["qty-display"]}>{quantidade}</span>
        <button 
          className={styles["btn-qty"]} 
          onClick={() => setQuantidade(quantidade + 1)}
        >
          +
        </button>
      </div>

      <h2 className={styles["valor-total"]}>
        Total: R$ {precoTotal.toFixed(2).replace('.', ',')}
      </h2>

      <div className={styles["quantity-actions"]}>
        <button 
          className={styles["btn-cancelar"]} 
          onClick={() => executarComAtraso(() => { setProdutoAtivo(null); setVariacaoSelecionada(null); })}
        >
          Cancelar
        </button>
        <button className={styles["btn-adicionar"]} onClick={adicionarAoCarrinho}>
          Adicionar ao Pedido
        </button>
      </div>
    </div>
  );
}