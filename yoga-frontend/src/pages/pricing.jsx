import React, { useState, useEffect } from "react";

const plans = [
  {
    name: "Bumper Saver Package",
    duration: "12 Months",
    price: 3099,
    maxRedeem: 2325,
  },
  {
    name: "Super Saver Package",
    duration: "6 Months",
    price: 2499,
    maxRedeem: 1875,
  },
  {
    name: "Big Saver Package",
    duration: "3 Months",
    price: 1699,
    maxRedeem: 1275,
  },
];

const packages = [
  {
    type: "Bumper Saver Package",
    period: "12 Months",
    original: 12000,
    discount: "74% OFF",
    offerINR: 3099,
    redeemINR: 2325,
    balanceINR: 774,
    offerUSD: 85,
    redeemUSD: 64,
    balanceUSD: 21,
  },
  {
    type: "Super Saver Package",
    period: "6 Months",
    original: 6000,
    discount: "58% OFF",
    offerINR: 2499,
    redeemINR: 1875,
    balanceINR: 624,
    offerUSD: 55,
    redeemUSD: 42,
    balanceUSD: 13,
  },
  {
    type: "Big Saver Package",
    period: "3 Months",
    original: 3000,
    discount: "43% OFF",
    offerINR: 1699,
    redeemINR: 1275,
    balanceINR: 424,
    offerUSD: 35,
    redeemUSD: 26,
    balanceUSD: 9,
  },
];

