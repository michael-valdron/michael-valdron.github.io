import React from 'react';
import Layout from '../components/layout';

export default function Home(): JSX.Element {
    return (
        <Layout pageTitle="Home">
            <div className="uk-cover-container" uk-height-viewport="true">
                <img src="img/bg.png" alt="" uk-cover="true" uk-height-viewport="true" />
                <div className="uk-position-cover uk-flex uk-flex-center uk-flex-middle">
                    <div className="uk-card uk-card-default uk-border-rounded" style={{minWidth: "250px", width: "20%"}}>
                        <div className="uk-card-media-top uk-text-center">
                            <img className="uk-border-circle" src="img/profile.jpg" style={{ width: "60%", marginTop: 30 }} alt="Michael Valdron" />
                        </div>
                        <div className="uk-card-body">
                            <h1 className="uk-card-title uk-text-center">Michael Valdron</h1>
                            {/* <div className="uk-visible-toggle" tabIndex={-1} uk-slideshow="autoplay: true; autoplay-interval: 5000; max-height: 25;">
                                <ul className="uk-slideshow-items">
                                    <li> */}
                                        <p className="uk-text-center">Software Engineer</p>
                                    {/* </li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
