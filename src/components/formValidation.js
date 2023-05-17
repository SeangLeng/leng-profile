'use client';
import React from 'react'
import {Form, Formik, ErrorMessage, Field} from "formik";
import * as Yup from 'yup';

export default function FormValidation() {
    const validation = Yup.object({
        name: Yup.string().required("Username can not be blank"),
        email: Yup.string().email("Invalid email address"),
        address: Yup.string().required("Address cannot be blank"),
        description: Yup.string().required("Say something for your interest in this field")
    })
    const postUsers = (user) => {
        fetch("http://localhost:8080/userSent/responseMessage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => response.json()).then(response => console.log(response));
    }
    return (
        <Formik initialValues={
                {
                    name: "",
                    email: "",
                    address: "",
                    description: "",
                }
            }
            validationSchema={validation}
            onSubmit={
                (values, {setSubmitting}) => { // execute function to server
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        alert("Successfully submitted")
                        setSubmitting(false);
                        postUsers(values);
                    }, 400);

                }
        }>
            {
            ({isSubmitting}) => (
                <Form>
                    <div className="mb-3">
                        <Field type="text" name="name" className="form-control"/>
                        <ErrorMessage name="name" className="text-danger"/>
                    </div>
                    <div className="mb-3">
                        <Field type="email" name="email" className="form-control"/>
                        <ErrorMessage name="email"/>
                    </div>
                    <div className="mb-3">
                        <Field type="text" name="address" className="form-control"/>
                        <ErrorMessage name="address"/>
                    </div>
                    <div className="mb-3">

                        <Field as="textarea" type="text" name="description" className="form-control" />
                        <ErrorMessage name="role"/>
                    </div>
                    <button className="btn bg-success text-white" type="submit"
                        disabled={isSubmitting}>
                        Send
                    </button>
                </Form>
            )
        } </Formik>
    )
}
