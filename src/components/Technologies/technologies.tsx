import React from 'react';
import styles from './technologies.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import CssLogo from './icons/css.png';
import HtmlLogo from './icons/html.png';
import JsLogo from './icons/js.png';
import ReactLogo from './icons/react.webp';
import AngularLogo from './icons/angular.png';
import LaravelLogo from './icons/laravel.png';
import PhpLogo from './icons/php.png';

import Image from 'next/image';

export const Technologies = () => {
    return (
        <div className={styles.technologies}>
                <Image src={CssLogo} alt="CSS" className={styles.logo}/>
                <Image src={HtmlLogo} alt="HTML" className={styles.logo}/>
                <Image src={JsLogo} alt="JavaScript" className={styles.logo}/>
                <Image src={ReactLogo} alt="React" className={styles.logo}/>
                <Image src={AngularLogo} alt="Angular" className={styles.logo}/>
                <Image src={LaravelLogo} alt="Laravel" className={styles.logo}/>
                <Image src={PhpLogo} alt="PHP" className={styles.logo}/>
        </div>
    );
};
