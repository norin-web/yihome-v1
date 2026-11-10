import { site } from "../content/site";
import MailForm from "../components/MailForm";
import Reveal from "../components/Reveal";
import Split from "../components/Split";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__text">
        <Reveal as="span" className="eyebrow">Contact and feedback</Reveal>
        <Split as="h1" className="h1" parts={[["Write to us"]]} />
        <Reveal as="p" className="body" delay={150}>Questions, bugs or ideas for the app. We read every message.</Reveal>
        <Reveal delay={250}>
          <a className="contact__mail" href={`mailto:${site.email}`}>{site.email}</a>
        </Reveal>
      </div>
      <Reveal className="contact__form" delay={200}>
        <MailForm
          subject={`${site.brand} — feedback`}
          submit="Send message"
          fields={[
            { name: "name", label: "Name", required: true, auto: "name" },
            { name: "email", label: "Email", type: "email", required: true, auto: "email" },
            { name: "topic", label: "Topic", options: ["Feedback", "Bug report", "Camera won't connect", "Subscription", "Other"] },
            { name: "message", label: "Message", textarea: true, required: true },
          ]}
        />
      </Reveal>
    </section>
  );
}
