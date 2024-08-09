"use client";

import React, { useEffect, useState } from "react";
import { Profile } from '@/components/Profile/index'; // Ajuste o caminho conforme necessário
import { About } from "@/components/About";
import { Experience } from "@/components/Experience/index";
import styles from './page.module.css';
import { Projects } from "@/components/Projects/index";
import { Certificates } from "@/components/Certificates";

import LogoMyCorte from '@/../public/assets/MyCorte.png';
import LogoSMI from '@/../public/assets/smi.png';
import LogoCordeirinho from '@/../public/assets/cordeiro.png';

import AmeCertificate from '@/../public/assets/certificates/ame.png';
import CleanArcCertiticate from '@/../public/assets/certificates/cleanArc.png';
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
            <div className={styles.highlight}  style={{ left: highlightStyle.left, top: highlightStyle.top }}></div>
            <Profile activeSection={activeSection} />
            <main className="mainContent">
                <section id="about">
                    <About/>
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
                        redirect="https://somosdevteam.com/SMI/login"
                    />  

                    <Projects 
                        title="MyCorte"
                        image={LogoMyCorte}
                        description="MyCorte é um sistema inovador de agendamento de horários voltado para barbearias e salões de beleza. Nosso objetivo é facilitar a gestão de horários, reduzir cancelamentos e aumentar a base de clientes fiéis, proporcionando uma experiência eficiente e agradável para clientes e profissionais. Utilizamos tecnologias modernas como PHP, Laravel, JavaScript e SpringBoot para desenvolver funcionalidades robustas como agendamentos, reagendamentos, criação de promoções, análise de desempenho e dashboards personalizáveis."
                        redirect="https://mycorte.somosdevteam.com/"
                    />

                    <Projects 
                        title="Cordeirinho Tv"
                        image={LogoCordeirinho}
                        description="Na Cordeirinhos TV, somos uma comunidade cristã comprometida não apenas em oferecer entretenimento infantil baseado na fé, mas também em transmitir os ensinamentos sagrados deixados por Deus.om 100% da nossa equipe composta por profissionais cristãos, priorizamos conteúdos que promovam valores como amor, compaixão e solidariedade familiar, protegendo as crianças das influências negativas do mundo."
                        redirect="https://somosdevteam.com/portfolio/cordeirinhostv/"
                    />
                </section>

                <section id="certificates">
                    <Certificates
                        title="Certificado de Reconhecimento"
                        description="Gostaria de expressar minha profunda gratidão por este ano de muito trabalho e aprendizado. É um prazer imenso fazer parte desta organização, e espero poder continuar contribuindo de forma significativa por muito mais tempo."
                        image={AmeCertificate}
                        links={[]}
                        technologies={["Redes", "VMware", "Zabbix", "Suporte"]}
                    />

                    <Certificates
                        title="PHP e Clean Architecture"
                        description="Aprenda o que é arquitetura de software,
                            Conheça padrões arquiteturais como Clean Architecture,
                            Saiba as vantagens de módulos,
                            Use padrões como Services, Entidades, Repositórios, entre outros e 
                            Entenda os casos de uso"
                        image={CleanArcCertiticate}
                        links={[
                            { href: "https://cursos.alura.com.br/certificate/57dd6a1c-a063-4ced-80f4-c89bf236f97a?lang", label: "Alura" }
                        ]}
                        technologies={["PHP", "Design Patterns", "Arquitetura Software", "POO"]}
                    />
              </section>

                <p className={styles.final}>
                    Projetado livremente em Figma e codificado em Visual Studio Code por mim. Construído com Next.js e Tailwind CSS.
                </p>
            </main>
        </div>
    );
}
