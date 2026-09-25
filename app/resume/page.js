import { resumePage, site } from "../../content/site";

export const metadata = {
  title: `Resume — ${site.name}`,
  description: resumePage.body,
  alternates: {
    canonical: "/resume",
  },
};

export default function ResumePage() {
  return (
    <div className="resume-page section">
      <h2>{resumePage.heading}</h2>
      <p>{resumePage.body}</p>
      <p>
        <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </div>
  );
}
