import { GraphQLClientSingleton } from "app/graphql";
import { customerName } from "app/graphql/queries/customerName";
import { cookies } from "next/headers";

export const validateAccessToken = async () => {
  const cookiesStore = cookies();
  const accessToken = cookiesStore.get("accessToken")?.value;
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

  console.log(accessToken);

  const data = await graphqlClient.request(customerName, {
    customerAccessToken: accessToken,
  });

  console.log(data);

  return data;
};
