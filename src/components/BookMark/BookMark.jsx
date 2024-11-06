/* eslint-disable react/prop-types */
export const BookMark = ({ bookMark }) => {
  const { title } = bookMark;
  return (
    <div className="p-2 rounded-md mb-2 bg-slate-400">
      <p>{title}</p>
    </div>
  );
};
