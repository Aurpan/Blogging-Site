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
