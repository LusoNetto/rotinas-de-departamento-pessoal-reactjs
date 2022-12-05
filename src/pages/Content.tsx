import { ScrollParallax } from "react-just-parallax";
import styles from './Content.module.css'
import Stars from '../assets/stars.png'
import Moon from '../assets/moon.png';
import MountainsBehind from '../assets/mountainsBehind.png';
import MountainsFront from '../assets/mountainsFront.png';
import Email from '../assets/email.svg';
import Whatsapp from '../assets/whatsapp.png';
import Facebook from '../assets/facebook.svg';
import Instagram from '../assets/instagram.svg';
import Linkedin from '../assets/linkedin.svg';

export function Content() {
    return(
    <div>
        <section className={styles.section}>
            <ScrollParallax strength={-.3} isAbsolutelyPositioned={true} lerpEase={1}>
            <img src={Stars} alt="stars" id="stars"/>
            </ScrollParallax>
            <img style={{position:'fixed'}} className={styles.moon} src={Moon} alt="moon" id="moon"/>
            <ScrollParallax strength={.3} isAbsolutelyPositioned={true} lerpEase={1}>
            <img className={styles.mountainsBehind} src={MountainsBehind} alt="mountains_behind" id="mountains_behind"/>
            </ScrollParallax>
            <h2 className={styles.text} id="text">NewGo Technology</h2>
            <a className={styles.btn} href="#quemSomos" id="btn">Explorar</a>
            <img className={styles.mountainsFront} src={MountainsFront} alt="mountains_front" id="mountains_front"/>
        </section>
        <div className={styles.quemSomos} id="quemSomos">
            <h2>Quem Somos?</h2>
            <p>Somos a NewGo, uma empresa com visão inovadora, com a missão de projetar e desenvolver as melhores soluções de software para nossos clientes. Trabalhamos com desenvolvimento de sistemas sob medida: web, móvel e desktop. Nossos especialistas em Inteligência Artificial, Visão Computacional, Segurança de Sistemas e Teste de Software contribuem para nossos valores de excelência nos serviços que disponibilizamos neste segmento.</p>
            <p>Com total confiabilidade, desenvolvemos a sua ideia para proporcionar as melhores soluções sob medida para o seu projeto.</p>
        </div>
        <div className={styles.contatos} id="contatos">
            <h2>Contatos</h2>
            <div className={styles.redesSocias}>
                <p>Telefone: +55 (11) 93298-9996</p>
                <p>Email: contato@newgo.com.br</p>
                <p><a href="mailto:contato@newgo.com.br"><img className={styles.image} src={Email} alt="email"/></a></p>
                <p><a href="https://api.whatsapp.com/send?phone=5511932989996&text=Ol%C3%A1!%20Tudo%20bem%3F"><img className={styles.image} src={Whatsapp} alt=""/></a></p>
                <p><a href="https://www.facebook.com/newgotecnologia"><img className={styles.image} src={Facebook} alt=""/></a></p>
                <p><a href="https://www.instagram.com/newgotecnologia/"><img className={styles.image} src={Instagram} alt=""/></a></p>
                <p><a href="https://www.linkedin.com/company/newgotecnologia/"><img className={styles.image} src={Linkedin} alt=""/></a></p>
            </div>
        </div>
    </div>
    )
}