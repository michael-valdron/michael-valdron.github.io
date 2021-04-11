import React from 'react';

type KeywordProps = { 
    key: string,
    keywordStr: string 
};
type KeywordState = {};

export default class Keyword extends React.Component<KeywordProps, KeywordState, any> {
    constructor(props: KeywordProps) {
        super(props);
    }

    static parseKeywords(keywords: string): React.ReactNode {
        const sep = ',';
        return keywords.split(sep)
            .map<React.ReactNode>((keywordStr, idx) => <Keyword key={`${keywordStr}_${idx}`} keywordStr={keywordStr} />)
            .reduce((prev, curr, idx) => [prev, <span key={idx.toString()}>{sep}</span>, curr]);
    }

    render(): JSX.Element {
        const keywordClass = `#${this.props.keywordStr}`;
        return <a href={keywordClass}>{this.props.keywordStr}</a>;
    }
}
