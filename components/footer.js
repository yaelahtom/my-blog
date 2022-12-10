export default function Footer() {
  return (
    <div className="px-6 mx-auto flex flex-col pb-4">
      <div className="border-t border-neutral-800 mb-4"></div>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Just say hello!
      </label>
      <textarea
        id="message"
        rows="2"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Leave a message for me..."
      ></textarea>
      <button className="text-neutral-300 mt-2">
        Send
      </button>
    </div>
  );
}
