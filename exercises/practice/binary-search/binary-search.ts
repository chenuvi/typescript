export function find(haystack: number[], needle: number): number | never {
  if (haystack.length === 0) {
    throw new Error("Element not found in empty array");
  }
  let [left, right] = [0, haystack.length - 1];
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const curr = haystack[mid];
    if (curr === needle) {
      return mid;
    } else if (curr < needle) {
      left = mid + 1;
    } else {
      right = mid - 1;  
    }
  }
  throw new Error("Remove this statement and implement this function");
}
