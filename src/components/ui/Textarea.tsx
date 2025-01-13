import { Textarea as TextField } from '@nextui-org/react';
import { ErrorMessage, Field } from 'formik';

interface ITextarea {
	name: string;
	label: string;
}

export const Textarea = ({ name, label }: ITextarea) => (
	<Field
		aria-label="Textarea"
		name={name}
		labelPlacement="outside"
      	label={label} 
		fullWidth
		isInvalid={<ErrorMessage name={name} />}
      	errorMessage={<ErrorMessage name={name} />}
		as={TextField}
	/>
);
