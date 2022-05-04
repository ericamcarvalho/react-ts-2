type TextProps = {
  children: string;
} & React.ComponentPropsWithoutRef<"div">;

function Text({ children, ...rest }: TextProps) {
  return <div {...rest}>{children}</div>;
}

export const App = () => {
  return (
    <main>
      <Text id="main">SompleText</Text>
    </main>
  );
};

// Right now, div is hard coded and so we can assume it takes the same props as div and then pass them through
// What about if we wanted to be able to swap out the underlying element?

// We have 2 sets of properties:
// 1) The properties of the Text component
// 2) The passthrough properties

type TextOwnProps<E extends React.ElementType = React.ElementType> = {
  children: string;
  as?: E;
};

// We want out custom component to proxy all of its props to the HTML Element minus ours

// type TextProps<E extends React.ElementType> = TextOwnProps<E> &
//   Omit<React.ComponentProps<E>, keyof TextOwnProps>;

// const defaultElement = "div";

// function Text<E extends React.ElementType = typeof defaultElement>({
//   children,
//   as,
//   ...rest
// }: TextProps<E>) {
//   const TagName = as || "div";
//   return <TagName {...rest}>{children}</TagName>;
// }

// export const App = () => {
//   return (
//     <main>
//       <Text id="main" as="label" htmlFor="my-input">
//         Sample text
//       </Text>
//       <input id="my-input" />
//     </main>
//   );
// };
