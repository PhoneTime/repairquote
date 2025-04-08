import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Wrench, ShieldCheck, Clock, DollarSign, CheckCircle } from "lucide-react";

export default function RepairsPage() {
  return (
    <div className="bg-white text-gray-800">
      <section className="bg-blue-600 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Phone Repairs by Phone Time</h1>
        <p className="text-lg mb-6">Fast, affordable and professional repair services near you</p>
        <Button className="bg-white text-blue-600 hover:bg-blue-100">Book a Repair</Button>
      </section>
      <section className="py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          { icon: <Wrench />, title: "iPhone Repairs" },
          { icon: <Wrench />, title: "Samsung Repairs" },
          { icon: <Wrench />, title: "Screen Replacement" },
          { icon: <Wrench />, title: "Battery Replacement" },
          { icon: <Wrench />, title: "Water Damage" },
          { icon: <Wrench />, title: "Charging Issues" }
        ].map((service, index) => (
          <Card key={index} className="text-center shadow-md">
            <CardContent className="flex flex-col items-center py-6">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.title}</h3>
            </CardContent>
          </Card>
        ))}
      </section>
      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Phone Time?</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center max-w-6xl mx-auto">
          <div>
            <Clock className="mx-auto text-blue-600 mb-2" />
            <p>Fast turnaround</p>
          </div>
          <div>
            <DollarSign className="mx-auto text-blue-600 mb-2" />
            <p>5% Cash Discount</p>
          </div>
          <div>
            <ShieldCheck className="mx-auto text-blue-600 mb-2" />
            <p>Warranty Included</p>
          </div>
          <div>
            <CheckCircle className="mx-auto text-blue-600 mb-2" />
            <p>Genuine Parts</p>
          </div>
          <div>
            <Wrench className="mx-auto text-blue-600 mb-2" />
            <p>Trusted Professionals</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
        <ol className="space-y-4 list-decimal list-inside text-lg">
          <li>Get a quote or book online</li>
          <li>Bring or send your device</li>
          <li>We fix it, usually same-day</li>
          <li>Pick up or receive by post</li>
        </ol>
      </section>
      <section className="bg-gray-50 py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Do you provide warranty for repairs?</AccordionTrigger>
            <AccordionContent>
              Yes, all our repairs come with a warranty for peace of mind.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Do I need to book an appointment?</AccordionTrigger>
            <AccordionContent>
              No, walk-ins are welcome. But booking ahead ensures faster service.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How long does a screen replacement take?</AccordionTrigger>
            <AccordionContent>
              Most screen repairs are done within 1-2 hours.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <footer className="bg-blue-600 text-white py-8 text-center">
        <p className="text-lg">Contact us: 0468 897 890 | info@phonetime.com.au</p>
        <p className="text-sm mt-2">© {new Date().getFullYear()} Phone Time. All rights reserved.</p>
      </footer>
    </div>
  );
}