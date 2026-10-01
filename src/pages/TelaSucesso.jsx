import React from 'react';
import styles from './TelaSucesso.module.css';

export default function TelaSucesso({ numeroPedido }) {
  return (
    <div className={styles["tela-splash"]}>
      <h1 className={styles["titulo-sucesso"]}>✅ Pedido Confirmado!</h1>
      <p className={styles["instrucao-sucesso"]}>Aguarde sua senha ser chamada no painel:</p>

      <div className={styles["numero-pedido"]}>
        #{numeroPedido}
      </div>

      <p className={styles["subtexto-sucesso"]}>Retire seu recibo abaixo.</p>
    </div>
  );
}