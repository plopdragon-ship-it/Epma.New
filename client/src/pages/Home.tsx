import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Shield, Wrench, Lightbulb, AlertCircle, CheckCircle, Star, MessageCircle, Phone, Mail, MapPin, Award, Users, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * DESIGN PHILOSOPHY: Corporativo Limpio y Profesional
 * - Fondo blanco/gris claro para máxima legibilidad
 * - Acentos de azul eléctrico (#0066ff) suave y profesional
 * - Tipografía Inter moderna y clara
 * - Enfoque en conversión y confianza del cliente
 * - Animaciones sutiles y efectos hover profesionales
 */

export default function Home() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Projects data with enhanced information
  const projects: Array<{img: string; title: string; type: string; location: string}> = [
    {
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663431601309/6LGU5NM5Spx5YHfSKF2L4D/project-led-lighting-installation_fdd5c3f2.jpeg",
      title: "Iluminación LED Profesional",
      type: "Instalación Residencial",
      location: "Buenos Aires, Argentina"
    },
    {
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663431601309/6LGU5NM5Spx5YHfSKF2L4D/project-electrical-panel-installation_ab6b0668.jpeg",
      title: "Panel Eléctrico Profesional",
      type: "Instalación Industrial",
      location: "Buenos Aires, Argentina"
    },
    {
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663431601309/6LGU5NM5Spx5YHfSKF2L4D/project-rooftop-terrace-installation_1485d7e3.jpeg",
      title: "Iluminación Terraza Rooftop",
      type: "Instalación Residencial Premium",
      location: "Buenos Aires, Argentina"
    },
    {
      img: "/manus-storage/WhatsAppImage2026-04-28at14.54.38_a837fb87.webp",
      title: "Instalación Industrial de Gran Escala",
      type: "Instalación Industrial",
      location: "Buenos Aires, Argentina"
    },
    {
      img: "/manus-storage/WhatsAppImage2026-04-28at15.01.26_2340fe9c.jpeg",
      title: "Diagnóstico y Medición Eléctrica",
      type: "Servicio Técnico Profesional",
      location: "Buenos Aires, Argentina"
    }
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Show empty state when no projects
  const showEmptyState = projects.length === 0;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
    setFormData({ name: "", phone: "", message: "" });
  };

  // Autoplay effect for carousel
  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoplay, projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
    setIsAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    setIsAutoplay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoplay(false);
  };

  const trustStats = [
    { icon: Award, label: "10+ años de experiencia", value: "Servicio confiable" },
    { icon: CheckCircle, label: "500+ proyectos completados", value: "Historial probado" },
    { icon: Shield, label: "Electricistas certificados", value: "Profesionales calificados" },
    { icon: Zap, label: "Servicio rápido", value: "Respuesta ágil" },
  ];

  const services = [
    { icon: Zap, title: "Instalaciones Residenciales", description: "Instalaciones eléctricas profesionales para hogares con máxima seguridad y calidad." },
    { icon: AlertCircle, title: "Sistemas Industriales", description: "Soluciones eléctricas complejas para industrias con alta demanda de energía." },
    { icon: Wrench, title: "Mantenimiento Eléctrico", description: "Inspecciones y mantenimiento regular para garantizar funcionamiento óptimo." },
    { icon: Lightbulb, title: "Diagnóstico y Reparación", description: "Detección rápida de fallas y reparaciones confiables en sistemas eléctricos." },
    { icon: Shield, title: "Instalación de Iluminación", description: "Diseño e instalación de sistemas de iluminación eficientes y modernos." },
    { icon: CheckCircle, title: "Actualización de Paneles", description: "Modernización de paneles eléctricos para mayor capacidad y seguridad." },
  ];

  const whyChooseUs = [
    { icon: Users, title: "Electricistas Profesionales", description: "Equipo altamente calificado y certificado en todas las áreas." },
    { icon: Shield, title: "Estándares de Seguridad", description: "Cumplimiento riguroso de normas de seguridad eléctrica." },
    { icon: CheckCircle, title: "Servicio Confiable", description: "Puntualidad y calidad garantizadas en cada proyecto." },
    { icon: Zap, title: "Equipos Modernos", description: "Herramientas y tecnología de última generación." },
    { icon: Award, title: "Satisfacción Garantizada", description: "Garantía en todos nuestros trabajos y servicio post-venta." },
  ];

  const testimonials = [
    { name: "Carlos Mendez", company: "Empresa Industrial XYZ", rating: 5, text: "Excelente servicio, profesionales muy competentes. Resolvieron nuestros problemas eléctricos en tiempo récord." },
    { name: "María García", company: "Residencia Moderna", rating: 5, text: "Muy satisfecha con el trabajo realizado. Instalación limpia, profesional y con gran atención al detalle." },
    { name: "Jorge López", company: "Centro Comercial ABC", rating: 5, text: "Confiables, puntuales y con excelente calidad de trabajo. Los recomiendo ampliamente." },
  ];

  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 w-full bg-white border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/manus-storage/epma-logo_2584df82.webp" alt="EPMA Logo" className="h-12 w-12 object-contain" />
            <div className="text-2xl font-bold text-primary">
              EPMA<span className="text-blue-900"> Electricidad, Proyectos y Construcciones</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Inicio</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Servicios</a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Proyectos</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Sobre Nosotros</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Testimonios</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors text-sm font-medium">Contacto</a>
            <a href="https://wa.me/541151624368" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-blue-700 text-white">Solicitar Cotización</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 md:py-32 bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Soluciones Eléctricas Profesionales
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Para hogares, negocios e industrias. Confiabilidad, seguridad y experiencia en cada proyecto.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="https://wa.me/541151624368" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-blue-700 text-white text-lg px-8 py-6">
                  Solicitar Cotización Gratis
                </Button>
              </a>
              <a href="https://wa.me/541151624368" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-blue-50 text-lg px-8 py-6">
                  Contactar Electricista
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {trustStats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center p-6 rounded-lg border border-border hover:border-primary/30 transition-colors">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="font-semibold text-foreground mb-1">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos soluciones eléctricas completas para satisfacer todas tus necesidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card
                  key={idx}
                  className="bg-white border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-6">
                    <div className="mb-4 inline-block p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Gallery Carousel Section */}
      <section id="projects" className="py-20 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 opacity-0 pointer-events-none">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Proyectos Completados</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Galería de nuestros trabajos más destacados en instalaciones residenciales e industriales
            </p>
          </div>

          {/* Carousel Container */}
          <div
            className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg"
            onMouseEnter={() => setIsAutoplay(false)}
            onMouseLeave={() => setIsAutoplay(true)}
          >
            {/* Slides */}
            <div className="relative h-96 md:h-[500px] bg-gray-900 overflow-hidden">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* Image with zoom effect */}
                  <img
                    src={project.img}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      idx === currentSlide ? "scale-100" : "scale-95"
                    }`}
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-white/90">
                        <span className="text-sm md:text-base font-semibold bg-primary/80 px-3 py-1 rounded-full w-fit">
                          {project.type}
                        </span>
                        <div className="flex items-center gap-2 text-sm md:text-base">
                          <MapPin className="w-4 h-4" />
                          {project.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-900 rounded-full p-2 md:p-3 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Siguiente slide"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`transition-all duration-300 rounded-full ${
                    idx === currentSlide
                      ? "bg-white w-8 h-2"
                      : "bg-white/50 hover:bg-white/70 w-2 h-2"
                  }`}
                  aria-label={`Ir al slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6 text-muted-foreground">
            <p className="text-sm md:text-base">
              Proyecto {currentSlide + 1} de {projects.length}
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Por qué Elegirnos</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Somos la opción confiable para tus necesidades eléctricas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Card key={idx} className="bg-white border-border hover:border-primary/50 transition-colors">
                  <div className="p-6 text-center">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Testimonios de Clientes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lo que nuestros clientes dicen sobre nuestro servicio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="bg-white border-border hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-400 to-gray-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Necesitas Ayuda Eléctrica Profesional?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Solicita tu cotización hoy y descubre por qué somos la opción confiable para tus necesidades eléctricas.
          </p>
          <a href="https://wa.me/541151624368" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-primary font-bold text-lg px-8 py-6">
              Solicitar Cotización Hoy
            </Button>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contacto</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ponte en contacto con nosotros para más información
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Tu teléfono"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Tu mensaje"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary"
                  required
                />
                <Button type="submit" className="w-full bg-primary hover:bg-blue-700 text-white">
                  Enviar Mensaje
                </Button>
                {formSubmitted && (
                  <p className="text-green-600 text-center">¡Mensaje enviado correctamente!</p>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Teléfono</h3>
                  <p className="text-muted-foreground">+54 11 51624368</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">info@tecelectrica.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">Ubicación</h3>
                  <p className="text-muted-foreground">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/manus-storage/epma-logo_2584df82.webp" alt="EPMA Logo" className="h-12 w-12 object-contain" />
                <h3 className="font-bold text-foreground">EPMA</h3>
              </div>
              <p className="text-sm text-muted-foreground">Soluciones eléctricas profesionales para hogares, negocios e industrias.</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Instalaciones Residenciales</li>
                <li>Sistemas Industriales</li>
                <li>Mantenimiento Eléctrico</li>
                <li>Diagnóstico y Reparación</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Información</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Teléfono: +54 11 51624368</li>
                <li>Email: info@tecelectrica.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4">Síguenos</h4>
              <div className="flex gap-6 items-center">
                <a href="https://instagram.com/epma_2025" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663431601309/6LGU5NM5Spx5YHfSKF2L4D/instagram-logo_14642973.png" alt="Instagram" className="w-8 h-8" />
                  <span className="text-muted-foreground hover:text-primary transition-colors">epma_2025</span>
                </a>
                <a href="https://wa.me/541151624368" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663431601309/6LGU5NM5Spx5YHfSKF2L4D/whatsapp-logo_1dbf8093.png" alt="WhatsApp" className="w-8 h-8" />
                  <span className="text-muted-foreground hover:text-primary transition-colors">1151624368</span>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Tec Eléctrica. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/541151624368"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-40 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <img src="https://d2xsxph8kpxj0f.cloudfront.net/310519663431601309/6LGU5NM5Spx5YHfSKF2L4D/whatsapp-logo_1dbf8093.png" alt="WhatsApp" className="w-16 h-16 hover:scale-110 transition-transform duration-300" />
      </a>
    </div>
  );
}
