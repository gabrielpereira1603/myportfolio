import styles from './projects.module.css'
import ArrowIcon from './icons/location-arrow-solid.svg'
import LinkIcon from './icons/link-solid.svg'
import Image, { StaticImageData } from 'next/image';

interface ProjectsProps {
    title: string;
    image: StaticImageData;
    description: string;
}

export const Projects: React.FC<ProjectsProps> = ({
    title,
    image,
    description
}) => {
    return (
        <div className={styles.projects}>
            <div className={styles.image}>
                <Image
                    src={image}
                    alt={title}
                    layout="responsive" // Torna a imagem fluida
                />
            </div>
            
            <div className={styles.infoProject}>
                <div className={styles.title}>
                    <h4>
                        <a href="#">{title}</a>
                    </h4>
                    <Image src={ArrowIcon} className={styles.icon} alt="Ir" width={10} />
                </div>
                <div className={styles.body}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
