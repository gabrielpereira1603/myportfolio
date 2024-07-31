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
                        timePeriod="2023 - PRESENT" 
                        title="Computer Technician" 
                        company="AME-SFS" 
                        description="Na área de TI, supervisiono o sistema de impressão e gerencio servidores para garantir operações eficientes. 
                        Fornecendo suporte técnico e desenvolvendo soluções automatizadas, meu objetivo é otimizar a eficiência tecnológica da empresa." 
                        companyLink="https://amesfs.com.br/" 
                        technologies={["Infraestrutura", "Servidores", "Linux", "Redes"]} 
                        links={[
                            { href: "https://amesfs.com.br/", label: "AME-SFS" }
                        ]}
                    />
                    <Experience 
                        timePeriod="2023 - PRESENT" 
                        title="FullStack Junior Developer" 
                        company="Somos Devs Corporation" 
                        description="Como desenvolvedor web fico responsavel por densevolver landing pages e aplicações web.
                        fico responsável desde o front end ate o back end.
                        Sempre procurando desenvolver códigos limpos e utilizando padrões de projetos, 
                        focando sempre na facilidade de entendimentodo escalabilidade do código." 
                        companyLink="https://somosdevteam.com/" 
                        technologies={["CSS", "HTML", "PHP", "Java"]} 
                        links={[
                            { href: "Somos Dev's", label: "LinkedIn" }
                        ]}
                    />
                </section>
                <section id="projects">
                    <Projects 
                        title="Sistema de Manutenção Integrado"
                        image={LogoSMI}
                        description="Projeto desenvolvido para o Centro Universitário de Santa Fé do Sul - UNIFUNEC como trabalho de conclusão de curso. 
                        Nesse sistema foi utilizado PHP puro para fazer todo o gerenciamento de rotas, middlewares, sessões, request e response.
                        Para algumas funções do sistema foi utilizado uma API SpringBoot.
                        Atualmente o sistema se encontra ar sendo hospedado na Hostigator.
                        O sistema conta com gerenciamento de Ordens de Serviço(O.S), 
                        gerenciamento de usuários, geração de relatórios com a opção de download em PDF, 
                        Dashboards personalizados e gerenciamento de equipamentos da universidade.

                        Atualmente estou trabalhando para fazer a migração do projeto para uma arquitetura de software mais limpa, utilizando Clean Architecture, Conceitos S.O.L.I.D e TDD(Test-driven development) Desenvolvimento guiado por testes."
                    />  
                </section>

                <p className={styles.final}>
                    Projetado livremente em Figma e codificado em Visual Studio Code por mim. Construído com Next.js e Tailwind CSS.
                </p>
            </main>
        </div>
    );
}
