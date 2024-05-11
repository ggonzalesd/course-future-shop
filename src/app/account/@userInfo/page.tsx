import { validateAccessToken } from "app/utils/auth/validateAccessToken";

export default async function MyAccountPage() {
  const { customer }: any = await validateAccessToken();

  return (
    <section>
      <h2>Your info</h2>
      <h1>Bienvenido: {customer.firstName}</h1>
      <p>email: {customer.email}</p>
    </section>
  );
}
