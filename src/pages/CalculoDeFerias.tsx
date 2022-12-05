import { useState } from 'react'
import styles from './Form.module.css'

export function CalculoDeFerias(){
    const [salarioBruto, setSalarioBruto] = useState(0)
    const [mediaHorasExtras, setMediaHorasExtras] = useState(0)
    const [diasAUsufruirDeFerias, setDiasAUsufruirDeFerias] = useState(0)
    return(
        <div className={styles.div}>
            <h1>Calculo de Férias</h1>
            <br/>
            <input className={styles.input} type="text" placeholder="Nome do colaborador"/>
            <br/><br/>
            <input className={styles.input} type="number" placeholder="Salario Bruto" onChange={(event) => setSalarioBruto(parseFloat(event.target.value))}/>
            <br/><br/>
            <input className={styles.input} type="number" placeholder="Média de hora extras dos 12 meses" onChange={(event) => setMediaHorasExtras(parseFloat(event.target.value))}/>
            <br/><br/>
            <input className={styles.input} type="number" placeholder="Quantidade de dias a usufruir de férias" onChange={(event) => setDiasAUsufruirDeFerias(parseFloat(event.target.value))}/>
            <br/><br/>
            <button className={styles.button} onClick={() => calcularAliquota()}>Calcular</button>
            <br/><br/>
            <h2>Resultado:</h2>
            <br/>
            <span>Valor base de férias</span>
            <p>R${(((salarioBruto+mediaHorasExtras)/30)*diasAUsufruirDeFerias).toFixed(3)}</p>
            <span>Valor do terço de férias</span>
            <p>R${(((salarioBruto+mediaHorasExtras)/30)*diasAUsufruirDeFerias/3).toFixed(3)}</p>
            <span>Valor total a receber de férias</span>
            <p>R${((((salarioBruto+mediaHorasExtras)/30)*diasAUsufruirDeFerias)+(((salarioBruto+mediaHorasExtras)/30)*diasAUsufruirDeFerias)/3).toFixed(3)}</p>
        </div>
    )
}