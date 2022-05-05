import { useState, useEffect } from "react";
import { CharacterType } from "./characters.d";
import { CharacterInformation } from "./CharacterInformation";

type WithCharacterProps = {
  character: CharacterType;
};

function withCharacter<T extends WithCharacterProps>(
  Component: React.ComponentType<T>
) {
  return (props: Omit<T, keyof WithCharacterProps>) => {
    const [character, setCharacter] = useState<CharacterType | null>(null);

    useEffect(() => {
      // fetches character and setCharacter(data)
    }, []);

    return character && <Component {...(props as T)} character={character} />;
  };
}

export const App = () => {
  const CharacterInformationWithCharacter = withCharacter(CharacterInformation);

  return (
    <main>
      <CharacterInformationWithCharacter />
    </main>
  );
};
