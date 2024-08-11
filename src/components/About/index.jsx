import styles from './about.module.css'
import Image from 'next/image';

export const About = () => {
    return(
        <div className={styles.about}>
            <div className={styles.responsiveText}>
                <a href="#about">ABOUT</a>
            </div>
            <p>
                Minha história com a tecnologia teve início aos meus 09 anos de idade. Após uma fase difícil da minha
                vida, meu meio de refúgio foi o computador.
            </p>
            <br/>
            <p>
                Então, devido à necessidade e à falta de recursos, inúmeros problemas relacionados ao computador eu
                mesmo tive que acabar resolvendo.

                Com isso, fui desenvolvendo um amor por tecnologia e, desde então, sempre disse que iria trabalhar com
                isso.
            </p>
            <br/>
            <p>
                Quando terminei o ensino médio, recebi a oportunidade de morar em outra cidade para estudar e trabalhar.
                Para minha surpresa, me ofereceram um curso de Análise e Desenvolvimento de Sistemas. A partir disso,
                comecei a me envolver com programação e adquiri um amor por entender como tudo isso funciona.
            </p>
            <br/>
            <p>
                E aqui estou eu, tendo a oportunidade de trabalhar com algo pelo qual sou apaixonado. Afinal,
                já dizem: “trabalhe com algo que ama e nunca terá que trabalhar”.
            </p>
            <br/>
        </div>
    )
}
