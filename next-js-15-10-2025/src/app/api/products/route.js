import { NextRequest } from "next/server";

export const GET = async (req: NextRequest, res) => {
  // Simulate fetching products from a database
  const products = [
    { id: 1, name: "Product A", price: 29.99 },
    { id: 2, name: "Product B", price: 49.99 },
    { id: 3, name: "Product C", price: 19.99 },
  ];

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};