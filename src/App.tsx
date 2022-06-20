import { useState } from 'react';
import styles from './App.module.scss';
import powerImg from './assets/powered.png';
import leftArrowImg from './assets/leftarrow.png';
import { GridItem } from './components/GridItem';
import { levels, calculateImc, LevelProps } from './helpers/imc'

export function App() {
  const [ heightField, setHeightField ] = useState<number>(0);
  const [ weightField, setWeightField ] = useState<number>(0);
  const [ toShow, setToShow ] = useState<LevelProps | null>(null)

  function handleCalculateButton() {
    if (!heightField && !weightField) {
      alert("Preencha todos os campos");
      return;
    }
    setToShow(calculateImc(heightField, weightField));
  }

  function handleBackButton() {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return (
    <div>
      <header>
        <div className={styles.headerContainer}>
          <img src={powerImg} />
        </div>
      </header>
      <div className={styles.container}>
        
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde (OMS) para calcular o peso ideal de cada pessoa.</p>

          <input
            type="number"
            placeholder='Digite a sua altura. Ex: 1,5 (em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={(e)=>setHeightField(parseFloat(e.target.value))}
            step='0.1'
            disabled={ toShow ? true : false }
           />

          <input
            type="number"
            placeholder='Digite a seu Peso. Ex: 75,3 (em Kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={(e)=>setWeightField(parseFloat(e.target.value))}
            disabled={ toShow ? true : false }
           />

           <button
            onClick={handleCalculateButton}
            disabled={ toShow ? true : false }
          >Calcular</button>
        </div>

        { !toShow &&
          <div className={styles.rightSide}>
            <div className={styles.grid}>
              {levels.map((item, index)=>(
                <GridItem key={index} item={item}/>
              ))}
            </div>
          </div>
        }
        { toShow &&
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleBackButton}>
              <img src={leftArrowImg} width={25} />
            </div>
            <GridItem item={toShow}/>
          </div>
        }

      </div>
    </div>
  )
}

