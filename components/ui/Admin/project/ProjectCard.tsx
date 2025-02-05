import CustomButton from '@/components/module/CustomButton'
import { Project } from '@/types/Project'
import Image from 'next/image'
import React from 'react'

interface Props extends Project {
    picture: string
}

const ProjectCard = ({ name, description, picture, link, _id }: Props) => {
    return (
        <div className='relative'>
            <Image className='w-full  h-[200px]' src={picture} width={200} height={300} alt={`project ${name}`} />
            <div className='absolute p-3 w-11/12 flex flex-col gap-2 bg-white rounded-lg shadow-custom'>
                <p>
                    {name}
                </p>
                <p>
                    {description}
                </p>
                <CustomButton>
                    مشاهده 
                </CustomButton>
            </div>
        </div>
    )
}

export default ProjectCard