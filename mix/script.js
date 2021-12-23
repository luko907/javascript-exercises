/* 1. Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one. */

const matches = (obj, source) =>
  Object.keys(source).every(
    (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
  );
console.log(
  matches({ age: 25, hair: "long", beard: true }, { hair: "long", beard: true })
); // true
console.log(
  matches({ hair: "long", beard: true }, { age: 25, hair: "long", beard: true })
); // false
console.log(
  matches({ hair: "long", beard: true }, { age: 26, hair: "long", beard: true })
); // false

/* 
2. Write a JavaScript program to copy a string to the clipboard. */

const copy_to_Clipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

/* 3. Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array */

const csv_to_array = (data, delimiter = ",", omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf("\n") + 1 : 0)
    .split("\n")
    .map((v) => v.split(delimiter));

console.log(csv_to_array("a,b\nc,d"));
console.log(csv_to_array("a;b\nc;d", ";"));
console.log(csv_to_array("head1,head2\na,b\nc,d", ",", true));

/* 4. Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array of objects. The first row of the string is used as the title row. */

const CSV_to_JSON = (data, delimiter = ",") => {
  const titles = data.slice(0, data.indexOf("\n")).split(delimiter);
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((v) => {
      const values = v.split(delimiter);
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {}
      );
    });
};
console.log(CSV_to_JSON("col1,col2\na,b\nc,d")); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
console.log(CSV_to_JSON("col1;col2\na;b\nc;d", ";")); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];

/* 5. Write a JavaScript program to convert an array of objects to a comma-separated values (CSV) string that contains only the columns specified */

const JSON_to_CSV = (arr, columns, delimiter = ",") =>
  [
    columns.join(delimiter),
    ...arr.map((obj) =>
      columns.reduce(
        (acc, key) =>
          `${acc}${!acc.length ? "" : delimiter}"${!obj[key] ? "" : obj[key]}"`,
        ""
      )
    ),
  ].join("\n");

console.log(
  JSON_to_CSV(
    [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }],
    ["x", "y"]
  )
);
console.log(
  JSON_to_CSV(
    [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }],
    ["x", "y"],
    ";"
  )
);

/* 6. Write a JavaScript program to target a given value in a nested JSON object, based on the given key. */

const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === "object") return dig(val, target);
      }, undefined);

const data = {
  level1: {
    level2: {
      level3: "some data",
    },
  },
};

const dog = {
  status: "success",
  message: "https://images.dog.ceo/breeds/african/n02116738_1105.jpg",
};
console.log(dig(data, "level3"));
console.log(dig(data, "level4"));
console.log(dig(dog, "message"));
