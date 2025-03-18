"use client";

import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import useBooking from './hooks/use-booking';
import { Property } from '@/type/properties';
import InputField from './components/field';

interface FormProps {
  name: string;
  email: string;
  phoneNumber: string;
  properties: Property;
}

const Form = () => {

  const { addBooking } = useBooking()

  const initialValues: FormProps = {
    name: '',
    email: '',
    phoneNumber: '',
    properties: {
      id: 0,
      name: "",
      location: "",
      price: 0,
      discount: 0,
      rating: 0,
      category: "",
      image: "",
    },
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required!').min(3, "Minimum characters is 3 characters!"),
    email: Yup.string().email('Invalid email!').required('Email is required!'),
    phoneNumber: Yup.string().required('Phone number is required!').min(10, "Minimum characters is 10 characters!"),
  })

  const handleSubmit = async (
    value: FormProps,
    { setSubmitting, resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    await addBooking(value);
    setSubmitting(false);
    resetForm();
  }

  return (
    <div className='w-full mt-5'>
      <h2 className='text-2xl mb-4'>Book this property now!</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            action=""
            className='flex flex-col w-full gap-6'
          >
            <InputField title='Name' placeholder='Name' name='name' />
            <InputField title='Email' placeholder='Email' name='email' />
            <InputField title='Phone Number' placeholder='Your Phone Number' name='phoneNumber' />
            <button className="text-white md:text-xl bg-blue-500 px-14 py-3.5 rounded-xl w-full mt-3">Book Now</button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default Form;