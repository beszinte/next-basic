import { Layout } from "../components/layout";
import axios from 'axios';
import Head from "next/head";

const Departements = ({ data }) => {
    const style = {
        padding: 10,
        margin: 10,
        borderBottom: "1px solid #DDD",
    };

    return (
        <>
            <Head>
                <title>Liste des départments</title>
            </Head>
            <Layout>               
                {/* {JSON.stringify(data)} */}
                {data.map(departement => (
                    <div style={style} key={departement.code}>
                        <h1>Nom de département: {departement.nom}</h1>
                        <div>
                            Code de département: {departement.code}
                        </div>
                        <div>
                            Code de la région: {departement.codeRegion}
                        </div>
                    </div>
                ))
                }
            </Layout>
        </>
    )
}

export const getStaticProps = async () => {
    const url = "https://geo.api.gouv.fr/departements";
    const { data } = await axios.get(url);

    return {
        props: {
            data
        }
        
    }
}

// Departements.getInitialProps = async(context) => {
//     const url = "https://geo.api.gouv.fr/departements";
//     const {data} = await axios.get(url);

//     return {
//         data        
//     }
// }

export default Departements;