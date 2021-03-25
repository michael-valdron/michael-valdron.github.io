import React, { useEffect } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "prismjs/themes/prism-okaidia.css";
import Prism from "prismjs";
import "prismjs/components/prism-clojure";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-csharp";

const coverImage = (src) => ({
    background: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('${src}')`
});

export default function MdPage({ data }) {
    const page = data.markdownRemark;

    useEffect(Prism.highlightAll);

    return (
        <Layout pageTitle={page.frontmatter.title}>
            <div className="uk-height-large uk-background-cover uk-light uk-flex" style={coverImage(page.frontmatter.img)}>
                <h1 style={{ fontWeight: "bolder" }} className="uk-width-1-1@m uk-text-center uk-margin-auto uk-margin-auto-vertical">{page.frontmatter.title}</h1>
            </div>
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