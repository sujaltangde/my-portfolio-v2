

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen md:px-12 pt-20 px-0 dark:text-white bg-white dark:bg-gray-900">
      <div className="md:px-12 px-6">
        <h1 className="text-3xl font-extrabold">Contact</h1>
        <p className="mt-3">
          Reach out whenever you like, I'm ready to hear your views.
        </p>
      </div>

      <div className="pt-10">
        <form
          className="flex items-center w-full flex-col dark:text-white bg-white dark:bg-gray-900"
          method="POST"
          action="https://getform.io/f/36163a7b-081e-4164-84c0-7c5bf1c44f00"
        >
          <label htmlFor="name" className="sr-only">Your Name</label>
          <input
            name="name"
            type="text"
            id="name"
            required
            className="border-gray-400 p-2 md:mb-6 mb-5 bg-transparent border-2 rounded-md focus:outline-none w-2/3"
            placeholder="Enter your name"
          />

          <label htmlFor="email" className="sr-only">Your Email</label>
          <input
            name="email"
            type="email"
            id="email"
            required
            className="p-2 bg-transparent md:mb-6 mb-5 border-gray-400 border-2 rounded-md focus:outline-none w-2/3"
            placeholder="Enter your email"
          />

          <label htmlFor="message" className="sr-only">Your Message</label>
          <textarea
            name="message"
            id="message"
            required
            className="p-2 bg-transparent md:mb-6 mb-3 h-36 border-2 rounded-md focus:outline-none border-gray-400 w-2/3"
            placeholder="Leave a message"
          ></textarea>

          <button
            type="submit"
            className="md:text-lg text-white text-base px-8 py-1 rounded-md font-medium bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
