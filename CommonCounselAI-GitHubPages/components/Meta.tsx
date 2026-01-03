import Head from "next/head";
import { DEFAULTS } from "../lib/seo";

export function Meta(props: { title?: string; description?: string }) {
  const title = props.title ?? DEFAULTS.title;
  const description = props.description ?? DEFAULTS.description;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="robots" content="index,follow" />
    </Head>
  );
}
