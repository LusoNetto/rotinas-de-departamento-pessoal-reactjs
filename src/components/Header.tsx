import styles from './Header.module.css'
import Logo from '../assets/Logo.svg';
import logoLight from '../assets/logoLight.png';

export function Header() {
    return(
        <section className={styles.header}>
            <a href="#/" className={styles.logoETextoNewgo}>
                <img className={styles.logo} src={Logo} alt="Logo NewGo"/>
                <img className={styles.textoLogo} src={logoLight} alt="Texto NewGo"/>
            </a>
            <div className={styles.menuSection}>
                <nav className={styles.dropdownMenu}>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/#contatos">Contatos</a></li>
                        <li><a href="/#quemSomos">Quem Somos?</a></li>
                        <li><a>Cadastros</a>
                            <ul>
                                <li><a href="/cadastroUsuario"> Cadastro Usuario</a></li>
                                <li><a href="/cadastroColaborador"> Cadastro Colaborador</a></li>
                            </ul>
                        </li>
                        <li><a>Cálculos ADM</a>
                            <ul>
                                <li><a href="/CalculoDeFolhaDePgto">Calculo de Folha de pgto</a></li>
                                <li><a href="/CalculoDeFerias">Calculo de Férias</a></li>
                                <li><a href="/CalculoDe13oSalario">Calculo de 13o salario</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}