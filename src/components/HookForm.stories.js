import { useForm, FormProvider } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useTheme } from '@emotion/react'

import Button from './Button'
import FormField from './FormField'
import Form from './Form'

export default {
  title: 'Forms/Hook Form',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

const schema = yup.object().shape({
  name: yup.string().required().trim().label('Name'),
  email: yup.string().required().email().trim().label('Email'),
  message: yup.string().required().trim().label('Message'),
})

const Story = () => {
  const theme = useTheme()

  const methods = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(schema),
  })

  const handleSubmit = (values) => {
    console.log(values) // eslint-disable-line no-console
  }

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(handleSubmit)} noValidate>
        <div
          css={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr)',
            gap: theme.space.base,
          }}
        >
          <FormField name="name" label="Name" required />
          <FormField type="email" name="email" label="Email" required />
          <FormField as="textarea" name="message" label="Message" required />
          <div>
            <Button type="primary" actionType="submit">
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </FormProvider>
  )
}

export const Overview = Story.bind({})
