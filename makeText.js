/** Command-line tool to generate Markov text. */
const { MarkovMachine } = require("./markov");
const { cat, webCat } = require("./helpers");

const args = process.argv;
const type = args[2];
const path = args[3];

makeText(path, type)

async function makeText(path, type) {

  if (type === "url") {
    text = await webCat(path);
  } else {
    text = cat(path);
  }

  let m = new MarkovMachine(text);
  console.log("Markov Machine output:", m.makeText());

}
