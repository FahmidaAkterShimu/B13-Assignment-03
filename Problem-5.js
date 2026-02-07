function analyzeText(str) {
  if (typeof str !== "string" || str.trim() === "") {
    return "Invalid";
  }
  let object = {};

  const words = str.split(" ");
  let longWord = words[0];
  for (let word of words) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  }
  object.longwords = longWord;

  const letters = str.split("")
  let token = 0;
  for (let letter of letters) {
    if (letter !== " ") {
      token++;
    }
  }
  object.token = token;

  return object;
}

console.log(analyzeText("I am a little honest person"));
