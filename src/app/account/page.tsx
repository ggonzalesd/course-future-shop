import { getCustomerOrders } from "app/services/shopify/customer";
import { validateAccessToken } from "app/utils/auth/validateAccessToken";

export const dynamic = "force-dynamic";

export default async function MyAccountPage() {
  const { customer }: any = await validateAccessToken();
  const ordersInfo = await getCustomerOrders();

  console.log(ordersInfo);

  return (
    <div>
      <h2>My Account</h2>
    </div>
  );
}
