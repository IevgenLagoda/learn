export default function defaultToString(item) {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string") {
    return `${item}`;
  } else {
    return item.toString();
  }
}
