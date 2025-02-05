/* eslint-disable @typescript-eslint/no-require-imports */
import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const POST = async (request: NextRequest) => {
  try {
    const data = await request.json();
    const { name, price } = data;

    if (price < 50) {
      return NextResponse.json(
        { error: "Payment amount must be at least 50 cents." },
        { status: 400 }
      );
    }

    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "USD",
            product_data: { name },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success?payment=success",
      cancel_url: "http://localhost:3000/cancel",
    });

    return NextResponse.json({ url: checkoutSession.url });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error creating payment session:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
