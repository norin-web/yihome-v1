import { img } from "../utils/img";

/** Flat app screen inside a CSS iPhone bezel — no plates or frames around it. */
export default function Phone({ src, alt = "", className = "", eager }: { src: string; alt?: string; className?: string; eager?: boolean }) {
  return (
    <div className={`phone ${className}`.trim()}>
      <img src={img(src)} alt={alt} width={590} height={1280} loading={eager ? "eager" : "lazy"} decoding="async" />
    </div>
  );
}
