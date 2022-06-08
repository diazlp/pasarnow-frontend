import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNews } from "../actions/newsAction";

function NewsForm() {
  const [newsForm, setNewsForm] = useState({
    title: "",
    publisher: "",
    url: "",
  });
  const [duplicateError, setDuplicateError] = useState("");

  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    setNewsForm({
      ...newsForm,
      [e.target.name]: e.target.value,
    });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    if (!newsForm.title?.trim()) {
      setDuplicateError("please enter news title");
      return;
    }

    const response = await dispatch(addNews(newsForm));

    if (response) {
      setDuplicateError(response);
    } else {
      setDuplicateError("");
    }
  };

  return (
    <div className="px-4 sticky top-14">
      <div className="card bg-gray-100 relative p-8 sm:p-12 shadow-xl">
        <p className="text-xl font-bold text-center mb-8">Add More News!</p>
        <form onSubmit={formSubmitHandler}>
          <div className="mb-6">
            <input
              type="text"
              placeholder="News Title"
              className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-blue-500"
              value={newsForm.title}
              name="title"
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className="mb-6">
            <input
              type="text"
              placeholder="News Source"
              className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-blue-500"
              value={newsForm.publisher}
              name="publisher"
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div className={`${duplicateError ? "mb-2" : "mb-6"}`}>
            <input
              type="text"
              placeholder="News URL"
              className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-blue-500"
              value={newsForm.url}
              name="url"
              onChange={(e) => onChangeHandler(e)}
            />
          </div>
          <div
            className={
              duplicateError
                ? "mb-4 text-red-600 text-center uppercase font-bold"
                : "hidden"
            }
          >
            {duplicateError}
          </div>
          <div>
            <button
              type="submit"
              className="w-full text-white bg-blue-500 rounded border p-3 transition hover:bg-opacity-90"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewsForm;
