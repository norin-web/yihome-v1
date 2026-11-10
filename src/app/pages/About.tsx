import { principles, site } from "../content/site";
import { img } from "../utils/img";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function About() {
  return (
    <>
      <section className="dhero">
        <img className="dhero__img" src={img("/images/room.webp")} alt="" width={1400} height={1629} />
        <div className="dhero__fade" aria-hidden="true" />
        <Reveal as="span" className="eyebrow">About</Reveal>
        <Split as="h1" className="h1" parts={[["See home first."], ["\n"], ["Menus second."]]} />
        <Reveal as="p" className="body" delay={250}>
          {site.brand} is a small iPhone app for YI and Kami cameras. It opens on your cameras, not on a dashboard.
        </Reveal>
      </section>

      <section className="inset sec">
        <div className="approach">
          <Reveal as="h2" className="h2">Our approach</Reveal>
          <div className="approach__text">
            <Reveal as="p" className="body body--lg">
              A security camera is only useful when you can check it quickly. So the app opens on the Cameras tab, and a live view is one tap from launch.
            </Reveal>
            <Reveal as="p" className="body body--lg" delay={100}>
              Everything else follows the same idea. Activity shows what happened today on one timeline. Camera settings fit on a single screen. When something is unclear, AI Chat answers inside the app instead of sending you to a manual.
            </Reveal>
          </div>
        </div>
      </section>

      <section className="wrap sec sec--tight-top">
        <div className="principles">
          {principles.map((p, i) => (
            <Reveal className="principle" key={p.n} delay={i * 120}>
              <span className="principle__n">{p.n}</span>
              <div>
                <h3 className="h3">{p.title}</h3>
                <p className="body">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
