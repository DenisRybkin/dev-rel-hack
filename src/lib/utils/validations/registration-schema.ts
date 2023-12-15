import * as z from 'zod';

export const RegistrationSchema = z
  .object({
    username: z
      .string()
      .nonempty('validation:error.field_required')
      .min(3, 'validation:error.min_char_number'),
    first_name: z
      .string()
      .nonempty('validation:error.field_required')
      .min(3, 'validation:error.min_char_number'),
    middle_name: z
      .string()
      .nonempty('validation:error.field_required')
      .min(3, 'validation:error.min_char_number'),
    last_name: z
      .string()
      .nonempty('validation:error.field_required')
      .min(3, 'validation:error.min_char_number'),
    email: z
      .string()
      .nonempty('validation:error.field_required')
      .email('validation:error.wrong_email')
      .min(6, 'validation:error.min_char_number'),
    password: z
      .string()
      .nonempty('validation:error.field_required')
      .min(6, 'validation:error.min_char_number'),
    city: z
      .string()
      .nonempty('validation:error.field_required')
      .min(3, 'validation:error.min_char_number'),
    birthdate: z.date({
      required_error: 'Дата рождения обязательная',
    }),
    passwordConfirm: z
      .string()
      .nonempty('validation:error.field_required')
      .min(6, 'validation:error.min_char_number'),
  })
  .refine(data => data.password == data.passwordConfirm, {
    message: 'validation:error.passwords_no_match',
    path: ['passwordConfirm'],
  });
