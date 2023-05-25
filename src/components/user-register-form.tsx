'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { cn } from '@/lib/utils'
import { api } from '@/services/api'
import { Button } from './ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Icons } from './ui/icons'
import { Input } from './ui/input'
import { useToast } from './ui/use-toast'

const formFields = [
  {
    name: 'name',
    label: 'Nome',
    type: 'string',
    placeholder: 'John',
  },
  {
    name: 'lastname',
    label: 'Sobrenome',
    type: 'string',
    placeholder: 'Doe',
  },
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
  {
    name: 'confirmPassword',
    label: 'Confirme sua senha',
    type: 'password',
    placeholder: '********',
  },
] as const

const userRegisterFormSchema = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
  lastname: z.string().min(1, 'Campo obrigatório'),
  email: z.string().min(1, 'Campo obrigatório').email('Email inválido'),
  password: z.string().min(1, 'Campo obrigatório'),
  confirmPassword: z.string().min(1, 'Campo obrigatório'),
})

interface UserRegisterFormProps extends React.HTMLAttributes<HTMLDivElement> {}
type FormData = z.infer<typeof userRegisterFormSchema>

export function UserRegisterForm({
  className,
  ...props
}: UserRegisterFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const { toast } = useToast()
  const { push } = useRouter()

  const form = useForm<FormData>({
    resolver: zodResolver(userRegisterFormSchema),
    defaultValues: {
      name: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  async function onSubmit(data: FormData) {
    setIsLoading(true)

    if (data.password !== data.confirmPassword) {
      setIsLoading(false)
      return toast({
        title: 'Ups! Algo deu errado',
        description: 'Senhas não coincidem',
        variant: 'destructive',
      })
    }

    try {
      await api.post('/user/create', {
        name: data.name,
        lastname: data.lastname,
        dob: new Date(),
        email: data.email,
        password: data.password,
      })

      toast({
        title: 'Cadastro realizado com sucesso!',
        description: 'Você já pode fazer login na plataforma.',
      })

      push('/signin')
    } catch (error) {
      setIsLoading(false)
      toast({
        title: 'Ups! Algo deu errado',
        description: 'Este email já está cadastrado.',
        variant: 'destructive',
      })
    }
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
            Criar conta
          </Button>
        </form>
      </Form>
    </div>
  )
}
