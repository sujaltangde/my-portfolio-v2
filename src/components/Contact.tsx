export const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen md:px-12 pt-20 px-0 dark:text-white  bg-white dark:bg-gray-900"
    >
      <div className="md:px-12 px-6">
        <p className="text-3xl font-extrabold">Contact</p>
        <p className="mt-3">
          Reach out whenever you like, I'm ready to hear your views.
        </p>
      </div>

      <div className="pt-10 ">
        <form
          className="flex items-center w-full gap-6 flex-col dark:text-white  bg-white dark:bg-gray-900"
          method="POST"
          action="https://getform.io/f/36163a7b-081e-4164-84c0-7c5bf1c44f00"
        >
          <input
            name="name"
            type="text"
            id="email"
            required
            aria-describedby="helper-text-explanation"
            className="border-gray-400 p-2 bg-transparent border-2 rounded-md  focus:outline-none w-2/3 "
            placeholder="Enter your name"
          ></input>
          <input
            name="email"
            id="email"
            aria-describedby="helper-text-explanation"
            required
            className=" p-2 bg-transparent border-gray-400 border-2 rounded-md focus:outline-none w-2/3 "
            placeholder="Enter your email"
          ></input>

          <textarea
            name="message"
            id="message"
            required
            className=" p-2 bg-transparent h-36 border-2 rounded-md focus:outline-none border-gray-400 w-2/3 "
            placeholder="Leave a message"
          ></textarea>
          <button
            type="submit"
            className=" md:text-lg text-white text-base px-8 py-1 rounded-md font-medium bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
