function NewsLoading() {
  return (
    <div
      className="card w-full lg:w-3/5 bg-gray-100 border-b-4 border-blue-500 text-gray-900 p-5"
      data-testid="news-loading"
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-1 items-center bg-gray-400 opacity-20 animate-pulse w-[100px] md:w-[200px] h-8 rounded-2xl"></div>
        <button>
          <svg
            className="h-6 w-6 text-red-600"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="card-body flex flex-col items-center justify-center bg-gray-400 opacity-20 animate-pulse rounded-2xl mt-2"></div>
      <div className="flex flex-row gap-2 justify-start items-center bg-gray-400 opacity-20 animate-pulse w-[100px] md:w-[200px] h-8 rounded-2xl mt-2"></div>
    </div>
  );
}

export default NewsLoading;
