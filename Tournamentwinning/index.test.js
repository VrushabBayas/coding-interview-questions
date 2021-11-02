const { tournamentWinner } = require("./index");

test("should give right output", () => {
  const competitions = [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"],
  ];
  results = [0, 1, 1];
  expect(tournamentWinner(competitions, results)).toStrictEqual("Java");
});
