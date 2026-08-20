import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Coffee,
  MapPin,
  Clock,
  Instagram,
  Phone,
  MessageCircle,
  ChevronDown,
  UtensilsCrossed,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import esKopiImage from "@/assets/es-kopi-gula-aren.jpg";
import manualBrewImage from "@/assets/manual-brew-gayo.jpg";
import rotiBakarImage from "@/assets/roti-bakar-kaya.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Kopi Nusantara - Cita Rasa Asli Indonesia",
      },
      {
        name: "description",
        content:
          "Nikmati seduhan biji kopi terbaik Nusantara di Kopi Nusantara. Pesan langsung dari meja Anda via WhatsApp.",
      },
      { property: "og:title", content: "Kopi Nusantara - Cita Rasa Asli Indonesia" },
      {
        property: "og:description",
        content:
          "Nikmati seduhan biji kopi terbaik Nusantara di Kopi Nusantara. Pesan langsung dari meja Anda via WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const WHATSAPP_NUMBER = "6281234567890";

const MENU_ITEMS = [
  {
    id: 1,
    name: "Es Kopi Gula Aren",
    description:
      "Espresso ganda dengan susu segar dan manis alami gula aren asli.",
    price: "Rp 18.000",
    image: esKopiImage,
    alt: "Gelas Es Kopi Gula Aren dengan lapisan gula aren dan susu",
  },
  {
    id: 2,
    name: "Manual Brew Gayo",
    description:
      "Single origin Aceh Gayo dengan notes floral dan acidity yang seimbang.",
    price: "Rp 22.000",
    image: manualBrewImage,
    alt: "Proses manual brew kopi Aceh Gayo dengan V60",
  },
  {
    id: 3,
    name: "Roti Bakar Kaya",
    description:
      "Roti renyah dengan isian selai kaya buatan sendiri dan mentega gurih.",
    price: "Rp 15.000",
    image: rotiBakarImage,
    alt: "Roti bakar dengan selai kaya dan mentega",
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Kopi Gayo-nya mantap banget! Tempatnya juga nyaman buat WFC (Work from Cafe).",
    author: "Budi S.",
  },
  {
    id: 2,
    quote:
      "Es Kopi Gula Aren terbaik di kota ini, rasanya pas dan nggak kemanisan.",
    author: "Rina M.",
  },
];

function buildOrderUrl(tableNumber: string) {
  const text = encodeURIComponent(
    `Halo Kopi Nusantara, saya mau pesan dari Meja ${tableNumber}.`,
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#beranda", label: "Beranda" },
    { href: "#menu", label: "Menu" },
    { href: "#pesan", label: "Pesan Meja" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#lokasi", label: "Lokasi" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-coffee/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 text-amber-glow">
          <Coffee className="h-7 w-7" />
          <span className="text-xl font-bold tracking-wide">Kopi Nusantara</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cream/90 transition-colors hover:text-amber-glow"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            asChild
            className="gap-2 bg-amber-glow text-coffee hover:bg-amber-glow/90"
          >
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Halo Kopi Nusantara, saya mau pesan",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              Pesan WA
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-cream md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={mobileOpen}
        >
          <ChevronDown
            className={`h-6 w-6 transition-transform ${mobileOpen ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 px-4 pb-4 md:hidden">
          <div className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-cream/90 transition-colors hover:text-amber-glow"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 gap-2 bg-amber-glow text-coffee hover:bg-amber-glow/90"
            >
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Halo Kopi Nusantara, saya mau pesan",
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Pesan WA
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-[80vh] items-center justify-center bg-coffee px-4 pt-24 text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.55_0.1_65/0.25),transparent_50%)]" />
      <div className="relative mx-auto max-w-4xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-glow/30 bg-amber-glow/10 px-4 py-1.5 text-sm text-amber-glow">
          <Coffee className="h-4 w-4" />
          <span>Dari Aceh hingga Papua</span>
        </div>
        <h1 className="text-4xl font-extrabold leading-tight text-amber-glow md:text-6xl">
          Nikmati Seduhan Biji Kopi Terbaik Nusantara
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/80 md:text-xl">
          Disajikan hangat khusus untuk menemani harimu. Pesan langsung dari
          meja masing-masing tanpa ribet.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-amber-glow text-coffee hover:bg-amber-glow/90"
          >
            <a href="#menu">
              <UtensilsCrossed className="h-5 w-5" />
              Lihat Menu
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 border-cream/30 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
          >
            <a href="#pesan">
              <MessageCircle className="h-5 w-5" />
              Pesan dari Meja
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-coffee md:text-4xl">Menu Favorit</h2>
        <p className="mt-3 text-muted-foreground">
          Pilihan terbaik yang disajikan oleh barista kami setiap hari.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {MENU_ITEMS.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden border-border bg-card transition-shadow hover:shadow-lg"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.alt}
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl text-coffee">{item.name}</CardTitle>
              <CardDescription className="text-muted-foreground">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between pt-0">
              <span className="text-lg font-bold text-primary">{item.price}</span>
              <Button
                asChild
                size="sm"
                className="gap-1 bg-coffee text-cream hover:bg-coffee/90"
              >
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Halo Kopi Nusantara, saya mau pesan ${item.name}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pesan
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function TableOrderSection() {
  const [tableNumber, setTableNumber] = useState("");

  return (
    <section id="pesan" className="bg-secondary/50 px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <Card className="border-border bg-card p-2 text-center shadow-lg">
          <CardHeader>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <UtensilsCrossed className="h-6 w-6" />
            </div>
            <CardTitle className="text-2xl text-coffee md:text-3xl">
              Pesan dari Meja Anda
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Pilih nomor meja, lalu kirim pesanan via WhatsApp. Barista kami
              akan siapkan pesanan Anda.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="mx-auto max-w-xs">
              <Select value={tableNumber} onValueChange={setTableNumber}>
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="Pilih nomor meja" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 20 }, (_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1)}>
                      Meja {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button
              asChild
              size="lg"
              disabled={!tableNumber}
              className="gap-2 bg-amber-glow text-coffee hover:bg-amber-glow/90 disabled:opacity-50"
            >
              <a
                href={tableNumber ? buildOrderUrl(tableNumber) : undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Lanjutkan ke WhatsApp
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimoni" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-coffee md:text-4xl">Kata Mereka</h2>
        <p className="mt-3 text-muted-foreground">
          Apa yang pelanggan katakan tentang Kopi Nusantara.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {TESTIMONIALS.map((item) => (
          <Card
            key={item.id}
            className="border-l-4 border-l-primary border-border bg-card"
          >
            <CardContent className="p-6">
              <div className="mb-4 flex gap-1 text-amber-glow">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="italic text-foreground">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-4 font-bold text-coffee">- {item.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section id="lokasi" className="bg-secondary/50 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-coffee md:text-4xl">
            Kunjungi Kami
          </h2>
          <p className="mt-3 text-muted-foreground">
            Datang langsung dan rasakan suasana ngopi yang nyaman.
          </p>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-coffee">Alamat</h3>
                <p className="mt-1 text-muted-foreground">
                  Jl. Nusantara No. 45, Kebayoran, Jakarta Selatan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-coffee">Jam Operasional</h3>
                <p className="mt-1 text-muted-foreground">
                  Senin - Minggu: 08.00 - 22.00 WIB
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-coffee">Kontak</h3>
                <p className="mt-1 text-muted-foreground">+62 812-3456-7890</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-muted text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram Kopi Nusantara"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-whatsapp text-white transition-colors hover:bg-whatsapp/90"
                aria-label="WhatsApp Kopi Nusantara"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-muted shadow-inner">
            <iframe
              title="Lokasi Kopi Nusantara"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.28258282365!2d106.759478!3d-6.229728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20South%2C%20South%20Jakarta%0A%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1680000000000!5m2!1sen!2sid"
              className="h-80 w-full border-0 md:h-96"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-coffee py-8 text-center">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-sm text-cream/60">
          &copy; {new Date().getFullYear()} Kopi Nusantara. All Rights Reserved.
        </p>
        <Link
          to="/"
          className="flex items-center gap-2 text-amber-glow transition-opacity hover:opacity-80"
        >
          <Coffee className="h-5 w-5" />
          <span className="font-semibold">Kopi Nusantara</span>
        </Link>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <MenuSection />
        <TableOrderSection />
        <TestimonialsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
