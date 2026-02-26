import Header from "@/components/Header";
import ProjectsGrid from "@/components/ProjectsGrid";
import style from "./page.module.css";

export default function ProjectsPage() {
  return (
    <div className={style.bg}>
      <div className={style.header}>
        <Header />
      </div>
      <div className={style.content}>
        <ProjectsGrid />
      </div>
    </div>
  );
}