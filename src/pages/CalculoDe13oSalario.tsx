import { useState } from 'react';
import styles from './Form.module.css'

export function CalculoDe13oSalario() {
    const [salarioBruto, setSalarioBruto] = useState(0);
    const [qtdMesesTrabalhados, setQtdMesesTrabalhados] = useState(0);
    const [aliquota, setAliquota] = useState(0);
    function calcularAliquota() {
        if(salarioBruto<=1212){
            setAliquota(salarioBruto*0.07)
        }
        else if(salarioBruto>=1212.01 && salarioBruto<=2427.35){
            setAliquota(((salarioBruto - 1212.01) * 0.09) + 90.9)
        }
        else if(salarioBruto>=2427.36 && salarioBruto<=3641.03){
            setAliquota(((salarioBruto - 2427.36) * 0.12) + 200.28)
        }
        else if(salarioBruto>=3641.04 && salarioBruto<=7087.22){
            setAliquota(((salarioBruto - 3641.04) * 0.14) + 345.92)
        }
        else{
            setAliquota(828.38)
        }
    }
    return(
        <div className={styles.div}>
            <h1>Calculo 13º Salário</h1>
            <br/>
            <input className={styles.input} type="text" placeholder="Nome do colaborador"/>
            <br/><br/>
            <input className={styles.input} type="number" placeholder="Salario Bruto" onChange={(event) => setSalarioBruto(parseFloat(event.target.value))}/>
            <br/><br/>
            <input className={styles.input} type="number" placeholder="Quantidade de meses trabalhados no ano" onChange={(event) => setQtdMesesTrabalhados(parseFloat(event.target.value))}/>
            <br/><br/>
            <button className={styles.button} onClick={() => calcularAliquota()}>Calcular</button>
            <br/><br/>
            <h2>Resultado:</h2>
            <br/>
            <span>Valor da 1a parcela</span>
            <p>R${(((salarioBruto/12)*qtdMesesTrabalhados)/2).toFixed(3)}</p>
            <span>Valor da 2a parcela</span>
            <p>R${((((salarioBruto/12)*qtdMesesTrabalhados)/2)-aliquota).toFixed(3)}</p>
        </div>
    )
}