import { Avatar, Drawer, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, Divider, Progress, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Skeleton } from '@heroui/react';
import { HiddenTitle, HiddenSubtitle, Between, Flex, Gap } from '@styles';
import { CustomInput, FileImage, CustomButtonIcon, CustomButton, CustomInputPassword } from '@components';
import { IoTrashOutline, IoPersonOutline, IoMailOutline, IoLockClosedOutline, IoPencil, IoSaveOutline, IoCloseOutline } from '@icons';
import { Form, Formik } from 'formik';
import { useUser } from '@state';
import { useState } from 'react';
import { useDeleteUser, useUpdateUser } from '@hooks';
import { userSchema } from '@validations';
import type { FormikHelpers } from 'formik';

export const Profile = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseModal } = useDisclosure();
    const [isEdit, setEdit] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const { updateUser, isUpdating } = useUpdateUser();
    const { deleteUser, isDeleting } = useDeleteUser();
    const { isLogged, user } = useUser();
    const initial = { name: '', email: '', password: '' };

    const handleSubmit = (data: any, helpers: FormikHelpers<any>) => {
        const noEmptyFields = Object.fromEntries(
            Object.entries(data).filter(value => value[1])
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
            <Skeleton isLoaded={isLogged} className="rounded-large">
                <Avatar size="sm" color="primary" showFallback name={user?.name.charAt(0).toUpperCase()} src={user?.avatar} />
            </Skeleton>
        </CustomButtonIcon>
        <Drawer hideCloseButton isOpen={isOpen} onOpenChange={onOpenChange} size="sm" placement="left" radius="none">
            <DrawerContent>
                <DrawerHeader>
                    <Between>
                        <div>
                            <HiddenTitle>Perfil</HiddenTitle>
                            <HiddenSubtitle>Editar informacion</HiddenSubtitle>
                        </div>
                        <Flex>
                            {isEdit && <CustomButtonIcon onPress={onOpenModal}><IoTrashOutline /></CustomButtonIcon>}
                            <CustomButtonIcon onPress={() => setEdit(!isEdit)}><IoPencil /></CustomButtonIcon>
                        </Flex>
                    </Between>
                </DrawerHeader>
                <Divider />
                <DrawerBody>
                    <FileImage />
                    <Formik enableReinitialize initialValues={initial} onSubmit={handleSubmit} validationSchema={userSchema}>
                        <Form>
                            <Gap>
                                <CustomInput name="name" label="Nombre" placeholder={user?.name} isDisabled={!isEdit} variant="bordered" icon={<IoPersonOutline />} />
                                <CustomInput name="email" label="Email" placeholder={user?.email} isDisabled={!isEdit} variant="bordered" icon={<IoMailOutline />} />
                                <CustomInputPassword name="password" label="Contraseña" placeholder="******" isDisabled={!isEdit} variant="bordered" icon={<IoLockClosedOutline />} isVisible={isVisible} setIsVisible={setIsVisible} />
                                <CustomButton type="submit" isDisabled={!isEdit} color="primary" startContent={<IoSaveOutline />}>Guardar</CustomButton>
                                {(isUpdating || isDeleting) && <Progress size="sm" isIndeterminate />}
                            </Gap>
                        </Form>
                    </Formik>
                </DrawerBody>
                <Modal isOpen={isOpenModal} onClose={onCloseModal} size="xs" placement="center">
                    <ModalContent>
                        <ModalHeader>
                            <div>
                                <HiddenTitle>Eliminar perfil</HiddenTitle>
                                <HiddenSubtitle>Esta acción no se puede deshacer.</HiddenSubtitle>
                            </div>
                        </ModalHeader>
                        <Divider />
                        <ModalBody>
                            <p className="text-sm">Todos tus datos serán eliminados de forma permanente.</p>
                        </ModalBody>
                        <ModalFooter>
                            <Flex>
                                <CustomButton variant="flat" onPress={onCloseModal} startContent={<IoCloseOutline />}>Cancelar</CustomButton>
                                <CustomButton color="danger" onPress={handleDelete} startContent={<IoTrashOutline />}>Eliminar</CustomButton>
                            </Flex>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </DrawerContent>
        </Drawer >
    </>
}