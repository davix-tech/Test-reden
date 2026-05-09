const variants = [
  {
    id: "a",
    title: "Shop Smarter Today",
  },
  {
    id: "b",
    title: "Limited Deals Available",
  },
];

export default function HeroSection() {
  const selected = variants[Math.floor(Math.random() * variants.length)];

  return (
    <section className="py-24 text-center">
      <h1 className="text-5xl font-bold">{selected.title}</h1>
      <p className="mt-4 text-muted-foreground">
        Powered by Reden adaptive optimization.
      </p>
    </section>
  );
}
