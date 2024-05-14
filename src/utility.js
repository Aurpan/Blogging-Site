export const convertToHumanReadableDateString = (dateString) => {
  //   date string format: "2024-05-18";
  const date = new Date(dateString);
  const humanReadableDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return humanReadableDate;
};

export const getCurrentDateAsFormatedString = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};
