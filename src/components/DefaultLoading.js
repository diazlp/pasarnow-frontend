function DefaultLoading() {
  return (
    <div data-testid="default-loading">
      <div className="card w-full shadow-md ">
        <div className="card-body flex flex-row justify-between items-center">
          <div className="flex flex-col gap-2">
            <h2 className="card-title bg-gray-300 opacity-20 w-[200px] md:w-[400px] animate-pulse h-8 rounded-2xl"></h2>
            <p className="bg-gray-300 opacity-20 w-[250px] md:w-[500px] animate-pulse h-4 rounded-2xl"></p>
            <p className="bg-gray-300 opacity-20 w-[150px] md:w-[300px] animate-pulse h-4 rounded-2xl"></p>
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-primary animate-pulse hidden md:block md:w-[80px]"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLoading;
