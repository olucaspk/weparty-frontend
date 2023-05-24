'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Icons } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'

const formFields = [
  {
    name: 'email',
    label: 'Email',
    type: 'string',
    placeholder: 'john@weparty.gg',
  },
  {
    name: 'password',
    label: 'Senha',
    type: 'password',
    placeholder: '********',
  },
] as const

const userAuthFormSchema = z.object({
  email: z.string().min(1, 'Campo obrigatório').email('Email inválido'),
  password: z.string().min(1, 'Campo obrigatório'),
})

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthFormSchema>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const { toast } = useToast()
  const { push } = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const searchParams = useSearchParams()

  const form = useForm<FormData>({
    resolver: zodResolver(userAuthFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: FormData) {
    setIsLoading(true)

    const signInResult = await signIn('credentials', {
      email: data.email.toLowerCase(),
      password: data.password,
      redirect: false,
      callbackUrl: searchParams?.get('from') || '/dashboard',
    })

    setIsLoading(false)

    if (!signInResult?.ok) {
      return toast({
        title: 'Ups! Algo deu errado',
        description: 'Verifique suas credenciais e tente novamente.',
        variant: 'destructive',
      })
    }

    push(signInResult.url ?? '/dashboard')
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-2 px-2"
        >
          {formFields.map((formField) => (
            <FormField
              key={formField.name}
              control={form.control}
              name={formField.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{formField.label}</FormLabel>
                  <FormControl>
                    <Input
                      type={formField.type}
                      placeholder={formField.placeholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit" disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Entrar
          </Button>
        </form>
      </Form>
    </div>
  )
}
