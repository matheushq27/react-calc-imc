import styles from './App.module.css'
import powered from './assets/powered.png'
import leftArrowImage from './assets/leftarrow.png'
import { useState } from 'react'
import { levels, calculaImc } from './helpers/imc.js'
import GridItem from './components/GridItem'

const App = ()=>{
  const [heightField, setHeightField] = useState(0)
  const [weightField, setweightField] = useState(0)
  const [toShow, setToShow] = useState(null)

  const handleCalculateButton = () =>{
    if(heightField && weightField){
      setToShow(calculaImc(heightField, weightField))
    }else{
      alert('Digite todos os campos')
    }
  }

  const handleBackButton = ()=>{
    setToShow(null)
    setHeightField(0)
    setweightField(0)
  }

  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={powered} width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>
            IMC é a sigla para o índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde
            para calcular o pesoa ideal de cada pessoa.
          </p>

          <input disabled={toShow ? true : false} type="number" 
          placeholder="Digite a sua altura. Ex: 1.5 (em métros)" 
          value={heightField > 0 ? heightField : ''} onChange={e=>setHeightField(parseFloat(e.target.value))}/>

          <input disabled={toShow ? true : false} type="number" 
          placeholder="Digite o seu peso. Ex: 75.5 (em kg)" 
          value={weightField > 0 ? weightField : ''} onChange={e=>setweightField(parseFloat(e.target.value))}/>

          <button disabled={toShow ? true : false} onClick={handleCalculateButton}>Calcular</button>

        </div>
        <div className={styles.rightSide}>
          {!toShow &&
          <div className={styles.grid}>
            {levels.map((item, key)=>(
              <GridItem key={key} title={item.title} bg={item.color} icon={item.icon} imc={item.imc} />
            ))}
          </div>
          }
          {toShow &&
           <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25} />
              </div>
              <GridItem title={toShow.title} bg={toShow.color} icon={toShow.icon} imc={toShow.imc} yourImc={toShow.yourImc}/>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App;