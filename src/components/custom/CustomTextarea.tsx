import { Textarea } from '@heroui/react';
import { ErrorMessage, Field } from 'formik';

interface ITextarea {
	name: string;
	label: string;
	placeholder?: string;
}

export const CustomTextarea = ({ name, label, placeholder }: ITextarea) => (
	<Field
		aria-label="Textarea"
		name={name}
		labelPlacement="outside"
      	label={label} 
		placeholder={placeholder}
		size="sm"
		fullWidth
		isInvalid={<ErrorMessage name={name} />}
      	errorMessage={<ErrorMessage name={name} />}
		as={Textarea}
	/>
);
