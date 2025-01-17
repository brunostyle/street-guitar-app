import { Button, Avatar, Drawer, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, Divider, Spacer, Progress, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/react';
import { HiddenTitle, HiddenSubtitle, Between } from '@styles';
import { Input, FileImage } from '@components';
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
        <Button isIconOnly size="sm" variant="light" onPress={onOpen}>
            <Avatar size="sm" color="primary" showFallback name={user?.name.charAt(0).toUpperCase()} src={user?.avatar} />
        </Button>
        <Drawer hideCloseButton isOpen={isOpen} onOpenChange={onOpenChange} size="sm" placement="left" radius="none">
            <DrawerContent>
                <DrawerHeader>
                    <Between>
                        <div>
                            <HiddenTitle>Perfil</HiddenTitle>
                            <HiddenSubtitle>Editar informacion</HiddenSubtitle>
                        </div>
                        <div className="flex gap-2">
                            {isEdit && <Button isIconOnly size="sm" variant="flat" onPress={onOpenModal}><AiFillDelete /></Button>}
                            <Button isIconOnly size="sm" variant="flat" onPress={() => setEdit(!isEdit)}><BiPencil /></Button>
                        </div>
                    </Between>
                </DrawerHeader>
                <Divider />
                <DrawerBody>
                    <FileImage />
                    <Formik enableReinitialize initialValues={initial} onSubmit={handleSubmit} validationSchema={userSchema}>
                        <Form className="grid gap-4">
                            <Input name="name" label="Nombre" placeholder={user?.name} isDisabled={!isEdit} variant="bordered" icon={<FiUsers />} />
                            <Input name="email" label="Email" placeholder={user?.email} isDisabled={!isEdit} variant="bordered" icon={<AiOutlineMail />} />
                            <Input name="password" label="Comtraseña" placeholder="******" isDisabled={!isEdit} variant="bordered" icon={<MdLockOutline />} />
                            <Spacer />
                            <Button type="submit" isDisabled={!isEdit} size="sm" color="primary" startContent={<AiOutlineSave />}>Guardar</Button>
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
                            <Button size="sm" variant="flat" onPress={onCloseModal} startContent={<MdClose />}>Cancelar</Button>
                            <Button size="sm" color="danger" onPress={handleDelete} startContent={<AiFillDelete />}>Eliminar</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </DrawerContent>
        </Drawer >
    </>
}