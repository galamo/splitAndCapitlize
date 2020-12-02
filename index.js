function splitAndCapitlize(str) {
  if (typeof str !== "string") return;
  const arrStr = str.split(",");
  const result = arrStr.map((item, index) => item.toUpperCase() + `__${index}`);
  return result;
}

module.exports = { splitAndCapitlize };
