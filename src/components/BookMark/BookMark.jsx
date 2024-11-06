/* eslint-disable react/prop-types */
export const BookMark = ({ bookMark }) => {
  const { title } = bookMark;
  return (
    <>
      <div></div>
      <div className="p-2 rounded-md mb-2 bg-slate-400">
        {/* <p className="text-3xl border-solid border-2 border-indigo-600 p-4 rounded-md">
          {reading_time}
        </p> */}
        <p>{title}</p>
      </div>
    </>
  );
};
