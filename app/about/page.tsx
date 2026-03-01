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
            J’ai effectué un lycée général avec comme spécialités Mathématiques, Sciences de l’ingénieur et Numérique et Sciences informatiques, dans lesquelles
             j’ai pu acquérir les bases des matières en question. Après l’obtention du baccalauréat, j’ai effectué une année à l’ESILV en bachelor Ingénierie numérique, 
             spécialisé en cybersécurité. Après cette première année, j’ai décidé de me réorienter vers l’IIM en spécialité Coding & Digital Innovation. 
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