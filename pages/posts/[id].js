import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostsIds, getPostData } from "../../services/posts";

export default function Post({ postData }) {
    return <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        Identifier: {postData.id}
        <br />
        <h3>{postData.title}</h3>
        <p>{postData.body}</p>
    </Layout>
}

export async function getStaticPaths() {
    const paths = await getAllPostsIds()
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: { postData }
    }
}