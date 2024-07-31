import styles from './experience.module.css'
import ArrowIcon from './icons/location-arrow-solid.svg'
import LinkIcon from './icons/link-solid.svg'

import Image from 'next/image';


interface ExperienceProps {
    timePeriod: string;
    title: string;
    company: string;
    description: string;
    companyLink: string;
    technologies: string[];
    links: { href: string; label: string }[];
}

export const Experience: React.FC<ExperienceProps> = ({
    timePeriod,
    title,
    company,
    description,
    companyLink,
    technologies,
    links,
}) => {
    return (
        <div className={styles.experience}>
            <div className={styles.time}>
                <small>{timePeriod}</small>
            </div>
            
            <div className={styles.infoExperience}>
                <div className={styles.title}>
                    <h4>
                        <a href="#">{title}, {company}</a>
                    </h4>
                    <Image src={ArrowIcon} className={styles.icon} alt="Ir" width={10} />
                </div>
                <div className={styles.body}>
                    <p>{description}</p>
                </div>
                <div className={styles.links}>
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}>
                                <Image src={LinkIcon} alt="Link" width={20} />
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.technology}>
                    <ul>
                        {technologies.map((tech, index) => (
                            <li key={index}>
                                <a href="#">{tech}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
