import React from "react";
import { Link } from "react-router";
import { SectionHeading } from "../components/ui/SectionHeading";
import { ArrowLeft, ShieldCheck, HelpCircle, FileText } from "lucide-react";

export const LegalPage: React.FC<{ kind: "help" | "privacy" | "terms" }> = ({ kind }) => {
  const content = {
    help: {
      eyebrow: "Support & Guidance",
      title: "Leaf & Root Help Center",
      description:
        "Clear answers regarding plant care features, identification, routine notifications, and account settings.",
      sections: [
        {
          heading: "How does plant identification work?",
          text: "Upload a clear photo of mature foliage or stem structure. The system compares visible characteristics against botanical reference datasets to suggest likely species matches.",
        },
        {
          heading: "Do I need a smart sensor to use Leaf & Root?",
          text: "No. Sensors are completely optional. All care schedules, symptom checklists, and botanical guides function fully using manual physical soil checks.",
        },
        {
          heading: "Are the care schedules rigid?",
          text: "No. Care schedules are adaptive baselines that account for pot volume and seasonal daylight changes. You can adjust frequency anytime in your plant profile.",
        },
      ],
    },
    privacy: {
      eyebrow: "Privacy Policy",
      title: "Our Commitment to Data Privacy",
      description:
        "How Leaf & Root protects your plant collection data, room observations, and account credentials.",
      sections: [
        {
          heading: "Data Collection Principles",
          text: "We only collect information necessary to maintain your plant profiles and deliver care notifications. Plant photographs remain associated only with your account.",
        },
        {
          heading: "No Telemetry Sale",
          text: "We never sell your plant telemetry, device logs, or personal information to third parties or advertising networks.",
        },
        {
          heading: "Account Deletion",
          text: "You may export or delete your plant profiles and account records at any time directly through account settings.",
        },
      ],
    },
    terms: {
      eyebrow: "Terms of Use",
      title: "Terms of Service",
      description:
        "The terms governing your access to and use of the Leaf & Root botanical platform.",
      sections: [
        {
          heading: "Informational Use Only",
          text: "All botanical identification, health guidance, and care schedules are educational in nature and do not constitute agricultural, medical, or veterinary advice.",
        },
        {
          heading: "Plant Toxicity Notice",
          text: "Users are responsible for confirming toxicity risks before bringing plants into households with children or pets. Suspected poisoning requires emergency medical consultation.",
        },
        {
          heading: "Platform Integrity",
          text: "Users agree not to misuse platform services or attempt unauthorized access to platform infrastructure.",
        },
      ],
    },
  }[kind];

  return (
    <main id="main-content" className="section-space">
      <div className="container-shell max-w-4xl space-y-10">
        <div className="space-y-3 pb-6 border-b border-divider">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-subtle hover:text-forest-950 transition"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to Home</span>
          </Link>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </div>

        <div className="space-y-6">
          {content.sections.map((s) => (
            <div key={s.heading} className="surface-card p-6 sm:p-8 space-y-2">
              <h3 className="text-lg font-semibold text-forest-950">{s.heading}</h3>
              <p className="text-sm leading-7 text-text-secondary">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
