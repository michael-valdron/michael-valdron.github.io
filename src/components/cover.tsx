import React from "react";

type CoverProps = {title: string, img: string};

export default function Cover({ title, img }: CoverProps): JSX.Element {
    return (
        <div className="uk-background-blend-overlay uk-background-secondary uk-background-cover uk-height-large uk-light uk-flex" style={{backgroundImage: `url(${img})`}}>
            <h1 style={{ fontWeight: "bolder" }} className="uk-text-center uk-margin-auto uk-margin-auto-vertical">{title}</h1>
        </div>
    );
}
