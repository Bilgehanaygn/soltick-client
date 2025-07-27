import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormProps } from "react-hook-form";
import z, { ZodSchema } from "zod";

export function useZodForm<T extends ZodSchema<any, any>>(
  schema: T,
  options?: UseFormProps<z.infer<T>>
) {
  return useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    ...options,
  });
}
