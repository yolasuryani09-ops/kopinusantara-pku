# Kopi Nusantara Direct

Buatkan web landing pagi / web sederhana tentang coffee shop "Kopi Nusantara" agar pelanggan offline memesan dari meja masing - masing 

<!DOCTYPE html>

<html lang="id" class="scroll-smooth">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Kopi Nusantara - Cita Rasa Asli Indonesia</title>

    <!-- Tailwind CSS CDN -->

    <script src="https://cdn.tailwindcss.com"></script>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">

</head>

<body class="bg-amber-50 text-stone-800 font-sans">

    <!-- Header / Navbar -->

    <nav class="bg-stone-900 text-amber-100 p-4 fixed w-full top-0 z-50 shadow-lg">

        <div class="max-w-6xl mx-auto flex justify-between items-center">

            <h1 class="text-2xl font-bold tracking-wide text-amber-500">Kopi Nusantara</h1>

            <div class="space-x-6 hidden md:block">

                <a href="#hero" class="hover:text-amber-400">Beranda</a>

                <a href="#menu" class="hover:text-amber-400">Menu</a>

                <a href="#testimoni" class="hover:text-amber-400">Testimoni</a>

                <a href="#lokasi" class="hover:text-amber-400">Lokasi</a>

            </div>

            <a href="https://wa.me/6281234567890?text=Halo%20Kopi%20Nusantara,%20saya%20mau%20pesan" target="_blank" class="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition font-medium">

                <i class="fab font-bold fa-whatsapp mr-1"></i> Pesan WA

            </a>

        </div>

    </nav>

    <!-- Hero Section -->

    <section id="hero" class="pt-32 pb-20 px-4 text-center bg-stone-900 text-white">

        <div class="max-w-4xl mx-auto">

            <h2 class="text-4xl md:text-6xl font-extrabold mb-4 text-amber-500">Nikmati Seduhan Biji Kopi Terbaik Nusantara</h2>

            <p class="text-lg md:text-xl text-stone-300 mb-8">Dari Aceh hingga Papua, disajikan hangat khusus untuk menemani harimu.</p>

            <a href="#menu" class="bg-amber-600 hover:bg-amber-700 text-white text-lg px-6 py-3 rounded-xl font-semibold transition">Lihat Menu</a>

        </div>

    </section>

    <!-- Menu Section -->

    <section id="menu" class="py-16 px-4 max-w-6xl mx-auto">

        <h3 class="text-3xl font-bold text-center text-stone-900 mb-10">Menu Favorit</h3>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

            <!-- Menu Item 1 -->

            <div class="bg-white p-6 rounded-2xl shadow-md border border-amber-100">

                <div class="h-40 bg-stone-200 rounded-xl mb-4 flex items-center justify-center text-stone-500">

                    <i class="fas fa-mug-hot text-5xl text-amber-800"></i>

                </div>

                <h4 class="text-xl font-bold mb-2">Es Kopi Gula Aren</h4>

                <p class="text-stone-600 text-sm mb-4">Espresso ganda dengan susu segar dan manis alami gula aren asli.</p>

                <p class="text-amber-700 font-bold text-lg">Rp 18.000</p>

            </div>

            <!-- Menu Item 2 -->

            <div class="bg-white p-6 rounded-2xl shadow-md border border-amber-100">

                <div class="h-40 bg-stone-200 rounded-xl mb-4 flex items-center justify-center text-stone-500">

                    <i class="fas fa-coffee text-5xl text-amber-900"></i>

                </div>

                <h4 class="text-xl font-bold mb-2">Manual Brew Gayo</h4>

                <p class="text-stone-600 text-sm mb-4">Single origin Aceh Gayo dengan notes floral dan acidity yang seimbang.</p>

                <p class="text-amber-700 font-bold text-lg">Rp 22.000</p>

            </div>

            <!-- Menu Item 3 -->

            <div class="bg-white p-6 rounded-2xl shadow-md border border-amber-100">

                <div class="h-40 bg-stone-200 rounded-xl mb-4 flex items-center justify-center text-stone-500">

                    <i class="fas fa-cookie-bite text-5xl text-amber-700"></i>

                </div>

                <h4 class="text-xl font-bold mb-2">Roti Bakar Kaya</h4>

                <p class="text-stone-600 text-sm mb-4">Roti renyah dengan isian selai kaya buatan sendiri dan mentega gurih.</p>

                <p class="text-amber-700 font-bold text-lg">Rp 15.000</p>

            </div>

        </div>

    </section>

    <!-- Testimoni Section -->

    <section id="testimoni" class="py-16 bg-amber-100/50 px-4">

        <div class="max-w-6xl mx-auto">

            <h3 class="text-3xl font-bold text-center text-stone-900 mb-10">Kata Mereka</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div class="bg-white p-6 rounded-2xl shadow-sm italic text-stone-700 border-l-4 border-amber-600">

                    "Kopi Gayo-nya mantap banget! Tempatnya juga nyaman buat WFC (Work from Cafe)."

                    <p class="not-italic font-bold text-stone-900 mt-4">- Budi S.</p>

                </div>

                <div class="bg-white p-6 rounded-2xl shadow-sm italic text-stone-700 border-l-4 border-amber-600">

                    "Es Kopi Gula Aren terbaik di kota ini, rasanya pas dan nggak kemanisan."

                    <p class="not-italic font-bold text-stone-900 mt-4">- Rina M.</p>

                </div>

            </div>

        </div>

    </section>

    <!-- Lokasi & Kontak Section -->

    <section id="lokasi" class="py-16 px-4 max-w-6xl mx-auto">

        <h3 class="text-3xl font-bold text-center text-stone-900 mb-10">Kunjungi Kami</h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            <div>

                <p class="text-lg font-semibold mb-2">Alamat:</p>

                <p class="text-stone-600 mb-6">Jl. Nusantara No. 45, Kebayoran, Jakarta Selatan</p>

                

                <p class="text-lg font-semibold mb-2">Jam Operasional:</p>

                <p class="text-stone-600 mb-6">Senin - Minggu: 08.00 - 22.00 WIB</p>

                <p class="text-lg font-semibold mb-2">Sosial Media & Kontak:</p>

                <div class="flex space-x-4">

                    <a href="https://instagram.com" target="_blank" class="bg-stone-200 hover:bg-stone-300 p-3 rounded-full text-stone-800 transition">

                        <i class="fab fa-instagram text-xl"></i>

                    </a>

                    <a href="https://tiktok.com" target="_blank" class="bg-stone-200 hover:bg-stone-300 p-3 rounded-full text-stone-800 transition">

                        <i class="fab fa-tiktok text-xl"></i>

                    </a>

                    <a href="https://wa.me/6281234567890" target="_blank" class="bg-green-600 hover:bg-green-700 p-3 rounded-full text-white transition">

                        <i class="fab fa-whatsapp text-xl"></i>

                    </a>

                </div>

            </div>

            

            <!-- Peta / Google Maps Placeholder -->

            <div class="w-full h-64 bg-stone-300 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.28258282365!2d106.759478!3d-6.229728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%20South%2C%20South%20Jakarta%0A%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1680000000000!5m2!1sen!2sid" class="w-full h-full border-0" allowfullscreen="" loading="lazy"></iframe>

            </div>

        </div>

    </section>

    <!-- Footer -->

    <footer class="bg-stone-900 text-stone-400 text-center py-6 border-t border-stone-800">

        <p>&copy; 2026 Kopi Nusantara. All Rights Reserved.</p>

    </footer>

</body>

</html>

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://kopinusantara-pku.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/767ed41a-9390-40b4-be08-731d1f57434c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
