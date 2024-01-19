import Link from "next/link";

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
          Welcome to my world of 🎸 <span className="text-sky-400">Music</span>,
          🚲 <span className="text-sky-400">Cycling</span>, and 🕸️{" "}
          <span className="text-sky-400">Web development</span>. Let's create
          something amazing together! 🚀
        </p>
      </div>
    </section>
    <section className="flex flex-col gap-5 min-h-[300px] py-20 lg:px-32">
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
        <Link
          href="https://www.facebook.com/stardustandmelodies"
          className="text-sky-700 underline"
        >
          Stardust and Melodies
        </Link>
        . Aside from music, I also enjoy cycling and exploring the world while
        seeking inspirations and ideas along my journey.
        <br />
        <br />
        Currently, I am actively seeking opportunities as a{" "}
        <span className="text-sky-700">Full Stack Web Developer</span>.
      </p>
    </section>
    <section className="flex flex-col gap-5 min-h-[300px] py-20 lg:px-32">
      <h1 className="text-center">Web Developer</h1>
      <p className="text-lg font-medium">
        As a passionate <span className="text-sky-700">Web Developer</span>, I
        thrive on turning ideas into digital reality. With a strong foundation
        in computer engineering and a commitment to staying updated with the
        latest technologies, I specialize in creating robust and user-friendly
        web applications. My skills range from front-end technologies like React
        and Next.js to back-end technologies like Node.js and MongoDB. Let's
        build innovative and impactful solutions together!
      </p>
    </section>

    <section className="flex flex-col gap-5 min-h-[300px] py-20 lg:px-32">
      <h1 className="text-center">Musician</h1>
      <p className="text-lg font-medium">
        🎸 Music is not just a hobby; it's a way of life for me. As an avid{" "}
        <span className="text-sky-700">Musician</span>, I delve into diverse
        genres such as rock, blues, and jazz. Whether solo or with my band,{" "}
        <Link
          href="https://www.facebook.com/stardustandmelodies"
          className="text-sky-700 underline"
        >
          Stardust and Melodies
        </Link>
        , I express myself through the electric guitar. The creative process of
        composing, performing, and connecting with the audience brings me
        immense joy. Let the melodies resonate and inspire!
      </p>
    </section>

    <section className="flex flex-col gap-5 min-h-[300px] py-20 mb-20 lg:px-32">
      <h1 className="text-center">Cyclist</h1>
      <p className="text-lg font-medium">
        🚲 As a dedicated <span className="text-sky-700">Cyclist</span>, I
        embrace the open road as my canvas for exploration. Cycling is not just
        a physical activity but a journey of self-discovery and inspiration.
        Riding through scenic routes, I find solace and recharge my creative
        energies. Join me on this adventure as we pedal through life, uncovering
        new perspectives and enjoying the simple pleasures along the way.
      </p>
    </section>
  </main>
)
