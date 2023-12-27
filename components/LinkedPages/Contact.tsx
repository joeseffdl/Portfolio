export const ContactPage = () => (
  <main className="full-width">
    <section className="breakout h-[400px] flex items-center">
      <h1 className="text-8xl font-semibold">Looking for me?</h1>
    </section>
    <section className="flex flex-col gap-5 min-h-[500px] py-20 lg:px-32">
      <h1 className="text-center text-sky-700">Let's Connect.</h1>
      <form className="flex flex-col  px-20">
        <input
          className="h-20 flex items-center w-full border-b-2 focus:pl-2 outline-sky-500"
          type="text"
          placeholder="Name"
        />
        <input
          className="h-20 flex items-center w-full border-b-2 focus:pl-2 outline-sky-500"
          type="email"
          placeholder="Email"
        />
        <textarea
          className="h-20 flex items-center w-full border-b-2 focus:pl-2 pt-2 outline-sky-500"
          placeholder="Message"
        />
        <button className="place-self-end mt-2 py-2 px-5  bg-sky-700 hover:bg-sky-700/90 text-white font-medium" type="submit">
          Send
        </button>
      </form>
    </section>
  </main>
)
