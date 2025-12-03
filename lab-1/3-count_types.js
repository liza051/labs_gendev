"use strict";

const array = [42, "hello", true, null, undefined, { key: "value" }, [1, 2, 3]];

function countTypes(arr) {
  const typeCounts = {};
  for (const item of arr) {
    const type = typeof item;
    typeCounts[type] = (typeCounts[type] || 0) + 1;
  }

  return typeCounts;
}

console.log(countTypes(array));
