// mostly used pre-hooks to enhance components with additional state and business logic
import { useState, useEffect } from "react";
import { CharacterType } from "./characters.d";
import { CharacterInformation } from "./CharacterInformation";

const withCharacter = (Component: any) => {
  return (props) => {
    const [character, setCharacter] = useState<CharacterType | null>(null);

    useEffect(() => {
      // fetches character and setCharacter(data)
    }, []);

    return <Component character={character} />;
  };
};

export const App = () => {
  const CharacterInformationWithCharacter = withCharacter(CharacterInformation);

  return (
    <main>
      <CharacterInformationWithCharacter />
    </main>
  );
};

// The problem with the code above is that withCharacter accepts any props
// But we want for it to take any of the props that the component it wraps takes
// ... EXCEPT the ones we plan to pass (like character in this case)

// function withCharacter<T>(Component: React.ComponentType<T>) {
//   return (props: T) => {
//     const [character, setCharacter] = useState<CharacterType | null>(null);

//     useEffect(() => {
//       // fetches character and setCharacter(data)
//     }, []);

//     return <Component character={character} />;
//   };
// }

// TS is complaining here because
// ... CharacterInformationWithCharacter isn't getting the character that the component is expecting
// Our HOC doesn't have any idea that Component is something that can accept a character prop

// We need to do 2 things:

// 1. Tell our HOC that we will only wrap components that have take the props that we plan on passing in
// 2. Return a component that doesn't worry about the props that our HOC is passing in

// type WithCharacterProps = {
//   character: CharacterType;
// };

// function withCharacter<T extends WithCharacterProps>(
//   Component: React.ComponentType<T>
// ) {
//   return (props: Omit<T, keyof WithCharacterProps>) => {
//     const [character, setCharacter] = useState<CharacterType | null>(null);

//     useEffect(() => {
//       // fetches character and setCharacter(data)
//     }, []);

//     // we need props as T here because we know that character (the omitted prop is passed as well)
//     return character && <Component {...(props as T)} character={character} />;
//   };
// }
