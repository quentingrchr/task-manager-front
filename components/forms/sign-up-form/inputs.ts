import { emailRegex, passwordRegex } from '@config/const'
import { IFormInput } from '@interfaces'

export const inputs: IFormInput[] = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    placeholder: 'Enter your email',
    pattern: emailRegex,
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    required: true,
    placeholder: 'Enter your password',
    pattern: passwordRegex,
    helperText:
      'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number or 1 special character',
  },
]
