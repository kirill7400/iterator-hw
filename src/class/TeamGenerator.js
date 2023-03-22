import Character from "./Character";

class Team {
  constructor(team) {
    this.index = 0
    this.team = team

  }

  *[Symbol.iterator]() {
    while (this.index !== this.team.length) {
      yield new Character(this.team[this.index])
      this.index++
    }
  }
}

export default Team