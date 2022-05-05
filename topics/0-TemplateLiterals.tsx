type CharacterClass = "warrior" | "paladin" | "wizard" | "cleric";

type LawChaos = "lawful" | "neutral" | "chaotic";
type GoodEvil = "good" | "neutral" | "evil";

type Alignment = `${LawChaos}-${GoodEvil}`;

type Character = {
  name: string;
  profession: CharacterClass;
  alignment: Alignment;
};

export const steve: Character = {
  name: "Steve",
  profession: "wizard",
  alignment: "chaotic-good",
};
