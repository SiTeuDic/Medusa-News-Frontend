import { useEffect, useState } from "react";

const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const getDayDiffs = (timestamp) => {
  const now = Date.now();
  const elapsed = (timestamp - now) / 1000;

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === "second") {
      const value = Math.floor(elapsed / secondsInUnit) * -1;
      return { value, unit };
    }
  }
};

const useTimeAgo = (date) => {
  const timestamp = new Date(date).getTime();
  const { value, unit } = getDayDiffs(timestamp);
  const rtf = new Intl.RelativeTimeFormat("es", {
    style: "short",
  });
  console.log("[useTimeAgo]: ", value, unit);
  return rtf.format(value, unit);
};

export default useTimeAgo;

/* const DATE_UNITS = {
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

const getSecondsDiff = (timeStamp) => new Date(Date.now() - timeStamp) / 1000;

const getUnitAndValueDate = (secondsElapsed) => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (Math.abs(secondsElapsed) > secondsInUnit || unit === "second") {
      const value = Math.floor(secondsElapsed / secondsInUnit);
      console.log("[getUnitAndValueDate]: ", value);
      return { value, unit };
    }
  }
};

const getTimeAgo = (timeStamp, locale) => {
  const rtf = new Intl.RelativeTimeFormat(locale);

  const secondsElapsed = getSecondsDiff(timeStamp);
  const { value, unit } = getUnitAndValueDate(secondsElapsed);

  return rtf.format(value, unit);
};

export const useTimeAgo = (date) => {
  const timestamp = new Date(date).getTime();
  const locale = "es";
  const timeAgo = getTimeAgo(timestamp, locale);

  const now = new Date(timestamp);
  const formattedDate = new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "numeric",
  }).format(now);
  return { dateTime: formattedDate, timeAgo };
};
 */
