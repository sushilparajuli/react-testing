type GreetProps = {
  name: string;
};
export default function Greet({ name }: GreetProps) {
  return <div>Greeting {name}</div>;
}
