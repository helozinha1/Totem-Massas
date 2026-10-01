import React from 'react';

import styles from './CategoriaItem.module.css';

export default function CategoriaItem({
  categoria,
  categoriaSelecionada,
  executarComAtraso,
  setCategoriaSelecionada,
  getIconeCategoria
}) {
  const estaSelecionada =
    categoriaSelecionada === categoria.id;

  return (
    <button
      type="button"
      className={`${styles['categoria-item']} ${
        estaSelecionada ? styles['categoria-ativa'] : ''
      }`}
      onClick={() =>
        executarComAtraso(() =>
          setCategoriaSelecionada(categoria.id)
        )
      }
    >
      <span className={styles['categoria-icone']}>
        {getIconeCategoria(categoria.name)}
      </span>

      <span className={styles['categoria-nome']}>
        {categoria.name}
      </span>
    </button>
  );
}