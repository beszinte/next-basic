

/* je vais passer des props Components et pageProps
ce Component représente le composant de votre page
et pageProps représente les props passées dans votre application 
dans le cas ouù on utilise getServerProps ou getStaticProps toutes ces props seront passées avec pageProps
*/
const MyApp = ({Component, pageProps}) => {
    return <Component {...pageProps} />
}

export default MyApp;