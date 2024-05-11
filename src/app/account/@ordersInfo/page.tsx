import { getCustomerOrders } from "app/services/shopify/customer";

export default async function MyAccountPage() {
  const ordersInfo = await getCustomerOrders();

  return (
    <section>
      <h2>Orders</h2>
      {ordersInfo.orders.map((order: any) => (
        <p key={order.orderNumber}>{order.orderNumber}</p>
      ))}
    </section>
  );
}
