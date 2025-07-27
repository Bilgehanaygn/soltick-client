import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, UseFormProps } from 'react-hook-form';
import { ZodTypeAny, z } from 'zod';

export function useZodForm<TSchema extends ZodTypeAny>(
  schema: TSchema,
  options?: UseFormProps<z.infer<TSchema>>
) {
  return useForm<z.infer<TSchema>>({
    resolver: zodResolver(schema),
    ...options,
  });
}
