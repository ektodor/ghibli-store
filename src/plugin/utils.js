const timestampToTwTime = (timestamp) => {
  // yyyy/MM/dd 00:00:00
  const time = new Date(
    Math.floor(timestamp).toString().length === 10 ? timestamp * 1000 : timestamp,
  );
  return time.toLocaleString('zh-TW', { hour12: false });
};

const twTimeToTimestamp = (twTime) => {
  // 回傳10位數的時間戳
  const time = new Date(twTime);
  return time.getTime() / 1000;
};
export { timestampToTwTime, twTimeToTimestamp };
