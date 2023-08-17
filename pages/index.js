import { Layout } from "../components/layout";
import axios from "axios";
import Link from "next/link";
import Head from "next/head";
import { useEffect } from "react";
// import Exemple from './../components/exemple';
// import dynamic from "next/dynamic";

/* utiliser localstorage avec la methode 2
si notre js est chargé tu peux afficher notre composant Exemple 
ajouter l'attribut ssr à false pour dire à nextJs que nous allons charger ces composant que cote client 
si je le met à tur je vais avoir l'erreur que localstorage n'est pas défini */

/*
ligne de code si on utilise export default Exemple dans exemple.js
const Exemple = dynamic( () => import ("../components/exemple"), {ssr: false} )
sinon utilisé celle avec .then()
*/

// const Exemple = dynamic( () => import ("../components/exemple").then(mod => mod.Exemple), {ssr: false} )

// je destructure pour mettre data
const Home = ({ data }) => {
  const styles = {
    padding: 10,
    margin: 10,
    borderBottom: "1px solid #DDD",
  };

  /* test de notre variable d'en coté client => undefined car on a pas mis le prefixe NEXT_PUBLIC*/
  // console.log('API_ROOT coté client', process.env.API_ROOT);
  // console.log('NEXT_PUBLIC_API_ROOT coté client', process.env.NEXT_PUBLIC_API_ROOT);

  /* 1. utiliser localstorage */
  useEffect( ()=> {
    localStorage.setItem("jwt-token", "ggrr5rrgrg22srgsr444");
  }, [])

  return ( 
    /* je vais créer des fragments et mettre Layout à l'int
    au niveau du fragment que je vais mettre Head */   
    <>
    <Head>
      <title>Liste des régions</title>
    </Head>
      <Layout>
        <div className="container-fluid">
          {/*afficher localStorage avec la methode 2 */}
          {/* <Exemple /> */}       

          {/*afficher une image du dossier public */}
          <img src="/images/redux.jpg" />
          
          {/* <h1>Cette page utilise getServerSideProps</h1> */}
          <h1>API regions test</h1>
          {/* pour afficher les datas
          {JSON.stringify(data)}
          */}

          {
            data.map(region => (
              <div style={styles} key={region.code}>
                {/* mettre liens à l'intérieur, on utilise as pcq c'est des parametres d'url */}
                <Link href="/region/" passHref as={`/region/${region.code}`}>
                  <h1>Nom de la région: {region.nom}</h1>
                </Link>
                
                <p>{region.code}</p>
              </div>
            ))
          }
        </div>
      </Layout>
    </>

  )
};
// new code après refactoring
export const getServerSideProps = async (context) => {
  //const url = process.env.API_GEO;
  //const {data} = await axios.get(url + "/regions");
  const {data} = await axios.get(`${process.env.API_GEO}/regions`);

  // console.log('API ROOT coté serveur', process.env.API_ROOT)
  // console.log('NEXT_PUBLIC_API ROOT coté serveur', process.env.NEXT_PUBLIC_API_ROOT)
  
  
  /* ça peut pas fonctionner, pcq que l'objet window n'st pas disponible cote serveur 
  deux methodes pour trouver solution
  1. utiliser useEffect
  2. utiliser des imports dynamiques pour désactiver le rendu coté serveur
  voir dans composants Exemple.js
   */
  //localStorage.setItem("jwt-token", "ggrr5rrgrg22srgsr4444")
  
  return {
    props: {
      data
    }
  }
}

//ancien code avant refactoring
// export async function getServerSideProps(context){
//   const url = "https://geo.api.gouv.fr";
//   const {data} = await axios.get(url + "/regions")
  
  /* dans nextjs tous les elements qui sont envoyés dans la function getServerSideProps,
  ils sont directement passés dans les composants principales comme des props 
  ne pas oublié de d'envoyer data dans notre composant Home pour avoir la props data */
  // if (!data) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   }
  // }`enter code here`
  // return {
  //   props: {
  //     data
  //   } // will be passed to the page component as props
  // }

//   return {
//     props: {
//       data
//     }
//   };
// };

/* final
export const getServerSideProps = async () => {
  const { data } = await axios.get(`${process.env.API_GEO}/regions`);
  
  return {
    props: {
      data,
    },
  };
};

 */

export default Home;
