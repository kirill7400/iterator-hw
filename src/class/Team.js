import Character from "./Character";

class Team {
  constructor(team) {
    this.index = 0
    this.team = team

  }

  [Symbol.iterator]() {
    let index = -1;
    let data  = this.team;

    return {
      next: () => ({ value: data[++index] ? new Character(data[index]) : undefined, done: !(index in data) })
    };
  };
}

export default Team