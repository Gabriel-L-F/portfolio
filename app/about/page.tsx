import style from "./page.module.css";
import Header from "@/components/Header";


export default function AboutPage() {
    return (
        <div className={`${style.bg}`}>
            <div className={`${style.content}`}>           
            <Header />
            <h1>
                About Me
            </h1>
            <p>
                J'ai fait un lycée générale avec comme spécialité Mathematique, Science de l'ingenieure et Numérique et Science de l'informatique dans 
                les quelles j'ai pue accérie les bases des matieres en question, apres l'optantion du BAC j'ai été faire une année dans a l'ESILV en bachelore 
                engenierie numérique spécialisé dans la cybersécurité, apres ma premiere année j'ai decidé de me reorienté a l'IIM en spécialité coding
                et digital inovation. 
            </p>
            <h2>
                Mes compétences
            </h2>
             <div className={`flex flex-col md:flex-row gap-12 mt-8 ${style.skills}`}>
                <div>
                    <h2 className="text-xl 2xl:text-3xl font-semibold mb-2">Hard Skills</h2>
                    <ul className="list-disc list-inside">
                    <li>HTML</li>
                    <li>SCSS</li>
                    <li>PHP</li>
                    <li>JAVASCRIPT</li>
                    <li>PYTHON</li>
                    <li>SQL</li>
                    <li>GIT</li>
                    <li>NODE.JS</li>
                    <li>TYPESCRIPT</li>
                    <li>NEXTJS</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl 2xl:text-3xl font-semibold mb-2">Soft Skills</h2>
                    <ul className="list-disc list-inside">
                    <li>Gestion de projet Agile</li>
                    <li>Acquisition de connaissances</li>
                    <li>Esprit critique</li>
                    <li>Compréhension d’autrui</li>
                    <li>Expression claire et efficace</li>
                    <li>Créativité</li>
                    <li>Cohésion en équipe</li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
}