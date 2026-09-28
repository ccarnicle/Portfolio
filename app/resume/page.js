import { resumePage, site } from "../../content/site";

export const metadata = {
  title: `Resume — ${site.name}`,
  description: site.metaDescription,
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return (
    <div className="resume-page section">
      <h2>{resumePage.heading}</h2>
      <p>
        <a href={site.resumePdf} download>
          Download PDF
        </a>
      </p>
      <iframe
        className="resume-frame"
        src={`${site.resumePdf}#toolbar=0&navpanes=0&view=FitH`}
        title={`${site.name} resume`}
      />
    </div>
  );
}
