import { Avatar, Drawer, DrawerContent, DrawerHeader, DrawerBody, Separator, ProgressBar, Modal, ModalHeader, ModalBody, ModalFooter, ModalBackdrop, ModalContainer, ModalDialog, AvatarImage, AvatarFallback, DrawerBackdrop, DrawerDialog, ProgressBarFill, ProgressBarTrack, ModalCloseTrigger, Description, Skeleton } from '@heroui/react';
import { HiddenTitle, HiddenSubtitle, Between, Flex, Gap } from '@styles';
import { CustomInput, FileImage, CustomButtonIcon, CustomButton, CustomInputPassword } from '@components';
import { IoTrashOutline, IoPersonOutline, IoMailOutline, IoLockClosedOutline, IoPencil, IoSaveOutline } from '@icons';
import { Form, Formik } from 'formik';
import { useUser } from '@state';
import { useState } from 'react';
import { useDeleteUser, useUpdateUser } from '@hooks';
import { userSchema } from '@validations';
import type { FormikHelpers } from 'formik';

export const Profile = () => {
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
        deleteUser(user!)
    };

    return (
        <Drawer>
            <CustomButtonIcon variant="ghost">
                {!isLogged
                    ? <Skeleton className="rounded-4xl w-8 h-8" />
                    :
                    <Avatar size="sm" color="accent">
                        <AvatarImage src={user?.avatar} />
                        <AvatarFallback>{user?.name.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                }
            </CustomButtonIcon>
            <DrawerBackdrop>
                <DrawerContent placement="left">
                    <DrawerDialog className="rounded-none">
                        <DrawerHeader>
                            <Between>
                                <div>
                                    <HiddenTitle>Perfil</HiddenTitle>
                                    <HiddenSubtitle>Editar informacion</HiddenSubtitle>
                                </div>
                                <Flex>
                                    {isEdit &&
                                        <Modal>
                                            <CustomButtonIcon><IoTrashOutline /></CustomButtonIcon>
                                            <ModalBackdrop>
                                                <ModalContainer>
                                                    <ModalDialog>
                                                        <ModalCloseTrigger />
                                                        <ModalHeader>
                                                            <div>
                                                                <HiddenTitle>Eliminar perfil</HiddenTitle>
                                                                <HiddenSubtitle>Esta acción no se puede deshacer.</HiddenSubtitle>
                                                            </div>
                                                            <Separator />
                                                        </ModalHeader>
                                                        <ModalBody>
                                                            <Description>Todos tus datos serán eliminados de forma permanente.</Description>
                                                        </ModalBody>
                                                        <ModalFooter>
                                                            <Flex>
                                                                <CustomButton variant="danger" onPress={handleDelete} icon={<IoTrashOutline />}>Eliminar</CustomButton>
                                                            </Flex>
                                                        </ModalFooter>
                                                    </ModalDialog>
                                                </ModalContainer>
                                            </ModalBackdrop>
                                        </Modal>
                                    }
                                    <CustomButtonIcon onPress={() => setEdit(!isEdit)}><IoPencil /></CustomButtonIcon>
                                </Flex>
                            </Between>
                            <Separator />
                        </DrawerHeader>
                        <DrawerBody>
                            <FileImage />
                            <Formik enableReinitialize initialValues={initial} onSubmit={handleSubmit} validationSchema={userSchema}>
                                <Form>
                                    <Gap>
                                        <CustomInput name="name" label="Nombre" placeholder={user?.name} isDisabled={!isEdit} icon={<IoPersonOutline />} />
                                        <CustomInput name="email" label="Email" placeholder={user?.email} isDisabled={!isEdit} icon={<IoMailOutline />} />
                                        <CustomInputPassword name="password" label="Contraseña" placeholder="******" isDisabled={!isEdit} icon={<IoLockClosedOutline />} isVisible={isVisible} setIsVisible={setIsVisible} />
                                        <CustomButton fullWidth type="submit" isDisabled={!isEdit} variant="primary" icon={<IoSaveOutline />}>Guardar</CustomButton>
                                        {(isUpdating || isDeleting) && <ProgressBar size="sm" isIndeterminate>
                                            <ProgressBarTrack>
                                                <ProgressBarFill />
                                            </ProgressBarTrack>
                                        </ProgressBar>}
                                    </Gap>
                                </Form>
                            </Formik>
                        </DrawerBody>
                    </DrawerDialog>
                </DrawerContent>
            </DrawerBackdrop>
        </Drawer >
    )
}