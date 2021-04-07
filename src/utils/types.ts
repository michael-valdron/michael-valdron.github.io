export type ProjectModel = {
    _id: string,
    name: string,
    keywords?: string,
    description: string,
    links?: {
        primary: string,
        others?: string[]
    },
    completionDate?: string
};
