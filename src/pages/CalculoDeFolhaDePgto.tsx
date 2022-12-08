import { useState } from 'react';
import styles from './Form.module.css'

export function CalculoDeFolhaDePgto() {
    const [salarioBruto, setSalarioBruto] = useState(0);
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
            <h1>Calculo de folha de pagamento</h1>
            <br/>
            <input className={styles.input} type="text" placeholder="Nome do colaborador"/>
            <br/><br/>
            <input className={styles.input} type="number" placeholder="Salario Bruto" onChange={(event) => setSalarioBruto(event.target.value)}/>
            <br/><br/>
            <button className={styles.button} onClick={() => calcularAliquota()}>Calcular</button>
            <br/><br/>
            <h2>Resultado:</h2>
            <br/>
            <span>Desconto de VT 6%:</span>
            <p>R${(salarioBruto*0.06).toFixed(3)}</p>
            <span>Desconto de INSS (de acordo com alíquota do salario):</span>
            <p>R${aliquota.toFixed(3)}</p>
            <span>Desconto de Adiantamento Salarial (Vale) 30%:</span>
            <p>R${(salarioBruto*0.3).toFixed(3)}</p>
            <span>Campo somatório de todos os descontos:</span>
            <p>R${((salarioBruto*0.36)+aliquota).toFixed(3)}</p>
            <span>Salário liquido:</span>
            <p>R${(salarioBruto-(salarioBruto*0.36)-aliquota).toFixed(3)}</p>
        </div>
    )
}