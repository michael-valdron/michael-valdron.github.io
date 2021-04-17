import React from "react";

const coverImage = (img: string) => ({
    background: `linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('${img}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto'
});

export default function Cover({ title, img }): JSX.Element {
    return (
        <div className="uk-height-large uk-background-cover uk-light uk-flex" style={coverImage(img)}>
            <h1 style={{ fontWeight: "bolder" }} className="uk-width-1-1@m uk-text-center uk-margin-auto uk-margin-auto-vertical">{title}</h1>
        </div>
    );
}
