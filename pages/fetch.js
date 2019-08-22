import Layout from "@comps/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const Fetch = props => {
  return (
    <Layout>
      <h1>Batman Tv Shows</h1>
      {
        <ul>
          {props.shows.map(show => (
            <li key={show.id}>
              <Link href="/p/[id]" as={`/p/${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      }
    </Layout>
  );
};

Fetch.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();

  console.log(`Show data fetched. Count:${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};

export default Fetch;
