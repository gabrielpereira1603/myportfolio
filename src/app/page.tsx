"use client";

import React, { useEffect, useState } from "react";
import { Profile } from '@/components/Profile/index'; // Ajuste o caminho conforme necessário
import { About } from "@/components/About";
import { Experience } from "@/components/Experience/index";
import styles from './page.module.css';
import { Projects } from "@/components/Projects/index";

import LogoSMI from '@/../public/assets/smi.png';
import Image from "next/image";

export default function Home() {
    const [activeSection, setActiveSection] = useState<string>('main');
    const [highlightStyle, setHighlightStyle] = useState({ left: 0, top: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Atualiza as coordenadas com base na posição de rolagem atual
            const x = e.clientX + window.scrollX;
            const y = e.clientY + window.scrollY;
    
            setHighlightStyle({
                left: x,
                top: y
            });
        };
    
        // Adiciona o evento de movimentação do mouse ao documento inteiro
        document.addEventListener('mousemove', handleMouseMove as EventListener);
    
        return () => {
            // Remove o evento quando o componente for desmontado
            document.removeEventListener('mousemove', handleMouseMove as EventListener);
        };
    }, []);


    useEffect(() => {
        const sections = document.querySelectorAll('main section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="container">
            <div className={styles.highlight} style={{ left: highlightStyle.left, top: highlightStyle.top }}></div>
            <Profile activeSection={activeSection} />
            <main className="mainContent">
                <section id="about">
                    <About />
                </section>
                <section id="experience">
                    <Experience 
                        timePeriod="2024 - PRESENT" 
                        title="Junior Software Engineer" 
                        company="AME-SFS" 
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget lacus vitae massa tempus consectetur. Proin et purus ut ligula facilisis convallis. Nunc volutpat, dolor et cursus..." 
                        companyLink="https://somosdevteam.com" 
                        technologies={["PHP", "JavaScript", "Laravel"]} 
                        links={[
                            { href: "https://github.com/username", label: "GitHub" },
                            { href: "https://linkedin.com/in/username", label: "LinkedIn" }
                        ]}
                    />
                    <Experience 
                        timePeriod="2022 - 2024" 
                        title="Intern Software Engineer" 
                        company="Tech Solutions" 
                        description="Worked on several internal tools and automation projects, gaining experience in various programming languages and frameworks." 
                        companyLink="https://techsolutions.com" 
                        technologies={["Python", "Django", "React"]} 
                        links={[
                            { href: "https://github.com/username", label: "GitHub" },
                            { href: "https://linkedin.com/in/username", label: "LinkedIn" }
                        ]}
                    />
                </section>
                <section id="projects">
                    <Projects 
                        title="Sistema de Manutenção Integrado"
                        image={LogoSMI}
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Soluta qui voluptates facilis minus deleniti veritatis totam nulla omnis, 
                        odit explicabo velit quasi laudantium earum porro laborum accusantium delectus harum adipisci?"
                    />  
                </section>

                <p className={styles.final}>
                    Projetado livremente em Figma e codificado em Visual Studio Code por mim. Construído com Next.js e Tailwind CSS.
                </p>
            </main>
        </div>
    );
}
