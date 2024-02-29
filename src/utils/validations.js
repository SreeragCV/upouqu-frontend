export function isEmail(value) {
  return value.includes("@");
}

export function isNotEmpty(value) {
  return value.trim() !== "";
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isNumber(value) {
  return !isNaN(value);
}

export function textLimit(text, maxLimit) {
  if (text.length > maxLimit) {
    return true;
  }
  return false;
}
