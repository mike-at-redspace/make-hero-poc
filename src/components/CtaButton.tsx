import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import styles from "./CtaButton.module.css";

interface BaseProps {
  children?: ReactNode;
  className?: string;
}

// Discriminated union so the prop shape is correct for each rendered element
type AnchorProps = BaseProps & { href: string } & Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "href"
  >;
type ButtonProps = BaseProps & {
  href?: never;
} & ButtonHTMLAttributes<HTMLButtonElement>;
type Props = AnchorProps | ButtonProps;

const Inner = ({ label }: { label: ReactNode }) => (
  <span className={styles.inner}>{label}</span>
);

export const CtaButton = ({ children, className, href, ...rest }: Props) => {
  const label = children ?? "Watch Now";
  const cls = `${styles.button}${className ? ` ${className}` : ""}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <Inner label={label} />
      </a>
    );
  }

  return (
    <button
      type="button"
      className={cls}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <Inner label={label} />
    </button>
  );
};
