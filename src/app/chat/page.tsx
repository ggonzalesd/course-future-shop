import Chat from "app/components/chat/Chat";
import { getProducts } from "app/services/shopify/products";
import { createAgent } from "app/utils/openai/createAgent";

export default async function ChatPage() {
  const products = await getProducts();
  const productsTitles = products.map(
    (product) => `* ${product.title} | ${product.price} | ${product.tags}`
  );
  const flatProducts = productsTitles.join("\n");

  const agent = createAgent(flatProducts);

  return (
    <>
      <h1>ChatBot</h1>
      <Chat agent={agent} />
    </>
  );
}
