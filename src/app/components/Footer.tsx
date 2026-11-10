import { Link, useLocation } from "react-router";
import { app, site } from "../content/site";
import { img } from "../utils/img";
import Btn from "./Btn";
import Phone from "./Phone";
import Reveal from "./Reveal";

// Only Home, App and About get the grey download card above the footer (as in the design).
const CTA = ["", "/app", "/about"];

export default function Footer() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "");
  const cta = CTA.includes(path);
  return (
    <>
      {cta && (
        <section className="wrap sec sec--tight-top">
          <Reveal className="card cta">
            <div className="cta__text">
              <h2 className="h2">Check in on home from anywhere.</h2>
              <p className="body">Download the app and add your first YI camera today.</p>
              <Btn href={app.url} className="cta__btn">Download on the App Store</Btn>
            </div>
            <Phone src={path === "" ? "/images/screen-activity.webp" : "/images/screen-live-activity.webp"} />
          </Reveal>
        </section>
      )}

      <footer className="footer">
        <div className="footer__inner">
          <div className="footer__top">
            <div className="footer__brand">
              <Link to="/" className="logo">
                <img src={img("/images/app-icon.png")} alt="" width={28} height={28} />
                <span>{site.brand}</span>
              </Link>
              <p>{site.disclaimer}</p>
              <a className="mail" href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className="footer__cols">
              <div>
                <span>Product</span>
                <Link to="/">Home</Link>
                <Link to="/app">App</Link>
                <Link to="/about">About</Link>
              </div>
              <div>
                <span>Help</span>
                <Link to="/support">Support</Link>
                <Link to="/feedback">Feedback</Link>
                <Link to="/contact">Contact</Link>
              </div>
              <div>
                <span>Legal</span>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms of Use</Link>
              </div>
            </div>
          </div>
          <div className="footer__copy">
            <span>© {site.year} {site.brand}</span>
            <a className="store" href={app.url} target="_blank" rel="noopener noreferrer">App Store</a>
            <button onClick={() => scrollTo({ top: 0, behavior: "smooth" })}>Back to top ↑</button>
          </div>
        </div>
      </footer>
    </>
  );
}
