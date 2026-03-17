import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ResumeRedirectCard from "@/components/contact/resume-redirect-card";
import { ContactForm } from "@/components/forms/contact-form";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.contact.metadata.title,
  description: pagesConfig.contact.metadata.description,
};

export default function ContactPage() {
  return (
    <PageContainer
      title={pagesConfig.contact.title}
      description={pagesConfig.contact.description}
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        <div className="flex-1">
          <div className="p-6 rounded-xl border bg-background shadow-sm hover:shadow-md transition-all duration-300">
            <ContactForm />
          </div>
        </div>
        <div className="flex-1 flex justify-center ">
          <ResumeRedirectCard />
        </div>
      </div>
    </PageContainer>
  );
}
