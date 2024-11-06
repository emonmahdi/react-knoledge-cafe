import { BookMark } from "../BookMark/BookMark";

/* eslint-disable react/prop-types */
export const Bookmarks = ({ bookMarks }) => {
  return (
    <div className="md:w-1/3">
      Bookmarks : {bookMarks?.length}
      <div className="p-4 bg-gray-500">
        {bookMarks.map((bookMark) => (
          <BookMark key={bookMark.id} bookMark={bookMark} />
        ))}
      </div>
    </div>
  );
};
