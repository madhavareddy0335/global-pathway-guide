import { useState } from "react";
import StandardPageTemplate from "@/components/templates/StandardPageTemplate";
import { AnimateIn } from "@/components/AnimateIn";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const phoneNumbers = [
  { display: "+91 7416868111", raw: "917416868111" },
  { display: "+91 7799518111", raw: "917799518111" },
  { display: "+91 7799517111", raw: "917799517111" },
  { display: "+91 7799519111", raw: "917799519111" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", course: "", country: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi MPR Global Education!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ACourse: ${form.course}%0ACountry: ${form.country}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/917416868111?text=${text}`, "_blank");
  };

  return (
    <StandardPageTemplate
      metaTitle="Contact MPR Global Education — Free Counselling & Support"
      metaDescription="Contact MPR Global Education for free overseas education counselling. Call, WhatsApp, or visit our office. We're here to help."
      heroLabel="Contact Us"
      heroTitle="Get in Touch With Our Experts"
      heroSubtitle="Book a free counselling session or reach out with any questions. No obligations — just honest, expert guidance."
    >
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 max-w-5xl mx-auto">
            {/* Form */}
            <AnimateIn animation="slide-left">
              <div className="bg-background border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <input type="text" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} className="w-full px-4 py-3 rounded-xl border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                    <input type="tel" required value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} className="w-full px-4 py-3 rounded-xl border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30" placeholder="+91 74168 68111" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Course Interest</label>
                      <select value={form.course} onChange={e => setForm(p => ({ ...p, course: e.target.value }))} className="w-full px-4 py-3 rounded-xl border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30">
                        <option value="">Select course</option>
                        <option>MBBS Abroad</option>
                        <option>MS Abroad</option>
                        <option>MBA Abroad</option>
                        <option>Dental Abroad</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">Country Interest</label>
                      <select value={form.country} onChange={e => setForm(p => ({ ...p, country: e.target.value }))} className="w-full px-4 py-3 rounded-xl border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30">
                        <option value="">Select country</option>
                        <option>Russia</option>
                        <option>Georgia</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>Germany</option>
                        <option>Australia</option>
                        <option>Kazakhstan</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message (Optional)</label>
                    <textarea rows={3} value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} className="w-full px-4 py-3 rounded-xl border bg-secondary text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none" placeholder="Tell us about your goals..." />
                  </div>
                  <button type="submit" className="w-full px-6 py-3.5 bg-accent text-accent-foreground font-semibold rounded-xl btn-magnetic hover:brightness-110 transition-all flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Send via WhatsApp
                  </button>
                  <p className="text-xs text-muted-foreground text-center">Your details will be sent to our WhatsApp for quick response.</p>
                </form>
              </div>
            </AnimateIn>

            {/* Contact Info */}
            <AnimateIn animation="slide-right">
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-secondary">
                  <h3 className="font-bold text-foreground mb-4">Contact Numbers</h3>
                  <div className="space-y-3">
                    {phoneNumbers.map((p) => (
                      <div key={p.raw} className="flex gap-3 items-start">
                        <Phone className="w-5 h-5 text-accent shrink-0" />
                        <a href={`tel:+${p.raw}`} className="text-sm text-muted-foreground hover:text-accent">{p.display}</a>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-secondary">
                  <h3 className="font-bold text-foreground mb-4">Our Offices</h3>
                  <div className="space-y-4">
                    <div className="flex gap-3 items-start">
                      <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Hyderabad Office</p>
                        <p className="text-sm text-muted-foreground">518, 5th Floor, PVT Market Building,<br />Kothapet, Hyderabad, Telangana – 500035</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Warangal Office</p>
                        <p className="text-sm text-muted-foreground">2nd Floor, Green Square Plaza,<br />Hanamkonda, Warangal, Telangana</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Mail className="w-5 h-5 text-accent shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <a href="mailto:info@mprglobaleducation.com" className="text-sm text-muted-foreground hover:text-accent">info@mprglobaleducation.com</a>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Clock className="w-5 h-5 text-accent shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Office Hours</p>
                        <p className="text-sm text-muted-foreground">Mon–Sat: 9:00 AM – 7:00 PM<br />Sunday: By appointment</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-accent/5 border border-accent/10">
                  <h3 className="font-bold text-foreground mb-2">Quick WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-4">Get instant responses from our counselling team.</p>
                  <a href="https://wa.me/917416868111" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-primary-foreground font-semibold rounded-xl text-sm hover:brightness-110 transition-all">
                    <MessageCircle className="w-4 h-4" /> Chat Now
                  </a>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </StandardPageTemplate>
  );
};

export default Contact;
