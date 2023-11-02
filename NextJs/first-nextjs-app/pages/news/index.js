import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJS is great</Link>
        </li>
        <li>Other Article</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
