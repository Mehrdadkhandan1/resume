import CustomButton from '@/components/module/CustomButton'
import { Project } from '@/types/Project'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props extends Project {
    picture: string,
    key: number,
    name: string,
    _id: string,
    deadlineProject: { startDate: Date, endDate: Date }
}

const ProjectCard = ({ name, description, picture, link, _id, deadlineProject }: Props) => {
    return (
        <div className='relative  shadow-project bg-white px-4 py-3  rounded-xl'>
            <Image className='w-full   h-[500px] object-cover rounded-md' src={picture} width={800} height={800} alt={`project ${name}`} />
            <div className=' p-3 absolute bottom-5   left-1/2 transform  -translate-x-1/2 rounded-lg  w-11/12 flex flex-col gap-4 bg-white  shadow-custom'>
                <p className='flex items-center gap-2 '>
                    <span className='font-bold '>
                        نام پروژه :
                    </span>

                    <span>
                        {name}
                    </span>
                </p>
                <div>
                    <p className='flex items-center gap-2 '>
                        <span className='font-bold line-clamp-1'>
                            توضیحات پروژه :
                        </span>

                        <span>
                            {description}
                        </span>
                    </p>
                </div>
                <div className='flex justify-between font-bold'>
                    <p>
                        شروع پروژه : {new Date(deadlineProject.startDate).toLocaleDateString('fa')}
                    </p>
                    <p>
                        پایان پروژه : {new Date(deadlineProject.endDate).toLocaleDateString('fa')}
                    </p>
                </div>
                <div>
                    <CustomButton className='bg-black text-white  shadow-project font-bold'>
                        <Link href={`/admin/dashboard/projects/${_id}`}>
                            مشاهده
                        </Link>
                    </CustomButton>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard