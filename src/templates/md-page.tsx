import React, { useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Cover from "../components/cover";
import "prismjs/themes/prism-okaidia.css";
import Prism from "prismjs";
import "prismjs/components/prism-clojure";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-go";

type MdPageProps = { 
    data: { 
        markdownRemark: { 
            html: string, 
            frontmatter: { 
                title: string, 
                img: string 
            } 
        } 
    } 
};

export default function MdPage({ data }: MdPageProps) {
    const page = data.markdownRemark;

    useEffect(Prism.highlightAll);

    return (
        <Layout pageTitle={page.frontmatter.title}>
            <Cover title={page.frontmatter.title} img={page.frontmatter.img} />
            <div className="uk-container uk-margin-top uk-margin-bottom" dangerouslySetInnerHTML={{ __html: page.html }} />
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                img
            }
        }
    }
`