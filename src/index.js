import Team from "./class/Team";
import TeamGenerator from "./class/TeamGenerator";

const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10
}

const char2 = {
  name: 'Варвар',
  type: 'Bowman',
  health: 60,
  level: 1,
  attack: 40,
  defence: 10
}

const team = new Team([char1, char2])
const teamGen = new TeamGenerator([char1, char2])

console.log(teamGen[Symbol.iterator]().next())
for (let i of team) {
  console.log(i)
}

console.log(teamGen[Symbol.iterator]().next())
for (let i of teamGen) {
  console.log(i)
}