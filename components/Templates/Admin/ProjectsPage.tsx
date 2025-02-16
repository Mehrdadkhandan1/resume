import ProjectCard from '@/components/ui/Admin/project/ProjectCard'
import React from 'react'



const ProjectsPage = ({ projects }: { projects: any[] | null }) => {
  return (
    <div className='container-grid'>
      <h3 className='text-24 font-bold col-span-11 my-3'>
        پروژه ها
      </h3>
      <div className='grid grid-cols-2 col-span-11 gap-10   pb-10'>
        {projects.map((item) => {
          return <ProjectCard deadlineProject={item.deadlineProject} key={item._id} name={item.name} _id={item._id} description={item.description} picture={item.picture} />
        })}
      </div>
    </div>
  )
}

export default ProjectsPage