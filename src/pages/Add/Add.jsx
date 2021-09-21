import React, { useState } from 'react'
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { addItem } from '../../store/slices'
import styles from './styles.module.scss'

export default function Add() {
    const dispatch = useDispatch();

    const [redirect, setRedirect] = useState(false);

    return (
        <div className={styles.container}>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    location: '',
                    phone: ''
                }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    console.log('values', values)
                    dispatch(addItem(values))
                    setSubmitting(false);
                    setRedirect(true);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        {redirect && <Redirect to="/" />}
                        <label>
                            <div className={styles.title}>Name</div>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <div className={styles.error}>
                                {errors.name && touched.name && errors.name}
                            </div>
                        </label>
                        <label>
                            <div className={styles.title}>Email</div>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <div className={styles.error}>
                                {errors.email && touched.email && errors.email}
                            </div>
                        </label>
                        <label>
                            <div className={styles.title}>Location</div>
                            <input
                                type="text"
                                name="location"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.location}
                            />
                        </label>
                        <label>
                            <div className={styles.title}>Phone</div>
                            <input
                                type="text"
                                name="phone"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                            />
                        </label>
                        <button className={styles.submit} type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}
