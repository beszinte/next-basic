import { Layout } from "../components/layout";
import axios from "axios";
import useSWR from "swr";
import Head from "next/head";

const Profile = () => {

  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: "1px solid #DDD",
  };

  const url = "https://jsonplaceholder.typicode.com/users";

  /* créer une function fetcher que je vais passé dans notre hook personnalisé useSWR */
  const fetcher = url => axios.get(url).then(res => res.data)

  /* définir hook personnalisé
  const destructuré puis appelé useSWR, 
  1er parametre sera l'url de notre requete 
  2eme parametre la function fetcher où on a définit axios 
  hook personnalisé useSWR renvoie un objet qui se nomme data
  data contient la réponse de notre appell api
  et ns renvoie un autre objet error qui contient les erreurs au cas où */
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);

  /* afficher un loader
  si pas de data (!data) alors  */
  if (!data) return <h1>Chargement ...</h1>

  if (error) return <h1>Une erreur est survenue</h1>

  return (
    <>
      <Head>
        <title>Liste des utilisateurs</title>
      </Head>
      <Layout>
        {/* {JSON.stringify(data)} */}

        {/* vérifier si dta existe */}
        {data && data.map(user => (
          <div style={styles} key={user.id}>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Téléphone: {user.phone}</p>
          </div>
        ))
        }
      </Layout>
    </>
  );
};

export default Profile;
