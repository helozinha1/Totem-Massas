import React from 'react';
import { useNavigate } from 'react-router-dom';
import banner from '../assets/img/Totem/Banner/banner.png';
import styles from './TelaSplash.module.css';

export default function TelaSplash({ executarComAtraso }) {
  const navegar = useNavigate();

  return (
    <div className={styles["tela-splash"]} onClick={() => executarComAtraso(() => navegar('/menu'))}>
      {/* Imagem natural em tamanho total sem cortes */}
      <img src={banner} alt="Promoção Banner" className={styles["banner-img"]} />

      {/* Card Flutuante Estilo Totem KFC */}
      <div className={styles["card-totem-kfc"]}>
        <div className={styles["icone-mao"]}>
          <i className="fas fa-hand-pointer"></i>
        </div>

        <div className={styles["texto-comecar"]}>
          TOQUE PARA<br />COMEÇAR
        </div>

        <div className={styles["bolinha-bandeira"]}>
          <span role="img" aria-label="Brasil">🇧🇷</span>
        </div>
      </div>
    </div>
  );
}