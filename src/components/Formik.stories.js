import { useTheme } from '@emotion/react'
import { Form, Formik } from 'formik'
import * as yup from 'yup'

import Button from './Button'
import FormControlWrapper from './FormControlWrapper'
import FormFooter from './FormFooter'
import FormikField from './FormikField'
import FormLabel from './FormLabel'

export default {
  title: 'Forms/Formik',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

const schema = yup.object().shape({
  name: yup.string().required().trim().label('Name'),
  email: yup.string().required().email().trim().label('Email'),
  message: yup.string().required().trim().label('Message'),
  terms: yup.boolean().oneOf([true], 'Must accept terms'),
  choice: yup.string().required().trim().label('Choice'),
})

const Story = () => {
  const theme = useTheme()

  const handleSubmit = (values) => {
    console.log(values) // eslint-disable-line no-console
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
        terms: true,
        choice: 'basketball',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values, errors }) => (
        <Form>
          <div
            css={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr)',
              gap: theme.space.base,
            }}
          >
            <FormikField name="name" label="Name" required />
            <FormikField type="email" name="email" label="Email" required />
            <FormikField
              as="textarea"
              name="message"
              label="Message"
              required
            />
            <FormControlWrapper>
              <FormLabel>Terms</FormLabel>
              <FormikField
                as="checkbox"
                name="terms"
                label="Accept terms"
                defaultChecked={values.terms}
              />
              <FormFooter validationMessage={errors.terms} />
            </FormControlWrapper>
            <FormControlWrapper>
              <FormLabel>Choices</FormLabel>
              <div css={{ display: 'grid', gap: theme.space.small }}>
                <FormikField
                  as="radio"
                  name="choice"
                  value="basketball"
                  label="Basketball"
                  defaultChecked={values.choice === 'basketball'}
                />
                <FormikField
                  as="radio"
                  name="choice"
                  value="football"
                  label="Football"
                  defaultChecked={values.choice === 'football'}
                />
                <FormikField
                  as="radio"
                  name="choice"
                  value="baseball"
                  label="Baseball"
                  defaultChecked={values.choice === 'baseball'}
                />
              </div>
              <FormFooter validationMessage={errors.choice} />
            </FormControlWrapper>
            <div>
              <Button type="primary" actionType="submit">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export const Overview = Story.bind({})
