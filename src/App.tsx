import { useState } from 'react';
import styles from './App.module.scss';
import powerImg from './assets/powered.png';

export function App() {
  const [ heightField, setHeightField ] = useState<number>(0);
  const [ weightField, setWeightField ] = useState<number>(0);

  function handleCalculateButton() {
    if (!heightField && !weightField) {
      alert("Preencha todos os campos");
      return;
    }

    alert('Passou');

  }

  return (
    <div>
      <header>
        <div className={styles.headerContainer}>
          <img src={powerImg} alt="" />
        </div>
      </header>
      <div className={styles.container}>
        
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde (OMS) para calcular o peso ideal de cada pessoa.</p>

          <input
            type="number"
            placeholder='Digite a sua altura. Ex: 1.5 (em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={(e)=>setHeightField(parseFloat(e.target.value))}
           />

          <input
            type="number"
            placeholder='Digite a seu Peso. Ex: 75.3 (em Kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={(e)=>setWeightField(parseFloat(e.target.value))}
           />

           <button onClick={handleCalculateButton}>Calcular</button>
        </div>

        <div className={styles.rightSide}>
          ...
        </div>

      </div>
    </div>
  )
}

