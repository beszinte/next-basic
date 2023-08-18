import { Layout } from "../../components/layout";
import Head from "next/head";

const Items = () => {
  return (
    <>
      <Head>
        <title>Items</title>
      </Head>
      <Layout>
        <h1>Items</h1>
        <h1>Liste des categories</h1>
        <ul>
          <li>Culture</li>
          <li>Social</li>
          <li>Economique</li>
        </ul>
      </Layout>
    </>
  );
};

export default Items;
