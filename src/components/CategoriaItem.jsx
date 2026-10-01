import React from 'react';
import styles from './CategoriaItem.module.css';

export default function CategoriaItem({ categoria, categoriaSelecionada, executarComAtraso, setCategoriaSelecionada, getIconeCategoria }) {
  const estaSelecionada = categoriaSelecionada === categoria.id;

  return (
    <div
      className={`${styles['categoria-item']} ${estaSelecionada ? styles['categoria-ativa'] : ''}`}
      onClick={() => executarComAtraso(() => setCategoriaSelecionada(categoria.id))}
    >
      <span style={{ fontSize: '1.8rem', marginBottom: '4px' }}>
        {getIconeCategoria(categoria.name)}
      </span>
      {categoria.name}
    </div>
  );
}