type TextOwnProps<E extends React.ElementType = React.ElementType> = {
  children: string;
  as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps>;

const defaultElement = "div";

function Text<E extends React.ElementType = typeof defaultElement>({
  children,
  as,
  ...rest
}: TextProps<E>) {
  const TagName = as || "div";
  return <TagName {...rest}>{children}</TagName>;
}

export const App = () => {
  return (
    <main>
      <Text id="main" as="label" htmlFor="my-input">
        Sample text
      </Text>
      <input id="my-input" />
    </main>
  );
};
