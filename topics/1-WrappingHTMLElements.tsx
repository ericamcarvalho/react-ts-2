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
  return (
    <Button type="button" onClick={() => {}}>
      text
    </Button>
  );
}
