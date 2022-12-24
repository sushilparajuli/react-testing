type GreetProps = {
  name?: string;
  age?: 30;
};
export default function Greet({ name, age }: GreetProps) {
  return (
    <div>
      Greeting {name ? name : "Guest"} and {age}
    </div>
  );
}
