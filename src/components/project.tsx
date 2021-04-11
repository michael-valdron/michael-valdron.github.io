import React from 'react';
import { ProjectModel } from '../utils/types';
import Keyword from './keyword';

type ProjectProps = {
    key: string
} & ProjectModel;
type ProjectState = {};

export default class Project extends React.Component<ProjectProps, ProjectState, any> {
    constructor(props: ProjectProps) {
        super(props);
    }

    render(): JSX.Element {
        const completionDate = (this.props.completionDate) ? new Date(this.props.completionDate) : undefined;
        const keywords = (this.props.keywords) ? Keyword.parseKeywords(this.props.keywords) : undefined;

        return (
            <div className="uk-padding uk-margin-top uk-margin-bottom uk-card uk-card-default uk-card-hover uk-border-rounded uk-width-2-2@s">
                <div className="uk-margin-left">
                    <div className="uk-child-width-1-2" uk-grid="true">
                        <div>
                            <h1 className="uk-heading-small">{this.props.name}</h1>
                        </div>
                        <div className="uk-text-right">
                            <h4>{(completionDate) ? `${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(completionDate)} ${completionDate.getFullYear()}` : ""}</h4>
                            {(this.props.keywords) ? <p>Keywords: {keywords}</p> : ""}
                        </div>
                        {(this.props.links) ? <div><a href={this.props.links.primary} target="__blank">Preview</a></div> : ""}
                    </div>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}
