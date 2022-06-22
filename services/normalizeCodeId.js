export default function normalizeCodeId(number) {
  return number.toString().match(/\d{4}/g)?.join('-');
}
