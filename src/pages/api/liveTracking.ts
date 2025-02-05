import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function liveTracking(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { trackingNumber, carrier } = req.body;

  try {
    const response = await axios.get(
      `https://api.goshippo.com/tracks/${carrier}/${trackingNumber}`,
      {
        headers: {
          Authorization: `ShippoToken ${process.env.NEXT_SHIPPO_API_KEY}`,
        },
      }
    );

    res.status(200).json({ trackingDetails: response.data });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching tracking details:", error.response?.data || error.message);
      res.status(500).json({ message: "Failed to fetch tracking details", error: error.response?.data });
    } else {
      console.error("Error fetching tracking details:", error);
      res.status(500).json({ message: "Failed to fetch tracking details", error: String(error) });
    }
  }
}
