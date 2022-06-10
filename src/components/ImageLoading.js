function ImageLoading() {
  return (
    <div
      className="card w-96 bg-base-100 shadow-xl"
      data-testid="image-loading"
    >
      <div className="w-full h-48 animate-pulse bg-gray-100 opacity-20"></div>
      <div className="card-body">
        <h2 className="card-title bg-gray-100 opacity-20 w-[200px]  animate-pulse h-8 rounded-2xl"></h2>
        <p className="bg-gray-100 opacity-20 w-[250px]  animate-pulse h-4 rounded-2xl"></p>
      </div>
    </div>
  );
}

export default ImageLoading;
