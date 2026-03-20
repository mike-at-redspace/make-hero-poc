import { useMemo } from "react";
import styles from "./CastPills.module.css";

interface Props {
  castNames: string;
}

function parseCast(raw: string): string[] {
  return raw
    .replace(/<\/?span>/g, "")
    .split(",")
    .map((n) => n.trim())
    .filter(Boolean);
}

/** Parses API cast markup (`<span>Name</span>, …`) into readable pill labels. */
export const CastPills = ({ castNames }: Props) => {
  const cast = useMemo(() => parseCast(castNames), [castNames]);

  if (!cast.length) return null;

  return (
    <ul className={styles.list} aria-label="Cast">
      {cast.map((actor) => (
        <li key={actor} className={styles.pill}>
          {actor}
        </li>
      ))}
    </ul>
  );
};
