import { useState } from 'react';
import styles from './Form.module.css'

export function CadastroUsuario(){
    const [reload, setReload] = useState('');
    return(
        <div className={styles.div}>
            <form onSubmit={()=>setReload('')}>
                <h1>Cadastro Usuario</h1>
                <br/>
                <input className={styles.input} type="text" placeholder="Nome"/>
                <br/><br/>
                <input className={styles.input} type="password" placeholder="Senha"/>
                <br/><br/>
                <button type='submit' className={styles.button}>Enviar</button>
            </form>
        </div>
    )
}