"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { projects } from "@/data/projectsData";

export default function ProjectsGrid() {
  const router = useRouter();
  const pathname = usePathname();

  const slugFromUrl = pathname.split("/")[2] ?? null;
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  useEffect(() => {
    setOpenSlug(slugFromUrl);
  }, [slugFromUrl]);

  const handleClick = (slug: string) => {
    if (openSlug === slug) {
      router.push("/projects", { scroll: false });
    } else {
      router.push(`/projects/${slug}`, { scroll: false });
    }
  };

  return (
    <div className="grid gap-8">
      {projects.map((project) => {
        const isOpen = openSlug === project.slug;

        return (
          <div
            key={project.slug}
            onClick={() => handleClick(project.slug)}
            className={`
              cursor-pointer p-6 bg-white rounded-xl transition-all duration-300
              ${isOpen ? "shadow-2xl scale-[1.02]" : "shadow hover:shadow-lg"}
            `}
          >
            <h2 className="text-2xl font-semibold">{project.title}</h2>

            <p className="mt-2 text-gray-600">
              {project.description}
            </p>

            {isOpen && (
              <div className="mt-6 space-y-4">
                
                <p className="text-gray-800">
                  {project.details}
                </p>

                <div>
                  <p className="font-semibold">Technologies :</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-gray-100 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-block mt-3 text-blue-600 underline"
                  >
                    Voir sur GitHub
                  </a>
                )}

              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}