export const formatDateTime = (dateTime: string) => {
  const date = new Date(dateTime);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return date.toLocaleDateString("en-US", options as any);
};

export const convertHoursToTime = (hours: number) => {
  const totalSeconds = Math.floor(hours * 3600);
  const hoursValue = Math.floor(totalSeconds / 3600);
  const minutesValue = Math.floor((totalSeconds % 3600) / 60);
  const secondsValue = totalSeconds % 60;

  const formattedTime = `${hoursValue}:${minutesValue
    .toString()
    .padStart(2, "0")}:${secondsValue.toString().padStart(2, "0")}`;
  return formattedTime;
};

export const modifyDate = (dateString: string) => {
  const date = new Date(dateString);

  date.setHours(date.getHours() + 2);

  const newDateString = date.toISOString().slice(0, 19);

  return newDateString;
};
