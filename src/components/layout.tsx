import React from "react";
import { Helmet } from "react-helmet"
import { Link, useStaticQuery, graphql } from "gatsby";
import { useIcons } from "../utils/icons";
import "uikit/dist/css/uikit.min.css";
import "uikit";

const active = (currentTitle: string, selectedTitle: string): string => 
    (currentTitle === selectedTitle) ? "uk-active" : "";

export default function Layout({ pageTitle, children }): JSX.Element {
    const data: {site: {siteMetadata: {title: string}}} = useStaticQuery(
        graphql`
            {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    );
    useIcons();

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{data.site.siteMetadata.title} - {pageTitle}</title>
            </Helmet>
            <div className="uk-position-relative">
                <nav className="uk-navbar-container" uk-navbar="true">
                    <div className="uk-navbar-center">
                    <ul className="uk-navbar-nav uk-navbar-center">
                        <li className={active(pageTitle, "Home")}><Link to="/">Home</Link></li>
                        <li className={active(pageTitle, "Projects")}><Link to="/projects">Projects</Link></li>
                        <li className={active(pageTitle, "Research")}><Link to="/research">Research</Link></li>
                        <li className={active(pageTitle, "Interests")}><Link to="/interests">Interests</Link></li>
                    </ul>
                    </div>
                </nav>
            </div>
            <div className="uk-position-relative">
                {children}
            </div>
            <div className="uk-position-relative uk-text-center uk-margin-top uk-margin-bottom">
                <div>
                    <a href="https://www.linkedin.com/in/michael-valdron-3b8614a5/" rel="noreferrer" target="_blank" className="uk-icon-button" uk-icon="linkedin">{""}</a>
                    &nbsp;
                    <a href="https://github.com/michael-valdron" rel="noreferrer" target="_blank" className="uk-icon-button" uk-icon="github">{""}</a>
                </div>
                <div>Copyright &copy; 2021 Michael Valdron</div>
            </div>
        </div>
    );
}