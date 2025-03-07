
'use client';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { Button } from 'react-bootstrap';
import { SubmitHandler, useForm } from 'react-hook-form';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import * as Yup from 'yup';
import { MyButton } from './MyButton';

const theme = () =>
    createTheme({
        direction: 'rtl',
        palette: {
            primary: {
                main: '#2A60FF', // Your custom blue
            },
        },
    });

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const validationSchema = Yup.object().shape({
    fullName: Yup.string()
        .required('נא להזין שם מלא'),
    email: Yup.string()
        .email('כתובת אימייל לא תקינה')
        .required('נא להזין אימייל'),
    phoneNumber: Yup.string()
        .required('נא להזין מספר טלפון'),
    projectDescription: Yup.string()
        .required('נא לספר על הפרויקט שלכם'),
});
interface IContactForm {
    fullName: string;
    email: string;
    phoneNumber: string;
    projectDescription: string;
}

const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IContactForm>({
        resolver: yupResolver(validationSchema),

    });

    const onSubmit: SubmitHandler<IContactForm> = async (data) => {
        try {
            console.log('Form submitted successfully:', data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Box
                    className="contact-form"
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                >
                    <div className="upper-fields">
                        <TextField
                            className="field"
                            label="שם מלא"
                            variant="standard"
                            {...register('fullName')}
                            error={!!errors.fullName}
                            helperText={errors.fullName?.message}
                        />

                        <TextField
                            className="field"
                            label="אימייל"
                            variant="standard"
                            {...register('email')}
                            error={!!errors.email}
                            helperText={errors.email?.message}
                        />
                    </div>
                    <div className="lower-fields">
                        <TextField
                            className="field"
                            label="מספר טלפון"
                            variant="standard"
                            {...register('phoneNumber')}
                            error={!!errors.phoneNumber}
                            helperText={errors.phoneNumber?.message}
                        />

                        <TextField
                            className="field"
                            label="ספרו לי על הפרויקט שלכם"
                            variant="standard"
                            multiline
                            minRows={4}
                            {...register('projectDescription')}
                            error={!!errors.projectDescription}
                            helperText={errors.projectDescription?.message}
                        />
                    </div>
                    <MyButton className="send-btn" type="submit" as={Button} text="שליחת הפרטים" />
                </Box>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default ContactForm;
