type CharacterClass = "warrior" | "paladin" | "wizard" | "cleric";

type LawChaos = "lawful" | "neutral" | "chaotic";
type GoodEvil = "good" | "neutral" | "evil";

type Character = {
  name: string;
  profession: CharacterClass;
  alignment: string; // We want to chage this!
};

export const steve: Character = {
  name: "Steve",
  profession: "wizard",
  alignment: "chaotic-good",
};

type Alignment = `${LawChaos}-${GoodEvil}`;

// type Character = {
//   name: string;
//   profession: CharacterClass;
//   alignment: Alignment;
// };

// const steve: Character = {
//   name: "Steve",
//   profession: "wizard",
//   alignment: "chaotic-good",
// };
