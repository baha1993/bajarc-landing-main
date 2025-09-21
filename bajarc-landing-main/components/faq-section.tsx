export function FaqSection() {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-integral text-3xl md:text-4xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-integral text-xl font-semibold mb-3">
                What is FPV RC racing?
              </h3>
              <p className="font-satoshi text-muted-foreground leading-relaxed">
                FPV means "First Person View." You'll see exactly what the car
                sees through its onboard camera.
              </p>
            </div>

            <div>
              <h3 className="font-integral text-xl font-semibold mb-3">
                Do I need special equipment?
              </h3>
              <p className="font-satoshi text-muted-foreground leading-relaxed">
                No! Just a browser and a small donation to race.
              </p>
            </div>

            <div>
              <h3 className="font-integral text-xl font-semibold mb-3">
                What do donations support?
              </h3>
              <p className="font-satoshi text-muted-foreground leading-relaxed">
                100% goes to cars, maps, and improving the racing experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
