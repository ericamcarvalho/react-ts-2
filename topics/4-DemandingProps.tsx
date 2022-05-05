import { useState } from "react";

const truncateString = (string: string, length = 100) =>
  string.slice(0, length) + "…";

type TextProps = {
  children: string;
} & React.ComponentPropsWithoutRef<"div">;

type NoTruncateTextProps = TextProps & { truncate?: false };
type TruncateTextProps = TextProps & { truncate: true; expanded?: boolean };

function Text(props: NoTruncateTextProps): JSX.Element;
function Text(props: TruncateTextProps): JSX.Element;
function Text(props: TextProps & { truncate?: boolean; expanded?: boolean }) {
  const { children, truncate, expanded } = props;
  const shouldTruncate = truncate && !expanded;
  return (
    <div aria-expanded={!!expanded}>
      {shouldTruncate ? truncateString(children) : children}
    </div>
  );
}

export const App = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <main>
      <Text truncate expanded id="Text" style={{ color: "red" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Text>

      <section style={{ marginTop: "1em" }}>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Contract" : "Expand"}
        </button>
      </section>
    </main>
  );
};
