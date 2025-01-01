import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/modal'
import React from 'react'

type Props = {
    title: string,
    children: React.ReactNode,
    isOpen: boolean,
    onClose: () => void
}

const CustomModal = ({ title, children, isOpen, onClose }: Props) => {
    return (
        <Modal isOpen={isOpen} size='lg' onClose={onClose} >

            <ModalContent className='p-2'>
                <ModalHeader className='border-b'>
                    {title} 
                </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default CustomModal