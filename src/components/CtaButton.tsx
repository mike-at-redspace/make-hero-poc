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

/**
 * Primary CTA: anchor when `href` is set (opens in a new tab), otherwise a `<button type="button">`.
 */
export function CtaButton(props: Props) {
  const label = props.children ?? "Watch Now";
  const cls = `${styles.button}${props.className ? ` ${props.className}` : ""}`;

  if ("href" in props && typeof props.href === "string") {
    const {
      href,
      children: _children,
      className: _className,
      ...anchorRest
    } = props;
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        {...anchorRest}
      >
        <Inner label={label} />
      </a>
    );
  }

  const { children: _c, className: _cn, ...buttonRest } = props;
  return (
    <button type="button" className={cls} {...buttonRest}>
      <Inner label={label} />
    </button>
  );
}
