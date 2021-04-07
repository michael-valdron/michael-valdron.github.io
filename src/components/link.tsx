import React from 'react';

export default function LinkLayout({ links, children }): JSX.Element {
    if (links !== undefined) {
        return (
            <a href={links.primary}>{children}</a>
        );
    } else {
        return children;
    }
}
