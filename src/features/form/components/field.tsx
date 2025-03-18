import { FC } from "react";
import { Field, ErrorMessage } from 'formik';

interface InputProps {
    placeholder: string;
    title: string;
    name: string;
}

const InputField: FC<InputProps> = ({ title, placeholder, name }) => {
    return (
        <label htmlFor={placeholder} className="flex flex-col gap-3 w-full">
            <p className="text-lg font-normal">{title}</p>
            <Field type="text" placeholder={placeholder} name={name} className="md:text-xl focus:outline-blue-500 p-3 border-[1px] border-blue-50 w-full rounded-2xl"/>
            <ErrorMessage name={name} component="div" className="text-red-500 text-xs"/>
        </label>

    );
}

export default InputField;