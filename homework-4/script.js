const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

// #1
function getPairs(students) {
  let male = ["Олександр", "Ігор", "Олексій"];
  let female = ["Олена", "Іра", "Світлана"];
  let team = [];
  for (let i = 0; i < students.length / 2; i++) {
    team.push([male[i], female[i]]);
  }
  return team;
}
let team = getPairs(students);
console.log(team);

// #2
function giveThemes(themes) {
  let themesForTeam = [];
  for (i = 0; i < themes.length; i++) {
    themesForTeam.push([team[i].join(" і "), themes[i]]);
  }
  return themesForTeam;
}
let nameOfThemes = giveThemes(themes);
console.log(nameOfThemes);

// #3
function getMark(marks) {
  let studentsWithMarks = [];
  for (let i = 0; i < marks.length; i++) {
    studentsWithMarks.push([students[i], marks[i]]);
  }
  return studentsWithMarks;
}
console.log(getMark(marks));

// #4
function getMarksForTeam(team, marks) {
  let markForteam = [];
  for (let i = 0; i < team.length; i++) {
    let randomMark = Math.floor(Math.random() * marks.length);
    let randomValue = marks[randomMark];
    markForteam.push([team[i].join(" і "), randomValue]);
  }
  return markForteam;
}
console.log(getMarksForTeam(team, marks));
