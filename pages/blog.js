import { Layout } from "../components/layout";
import Link from "next/link";
import axios from "axios";
import Head from "next/head";

/* dans notre blog, data est passé comme des props */

const Blog = ({posts}) => {
  const styles = {
    main: {
      padding: 20,
      margin: 20,
      borderBottom: "1px solid #DDD",
    },
    img: {
      height: 200,
      width: 300,
    },
  };

  return (
    <>
    <Head>
      <title>Liste des blogs</title>
    </Head>
    <Layout>
      {/* <h1>Cette page utilise getStaticProps</h1> */}
      {/*afficher les données
      {JSON.stringify(posts)};
      */}
      {      
        posts.map( post => (
          <div style={styles.main} key={post._id}>
            <h1>{post.title}</h1>
            {/* on va accéder à chaque poster en cliquant sur l'image 
            comme c une route dynamique avec des parametres d'url, on va ajouté l'attribut as  */}
            <Link href="/blog/[id]" as={`/blog/${post._id}`} passHref>
              {/* affichage des images depuis l'api, dans pictures, il s'agit d'un tableau */}
              <div>              
                <img src={post.pictures[0]} style={styles.img}/>
              </div>             
            </Link>
            {/* affichage de la balise body de l'api */}
            <div>
              {post.body}
            </div>
          </div>
        ))
      }      
    </Layout>
    </>
  );
};

export const getStaticProps = async (context) => {
  const url = "https://udemy.fly.dev";
  /* dans cet url, on voit qu'on a 10 items*/
  const { data } = await axios.get(`${url}/api/posts`);
  /* ici je fais data.data prace que dans cette api, les données sont renvoyées dans data 
  dans l'ex de gouv https://geo.api.gouv.fr/regions on voit que les données ne sont pas à l'int de data  mais directement renvoyés dans un tableau */
  const posts = data.data;

  return {
    props: {
      posts
    }
  };
};

export default Blog;