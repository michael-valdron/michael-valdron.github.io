import React, { CSSProperties } from "react";
import { Helmet } from "react-helmet"
import { Link, useStaticQuery, graphql } from "gatsby";
import { useIcons } from "../utils/icons";
import "uikit/dist/css/uikit.min.css";
import "uikit";

const headerStyle: CSSProperties = {
    height: "85px"
};

const footerStyle: CSSProperties = {
    paddingTop: "25px",
    paddingBottom: "25px",
    boxShadow: "0px -4px 3px rgba(50, 50, 50, 0.1)"
};

const active = (currentTitle: string, selectedTitle: string): string => 
    (currentTitle === selectedTitle) ? "uk-active" : "";

type LayoutProps = {pageTitle: string, children?: JSX.Element | JSX.Element[]};

export default function Layout({ pageTitle, children }: LayoutProps): JSX.Element {
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
        <div className="uk-flex uk-flex-column uk-flex-wrap-middle uk-height-1-1">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{data.site.siteMetadata.title} - {pageTitle}</title>
            </Helmet>
            <div className="uk-flex-top">
                <header style={headerStyle}>
                    <nav className="uk-navbar uk-navbar-container" style={headerStyle} uk-sticky="true" uk-navbar="true">
                        <a className="uk-navbar-toggle uk-hidden@s" href="#" uk-toggle="target: #mobile-nav">
                            <span uk-navbar-toggle-icon="true"></span> <span className="uk-margin-small-left">Menu</span>
                        </a>
                        <div className="uk-navbar-center uk-visible@s">
                            <ul className="uk-navbar-nav">
                                <li className={active(pageTitle, "Home")}><Link to="/">Home</Link></li>
                                <li className={active(pageTitle, "Projects")}><Link to="/projects">Projects</Link></li>
                                <li className={active(pageTitle, "Publications")}><Link to="/publications">Publications</Link></li>
                                <li className={active(pageTitle, "Interests")}><Link to="/interests">Interests</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <div id="mobile-nav" uk-offcanvas="true">
                    <div className="uk-offcanvas-bar">
                        <ul className="uk-nav uk-nav-default">
                            <li className={[active(pageTitle, "Home"), "uk-text-large"].join(" ")}><Link to="/">Home</Link></li>
                            <li className={[active(pageTitle, "Projects"), "uk-text-large"].join(" ")}><Link to="/projects">Projects</Link></li>
                            <li className={[active(pageTitle, "Publications"), "uk-text-large"].join(" ")}><Link to="/publications">Publications</Link></li>
                            <li className={[active(pageTitle, "Interests"), "uk-text-large"].join(" ")}><Link to="/interests">Interests</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="uk-flex-middle">
                {children}
            </div>
            <div className="uk-flex-bottom">
                <div className="uk-text-center" style={footerStyle}>
                    <div>
                        <a href="https://www.linkedin.com/in/michael-valdron-3b8614a5/" rel="noreferrer" target="_blank" className="uk-icon-button uk-button-secondary" uk-icon="linkedin">{""}</a>
                        &nbsp;
                        <a href="https://github.com/michael-valdron" rel="noreferrer" target="_blank" className="uk-icon-button uk-button-secondary" uk-icon="github">{""}</a>
                    </div>
                    <div style={{height: '10px'}} />
                    <div>Copyright &copy; 2021 Michael Valdron</div>
                </div>
            </div>
        </div>
    );
}