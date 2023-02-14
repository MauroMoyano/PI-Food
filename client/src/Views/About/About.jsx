import {Link} from "react-router-dom";
import yo from "../../assets/kygro y MauroLink 2 (2).jpg"
import styled from "./About.module.css"

export default function About() {


    return (<>
        <div className={styled.divGral}>
    <div className={styled.cont}>
            <p>Mauro Moyano
                Frontend Developer | HTML, CSS, JavaScript, ReactJS, Redux,
                Argentina
                Extracto
                Mis habilidades y tecnologías que manejo son: JavaScript ReactJs Redux Node Espress PostgreSQL Ingles: intermedio Habilidades blandas- Adaptabilidad- Proactividad- Resolución de problemas- Amabilidad y buenas relaciones interpersonales- Ganas de continuar aprendiendoMe encuentro abierto a encarar nuevos proyectos para poder desempeñarme en nuevos desafíos que me permitan aportar y enriquecer mis conocimientos.
                Educación
                Henry
                Full stack developer, Tecnología de la información · (noviembre de2022 - marzo de 2023)
                Universidad Nacional de Santiago del Estero
                incompleto, Programación informática · (2007 - 2010)</p>
    </div>
            <img src={yo}/>
        </div>
    </>)
}