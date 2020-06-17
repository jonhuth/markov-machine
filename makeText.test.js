const { MarkovMachine } = require("./markov");

describe("MarkovMachine functionality", function () {

  test("test makeChains()", function () {
    const markov = new MarkovMachine("one two three four five six seven eight nine");
    expect(Object.keys(markov.makeChains()).length).toEqual(9);
    expect(markov.makeChains()["nine"]).toContain(null);
  });


  test("test makeText()", function () {
    const text = "one two three four five six four seven eight twelve \
                  one two three four five six seven eight nine nine";
    const markov = new MarkovMachine(text);
    expect(markov.makeText()).not.toEqual(text);
    for (let i = 0; i < 100; i++) {
      expect(markov.makeText(10).split(" ").length).toBeLessThanOrEqual(10);
    }
  });

});