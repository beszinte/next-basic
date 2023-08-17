import { useRouter } from "next/router";
import axios from "axios";
import { Layout } from "../../components/layout";
import Head from "next/head";

const CodeRegion = ({ data }) => {
  const router = useRouter();

  return (
    <>
      {
        data && (
          <>
            <Head>
              <title>{data.nom}</title>
            </Head>
            <Layout>
              {/* pour afficher les data*/}
              {/* {JSON.stringify(data)} */}
              
              <h1>Region: {data.nom}</h1>
              <p>Code: {data.code}</p>
            </Layout>
          </>
        )
      }
    </>

  )
}
/* ici nous avons besoin de notre query pour faire une requete et récupérer les infos concernant la region
on va le faire avec getServerSidePorps
*/

// new code ave factoring
// on peut aussi déstructurer contexte en mettant params pour pouvoir supprimer context de context.params.code;
export const getServerSideProps = async ({ params }) => {
  const code = params.code;
  const url = "https://geo.api.gouv.fr";
  const { data } = await axios.get(`${url}/regions/${code}`);

  return {
    props: {
      data
    }
  }
}
// ancien code avant factoring

//export async function getServerSideProps(context) {
/* ici on ne peut pas utiliser le query de useRouter pcq c'est utilisé pour le coté client
mais on peut utiliser context qui a une propriété qui se nomme params et qui contient toutes les routes dynamiques*/
//const code = context.params.code;
/*a l'int je vais faire une requete axios pour recupérer les info concernant une region
*/
//     const url = "https://geo.api.gouv.fr";

//     const {data} = await axios.get(url + '/regions/' + code );

//     return {
//         props: {
//             /* les données que nous retourne l'api */
//             data
//         }
//     }
// }
export default CodeRegion;