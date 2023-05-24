import { api } from '@/services/api'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize: async (credentials, req) => {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        try {
          const response = await api.post('/user/signin', { email, password })
          const data = response.data

          return {
            id: data.id,
          }
        } catch (error) {
          throw new Error('Credenciais inválidas')
        }
      },
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.sub!
        session.user.email = token.email
        session.user.name = token.name
        session.user.role = token.role
      }

      return session
    },

    async jwt({ token, user }) {
      if (token?.email) {
        return token
      }

      const response = await api.post('/user/findById', { id: token.sub })
      const dbUser = response.data

      if (!dbUser) {
        if (user.id) {
          token.id = user?.id
        }
        return token
      }

      return {
        ...token,
        name: dbUser.name,
        email: dbUser.email,
        role: dbUser.role,
      }
    },
  },
}
