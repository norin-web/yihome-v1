import { useState } from "react";
import { faq, site } from "../content/site";
import Btn from "../components/Btn";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

const Chevron = () => (
  <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 10.5L14 17.5L21 10.5" />
  </svg>
);

export default function Support() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <section className="phead phead--split">
        <div>
          <Reveal as="span" className="eyebrow">Support</Reveal>
          <Split as="h1" className="h1" parts={[["How can we help?"]]} />
        </div>
        <Reveal as="p" className="body" delay={200}>
          Answers to common questions about cameras, alerts and your subscription. Still stuck? Write to us.
        </Reveal>
      </section>

      <section className="inset sec sec--tight-top">
        <div className="faq">
          {faq.map((f, i) => {
            const on = open === i;
            return (
              <div className={`faq__item${on ? " is-open" : ""}`} key={f.q}>
                <button className="faq__q" aria-expanded={on} aria-controls={`faq-${i}`} onClick={() => setOpen(on ? -1 : i)}>
                  <span>{f.q}</span>
                  <Chevron />
                </button>
                <div className="faq__a" id={`faq-${i}`} role="region" aria-hidden={!on} {...({ inert: on ? undefined : "" } as object)}>
                  <div><p>{f.a}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="wrap sec sec--tight-top">
        <Reveal className="mailbox">
          <div>
            <h2 className="h3">Didn’t find your answer?</h2>
            <p className="body">Tell us your camera model and what you see on screen.</p>
          </div>
          <Btn href={`mailto:${site.email}`} block>{site.email}</Btn>
        </Reveal>
      </section>
    </>
  );
}
