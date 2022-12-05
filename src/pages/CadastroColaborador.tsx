import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './Form.module.css'
import { useForm } from 'react-hook-form'

export function CadastroColaborador(){
    const [reload, setReload] = useState('');

    const {register, handleSubmit, setValue} = useForm();

    const checkCEP = (e:any) => {
        const cep = e.target.value.replace(/\D/g, '');
        if(cep !== ''){
            console.log(cep)
            fetch('https://brasilapi.com.br/api/cep/v1/'+cep)
                .then(res => res.json()).then(data => {
                console.log(data.street);
                setValue('estado', data.state)
                setValue('cidade', data.city)
                setValue('bairro', data.neighborhood)
                setValue('rua', data.street)
            })
        }
        else{
            setValue('estado', '')
            setValue('cidade', '')
            setValue('bairro', '')
            setValue('rua', '')
        }
    }
    return(
        <div className={styles.div}>
            <h1>Cadastro Colaborador</h1>
            <br/>
            <form onSubmit={()=>setReload('')} action="">
                <input className={styles.input} type="text" placeholder="Nome"/>
                <br/><br/>
                <input className={styles.input} type="text" placeholder="Cargo"/>
                <br/><br/>
                <input className={styles.input} type="text" placeholder="Setor na empresa"/>
                <br/><br/>
                <input className={styles.input} type="text" placeholder="Setor de atuação"/>
                <br/><br/>
                <span>Data de admissão</span>
                <br/><br />
                <input className={styles.input} type="date"/>
                <br/><br/>
                <input className={styles.input} type="number" placeholder="Telefone"/>
                <br/><br/>
                <input className={styles.input} type="email" placeholder="Email"/>
                <br/><br/>
                <input className={styles.input} type="text" placeholder="CEP" onBlur={checkCEP}/>
                <br/><br/>
                <input className={styles.input} type="text" {...register("estado")} placeholder="Estado"/>
                <br/><br/>
                <input className={styles.input} type="text" {...register("cidade")} placeholder="Cidade"/>
                <br/><br/>
                <input className={styles.input} type="text" {...register("bairro")} placeholder="Bairro"/>
                <br/><br/>
                <input className={styles.input} type="text" {...register("rua")} placeholder="Rua"/>
                <br/><br/>
                <input className={styles.input} type="text" {...register("Numero")} placeholder="Número"/>
                <br/><br/>
                <br/><br/>
                <button type='submit' className={styles.button}>Enviar</button>
            </form>
            <script type="text/javascript" src="js/cep.js"></script>
        </div>
    )
}