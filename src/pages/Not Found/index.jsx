import styles from "./NotFound.module.css";
import { Anchor } from "@boxicons/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <section className={styles.section} aria-labelledby="notFound-title">
        <h1 id="notFound-title">Error 404</h1>

        <p role="alert">
          <strong>Page not found.</strong> <br />
          The boat already sailed.
        </p>

        <Link to="/" className="buttonPrimary">
          return home
        </Link>

        <Anchor
          size="xl"
          rotate={20}
          className={styles.anchor}
          aria-hidden="true"
          focusable="false"
        />
      </section>
    </main>
  );
}
