import CustomButton from '@/components/module/CustomButton'
import { Project } from '@/types/Project'
import Image from 'next/image'
import React from 'react'

interface Props extends Project {
    picture: string
}

const ProjectCard = ({ name, description, picture, link, _id }: Props) => {
    return (
        <div className='relative  shadow-project bg-white px-4 py-3  rounded-lg'>
            <Image className='w-full   h-[500px] object-cover rounded-md' src={picture} width={800} height={800} alt={`project ${name}`} />
            <div className=' p-3 absolute bottom-5   left-1/2 transform  -translate-x-1/2 rounded-lg  w-10/12 flex flex-col gap-4 bg-white  shadow-custom'>
                <p className='flex items-center gap-2 '>
                    <span className='font-bold '>
                        نام پروژه :
                    </span>

                    <span>
                        {name}
                    </span>
                </p>
                <p>
                    <p className='flex items-center gap-2 '>
                        <span className='font-bold '>
                            توضیحات پروژه :
                        </span>

                        <span>
                        {description}

                        </span>
                    </p>
                </p>
                <div>
                    <CustomButton className='bg-black text-white  shadow-project font-bold'>
                        مشاهده
                    </CustomButton>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard