import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const caseStudies = [
  {
    id: "real-estate",
    icon: "🏘️",
    title: "Case Study: Australian Real Estate Agency",
    summary: "How a real estate business used AI to reduce missed leads by 95% and increase sales by 28%.",
    content: `
      <h1>Case Study: Australian Real Estate Agency</h1>
      <h2>Problem:</h2>
      <p>A multi-location real estate agency was losing leads because his team rarely followed up with prospects who inquired through calls or visited their website. Many hot leads went cold due to lack of communication. They also had no data on which properties were getting the most attention.</p>
      <h2>Solution Implemented:</h2>
      <p>Deployed a voice agent to handle all property inquiry calls, answer FAQs, and collect caller preferences. A chatbot was added to their website and Facebook page for 24/7 engagement. Every inquiry was logged, and automated follow-up messages were triggered. The AI also analysed conversations to determine which property types were getting the most traction.</p>
      <h2>Results:</h2>
      <ul>
        <li>Missed leads dropped by <strong>95%</strong>.</li>
        <li>Conversion from lead to site visit jumped by <strong>60%</strong>.</li>
        <li>Sales increased by <strong>28%</strong> in 90 days.</li>
        <li>Focused promotions on trending properties led to <strong>22%</strong> higher ROI on ads.</li>
      </ul>
    `,
    sidebar: {
      company: "Leading Agency",
      industry: "Australian Real Estate",
      location: "Australia",
      topics: "Lead Generation, Sales Automation, AI Voice Agent",
    },
  },
  {
    id: "health-clinic",
    icon: "🏥",
    title: "Case Study: Australian Health Clinic",
    summary: "Automating patient bookings to reduce staff workload by 40% and increase appointments by 35%.",
    content: `
      <h1>Case Study: Australian Health Clinic</h1>
      <h2>Problem:</h2>
      <p>A busy clinic faced call congestion daily — patients either hung up due to long hold times or gave incomplete information. Staff were overworked and couldn’t clearly see which services were most in demand week-to-week.</p>
      <h2>Solution Implemented:</h2>
      <p>The voice agent was introduced to manage patient calls, allowing clients to inquire about services, get answers instantly, and book appointments without waiting. A chatbot on Messenger also took queries. The system analysed call logs to detect rising trends in service demand.</p>
      <h2>Results:</h2>
      <ul>
        <li>Patient bookings increased by <strong>35%</strong> in 2 months.</li>
        <li>Staff call handling time reduced by <strong>40%</strong>.</li>
        <li>Weekly insight reports helped shift attention to high-demand services.</li>
        <li>Wait times for appointments dropped by up to 2 days.</li>
      </ul>
    `,
    sidebar: {
      company: "National Clinic Network",
      industry: "Australian Healthcare",
      location: "Australia",
      topics: "Appointment Booking, Patient Support, Data Analytics",
    },
  },
  {
    id: "cement-company",
    icon: "🏭",
    title: "Case Study: National Distribution & Logistics",
    summary: "Improving distributor relations and inventory planning, leading to a 38% increase in dealer orders.",
    content: `
      <h1>Case Study: National Distribution & Logistics</h1>
      <h2>Problem:</h2>
      <p>Sales staff often missed calls from rural distributors, leading to delayed orders and missed monthly sales targets. There was no clear record of which products were being requested the most.</p>
      <h2>Solution Implemented:</h2>
      <p>The voice agent was activated to answer dealer calls, providing real-time pricing and taking orders. The system monitored enquiries and orders, giving management insights into which products were growing in demand by region.</p>
      <h2>Results:</h2>
      <ul>
        <li>Average response time reduced from 48 hours to <strong>5 minutes</strong>.</li>
        <li>Order volume from smaller dealers increased by <strong>38%</strong>.</li>
        <li>Weekly product demand reports led to smarter inventory planning.</li>
        <li>Revenue increased by <strong>15%</strong> from focused promotions.</li>
      </ul>
    `,
    sidebar: {
      company: "National Distributor",
      industry: "Manufacturing & Logistics",
      location: "Australia",
      topics: "B2B Support, Supply Chain, Order Management",
    },
  },
  {
    id: "b2b-company",
    icon: "🤝",
    title: "Case Study: Australian SaaS Provider",
    summary: "How a SaaS provider doubled its qualified leads and improved demo conversion by 52%.",
    content: `
      <h1>B2B Company – Demo Conversion & Product Trend Analysis</h1>
      <h2>Problem:</h2>
      <p>A B2B SaaS provider was overwhelmed with inbound queries but had a low demo conversion rate. Leads were not being nurtured well, and they had no clarity on which services were getting the most traction.</p>
      <h2>Solution Implemented:</h2>
      <p>A chatbot was placed on the website to qualify leads and book demos. The voice agent handled inbound calls, capturing pain points. The system analysed all interactions to detect which features were most in demand, providing forecast reports to the sales team.</p>
      <h2>Results:</h2>
      <ul>
        <li>Lead-to-demo conversion improved by <strong>52%</strong>.</li>
        <li>Total qualified lead volume <strong>doubled</strong> in 6 weeks.</li>
        <li>Quarterly sales grew significantly from better targeted pitches.</li>
        <li>Weekly trend reports shaped marketing focus.</li>
      </ul>
    `,
    sidebar: {
      company: "Tech Solutions Pty Ltd",
      industry: "Software as a Service (SaaS)",
      location: "Australia",
      topics: "Lead Qualification, Sales Funnel, B2B Marketing",
    },
  },
];

