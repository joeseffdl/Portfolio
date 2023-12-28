export const AboutPage = () => (
  <main className="full-width">
    <section className="breakout h-[400px] flex items-center">
      <h1 className="text-9xl font-semibold">About Zeph.</h1>
    </section>
    <section className="full-width h-screen bg-black lg:bg-zephImage2 bg-no-repeat bg-cover flex justify-end">
      <div className="lg:w-1/2 h-full flex flex-col items-start justify-center px-20 bg-black bg-opacity-70 text-white">
        <h1 className="text-4xl font-bold mb-4">
          👋 You can call me <span className="text-sky-400">Zeph</span>
        </h1>
        <p className="text-lg sm:px-5 duration-150">
          Welcome to my world of 🎸 <span className="text-sky-400">Music</span>{" "}
          and 🕸️ <span className="text-sky-400">Web development</span>. Let's
          create something amazing together! 🚀
        </p>
      </div>
    </section>
    <section className="flex flex-col gap-5 min-h-[500px] py-20 lg:px-32">
      <h1 className="text-center">Who is Zeph?</h1>
      <p className="text-lg font-medium">
        A <span className="text-sky-700">Computer Engineering</span> graduate
        from{" "}
        <span className="text-sky-700">
          Polytechnic University of the Philippines
        </span>
        . My love for technology is complemented by a deep appreciation for the
        arts, particularly in playing the electric guitar and developing web
        applications.
        <br />
        <br />I find joy in exploring diverse musical genres such as rock,
        blues, and jazz. I also play in a band called{" "}
        <a
          href="https://www.facebook.com/stardustandmelodies"
          className="text-sky-700 underline"
        >
          Stardust and Melodies
        </a>{" "}
        <br />
        <br />
        Currently, I am actively seeking opportunities as a{" "}
        <span className="text-sky-700">Full Stack Web Developer</span>.
      </p>
    </section>
  </main>
);
