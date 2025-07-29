interface GreetingProps {
  name: string;
  surname?: string;
}

const Greetings: React.FC<GreetingProps> = ({ name, surname }) => {
  return (
    <>
      <h4>
        Hello, {name} {surname}
      </h4>
    </>
  );
};

export default Greetings;
