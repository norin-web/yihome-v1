import Btn from "../components/Btn";

export default function NotFound() {
  return (
    <section className="nf">
      <span className="eyebrow">404</span>
      <h1 className="h1">Nothing here</h1>
      <p className="body">This page doesn't exist. The camera is pointing somewhere else.</p>
      <Btn to="/">Back to home</Btn>
    </section>
  );
}
