// We want to disallow the ability for more than one of the properites to be passed.

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

type PrimaryButtonProps = ButtonProps & { primary: boolean };
type SecondaryButtonProps = ButtonProps & { secondary: boolean };
type DestructiveButtonProps = ButtonProps & { destructive: boolean };

type MyCustomButtonProps =
  | PrimaryButtonProps
  | SecondaryButtonProps
  | DestructiveButtonProps;

const Button = (props: MyCustomButtonProps) => {
  const { primary, secondary, destructive, ...rest } = props;

  // to avoid the error above, we'd need to check if the given props are included
  // let primary;
  // if ("primary" in props) {
  //   primary = props.primary;
  // }

  // but there is a better way (below)

  return <button {...rest} />;
};

export const App = () => {
  return (
    <>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button destructive>Destructive</Button>
    </>
  );
};

// type PrimaryButtonProps = ButtonProps & {
//   primary: boolean;
//   secondary?: never;
//   destructive?: never;
// };

// type SecondaryButtonProps = ButtonProps & {
//   primary?: never;
//   secondary: boolean;
//   destructive?: never;
// };

// type DestructiveButtonProps = ButtonProps & {
//   primary?: never;
//   secondary?: never;
//   destructive: boolean;
// };
