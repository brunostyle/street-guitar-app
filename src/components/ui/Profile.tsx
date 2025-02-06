import { Avatar, Drawer, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, Divider, Spacer, Progress, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/react';
import { HiddenTitle, HiddenSubtitle, Between } from '@styles';
import { CustomInput, FileImage, CustomButtonIcon, CustomButton } from '@components';
import { AiFillDelete, FiUsers, AiOutlineMail, MdLockOutline, BiPencil, AiOutlineSave, MdClose } from '@icons';
import { Form, Formik, FormikHelpers } from 'formik';
import { useUser } from '@state';
import { useState } from 'react';
import { useDeleteUser, useUpdateUser } from '@hooks';
import { userSchema } from '@validations';

export const Profile = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseModal } = useDisclosure();
    const [isEdit, setEdit] = useState(false);
    const { updateUser, isUpdating } = useUpdateUser();
    const { deleteUser, isDeleting } = useDeleteUser();
    const { user } = useUser();
    const initial = { name: '', email: '', password: '' };

    const handleSubmit = (data: any, helpers: FormikHelpers<any>) => {
        const noEmptyFields = Object.fromEntries(
            Object.entries(data).filter(value => value.at(1))
        );
        if (Object.keys(noEmptyFields).length === 0) return;
        updateUser({ id: user?.id, data: noEmptyFields }, {
            onSuccess: () => {
                setEdit(false);
                helpers.resetForm();
            }
        });
    }

    const handleDelete = () => {
        onCloseModal();
        deleteUser(user!)
    };

    return <>
        <CustomButtonIcon variant="light" onPress={onOpen}>
            <Avatar size="sm" color="primary" showFallback name={user?.name.charAt(0).toUpperCase()} src={user?.avatar} />
        </CustomButtonIcon>
        <Drawer hideCloseButton isOpen={isOpen} onOpenChange={onOpenChange} size="sm" placement="left" radius="none">
            <DrawerContent>
                <DrawerHeader>
                    <Between>
                        <div>
                            <HiddenTitle>Perfil</HiddenTitle>
                            <HiddenSubtitle>Editar informacion</HiddenSubtitle>
                        </div>
                        <div className="flex gap-2">
                            {isEdit && <CustomButtonIcon onPress={onOpenModal}><AiFillDelete /></CustomButtonIcon>}
                            <CustomButtonIcon onPress={() => setEdit(!isEdit)}><BiPencil /></CustomButtonIcon>
                        </div>
                    </Between>
                </DrawerHeader>
                <Divider />
                <DrawerBody>
                    <FileImage />
                    <Formik enableReinitialize initialValues={initial} onSubmit={handleSubmit} validationSchema={userSchema}>
                        <Form className="grid gap-4">
                            <CustomInput name="name" label="Nombre" placeholder={user?.name} isDisabled={!isEdit} variant="bordered" icon={<FiUsers />} />
                            <CustomInput name="email" label="Email" placeholder={user?.email} isDisabled={!isEdit} variant="bordered" icon={<AiOutlineMail />} />
                            <CustomInput name="password" label="Comtraseña" placeholder="******" isDisabled={!isEdit} variant="bordered" icon={<MdLockOutline />} />
                            <Spacer />
                            <CustomButton type="submit" isDisabled={!isEdit} color="primary" startContent={<AiOutlineSave />}>Guardar</CustomButton>
                            {(isUpdating || isDeleting) && <Progress size="sm" className="mt-4" isIndeterminate />}
                        </Form>
                    </Formik>
                </DrawerBody>
                <Modal isOpen={isOpenModal} onClose={onCloseModal} size="xs" placement="center">
                    <ModalContent>
                        <ModalHeader>
                            <div>
                                <HiddenTitle>Eliminar perfil</HiddenTitle>
                                <Spacer />
                                <HiddenSubtitle>Esta acción no se puede deshacer.</HiddenSubtitle>
                            </div>
                        </ModalHeader>
                        <Divider />
                        <ModalBody>
                            <p className="text-sm">Todos tus datos serán eliminados de forma permanente.</p>
                        </ModalBody>
                        <ModalFooter>
                            <CustomButton variant="flat" onPress={onCloseModal} startContent={<MdClose />}>Cancelar</CustomButton>
                            <CustomButton color="danger" onPress={handleDelete} startContent={<AiFillDelete />}>Eliminar</CustomButton>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </DrawerContent>
        </Drawer >
    </>
}