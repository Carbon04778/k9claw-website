import Image from "next/image";

const lifestyleImages = [
  { src: "/lifestyle-1.jpg", alt: "K9 Claw used outdoors near a modern home" },
  { src: "/lifestyle-2.jpg", alt: "K9 Claw on a table with everyday carry items" },
  { src: "/lifestyle-3.jpg", alt: "K9 Claw extended and held up by a user" },
  { src: "/lifestyle-4.jpg", alt: "K9 Claw fully extended with a user holding it" },
];

export default function LifestyleBanner() {
  return (
    <section className="bg-white pt-16 pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {lifestyleImages.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}