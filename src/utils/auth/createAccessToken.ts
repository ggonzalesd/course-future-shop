import { GraphQLClientSingleton } from "app/graphql"
import { customerAccessTokenCreateMutation } from "app/graphql/mutations/customerAccessTokenCreate"
import { cookies } from "next/headers"

export const createAccessToken = async (email: string, password: string) => {
  const cookiesStore = cookies()
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const data:any = await graphqlClient.request(
    customerAccessTokenCreateMutation,
    {
      email,
      password,
    }
  )
  
  console.log(data)
  if(!data.customerAccessTokenCreate.customerAccessToken)
    return;
  const { accessToken, expiresAt } = data.customerAccessTokenCreate.customerAccessToken

  if(accessToken) {
    cookiesStore.set('accessToken', accessToken, {
      path: '/',
      expires: new Date(expiresAt),
      httpOnly: true,
      sameSite: 'strict',
    })
    return accessToken;
  }
}