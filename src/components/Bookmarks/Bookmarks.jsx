import { BookMark } from "../BookMark/BookMark";

/* eslint-disable react/prop-types */
export const Bookmarks = ({ bookMarks, readingTime }) => {
  return (
    <div className="md:w-1/3">
      <h2 className="border-solid border-2 border-indigo-600 p-4 rounded-md">
        Spent Reading time: {readingTime}{" "}
      </h2>
      <p>Bookmarks : {bookMarks?.length}</p>
      <div className="p-4 bg-gray-500">
        {bookMarks.map((bookMark) => (
          <BookMark key={bookMark.id} bookMark={bookMark} />
        ))}
      </div>
    </div>
  );
};
