import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx)
    //     return { ...initialProps}
    // }

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>                
            </Html>
        )
    }
}

export default MyDocument;