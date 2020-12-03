import Layout from "../components/layout";

export default function Custom404() {
    return (
        <Layout>
            <h1>404 - page not found </h1>
            <style jsx>{`
                h1 { font-family: 'Arial' }
            `}</style>
        </Layout>
    )
}