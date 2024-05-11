import { GraphQLClientSingleton } from "app/graphql";
import { customerName } from "app/graphql/queries/customerName";
import { cookies } from "next/headers";

export const validateAccessToken = async () => {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get("accessToken")?.value;
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

  if (!accessToken) return { customer: null };

  console.log(`Valor de token: ${accessToken}`);

  const data = await graphqlClient.request(customerName, {
    customerAccessToken: accessToken,
  });

  console.log(data);

  return data;
};
