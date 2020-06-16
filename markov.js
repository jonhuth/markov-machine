/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let markov_obj = {};
    let words = this.words;
    for(let i = 0; i < words.length; i++) {
      let curWord = words[i];
      let nextWord = words[i + 1] ? words[i + 1] : null;

      if (curWord in markov_obj) {
        markov_obj[curWord].push(nextWord);
      }
      else {
        markov_obj[curWord] = [nextWord];
      }
    }
    return markov_obj;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    let chainsObj = this.makeChains();
    let keysArr = Object.keys(chainsObj);
    let randKey = keysArr[getRandomNum(keysArr.length)];
    let randVals = chainsObj[randKey];
    let randWord = randVals[getRandomNum(randVals.length)];

    let randWords = [];

    while (randWord !== null && randWords.length < numWords) {
      randWords.push(randWord);
      randVals = chainsObj[randWord];
      randWord = randVals[getRandomNum(randVals.length)];
    }
    return randWords.join(' ');
  }
}


function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}