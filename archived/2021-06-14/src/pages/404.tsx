import React from 'react';
import Layout from '../components/layout';

export default function NotFound({ location }) {
    const title = "404 Error";

    return (
        <Layout pageTitle={title}>
            <div className="uk-container uk-margin-top uk-margin-bottom">
                <h1>{title}: Page Not Found</h1>
                <p>Cannot find page '{location.pathname}'.</p>
            </div>
        </Layout>
    );
};
