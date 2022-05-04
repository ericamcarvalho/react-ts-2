// Usecase: you want to make a <Button> that takes all the normal props of <button> and does extra stuff

// ComponentPropsWithRef if you need to forward ref to the button
interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  specialProp?: string;
}

export const Button = (props: ButtonProps) => {
  const { specialProp, ...rest } = props;
  // do something with specialProp
  return <button {...rest} />;
};

// usage
export function App() {
  // Type '"foo"' is not assignable to type '"button" | "submit" | "reset" | undefined'.(2322)
  return (
    <Button type="foo" onClick="bar">
      sldkj
    </Button>
  );

  // no error
  // return <Button type="button" onClick={() => {}}> text </Button>;
}