function Pricing() {
  const [invoiceNo] = useState("YS/2026/00001");
  const [date] = useState(new Date().toISOString().split("T")[0]);
  const [subscriber, setSubscriber] = useState({ name: "", email: "" });
  const [plan, setPlan] = useState(plans[0]);
  const [referralUsed, setReferralUsed] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (startDate) {
      const months = parseInt(plan.duration.split(" ")[0]);
      const d = new Date(startDate);
      d.setMonth(d.getMonth() + months);
      setEndDate(d.toISOString().split("T")[0]);
    }
  }, [startDate, plan]);

  const netAmount = Math.max(plan.price - referralUsed, 0);

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-10">
      {/* Invoice Card */}
      <div className="bg-white shadow-md p-6 rounded-lg border">
        <h2 className="text-2xl font-bold text-center text-black mb-10">
          🧾 Invoices Sheet
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p>
              <strong>Invoice No:</strong> {invoiceNo}
            </p>
            <p>
              <strong>Date of Issue:</strong> {date}
            </p>
          </div>
          <div>
            <p>
              <strong>Name:</strong> {subscriber.name}
            </p>
            <p>
              <strong>Email:</strong> {subscriber.email}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 my-4">
          <input
            className="border border-black w-full px-2 py-1 rounded"
            placeholder="Subscriber Name"
            onChange={(e) =>
              setSubscriber({ ...subscriber, name: e.target.value })
            }
          />
          <input
            className="border border-black w-full px-2 py-1 rounded"
            placeholder="Subscriber Email"
            onChange={(e) =>
              setSubscriber({ ...subscriber, email: e.target.value })
            }
          />
          <select
            className="border border-black w-full px-2 py-1 rounded"
            value={plan.name}
            onChange={(e) => {
              const selected = plans.find((p) => p.name === e.target.value);
              setPlan(selected);
              setReferralUsed(0);
            }}
          >
            {plans.map((p) => (
              <option key={p.name}>{p.name}</option>
            ))}
          </select>
          <input
            className="border border-black w-full px-2 py-1 rounded"
            type="number"
            placeholder="Referral Points Used"
            value={referralUsed}
            onChange={(e) => {
              const val = parseInt(e.target.value) || 0;
              setReferralUsed(val > plan.maxRedeem ? plan.maxRedeem : val);
            }}
          />
          <input
            className="border border-black w-full px-2 py-1 rounded"
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            className="border border-black w-full px-2 py-1 rounded"
            type="date"
            value={endDate}
            readOnly
          />
        </div>

        <table className="w-full border text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Description</th>
              <th className="p-2 border text-right">Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Subscription – {plan.name}</td>
              <td className="p-2 border text-right">
                ₹{plan.price.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td className="p-2 border">Less: Referral Redeemed</td>
              <td className="p-2 border text-right text-red-500">
                -₹{referralUsed.toFixed(2)}
              </td>
            </tr>
            <tr className="bg-yellow-50 font-semibold">
              <td className="p-2 border">Net Payable</td>
              <td className="p-2 border text-right">₹{netAmount.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-4 text-sm text-gray-600">
          <p>🔹 Referral discount applied: ₹{referralUsed}</p>
          <p>
            🔹 Referral points are promotional, non-cash & non-transferable.
          </p>
          <p className="mt-2">
            🙏 Thank you for subscribing to <strong>Yog Saathi</strong>!
          </p>
        </div>
      </div>

      {/* Terms Note */}
      <div className="bg-white p-4 rounded-lg shadow-sm text-sm border">
        <p className="mb-2">
          <strong>Back updation while creating invoice</strong> – Referral
          Account Updation after redeeming
        </p>
        <p className="mb-2">
          <strong>Every Referral on Joining</strong> – 75 Points or Rs. 75/- on
          joining the free trial
        </p>
        <p className="mb-2">
          <strong>Max Points which can be retained in Account – 5000</strong>{" "}
          (Redeem before it)if it exceeds the prescribed limit, the points in
          excess of prescribed limit (5000 Points) shall expire. Therefore, it
          is advisable to redeem the maximum points at the time renewal of
          subscription. The points are non-transferrable.{" "}
        </p>
        <p>
          <strong>
            Maximum 75% of full subscription amount can be redeemed
          </strong>
          , balance 25% need to be paid.
        </p>
      </div>

      {/* Pricing Table INR & USD */}
      <div className="bg-white shadow-md p-6 rounded-lg border">
        <h2 className="text-xl font-bold mb-4">Package Pricing (INR)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border text-sm">
            <thead className="bg-yellow-300">
              <tr>
                <th className="border p-2">Package Type</th>
                {packages.map((plan) => (
                  <th key={plan.type} className="border p-2">
                    {plan.type}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Period</td>
                {packages.map((plan) => (
                  <td className="border p-2 text-center">{plan.period}</td>
                ))}
              </tr>
              <tr>
                <td className="border p-2">Original</td>
                {packages.map((plan) => (
                  <td className="border p-2 text-center">₹{plan.original}</td>
                ))}
              </tr>
              <tr>
                <td className="border p-2">Percent Off</td>
                {packages.map((plan) => (
                  <td className="border p-2 text-center">{plan.discount}</td>
                ))}
              </tr>
              <tr className="bg-yellow-100 font-semibold">
                <td className="border p-2">Package Offer INR</td>
                {packages.map((plan) => (
                  <td className="border p-2 text-center">₹{plan.offerINR}</td>
                ))}
              </tr>
              <tr>
                <td className="border p-2">Redeem (75%)</td>
                {packages.map((plan) => (
                  <td className="border p-2 text-center">₹{plan.redeemINR}</td>
                ))}
              </tr>
              <tr>
                <td className="border p-2">Balance Payable</td>
                {packages.map((plan) => (
                  <td className="border p-2 text-center text-red-600 font-medium">
                    ₹{plan.balanceINR}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mt-6 mb-4">Package Pricing (USD)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border text-sm">
            <thead className="bg-yellow-300">
              <tr>
                <th className="border p-2">Package Type</th>
                {packages.map((plan) => (
                  <th key={plan.type} className="border p-2">
                    {plan.type}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Offer USD</td>
                {packages.map((plan) => (
                  <td className="border p-2 text-center">${plan.offerUSD}</td>
                ))}
              </tr>
              <tr>
                <td className="border p-2">Redeem (75%)</td>
                {packages.map((plan) => (
                  <td className="border p-2 text-center">${plan.redeemUSD}</td>
                ))}
              </tr>
              <tr>
                <td className="border p-2">Balance Payable</td>
                {packages.map((plan) => (
                  <td className="border p-2 text-center text-red-600 font-medium">
                    ${plan.balanceUSD}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          <p>
            <strong>In case of GST:</strong>
          </p>
          <p>Subscription Plan: ₹3,099/- (inclusive of 18% GST)</p>
          <p>🎯 Referral Discount Applied: ₹300</p>
          <p>Net amount considered for GST: ₹2,799</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
