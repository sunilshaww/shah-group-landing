import type { Route } from "./+types/home";
import styles from "./home.module.css";
import { useState } from "react";
import {
  Building2,
  TrendingUp,
  Users,
  Award,
  Home as HomeIcon,
  Building,
  Briefcase,
  ArrowRight,
  Quote,
  Star,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  FileText,
  CheckCircle,
} from "lucide-react";
import WhatsApp_Image_2026_0214_at_23_3010 from "/WhatsApp Image 2026-02-14 at 23.30.10.jpeg";
import WhatsApp_Image_2026_0215_at_12_3833 from "/WhatsApp Image 2026-02-15 at 12.38.33.jpeg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shah Group - Premier Real Estate Investment & Development" },
    {
      name: "description",
      content:
        "Discover exceptional real estate investment opportunities with Shah Group. Your trusted partner in property development, investment, and wealth creation.",
    },
  ];
}

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Home() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Enquiry from ${formData.name} - Shah Group Website`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:shahgroup1999@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <img src={WhatsApp_Image_2026_0214_at_23_3010} alt="Shah Group" className={styles.logoImage} />
            <span className={styles.brandName}>Shah Group</span>
          </div>
          <nav className={styles.nav}>
            <button className={styles.navLink} onClick={() => scrollToSection("about")}>
              About
            </button>
            <button className={styles.navLink} onClick={() => scrollToSection("services")}>
              Services
            </button>
            <a href="/joka-wander-valley.pdf" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
              <FileText size={15} style={{ verticalAlign: "middle", marginRight: 4 }} />
              Joka Wander Valley
            </a>
            <a href="/nest-valley.pdf" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
              <FileText size={15} style={{ verticalAlign: "middle", marginRight: 4 }} />
              Nest Valley
            </a>
            <button className={styles.navLink} onClick={() => scrollToSection("contact")}>
              Contact
            </button>
            <button className={styles.ctaButton} onClick={() => scrollToSection("contact")}>
              Invest Now
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
            alt="Luxury Real Estate"
            className={styles.heroBackgroundImage}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Building <span className={styles.heroHighlight}>Legacies</span> Through Strategic Real Estate Investment
            </h1>
            <p className={styles.heroSubtitle}>
              Shah Group is your trusted partner in premium real estate development and investment. We transform visions
              into valuable assets, creating opportunities for sustainable growth and prosperity.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.primaryButton} onClick={() => scrollToSection("services")}>
                Explore Opportunities
                <ArrowRight size={20} />
              </button>
              <button className={styles.secondaryButton} onClick={() => scrollToSection("about")}>
                Learn More
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImageContainer}>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Modern Architecture"
                className={styles.heroImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutImageContainer}>
            <img src={WhatsApp_Image_2026_0215_at_12_3833} alt="Shah Group Vision" className={styles.aboutImage} />
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.sectionLabel}>About Shah Group</div>
            <h2 className={styles.sectionTitle}>Building Trust, Creating Value, Delivering Excellence</h2>
            <p className={styles.aboutText}>
              For over two decades, Shah Group has been at the forefront of real estate innovation, combining deep
              market expertise with unwavering commitment to quality. We don't just develop properties—we create
              communities, build legacies, and forge partnerships that stand the test of time.
            </p>
            <div className={styles.aboutFeatures}>
              <div className={styles.featureItem}>
                <Award className={styles.featureIcon} size={24} />
                <div className={styles.featureText}>
                  <div className={styles.featureTitle}>Proven Track Record</div>
                  <div className={styles.featureDescription}>
                    25+ years of consistent growth and successful project delivery across diverse market conditions.
                  </div>
                </div>
              </div>
              <div className={styles.featureItem}>
                <TrendingUp className={styles.featureIcon} size={24} />
                <div className={styles.featureText}>
                  <div className={styles.featureTitle}>Strategic Investment</div>
                  <div className={styles.featureDescription}>
                    Data-driven approach to identifying high-potential opportunities that maximize returns for our
                    partners.
                  </div>
                </div>
              </div>
              <div className={styles.featureItem}>
                <Users className={styles.featureIcon} size={24} />
                <div className={styles.featureText}>
                  <div className={styles.featureTitle}>Client-Centric Philosophy</div>
                  <div className={styles.featureDescription}>
                    Your success is our success. We build lasting relationships through transparency, integrity, and
                    exceptional service.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <div className={styles.servicesContainer}>
          <div className={styles.servicesHeader}>
            <div className={styles.sectionLabel}>Our Services</div>
            <h2 className={styles.sectionTitle}>Comprehensive Real Estate Solutions</h2>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIconWrapper}>
                <Building2 className={styles.serviceIcon} size={32} />
              </div>
              <h3 className={styles.serviceTitle}>Property Development</h3>
              <p className={styles.serviceDescription}>
                From concept to completion, we deliver exceptional residential and commercial developments that set new
                standards in quality and design.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIconWrapper}>
                <TrendingUp className={styles.serviceIcon} size={32} />
              </div>
              <h3 className={styles.serviceTitle}>Investment Opportunities</h3>
              <p className={styles.serviceDescription}>
                Access curated investment opportunities with proven ROI potential, backed by thorough market analysis
                and expert guidance.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIconWrapper}>
                <Briefcase className={styles.serviceIcon} size={32} />
              </div>
              <h3 className={styles.serviceTitle}>Portfolio Management</h3>
              <p className={styles.serviceDescription}>
                Strategic asset management services designed to optimize your real estate portfolio and maximize
                long-term value.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIconWrapper}>
                <HomeIcon className={styles.serviceIcon} size={32} />
              </div>
              <h3 className={styles.serviceTitle}>Residential Projects</h3>
              <p className={styles.serviceDescription}>
                Luxury homes and communities designed for modern living, combining comfort, style, and sustainable
                practices.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIconWrapper}>
                <Building className={styles.serviceIcon} size={32} />
              </div>
              <h3 className={styles.serviceTitle}>Commercial Spaces</h3>
              <p className={styles.serviceDescription}>
                Prime commercial properties strategically located to drive business success and deliver exceptional
                returns.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIconWrapper}>
                <Users className={styles.serviceIcon} size={32} />
              </div>
              <h3 className={styles.serviceTitle}>Partnership Programs</h3>
              <p className={styles.serviceDescription}>
                Collaborative investment models that align interests and create mutual value for all stakeholders.
              </p>
              <a href="mailto:shahgroup1999@gmail.com"></a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className={styles.quote}>
        <div className={styles.quotePattern} />
        <div className={styles.quoteContainer}>
          <Quote className={styles.quoteIcon} size={48} />
          <p className={styles.quoteText}>
            "Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in
            full, and managed with reasonable care, it is about the safest investment in the world."
          </p>
          <p className={styles.quoteAuthor}>— Franklin D. Roosevelt</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={styles.testimonials}>
        <div className={styles.testimonialsContainer}>
          <div className={styles.testimonialsHeader}>
            <div className={styles.sectionLabel}>Testimonials</div>
            <h2 className={styles.sectionTitle}>What Our Partners Say</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <div className={styles.testimonialAvatar}>RK</div>
                <div className={styles.testimonialInfo}>
                  <div className={styles.testimonialName}>Rajesh Kumar</div>
                  <div className={styles.testimonialRole}>Real Estate Investor</div>
                </div>
              </div>
              <div className={styles.testimonialStars}>
                <Star className={styles.testimonialStar} size={16} fill="currentColor" />
                <Star className={styles.testimonialStar} size={16} fill="currentColor" />
                <Star className={styles.testimonialStar} size={16} fill="currentColor" />
                <Star className={styles.testimonialStar} size={16} fill="currentColor" />
                <Star className={styles.testimonialStar} size={16} fill="currentColor" />
              </div>
              <p className={styles.testimonialText}>
                "Shah Group transformed my investment portfolio. Their expertise and transparency gave me confidence,
                and the returns have exceeded all expectations. A truly professional organization."
              </p>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <div className={styles.testimonialAvatar}>SP</div>
                <div className={styles.testimonialInfo}>
                  <div className={styles.testimonialName}>Priya Sharma</div>
                  <div className={styles.testimonialRole}>Business Owner</div>
                </div>
              </div>
              <div className={styles.testimonialStars}>
                <Star className={styles.testimonialStar} size={16} fill="currentColor" />
                <Star className={styles.testimonialStar} size={16} fill="currentColor" />
                <Star className={styles.testimonialStar} size={16} fill="currentColor" />
                <Star className={styles.testimonialStar} size={16} fill="currentColor" />
                <Star className={styles.testimonialStar} size={16} fill="currentColor" />
              </div>
              <p className={styles.testimonialText}>
                "Working with Shah Group on our commercial property was seamless. They understood our needs perfectly
                and delivered a space that has become central to our business success."
              </p>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <div className={styles.testimonialAvatar}>AM</div>
                <div className={styles.testimonialInfo}>
                  <div className={styles.testimonialName}>Anil Mehta</div>
                  <div className={styles.testimonialRole}>Property Developer</div>
                </div>
              </div>
              <div className={styles.testimonialStars}>
                <Star className={styles.testimonialStar} size={16} fill="currentColor" />
                <Star className={styles.testimonialStar} size={16} fill="currentColor" />
                <Star className={styles.testimonialStar} size={16} fill="currentColor" />
                <Star className={styles.testimonialStar} size={16} fill="currentColor" />
                <Star className={styles.testimonialStar} size={16} fill="currentColor" />
              </div>
              <p className={styles.testimonialText}>
                "The level of professionalism and attention to detail at Shah Group is unmatched. They've been
                instrumental in helping us scale our real estate ventures successfully."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Build Your Real Estate Legacy?</h2>
          <p className={styles.ctaText}>
            Join hundreds of successful investors who trust Shah Group with their real estate investments. Let's create
            something extraordinary together.
          </p>
          <div className={styles.ctaActions}>
            <button className={styles.ctaPrimaryButton} onClick={() => scrollToSection("contact")}>
              Schedule a Consultation
            </button>
            <button className={styles.ctaSecondaryButton} onClick={() => scrollToSection("services")}>
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <div className={styles.sectionLabel}>Get In Touch</div>
            <h2 className={styles.sectionTitle}>Let's Discuss Your Investment Goals</h2>
            <p className={styles.aboutText}>
              Whether you're looking to invest, develop, or partner with us, we're here to help you achieve your real
              estate objectives.
            </p>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <div className={styles.contactIconWrapper}>
                  <Phone className={styles.contactItemIcon} size={20} />
                </div>
                <div className={styles.contactItemContent}>
                  <div className={styles.contactItemLabel}>Phone</div>
                  <div className={styles.contactItemValue}>9831958387</div>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIconWrapper}>
                  <Mail className={styles.contactItemIcon} size={20} />
                </div>
                <div className={styles.contactItemContent}>
                  <div className={styles.contactItemLabel}>Email</div>
                  <div className={styles.contactItemValue}>
                    <a href="mailto:shahgroup1999@gmail.com">shahgroup1999@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIconWrapper}>
                  <MapPin className={styles.contactItemIcon} size={20} />
                </div>
                <div className={styles.contactItemContent}>
                  <div className={styles.contactItemLabel}>Office</div>
                  <div className={styles.contactItemValue}>
                    169,Mahatma Gandhi road, KMC no.143 P.S - Haridevpur , kolkata -700063,Dist-South 24 Parganas    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactForm}>
            {submitted ? (
              <div className={styles.formSuccess}>
                <CheckCircle size={48} className={styles.formSuccessIcon} />
                <h3 className={styles.formSuccessTitle}>Message Sent!</h3>
                <p className={styles.formSuccessText}>
                  Your details have been sent to our team at shahgroup1999@gmail.com. We will get back to you shortly.
                </p>
                <button className={styles.formButton} onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className={styles.formInput}
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className={styles.formInput}
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className={styles.formInput}
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Message <span style={{fontWeight: 400, fontSize: '0.85em', opacity: 0.7}}>(optional)</span></label>
                  <textarea
                    name="message"
                    className={styles.formTextarea}
                    placeholder="Enter your message (optional)"
                    value={formData.message}
                    onChange={handleFormChange}
                  />
                </div>
                <button type="submit" className={styles.formButton}>
                  Send Details
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <img src={WhatsApp_Image_2026_0214_at_23_3010} alt="Shah Group Logo" className={styles.footerLogo} />
              <span className={styles.footerBrandName}>Shah Group</span>
              <p className={styles.footerDescription}>
                Your trusted partner in premium real estate development and investment. Building legacies since 1999.
              </p>
            </div>
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Company</h4>
              <button className={styles.footerLink} onClick={() => scrollToSection("about")}>
                About Us
              </button>
              <button className={styles.footerLink} onClick={() => scrollToSection("services")}>
                Services
              </button>
              <button className={styles.footerLink} onClick={() => scrollToSection("testimonials")}>
                Testimonials
              </button>
              <button className={styles.footerLink}>Portfolio</button>
            </div>
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Services</h4>
              <button className={styles.footerLink}>Property Development</button>
              <button className={styles.footerLink}>Investment</button>
              <button className={styles.footerLink}>Portfolio Management</button>
              <button className={styles.footerLink}>Partnerships</button>
            </div>
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Contact</h4>
              <button className={styles.footerLink} onClick={() => scrollToSection("contact")}>
                Get In Touch
              </button>
              <button className={styles.footerLink}>Careers</button>
              <button className={styles.footerLink}>Press</button>
              <button className={styles.footerLink}>Support</button>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <div>© 2024 Shah Group Real Estate Company. All rights reserved.</div>
            <div className={styles.footerSocial}>
              <a href="#" className={styles.socialLink}>
                <Facebook size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Twitter size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Instagram size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
