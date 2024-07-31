import styles from './profile.module.css';
import Image from 'next/image';
import GitHubIcon from './icons/github-brands-solid.svg';
import LinkedInIcon from './icons/linkedin-brands-solid.svg';
import InstagramIcon from './icons/instagram-brands-solid.svg';
import SiteIcon from './icons/earth-americas-solid.svg';
import BrazilIcon from './icons/brasil.svg';
import EuaIcon from './icons/eua.svg';

interface ProfileProps {
    activeSection: string;
}

export const Profile: React.FC<ProfileProps> = ({ activeSection }) => {
    return (
        <div className={styles.profile}>
            <div className={styles.profileInfo}>
                <h1>Gabriel Pereira</h1>
                <h2>Junior Software Engineer</h2>
                <p>Eu construo soluções eficientes e elegantes utilizando tecnologia.</p>
            </div>

            <div className={styles.profileNav}>
                <ul>
                    <li>
                        <a 
                            href="#about" 
                            className={activeSection === 'about' ? styles.active : ''}
                        >
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#experience" 
                            className={activeSection === 'experience' ? styles.active : ''}
                        >
                            EXPERIENCE
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#projects" 
                            className={activeSection === 'projects' ? styles.active : ''}
                        >
                            PROJECTS
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles.profileLinks}>
                <ul>
                    <li>
                        <a href="#">
                            <Image src={GitHubIcon} className='icon' alt='GitHub' width={20}/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Image src={LinkedInIcon} className='icon' alt='LinkedIn' width={20}/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Image src={InstagramIcon} className='icon' alt='Instagram' width={20}/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Image src={SiteIcon} className='icon' alt='Site' width={20}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
