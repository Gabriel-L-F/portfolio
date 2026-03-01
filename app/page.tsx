import Image from "next/image";
import style from "./home.module.css";
import Header from "@/components/Header";


export default function Home() {
  return (
    <div className={`${style.bg}`}>
      <Header />
      <main className={`${style.main} flex  items-center`}>
        <div className={`${style.heroSection}`}>
          <div className={`${style.container}`}>
            <p className={`${style.p}`}>
            Je suis Gabriel Lefebvre Fristot, étudiant à l’Institut de l’Internet et du Multimédia, spécialisé en développement web. Passionné par la création
            d’applications web interactives et l’optimisation de l’expérience utilisateur, je m’intéresse particulièrement aux technologies front-end et back-end.
            Au cours de ma formation, j’ai travaillé sur plusieurs projets scolaires, allant de sites web responsives à des applications web dynamiques,
            ce qui m’a permis de développer mes compétences dans le domaine du web, tant sur le plan des hard skills que des soft skills.            
            </p>   
          </div>
            <Image
                  src="/photo-pro.png"
                  width={300}   
                  height={300}
                  alt="Gabriel Lefebvre Fristot"
                  className={`${style.photoPro}`}      
            />
        </div>
      </main>
    </div>
  );
}
