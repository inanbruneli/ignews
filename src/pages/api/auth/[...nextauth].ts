import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { fauna } from '../../../services/fauna';
import { query as q } from "faunadb";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: '10fee26d440bfb7a7a46',
      clientSecret: '3101cd9f128d943b8167de4ce8f6ccbb11c2376f',
      authorization :{
        params: {
          scope: 'read:user'
        }
      }
    }),
  ],
  callbacks: {
    async session(session){      
      return {
        ...session.session,
        activeSession: false,
      }
    },
    
    async signIn(user){
      const {email} = user.user;

      await fauna.query(
        q.If( //se
          q.Not( //não
            q.Exists( //existir
              q.Match( //um usuario com esse email
                q.Index('user_by_email'),
                q.Casefold(email)
              )
            )
          ),
          q.Create( //entao cria ele
            q.Collection('users'),
            {data : { email }}
          ),
          q.Get( // se não, pega ele
            q.Match(
              q.Index('user_by_email'),
              q.Casefold(email)
            )
          )
        )
      )
      return true; 

    }
  },
  secret: 'aqoEL',
})