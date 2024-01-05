import { WebProjectsList } from "@/constants";
import Link from "next/link";

export const ProjectsSection = () => {
  return (
    <main className="w-full min-h-screen py-20">
      <p className="font-bold text-3xl mb-5">
        Academic & Personal Web Projects
      </p>
      <div className="grid sm:grid-cols-2 gap-10">
        {WebProjectsList.map((project) => (
          <div key={project.name} className="flex flex-col gap-5">
            <Link
              href={project.path}
              target="_blank"
              className="relative overflow-clip flex flex-col items-center justify-center border w-full h-[400px] rounded-md shadow-xl hover:-translate-y-1 duration-150 ease-in-out"
            >
              <img
                className="relative w-full h-full object-cover object-left-top rounded-t-md hover:scale-105 duration-150 ease-in-out"
                src={project.image}
                alt={`${project.name} website image`}
              />
              <div className="absolute bottom-0 left-0 w-full flex justify-end mt-3 bg-slate-700 bg-opacity-75">
                {project.categories.map((category, index) => (
                  <label
                    key={category.name}
                    className={`mx-2 p-2 text-xs font-medium text-white`}
                  >
                    {category.name}
                  </label>
                ))}
              </div>
            </Link>

            <div>
              <h5 className="text-sky-700">{project.name}</h5>
              <p className="text-slate-500">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
