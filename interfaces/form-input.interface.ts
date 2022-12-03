export default interface IFormInput {
  label: string
  type: string
  name: string
  required: boolean
  placeholder: string
  helperText?: string
  pattern?: RegExp
}

/* regex that matches a valid email address */
