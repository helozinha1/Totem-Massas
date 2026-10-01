import React from 'react';
import styles from './ProdutoCard.module.css';

export default function ProdutoCard({ produto, onClick, nomeOpcao, precoExtra, iconeVisual, fontSize }) {
  const precoCalculado = produto.price + (precoExtra || 0);
  const nomeExibicao = nomeOpcao || produto.name;
  const imagemExibicao = iconeVisual || produto.image;


  const ehImagem =
    typeof imagemExibicao === 'string' &&
    (/\.(png|jpe?g|webp|svg|gif)(\?.*)?$/i.test(imagemExibicao) ||
      imagemExibicao.startsWith('data:image') ||
      imagemExibicao.startsWith('/'));

  return (
    <div className={styles["produto-card"]} onClick={onClick}>
      <div className={styles["produto-img"]} style={fontSize ? { fontSize } : {}}>
        {ehImagem ? (
          <img
            src={imagemExibicao}
            alt={nomeExibicao}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          imagemExibicao
        )}
      </div>
      <h3>{nomeExibicao}</h3>
      <p>R$ {precoCalculado.toFixed(2).replace('.', ',')}</p>
    </div>
  );
}