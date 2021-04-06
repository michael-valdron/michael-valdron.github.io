import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import Layout from "../components/layout";

type State = {loading: boolean, projects: Object[] | null};
const initState: State = {
    loading: false,
    projects: null
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
            const projects: Object[] = JSON.parse(res.data);

            setAppState({ loading: false, projects: projects })
        }).catch((err) => {
            console.error(`An error occurred:\n${err}`);
        });
    }, [setAppState]);
    
    return (
        <Layout pageTitle="Projects">
            <div>{(appState.loading || appState.projects === null) ? "Loading..." : JSON.stringify(appState.projects)}</div>
        </Layout>
    );
}
