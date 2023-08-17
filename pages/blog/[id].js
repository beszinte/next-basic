import { useRouter } from "next/router";
import { Layout } from "../../components/layout";
import axios from "axios";
import Head from "next/head";

const Titre = ({ data }) => {
  /* avec l'id, on va faire une requete pour recupérer chaque poste en fonction de son id dans getStaticProps */
  // console.log('id', id)

  return (
    /* avant tout déploiement, dans le cas e routes dynamiques, pour éviter que le deploiement echoue, mettre une condition avant de pouvoir envoyer des données
    ici, je dit "si dat existe alors execute le code" */
    <>
      {
        data && (
          <>
            <Head>
              <title>{data.title}</title>
            </Head>
            <Layout>
              {/* {JSON.stringify(data)} */}
              <h1>{data.title}</h1>
              <div>
                <img src={data.pictures[0]} />
              </div>
              <p>{data.description}</p>
            </Layout>
          </>
        )
      }
    </>

  );
};

export const getStaticPaths = async () => {
  const url = "https://udemy.fly.dev";
  const { data } = await axios.get(`${url}/api/posts`);
  const posts = data.data;
  // getStaticPaths a besoin de la liste des id, donc je vais renvoyer un nouveau tableau 
  // et à l'interieur je vais renvoyer tous les id de post
  const paths = posts.map(post => ({
    params: { id: post._id }
  }))

  /* je mets fallback à true pour que à chaque poste aouté l'id soient disponible à chauqe route dynamique*/

  return { paths, fallback: true }
}
export const getStaticProps = async ({ params }) => {
  const url = "https://udemy.fly.dev";
  const id = params.id;
  const { data } = await axios.get(`${url}/api/post/${id}`)

  return {
    props: {
      data
    }
  }
}
export default Titre;
