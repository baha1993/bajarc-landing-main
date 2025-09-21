import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-integral text-4xl md:text-5xl font-bold mb-4">
              GET IN <span className="text-primary">TOUCH</span>
            </h1>
            <p className="font-satoshi text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to collaborate? I'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8">
                <CardHeader className="px-0 pb-6">
                  <CardTitle className="font-integral text-2xl">
                    Send a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-satoshi text-sm font-medium mb-2 block">
                          First Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Your first name"
                          className="w-full px-3 py-2 border border-border rounded-md bg-background font-satoshi text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="font-satoshi text-sm font-medium mb-2 block">
                          Last Name <span className="text-primary">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Your last name"
                          className="w-full px-3 py-2 border border-border rounded-md bg-background font-satoshi text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-satoshi text-sm font-medium mb-2 block">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full px-3 py-2 border border-border rounded-md bg-background font-satoshi text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="font-satoshi text-sm font-medium mb-2 block">
                        Subject <span className="text-primary">*</span>
                      </label>
                      <select className="w-full px-3 py-2 border border-border rounded-md bg-background font-satoshi text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        <option>Select a subject</option>
                        <option>General Inquiry</option>
                        <option>Technical Support</option>
                        <option>Partnership</option>
                        <option>Media/Press</option>
                        <option>Bug Report</option>
                        <option>Feature Request</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-satoshi text-sm font-medium mb-2 block">
                        Message <span className="text-primary">*</span>
                      </label>
                      <textarea
                        rows={6}
                        placeholder="Tell me about your project, question, or how I can help..."
                        className="w-full px-3 py-2 border border-border rounded-md bg-background font-satoshi text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                      ></textarea>
                    </div>

                    <Button size="lg" className="w-full font-integral">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Response Time */}
                <Card className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div>
                      <h3 className="font-integral text-lg font-semibold mb-2">
                        Response Time
                      </h3>
                      <p className="font-satoshi text-sm text-muted-foreground leading-relaxed">
                        I typically respond to messages within 24-48 hours. For
                        urgent matters or collaboration opportunities, please
                        mention it in your subject line.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="font-satoshi text-muted-foreground">
                      Currently accepting new projects and collaborations
                    </span>
                  </div>
                </Card>

                {/* FAQ */}
                <Card className="p-6">
                  <h3 className="font-integral text-lg font-semibold mb-4">
                    Frequently Asked
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-satoshi font-medium mb-2">
                        Do you review products?
                      </h4>
                      <p className="font-satoshi text-sm text-muted-foreground">
                        Yes! I'm always interested in reviewing new RC products.
                        Please include product details and your timeline.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-satoshi font-medium mb-2">
                        Can you help with custom builds?
                      </h4>
                      <p className="font-satoshi text-sm text-muted-foreground">
                        I offer custom build services and consultations. Contact
                        me with your project details for pricing.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-satoshi font-medium mb-2">
                        Do you offer sponsorships?
                      </h4>
                      <p className="font-satoshi text-sm text-muted-foreground">
                        I'm open to partnerships with brands that align with my
                        content and values. Let's discuss your proposal.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
