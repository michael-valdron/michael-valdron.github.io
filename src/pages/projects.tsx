import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Layout from "../components/layout";
import Project from "../components/project";
import { ProjectModel } from "../utils/types";
import Cover from "../components/cover";

type State = {loading: boolean, projects?: JSX.Element[]};

const initState: State = {
    loading: false
};
const restInfo = {
    protocol: 'http',
    host: 'localhost',
    port: 3000
};

export default function Projects() {  
    const [appState, setAppState] = useState(initState);

    useEffect(() => {
        setAppState({ ...appState, loading: true });

        axios.defaults.baseURL = `${restInfo.protocol}://${restInfo.host}${(restInfo.port) ? `:${restInfo.port}` : ''}`;
        axios.get('/projects').then((res: AxiosResponse<string>) => {
            const projects: ProjectModel[] = JSON.parse(res.data);
            const projectElements: JSX.Element[] = projects.map((project) => 
                <Project
                    key={project._id}
                    _id={project._id} 
                    name={project.name} 
                    keywords={project.keywords} 
                    description={project.description}
                    links={project.links}
                    completionDate={project.completionDate}
                />
            );

            setAppState({ loading: false, projects: projectElements })
        }).catch((err) => {
            console.error(`An error occurred:\n${err}`);
        });
    }, [setAppState]);
    
    return (
        <Layout pageTitle="Projects">
                <Cover title="Projects" img="img/projects.jpg" />
                <div className="uk-margin-top uk-margin-bottom">
                    <div className="uk-container">
                        {(appState.loading || appState.projects === undefined) ? "Loading..." : appState.projects}
                    </div>
                </div>
        </Layout>
    );
}
