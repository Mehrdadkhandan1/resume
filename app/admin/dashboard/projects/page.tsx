import ProjectsPage from '@/components/Templates/Admin/ProjectsPage'
import Project from '@/models/Project'
import { cache } from 'react'

const Projects = async () => {
    const projects = await Project.find({})

    return <ProjectsPage projects={projects} />
}

export default Projects