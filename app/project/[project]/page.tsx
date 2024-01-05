export default function ProjectPage() {
  return (
    <div className="full-width min-h-screen w-full">
      {1 && (
        <>
          <section className="min-h-screen full-width flex justify-center items-center bg-cover bg-no-repeat bg-center bg-fixed bg-zephImage2">
            <h1 className="text-6xl">Background Section</h1>
          </section>
          <section className="breakout w-full">
            <h2 className="text-4xl">Project Details Section</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              doloremque officia impedit laborum. Quae, incidunt.
            </p>
          </section>
        </>
      )}
    </div>
  );
}
