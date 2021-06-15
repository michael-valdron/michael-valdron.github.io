import React from 'react';
import { ProjectModel } from '../utils/types';
import Keyword from './keyword';
import { HeaderLink } from './link';

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
                        <HeaderLink label={this.props.name} link={this.props.links?.primary} />
                        <div className="uk-text-right">
                            <h4>{(completionDate) ? `${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(completionDate)} ${completionDate.getFullYear()}` : ""}</h4>
                            {(this.props.keywords) ? <p>Keywords: {keywords}</p> : ""}
                        </div>
                    </div>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}
