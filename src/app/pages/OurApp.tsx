import { useEffect, useState } from "react";
import { app, appFeatures, reel, specs } from "../content/site";
import Btn from "../components/Btn";
import Phone from "../components/Phone";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function OurApp() {
  const [on, setOn] = useState(0);
  const [shown, setShown] = useState(0);
  const [out, setOut] = useState(false);
  const [paused, setPaused] = useState(false);

  // crossfade the phone screen when the tab changes (no tilt, small shift)
  const pick = (i: number) => {
    if (i === on) return;
    setOn(i);
    setOut(true);
    setTimeout(() => {
      setShown(i);
      setOut(false);
    }, 200);
  };

  // tabs advance on their own while the progress bar fills; any click stops it
  useEffect(() => {
    if (paused || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => pick((on + 1) % appFeatures.length), 6000);
    return () => clearTimeout(t);
  }, [on, paused]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <section className="phead phead--center">
        <Reveal as="span" className="eyebrow">The app</Reveal>
        <Split as="h1" className="h1" parts={[["Three tabs."], ["\n"], ["Your whole home."]]} />
        <Reveal as="p" className="body" delay={250}>
          Cameras for live view and controls, Activity for every detection, AI Chat for answers. Here is how each part works.
        </Reveal>
        <Reveal className="phead__cta" delay={350}>
          <Btn href={app.url}>Download on the App Store</Btn>
        </Reveal>
      </section>

      <Reveal className="reel" aria-label="App screens">
        {reel.map((src) => <Phone key={src} src={src} alt="Yi Home app screen" />)}
      </Reveal>

      <section className="wrap sec sec--tight-top">
        <div className="card ftabs">
          <div className="ftabs__list" role="tablist" aria-label="Inside the app">
            <h2 className="h2">Inside the app</h2>
            {appFeatures.map((f, i) => (
              <button
                key={f.title}
                role="tab"
                aria-selected={on === i}
                className={`ftab${on === i ? " is-on" : ""}`}
                onClick={() => {
                  setPaused(true);
                  pick(i);
                }}
              >
                <b>{f.title}</b>
                {on === i && (
                  <>
                    <p>{f.text}</p>
                    <span className="bar" aria-hidden="true"><i key={`${i}-${paused}`} style={paused ? { width: "100%", animation: "none" } : undefined} /></span>
                  </>
                )}
              </button>
            ))}
          </div>
          <div className="ftabs__phone">
            <div className={`fade${out ? " is-out" : ""}`}>
              <Phone src={appFeatures[shown].img} alt={`Yi Home: ${appFeatures[shown].title}`} />
            </div>
          </div>
        </div>
      </section>

      <section className="inset sec sec--tight-top">
        <div className="specs">
          <div className="specs__head">
            <Reveal as="h2" className="h2">The details</Reveal>
            <Reveal as="p" className="body" delay={100} style={{ marginTop: 16 }}>What you need and what you get.</Reveal>
          </div>
          <dl>
            {specs.map(([k, v, tbd]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd className={tbd ? "tbd" : undefined}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
