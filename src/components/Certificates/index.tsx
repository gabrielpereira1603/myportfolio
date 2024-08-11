import { useState } from 'react';
import styles from './certificates.module.css';
import ArrowIcon from './icons/location-arrow-solid.svg';
import LinkIcon from './icons/link-solid.svg';
import Image, { StaticImageData } from 'next/image';

interface CertificateProps {
    title: string;
    description: string;
    image: StaticImageData;
    links: { href: string; label: string }[];
    technologies: string[];
}

export const Certificates: React.FC<CertificateProps> = ({
    title,
    description,
    image,
    links,
    technologies
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className={styles.certificates}>
            <div className={styles.image}>
                <Image
                    src={image}
                    alt={title}
                    layout="responsive"
                />
            </div>

            <div className={styles.infoCertificates}>
                <div className={styles.title}>
                    <h4>
                        <a>{title}</a>
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
    );
}
