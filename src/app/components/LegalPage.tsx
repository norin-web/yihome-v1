import { Fragment, useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router";
import { site } from "../content/site";
import { legalUpdated } from "../content/legal";
import Split from "./Split";
import Reveal from "./Reveal";

type Doc = {
  title: string;
  current: string;
  updated?: string;
  body: string | null;
  glance?: [string, string][];
  other: { to: string; label: string };
};

type Section = { id: string; title: string; blocks: string[] };

// turn plain email addresses into mailto links, text otherwise untouched
const linkify = (text: string) =>
  text.split(/(\S+@\S+\.[a-z]{2,})/i).map((part, i) =>
    /@/.test(part) ? <a key={i} href={`mailto:${part}`}>{part}</a> : part,
  );

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** Split the verbatim text into an intro and "## " sections; wording is never changed. */
function parse(body: string) {
  const intro: string[] = [];
  const sections: Section[] = [];
  for (const block of body.split(/\n{2,}/)) {
    if (block.startsWith("## ")) {
      const title = block.slice(3);
      sections.push({ id: slug(title), title, blocks: [] });
    } else if (sections.length) sections[sections.length - 1].blocks.push(block);
    else intro.push(block);
  }
  return { intro, sections };
}

// Until the owner's text arrives the page shows its layout with a clear placeholder.
const PLACEHOLDER: Section[] = Array.from({ length: 9 }, (_, i) => ({
  id: `section-${i + 1}`,
  title: "Section title",
  blocks: i === 0 ? ["Section text from the owner's document, unedited. Paragraphs keep their original order and wording."] : ["Section text from the owner's document, unedited."],
}));

function Block({ text }: { text: string }): ReactNode {
  if (text.startsWith("### ")) return <h3>{text.slice(4)}</h3>;
  if (text.startsWith("- "))
    return (
      <ul>
        {text.split("\n").map((li, j) => <li key={j}>{linkify(li.replace(/^- /, ""))}</li>)}
      </ul>
    );
  // all-caps legal clauses get a quiet grey box so they don't shout across the page
  const caps = text.length > 40 && text === text.toUpperCase();
  return (
    <p className={caps ? "legal-caps" : undefined}>
      {text.split("\n").map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {linkify(line)}
        </Fragment>
      ))}
    </p>
  );
}

export default function LegalPage({ doc }: { doc: Doc }) {
  const parsed = useMemo(() => parse(doc.body ?? ""), [doc.body]);
  const draft = !doc.body;
  const intro = draft ? [] : parsed.intro;
  const sections = draft ? PLACEHOLDER : parsed.sections;
  const [active, setActive] = useState(sections[0]?.id);

  // highlight the section whose heading last passed the upper third of the viewport
  useEffect(() => {
    const onScroll = () => {
      let cur = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < innerHeight * 0.35) cur = s.id;
      }
      setActive(cur);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, [sections]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) scrollTo({ top: el.getBoundingClientRect().top + scrollY - 140, behavior: "smooth" });
  };

  const isPrivacy = doc.current === "privacy";

  return (
    <>
      <section className="lhero">
        <nav className="docswitch" aria-label="Legal documents">
          <Link to="/privacy" className={isPrivacy ? "is-on" : ""} aria-current={isPrivacy ? "page" : undefined}>Privacy Policy</Link>
          <Link to="/terms" className={!isPrivacy ? "is-on" : ""} aria-current={!isPrivacy ? "page" : undefined}>Terms of Use</Link>
        </nav>
        <Split as="h1" className="h1" parts={[[doc.title]]} />
        <Reveal className="lhero__meta" delay={300}>
          <div><span>Last updated</span>{doc.updated ?? legalUpdated}</div>
          <div><span>Sections</span>{sections.length}</div>
          <div><span>Questions</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
          <div className="only-wide"><span>Also read</span><Link to={doc.other.to}>{doc.other.label}</Link></div>
        </Reveal>
      </section>

      <section className="legal">
        <aside className="toc" aria-label="Contents">
          {sections.map((s, i) => (
            <button
              key={s.id}
              className={active === s.id ? "is-on" : ""}
              onClick={() => go(s.id)}
              aria-current={active === s.id ? "true" : undefined}
              aria-label={s.title}
              title={s.title}
            >
              <b>{String(i + 1).padStart(2, "0")}</b>
              <i aria-hidden="true" />
            </button>
          ))}
        </aside>

        <article className="legal__body">
          {draft && (
            <div className="legal__note">
              <i aria-hidden="true" />
              Placeholder layout. The owner’s {doc.title} goes here word for word.
            </div>
          )}

          {doc.glance && (
            <Reveal className="glance">
              <h2 className="h3">At a glance</h2>
              <div className="glance__grid">
                {doc.glance.map(([h, t]) => (
                  <div className="glance__card" key={h}>
                    <b>{h}</b>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <p className="glance__hint">A short summary for convenience. The full text below is what applies.</p>
            </Reveal>
          )}

          {intro.map((t, i) => (
            <p className="body legal__intro" key={i}>{linkify(t)}</p>
          ))}

          {sections.map((s, i) => (
            <section className="lsec" id={s.id} key={s.id}>
              <h2><b>{i + 1}.</b> {s.title}</h2>
              {s.blocks.map((b, j) => <Block key={j} text={b} />)}
              {draft && i === 0 && <p className="legal-caps">All-caps paragraphs from the owner's text go in this grey block, for example disclaimers.</p>}
            </section>
          ))}

          <div className="ask">
            <div>
              <h2 className="h3">Questions?</h2>
              <p>Write to us about {isPrivacy ? "this policy" : "these terms"}.</p>
            </div>
            <a className="btn btn--white btn--block" style={{ width: "auto" }} href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </article>
      </section>
    </>
  );
}
