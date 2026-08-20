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
  Wifi,
  Wind,
  Zap,
  Music,
  Car,
  Users,
  Heart,
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
import kopiSusuImage from "@/assets/kopi-susu-nusantara.jpg";
import matchaLatteImage from "@/assets/matcha-latte.jpg";
import croissantKejuImage from "@/assets/croissant-keju.jpg";
import pisangGorengImage from "@/assets/pisang-goreng-crispy.jpg";
import tehTarikImage from "@/assets/teh-tarik.jpg";

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
          "Nikmati seduhan biji kopi terbaik Nusantara di Kopi Nusantara, Taman Karya Pekanbaru. Pesan langsung dari meja Anda via WhatsApp.",
      },
      { property: "og:title", content: "Kopi Nusantara - Cita Rasa Asli Indonesia" },
      {
        property: "og:description",
        content:
          "Nikmati seduhan biji kopi terbaik Nusantara di Kopi Nusantara, Taman Karya Pekanbaru. Pesan langsung dari meja Anda via WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const WHATSAPP_NUMBER = "6281234567890";
const INSTAGRAM_HANDLE = "sryn89_";

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
  {
    id: 4,
    name: "Kopi Susu Nusantara",
    description:
      "Perpaduan espresso khas Nusantara dan susu segar yang creamy dan halus.",
    price: "Rp 20.000",
    image: kopiSusuImage,
    alt: "Gelas Kopi Susu Nusantara dengan lapisan susu dan espresso",
  },
  {
    id: 5,
    name: "Matcha Latte",
    description:
      "Matcha Jepang premium yang creamy dengan susu segar dan sedikit madu.",
    price: "Rp 24.000",
    image: matchaLatteImage,
    alt: "Gelas Matcha Latte berwarna hijau dengan foam di atasnya",
  },
  {
    id: 6,
    name: "Croissant Keju",
    description:
      "Croissant renyah luar, lembut dalam, dengan isian keju meleleh gurih.",
    price: "Rp 17.000",
    image: croissantKejuImage,
    alt: "Croissant keju gurih dengan isian keju meleleh",
  },
  {
    id: 7,
    name: "Pisang Goreng Crispy",
    description:
      "Pisang tanduk goreng tepung renyah, taburan gula halus, cocok untuk ngopi.",
    price: "Rp 14.000",
    image: pisangGorengImage,
    alt: "Piring pisang goreng crispy dengan taburan gula halus",
  },
  {
    id: 8,
    name: "Teh Tarik",
    description:
      "Teh susu khas Melayu yang ditarik sempurna, hangat dan beraroma rempah.",
    price: "Rp 16.000",
    image: tehTarikImage,
    alt: "Gelas Teh Tarik hangat dengan foam di atasnya",
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
  {
    id: 3,
    quote:
      "Sering kesini bareng teman. WiFi kencang, colokan banyak, dan kopinya enak.",
    author: "Andi K.",
  },
  {
    id: 4,
    quote:
      "Pesen dari meja via WhatsApp sangat praktis. Pelayanannya juga ramah dan cepat.",
    author: "Sari L.",
  },
];

const FACILITIES = [
  {
    id: 1,
    icon: Wifi,
    title: "WiFi Gratis",
    description: "Koneksi internet cepat untuk kerja atau bersantai.",
  },
  {
    id: 2,
    icon: Wind,
    title: "Area Merokok & Bebas Rokok",
    description: "Zona nyaman untuk perokok maupun non-perokok.",
  },
  {
    id: 3,
    icon: Zap,
    title: "Colokan di Setiap Meja",
    description: "Jangan khawatir baterai habis saat bekerja.",
  },
  {
    id: 4,
    icon: Music,
    title: "AC & Musik Santai",
    description: "Suasana dingin dengan playlist yang menenangkan.",
  },
  {
    id: 5,
    icon: Car,
    title: "Parkir Luas",
    description: "Area parkir mobil dan motor yang luas dan aman.",
  },
  {
    id: 6,
    icon: Users,
    title: "Ruang Meeting Kecil",
    description: "Tersedia ruang diskusi untuk 6-8 orang (reservasi).",
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
    { href: "#tentang", label: "Tentang" },
    { href: "#menu", label: "Menu" },
    { href: "#fasilitas", label: "Fasilitas" },
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
          <Heart className="h-4 w-4" />
          <span>Kopi Nikmat Hati Senang</span>
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

function AboutSection() {
  return (
    <section id="tentang" className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Coffee className="h-4 w-4" />
            <span>Tentang Kopi Nusantara</span>
          </div>
          <h2 className="text-3xl font-bold text-coffee md:text-4xl">
            Menghadirkan Cita Rasa Kopi Lokal ke Setiap Meja
          </h2>
          <p className="mt-4 text-muted-foreground">
            Kopi Nusantara hadir dari kecintaan kami terhadap biji kopi Indonesia.
            Kami menyajikan biji pilihan dari berbagai daerah, diseduh dengan
            teknik terbaik oleh barista berpengalaman.
          </p>
          <p className="mt-4 text-muted-foreground">
            Di Taman Karya, Pekanbaru, kami ingin menciptakan ruang ngopi yang
            nyaman untuk semua: mahasiswa, pekerja remote, keluarga, dan
            komunitas. Karena setiap cangkir yang kami sajikan bermakna.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl bg-secondary/50 p-4">
              <p className="text-2xl font-bold text-primary">8+</p>
              <p className="text-sm text-muted-foreground">Varian Kopi</p>
            </div>
            <div className="rounded-xl bg-secondary/50 p-4">
              <p className="text-2xl font-bold text-primary">20</p>
              <p className="text-sm text-muted-foreground">Meja Tersedia</p>
            </div>
            <div className="rounded-xl bg-secondary/50 p-4">
              <p className="text-2xl font-bold text-primary">4.8</p>
              <p className="text-sm text-muted-foreground">Rating Pelanggan</p>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted shadow-xl">
            <img
              src={manualBrewImage}
              alt="Barista menyeduh manual brew kopi Nusantara"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section id="menu" className="bg-secondary/30 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-coffee md:text-4xl">Menu Favorit</h2>
          <p className="mt-3 text-muted-foreground">
            Pilihan terbaik yang disajikan oleh barista kami setiap hari.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
      </div>
    </section>
  );
}

function FacilitiesSection() {
  return (
    <section id="fasilitas" className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-coffee md:text-4xl">Fasilitas Kami</h2>
        <p className="mt-3 text-muted-foreground">
          Kenyamanan pelanggan adalah prioritas utama Kopi Nusantara.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FACILITIES.map((facility) => (
          <Card
            key={facility.id}
            className="border-border bg-card transition-shadow hover:shadow-md"
          >
            <CardContent className="flex items-start gap-4 p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <facility.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-coffee">{facility.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {facility.description}
                </p>
              </div>
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
        <h2 className="text-3xl font-bold text-coffee md:text-4xl">Testimoni</h2>
        <p className="mt-3 text-muted-foreground">
          Apa yang pelanggan katakan tentang Kopi Nusantara.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
                  Taman Karya, Pekanbaru, Riau
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
                href={`https://instagram.com/${INSTAGRAM_HANDLE}`}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.9999999999995!2d101.45!3d0.5333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzEnNTkuOCJOIDEwMcKwMjcnMDIuMCJF!5e0!3m2!1sen!2sid!4v1680000000000!5m2!1sen!2sid"
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
        <AboutSection />
        <MenuSection />
        <FacilitiesSection />
        <TableOrderSection />
        <TestimonialsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
