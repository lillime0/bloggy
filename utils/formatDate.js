export const formatDate = () => {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat("en-us", {
    dateStyle: "medium"
  });
  return formatter.format(date);
};
