import { WebProjectsList } from "@/constants";

export const ProjectsSection = () => {
  return (
    <main className="w-full min-h-screen py-20">
      <p className="font-bold text-3xl mb-5">
        Academic & Personal Web Projects
      </p>
      <div className="grid sm:grid-cols-2 gap-10">
        {WebProjectsList.map((project) => (
          <div key={project.name} className="flex flex-col gap-5">
            <a
              href={project.path}
              target="_blank"
              className="relative overflow-clip flex flex-col items-center justify-center border w-full h-[400px] rounded-md shadow-xl hover:-translate-y-1 duration-150 ease-in-out"
            >
              <img
                className="relative w-full h-full object-cover rounded-t-md"
                src="https://unsplash.it/600/600"
                alt={project.name}
              />
              <div className="absolute bottom-0 left-0 w-full flex justify-end mt-3 border-t-2 bg-transparent ">
                {project.categories.map((category, index) => (
                  <label
                    key={category.name}
                    className={`mx-2 p-2 text-xs font-medium text-white`}
                  >
                    {category.name}
                  </label>
                ))}
              </div>
            </a>

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
