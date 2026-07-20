import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const API_URL = 'https://portfolio-backend-4ogf.onrender.com';

export default function ContactMe() {
  const [popup, setPopup] = React.useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const formik = useFormik({
    initialValues: { name: '', email: '', subject: '', message: '' },

    validationSchema: yup.object({
      name: yup.string().trim().required('Please enter your name'),
      email: yup.string().email('Please enter a valid email').required('Please enter your email'),
      subject: yup.string().trim().required('Please enter a subject'),
      message: yup.string().trim().required('Please type your message'),
    }),

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await axios.post(`${API_URL}/send-email`, values, {
          timeout: 10000,
          headers: { 'Content-Type': 'application/json' },
        });

        setPopup({
          open: true,
          severity: 'success',
          message: response.data.message || 'Your message has been sent successfully.',
        });
        resetForm();
      } catch (error) {
        setPopup({
          open: true,
          severity: 'error',
          message: error.response?.data?.message || 'Could not send your message. Please try again.',
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      <Box component="form" id="send-mail-form" noValidate onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {[
            ['name', 'Enter your name'],
            ['email', 'Enter your email'],
            ['subject', 'Enter your subject'],
          ].map(([name, label]) => (
            <Grid item xs={12} key={name}>
              <TextField
                required
                fullWidth
                id={name}
                name={name}
                label={label}
                type={name === 'email' ? 'email' : 'text'}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[name] && Boolean(formik.errors[name])}
                helperText={formik.touched[name] && formik.errors[name]}
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              multiline
              rows={4}
              id="message"
              name="message"
              label="Enter your message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          fullWidth
          disabled={formik.isSubmitting}
          sx={{ mt: 3, mb: 2 }}
        >
          {formik.isSubmitting ? 'SENDING...' : 'SEND MAIL'}
        </Button>
      </Box>

      <Snackbar
        open={popup.open}
        autoHideDuration={5000}
        onClose={() => setPopup((current) => ({ ...current, open: false }))}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          severity={popup.severity}
          variant="filled"
          onClose={() => setPopup((current) => ({ ...current, open: false }))}
        >
          {popup.message}
        </Alert>
      </Snackbar>
    </>
  );
}