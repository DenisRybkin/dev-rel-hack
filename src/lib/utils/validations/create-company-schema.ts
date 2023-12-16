import * as z from 'zod';

export const CreateCompanySchema = z.object({
  title: z
    .string()
    .nonempty('validation:error.field_required')
    .min(3, 'validation:error.min_char_number'),
  description: z
    .string()
    .nonempty('validation:error.field_required')
    .min(3, 'validation:error.min_char_number'),
  city: z
    .string()
    .nonempty('validation:error.field_required')
    .min(3, 'validation:error.min_char_number'),
  avatar_id: z.number(),
});
