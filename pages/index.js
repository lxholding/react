import Layout from "@comps/MyLayout";
import Link from "next/link";

const ALink = props => {
  return (
    <li>
      <Link href={`${props.href}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  );
};

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const PostLink2 = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

const Index = () => {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
        <PostLink2 id="hello-nextjs" />
        <PostLink2 id="learn-nextjs" />
        <PostLink2 id="deploy-nextj" />
        <ALink href="/fetch" title="Fetch demo" />
      </ul>
    </Layout>
  );
};

export default Index;
