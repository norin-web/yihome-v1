import { useState } from "react";
import { Link } from "react-router";
import { alerts, app, facts, features, models, rooms, steps } from "../content/site";
import { img } from "../utils/img";
import Btn from "../components/Btn";
import Phone from "../components/Phone";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

type Tab = keyof typeof models;
const featLayout = ["feat--wide", "feat--top", "feat--bottom", "feat--side"];

export default function Home() {
  const [tab, setTab] = useState<Tab>("Outside");
  const [shownTab, setShownTab] = useState<Tab>("Outside");
  const [out, setOut] = useState(false);

  // calm crossfade between camera lists
  const pick = (t: Tab) => {
    if (t === tab) return;
    setTab(t);
    setOut(true);
    setTimeout(() => {
      setShownTab(t);
      setOut(false);
    }, 180);
  };

  return (
    <>
      {/* S01 Hero */}
      <section className="hero">
        <div className="hero__copy">
          <Reveal as="span" className="eyebrow">Security camera app for iPhone</Reveal>
          <Split as="h1" className="h1" parts={[["Your home,"], ["\n"], ["always in view"]]} />
          <Reveal as="p" className="body" delay={250}>
            Watch your YI cameras in real time, steer the view and get alerts when something moves.
          </Reveal>
          <Reveal className="hero__cta" delay={350}>
            <Btn href={app.url} block className="hero__btn">Download on the App Store</Btn>
            <span className="muted">On the App Store for iPhone</span>
          </Reveal>
        </div>
        <Reveal className="hero__visual" delay={200}>
          <img className="hero__camera" src={img("/images/camera-product.webp")} alt="White YI home security camera" width={900} height={900} />
          <Phone src="/images/screen-controller.webp" alt="Yi Home live view of the Family Room camera with the Controller pad" eager />
        </Reveal>
      </section>

      {/* S03 Facts */}
      <ul className="facts" aria-label="Features">
        {facts.map((f) => <li key={f}>{f}</li>)}
      </ul>

      {/* S04 Features */}
      <section className="wrap sec">
        <div className="bento">
          {features.map((f, i) => (
            <Reveal className={`card feat ${featLayout[i]}`} key={f.key} delay={i % 2 ? 120 : 0}>
              <div>
                <h2 className="h3">{f.title}</h2>
                <p className="body">{f.text}</p>
              </div>
              <Phone src={f.img} alt={`Yi Home: ${f.title}`} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* S05 Models */}
      <section className="inset sec sec--tight-top">
        <div className="models">
          <div className="models__text">
            <Reveal as="h2" className="h2">Pick your camera, connect in minutes</Reveal>
            <Reveal as="p" className="body" delay={100}>
              Choose your model in Select Model, join Wi‑Fi and scan the QR code. Indoor, outdoor and wireless YI and Kami cameras are listed.
            </Reveal>
            <div className="tabs" role="tablist" aria-label="Camera type">
              {(Object.keys(models) as Tab[]).map((t) => (
                <button key={t} role="tab" aria-selected={tab === t} className={`tab${tab === t ? " is-on" : ""}`} onClick={() => pick(t)}>
                  {t}
                </button>
              ))}
            </div>
            <ul className={`chips fade${out ? " is-out" : ""}`} role="tabpanel" aria-label={`${shownTab} cameras`}>
              {models[shownTab].map((m) => <li key={m}>{m}</li>)}
            </ul>
          </div>
          <Reveal className="models__phone" delay={150}>
            <Phone src="/images/screen-select-model.webp" alt="Select Model screen listing YI and Kami cameras" />
          </Reveal>
        </div>
      </section>

      {/* S06 Alerts */}
      <section className="inset sec sec--tight-top">
        <div className="alerts">
          <div className="alerts__text">
            <Reveal as="h2" className="h2">Know when something moves</Reveal>
            <Reveal as="p" className="body" delay={100}>
              Turn on Security alerts and choose what counts: person, animal and motion detection each have their own switch in Camera settings.
            </Reveal>
            <Link to="/app" className="link">See all features →</Link>
          </div>
          <div className="alerts__cards">
            {alerts.map((a, i) => (
              <Reveal className="alert" key={a.title} delay={i * 160}>
                <div className="alert__top">
                  <img src={img("/images/room.webp")} alt="" width={44} height={44} style={i ? { objectPosition: "right" } : undefined} />
                  <div>
                    <b>{a.title}</b>
                    <small>{a.camera}</small>
                  </div>
                  <span className={`alert__dot${a.dot === "warn" ? " alert__dot--warn" : ""}`} aria-hidden="true" />
                </div>
                <p>Tap to replay</p>
                <time>{a.meta}</time>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* S07 How to start */}
      <section className="wrap sec sec--tight-top">
        <div className="steps__head">
          <Reveal as="h2" className="h2">Up and running in three steps</Reveal>
          <Reveal as="p" className="body" delay={100}>All it takes is your YI camera, your iPhone and a Wi‑Fi network.</Reveal>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <Reveal className="step" key={s.n} delay={i * 120}>
              <div className="step__top">
                <span className="pill"><i aria-hidden="true" />{s.n}</span>
                {s.icon && <img className="step__icon" src={img("/images/app-icon.png")} alt="Yi Home app icon" width={72} height={72} />}
              </div>
              <div>
                <h3 className="h3">{s.title}</h3>
                <p className="body" style={{ marginTop: 12 }}>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* S08 Rooms */}
      <section className="wrap sec sec--tight-top">
        <Reveal className="card rooms">
          <img src={img("/images/room.webp")} alt="A room as seen through a YI camera" width={1400} height={1629} loading="lazy" />
          <div className="rooms__text">
            <h2 className="h2">A camera for every room</h2>
            <p className="body">Name each camera in Camera Info so alerts tell you exactly where something happened.</p>
            <ul className="tags">
              {rooms.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
