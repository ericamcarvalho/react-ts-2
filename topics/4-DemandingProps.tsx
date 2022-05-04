import { useState } from "react";

export const App = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <main>
      {/* We want to make it so that you can't pass in expanded unless truncate is also passed in */}
      <Text truncate expanded id="Text" style={{ color: "red" }}>
        {exampleText}
      </Text>

      <section style={{ marginTop: "1em" }}>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Contract" : "Expand"}
        </button>
      </section>
    </main>
  );
};

const exampleText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const truncateString = (string: string, length = 100) =>
  string.slice(0, length) + "…";

type TextProps = {
  children: string;
  truncate?: boolean;
  expanded?: boolean;
};

function Text({ children, truncate = false, expanded = false }: TextProps) {
  const shouldTruncate = truncate && !expanded;
  return (
    <div aria-expanded={!!expanded}>
      {shouldTruncate ? truncateString(children) : children}
    </div>
  );
}

// We can fix this by
// 1) Creating separate types as we did before and
// 2) Using function overload (providing more than one type signature to the same function)

// type TextProps = {
//   children: string;
// };

// type NoTruncateTextProps = TextProps & { truncate?: false };
// type TruncateTextProps = TextProps & { truncate: true; expanded?: boolean };

// Without function overload

// function Text(props: NoTruncateTextProps | TruncateTextProps) {
//   const { children, truncate, expanded } = props;
//   const shouldTruncate = truncate && !expanded;
//   return (
//     <div aria-expanded={!!expanded}>
//       {shouldTruncate ? truncateString(children) : children}
//     </div>
//   );
// }

// With function overload

// function Text(props: NoTruncateTextProps): JSX.Element;
// function Text(props: TruncateTextProps): JSX.Element;
// function Text(props: TextProps & { truncate?: boolean; expanded?: boolean }) {
//   const { children, truncate, expanded } = props;
//   const shouldTruncate = truncate && !expanded;
//   return (
//     <div aria-expanded={!!expanded}>
//       {shouldTruncate ? truncateString(children) : children}
//     </div>
//   );
// }

// We can do better by reusing what we learned in Wrapping/Mirroring HTML elements
// Now we don't have the ability to do anything with that div

// type TextProps = {
//   children: string;
// } & React.ComponentPropsWithoutRef<"div">;
