import React from 'react';
import LinkLayout from './link';
import { ProjectModel } from '../utils/types';

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

        return (
            <div className="uk-padding uk-margin-top uk-margin-bottom uk-card uk-card-default uk-card-hover uk-border-rounded uk-width-2-2@s">
                <LinkLayout links={this.props.links}>
                    <div className="uk-margin-left">
                        <h1 className="uk-heading-small">{this.props.name}</h1>
                        <h4>{(completionDate) ? `${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(completionDate)} ${completionDate.getFullYear()}` : ""}</h4>
                        <p>{this.props.description}</p>
                    </div>
                </LinkLayout>
            </div>
        );
    }
}
