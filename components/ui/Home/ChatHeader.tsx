"use client"
import CustomModal from '@/components/module/CustomModal';
import { useDisclosure } from '@nextui-org/modal';
import React from 'react'
import { RiChatAiLine } from 'react-icons/ri'
import { IoCallOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { LiaTelegram } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa6";

const ChatHeader = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <div className='w-10 h-10 hidden items-center justify-center md:flex'>
            <div onClick={() => onOpen()} className='p-1.5 bg-black  text-white cursor-pointer rounded-full text-24 '>
                <RiChatAiLine />
            </div>
            <CustomModal isOpen={isOpen} onClose={onClose} title='ارتباط با من'  >
                <div className='flex items-end gap-4 flex-col mt-2 font-semibold'>
                    <div className='flex items-center gap-3 '>
                        <a href='tel:+989936757472' className='items-center flex'>989936757472+ </a>
                        <IoCallOutline className='bg-black  rounded-full text-white p-1.5' size={28} />
                    </div>
                    <div className='flex items-center  gap gap-3 '>
                        <p className='items-center flex'> 1Mehrdadkhandan1@gmail.com </p>
                        <MdAlternateEmail className='bg-black  rounded-full text-white p-1.5' size={28} />
                    </div>
                    <div className='flex items-center  gap gap-3 '>
                        <p className='items-center flex'> Mehrdad_khandan@ </p>
                        <LiaTelegram className='bg-black  rounded-full text-white p-1.5' size={28} />
                    </div>
                    <div className='flex items-center  gap gap-3 '>
                        <p className='items-center flex'> _mehrdadkhandan@ </p>
                        <FaInstagram  className='bg-black  rounded-full text-white p-1.5' size={28} />
                    </div>
                </div>

            </CustomModal>
        </div>
    )
}

export default ChatHeader