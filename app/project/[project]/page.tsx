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
             This is a placeholder text for the project&apos;s detail section. This section provides information that serves as an overview on what the project is all about.
            </p>
          </section>
        </>
      )}
    </div>
  );
}
