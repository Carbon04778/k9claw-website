export default function VideoBanner() {
  return (
    <section className="bg-white pt-24 pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-brand/10">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/Ha-5j9vI2JU?autoplay=1&mute=1&loop=1&playlist=Ha-5j9vI2JU&controls=0&showinfo=0&rel=0"
            title="K9 Claw Product Video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}