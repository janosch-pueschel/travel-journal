import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cardEl = data.map((item) => {
    // eslint-disable-next-line react/jsx-key
    return <Card item={item} />;
  });
  return (
    <div>
      <Header />
      <section className="pt-20">{cardEl}</section>
    </div>
  );
}
