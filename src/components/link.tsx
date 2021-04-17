import React from "react";

type HeaderLinkProps = {label: string, link?: string};

export function HeaderLink({ label, link }: HeaderLinkProps): JSX.Element {
    const header = <h1 className="uk-heading-small">{label}</h1>;
    if (link) {
        return (
            <a className="uk-link-toggle" href={link} target="__blank">
                {header}
            </a>
        );
    }
    else {
        return (
            <div>
                {header}
            </div>
        );
    }
}
