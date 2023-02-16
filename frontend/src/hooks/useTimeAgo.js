import { useEffect, useState } from "react";

const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const getFormatDate = (date) => {
  const timesplited = date.split("T");
  const timesplitedStr = `${timesplited[0]} ${timesplited[1]}`;
  const formated = timesplitedStr.split(".");
  const timestamp = new Date(formated[0]);

  return timestamp;
};

const getDayDiffs = (timestamp) => {
  const now = Date.now();
  const elapsed = (timestamp - now) / 1000;

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === "second") {
      const value = Math.floor(elapsed / secondsInUnit);
      return { value, unit };
    }
  }
};

const useTimeAgo = (date) => {
  const timestamp = getFormatDate(date);

  const [timeAgo, setTiemago] = useState(() => getDayDiffs(timestamp));
  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeAgo = getDayDiffs(timestamp);
      setTiemago(newTimeAgo);
    }, 5000);
    return () => clearInterval(interval);
  }, [timestamp]);

  const rtf = new Intl.RelativeTimeFormat("es", {
    style: "narrow",
  });
  const { value, unit } = timeAgo;

  return rtf.format(value, unit);
};

export default useTimeAgo;
