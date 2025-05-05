import Team from "./components/gameMechanics/Team.js"
import { Bowerman, Swordsman } from "./components/gameMechanics/Characters.js"

let team = new Team();
team.add(new Bowerman("Oleg"));
team.add(new Bowerman("Nikita"));
team.add(new Swordsman("Vacya"));

for (let ch of team) {
    console.log(ch);
}