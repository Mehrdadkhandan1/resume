
export type Project = {
    name: string,
    description: string,
    picture: FileList | string,
    link?: string,
    _id: string,
    deadlineProject: {
        startDate: Date,
        endDate: Date,
    }
}