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
              Je suis Gabriel Lefebvre Fristot, étudiant a l'institu de l'internet et du multimedia spécialisé dans le développement web, passionné 
              par la création d’applications web interactives et l’optimisation de l’expérience utilisateur, je m’intéresse particulièrement aux 
              technologies front-end et back-end.
              Au cours de ma formation, j’ai travaillé sur plusieurs projets scolaires, allant de sites web responsives à 
              des applications web dynamiques, ce qui m’a permis de développer mes compétences dans le web aussi bien dans les hard skills que les soft skills
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
