import ProjectsPage from '@/components/Templates/Admin/ProjectsPage'
import connectDb from '@/utils/db'
import React from 'react'
import Project from '@/models/Project'

const Projects = async () => {
    await connectDb()
    const projects = await Project.find({})
    return <ProjectsPage projects={projects} />
}

export default Projects