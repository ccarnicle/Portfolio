import Image from "next/image";
import { galleryPhotographs, site } from "../../content/site";

export const metadata = {
  title: `Photography — ${site.name}`,
  description: "Travel photographs by Christopher J. Carnicle.",
  alternates: {
    canonical: "/photography",
  },
};

export default function PhotographyPage() {
  return (
    <section className="section" aria-labelledby="photography-heading">
      <h2 id="photography-heading">Photography</h2>
      <div className="photo-grid">
        {galleryPhotographs.map((photo) => (
          <div key={photo.src} className="photo-frame">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 699px) 100vw, 480px"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