const InteractiveCaseStudies = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState(caseStudies[0]);

  return (
    <section className="bg-background my-20 relative">
      <div className="w-full max-w-7xl z-10 mx-auto px-2 sm:px-4">
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg font-display font-bold">Case Studies</div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-bold tracking-tighter mt-5 text-center">
            Real Business Impact
          </h2>
          <p className="text-center mt-5 opacity-75 font-display">
            Explore how businesses use AI agents to drive measurable results.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Left: Case Study List */}
          <div className="lg:col-span-1 flex flex-row lg:flex-col gap-3 sm:gap-4 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 -mx-2 px-2 lg:mx-0 lg:px-0">
            {caseStudies.map((cs) => (
              <Card
                key={cs.id}
                className={`min-w-[80vw] sm:min-w-[320px] max-w-full cursor-pointer transition-all border-2 ${
                  activeCaseStudy.id === cs.id
                    ? "border-pulse-500 bg-pulse-50 shadow-lg"
                    : "border-transparent hover:border-pulse-300"
                }`}
                onClick={() => setActiveCaseStudy(cs)}
                style={{ scrollSnapAlign: 'start' }}
              >
                <CardHeader className="flex-row items-center gap-4 p-4">
                  <span className="text-3xl">{cs.icon}</span>
                  <div>
                    <CardTitle className="text-lg mb-1 font-display font-bold">{cs.title}</CardTitle>
                    <CardDescription className="font-display">{cs.summary}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          {/* Right: Main Content and Sidebar */}
          <div className="lg:col-span-2 flex flex-col md:flex-row gap-6 sm:gap-8">
            {/* Main Article */}
            <article className="flex-1 bg-white rounded-2xl shadow-elegant p-4 sm:p-6 md:p-10 prose max-w-none min-w-0 font-display">
              <div dangerouslySetInnerHTML={{ __html: activeCaseStudy.content }} />
            </article>
            {/* Sidebar */}
            <aside className="w-full md:w-[320px] max-w-full md:max-w-[320px] flex-shrink-0 bg-pulse-50/80 border border-pulse-100 rounded-2xl shadow-elegant p-4 sm:p-6 flex flex-col gap-4 h-fit mt-4 md:mt-0 md:ml-2">
              <div>
                <div className="text-xs font-display font-bold text-pulse-500 uppercase mb-1">Company</div>
                <div className="font-medium font-display">{activeCaseStudy.sidebar.company}</div>
              </div>
              <div>
                <div className="text-xs font-display font-bold text-pulse-500 uppercase mb-1">Industry</div>
                <div className="text-gray-800 font-display">{activeCaseStudy.sidebar.industry}</div>
              </div>
              <div>
                <div className="text-xs font-display font-bold text-pulse-500 uppercase mb-1">Location</div>
                <div className="text-gray-800 font-display">{activeCaseStudy.sidebar.location}</div>
              </div>
              <div>
                <div className="text-xs font-display font-bold text-pulse-500 uppercase mb-1">Topics</div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {activeCaseStudy.sidebar.topics.split(",").map((topic) => (
                    <Badge key={topic.trim()} variant="secondary" className="font-display">{topic.trim()}</Badge>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveCaseStudies;