interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

type PrimaryButtonProps = ButtonProps & {
  primary: boolean;
  secondary?: never;
  destructive?: never;
};

type SecondaryButtonProps = ButtonProps & {
  primary?: never;
  secondary: boolean;
  destructive?: never;
};

type DestructiveButtonProps = ButtonProps & {
  primary?: never;
  secondary?: never;
  destructive: boolean;
};

type MyCustomButtonProps =
  | PrimaryButtonProps
  | SecondaryButtonProps
  | DestructiveButtonProps;

const Button = (props: MyCustomButtonProps) => {
  const { primary, secondary, destructive, ...rest } = props;

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
