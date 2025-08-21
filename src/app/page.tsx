'use client';

import ModernGallery from '../components/ModernGallery';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <Image 
              src="/logo.png" 
              alt="David Vincent" 
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#musique" className="text-gray-700 hover:text-[#da3b28] transition-colors font-medium">Musique</a>
            <Link href="/bio" className="text-gray-700 hover:text-[#da3b28] transition-colors font-medium">Bio</Link>
            <a href="#concerts" className="text-gray-700 hover:text-[#da3b28] transition-colors font-medium">Concerts</a>
            <a href="#contact" className="text-gray-700 hover:text-[#da3b28] transition-colors font-medium">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-6 py-4 space-y-4">
            <a 
              href="#musique" 
              className="block text-gray-700 hover:text-[#da3b28] transition-colors font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Musique
            </a>
            <Link 
              href="/bio" 
              className="block text-gray-700 hover:text-[#da3b28] transition-colors font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bio
            </Link>
            <a 
              href="#concerts" 
              className="block text-gray-700 hover:text-[#da3b28] transition-colors font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Concerts
            </a>
            <a 
              href="#contact" 
              className="block text-gray-700 hover:text-[#da3b28] transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative pt-24 pb-20 min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            muted 
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <Image 
              src="/logo.png" 
              alt="David Vincent Logo" 
              width={160}
              height={160}
              className="w-32 h-32 md:w-40 md:h-40 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white drop-shadow-2xl tracking-wider" style={{fontFamily: 'var(--font-bebas)'}}>
            DAVID
            <span className="block text-[#da3b28]">VINCENT</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Arles - Rock, noise, cold wave
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://www.youtube.com/@DavidVincent-ts5ex" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-red-600 text-white font-black rounded-lg hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm tracking-wide"
              style={{fontFamily: 'var(--font-oswald)'}}
            >
ÉCOUTER SUR YOUTUBE
            </a>
            <button className="px-8 py-4 border-2 border-gray-200 text-gray-100 font-black rounded-lg hover:border-red-400 hover:text-[#da3b28] hover:bg-white/10 transition-all duration-300 backdrop-blur-sm tracking-wide" style={{fontFamily: 'var(--font-oswald)'}}>
PROCHAINS CONCERTS
            </button>
          </div>
        </div>
      </section>

      {/* Musique Section */}
      <section id="musique" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        
        {/* Halo d'atterrissage ovni en bas */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[1400px] h-[600px] bg-[#da3b28]/50 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 -left-40 translate-y-1/3 w-[800px] h-[400px] bg-[#da3b28]/40 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-0 -right-40 translate-y-1/3 w-[900px] h-[450px] bg-[#da3b28]/35 rounded-full blur-[110px] animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-0 left-1/4 translate-y-2/3 w-[600px] h-[300px] bg-[#da3b28]/30 rounded-full blur-[80px] animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-0 right-1/4 translate-y-2/3 w-[700px] h-[350px] bg-[#da3b28]/45 rounded-full blur-[90px] animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center text-[#da3b28] tracking-widest" style={{fontFamily: 'var(--font-bebas)'}}>
LES COMPOSITIONS
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* THE SWEET CHILD */}
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-[#da3b28]/50 rounded-xl p-8 hover:border-[#da3b28] hover:shadow-2xl hover:shadow-[#da3b28]/20 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#da3b28]/20 via-transparent to-orange-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-4 h-4 bg-[#da3b28] rounded-full animate-pulse shadow-lg shadow-[#da3b28]/50"></div>
                  <span className="text-lg text-orange-400 font-black tracking-wider">7:34</span>
                </div>
                <h3 className="text-white font-black text-2xl mb-3 group-hover:text-[#da3b28] transition-colors transform group-hover:scale-105 duration-300 tracking-wide" style={{fontFamily: 'var(--font-oswald)'}}>
                  THE SWEET CHILD
                </h3>
                <p className="text-gray-400 text-sm mb-6 font-semibold">🎵 Single</p>
                <div className="text-xs text-gray-500 mb-4">Il y a 3 semaines</div>
                
                <div className="mb-6 rounded-lg overflow-hidden">
                  <iframe 
                    width="100%" 
                    height="200" 
                    src="https://www.youtube.com/embed/Mxo9vkeAzjQ" 
                    title="THE SWEET CHILD - David Vincent"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                
              </div>
              
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#da3b28] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* LA VILLE */}
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-[#da3b28]/50 rounded-xl p-8 hover:border-[#da3b28] hover:shadow-2xl hover:shadow-[#da3b28]/20 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#da3b28]/20 via-transparent to-orange-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-4 h-4 bg-[#da3b28] rounded-full animate-pulse shadow-lg shadow-[#da3b28]/50"></div>
                  <span className="text-lg text-orange-400 font-black tracking-wider">4:10</span>
                </div>
                <h3 className="text-white font-black text-2xl mb-3 group-hover:text-[#da3b28] transition-colors transform group-hover:scale-105 duration-300 tracking-wide" style={{fontFamily: 'var(--font-oswald)'}}>
                  LA VILLE
                </h3>
                <p className="text-gray-400 text-sm mb-6 font-semibold">🎵 Single</p>
                <div className="text-xs text-gray-500 mb-4">Il y a 3 mois</div>
                
                <div className="mb-6 rounded-lg overflow-hidden">
                  <iframe 
                    width="100%" 
                    height="200" 
                    src="https://www.youtube.com/embed/6b7mGeh1xpU" 
                    title="LA VILLE - David Vincent"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                
              </div>
              
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#da3b28] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* LA VIE ME VA */}
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-[#da3b28]/50 rounded-xl p-8 hover:border-[#da3b28] hover:shadow-2xl hover:shadow-[#da3b28]/20 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#da3b28]/20 via-transparent to-orange-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-4 h-4 bg-[#da3b28] rounded-full animate-pulse shadow-lg shadow-[#da3b28]/50"></div>
                  <span className="text-lg text-orange-400 font-black tracking-wider">3:55</span>
                </div>
                <h3 className="text-white font-black text-2xl mb-3 group-hover:text-[#da3b28] transition-colors transform group-hover:scale-105 duration-300 tracking-wide" style={{fontFamily: 'var(--font-oswald)'}}>
                  LA VIE ME VA
                </h3>
                <p className="text-gray-400 text-sm mb-6 font-semibold">🎵 Single</p>
                <div className="text-xs text-gray-500 mb-4">Il y a 3 mois</div>
                
                <div className="mb-6 rounded-lg overflow-hidden">
                  <iframe 
                    width="100%" 
                    height="200" 
                    src="https://www.youtube.com/embed/2BJYUqgNeyw" 
                    title="LA VIE ME VA - David Vincent"
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                
              </div>
              
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-[#da3b28] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>



      {/* Concerts Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-black text-center mb-16 text-[#da3b28] tracking-wide" style={{fontFamily: 'var(--font-bebas)'}}>
            PROCHAINS CONCERTS
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg hover:border-[#da3b28]/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-wide" style={{fontFamily: 'var(--font-oswald)'}}>PADDY MULLIN&apos;S</h3>
                  <p className="text-gray-600 mb-2">Arles</p>
                  <p className="text-sm text-gray-500">Concert</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black text-[#da3b28] mb-1" style={{fontFamily: 'var(--font-bebas)'}}>15 NOV</p>
                  <p className="text-gray-600">2025</p>
                  <button className="mt-2 px-4 py-2 bg-gray-300 text-gray-600 rounded-lg cursor-not-allowed font-medium">
                    BIENTÔT
                  </button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>


      {/* Modern Gallery */}
      <section className="py-20 bg-black relative overflow-hidden">
        
        {/* Halo d'atterrissage ovni en bas pour la galerie */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[1400px] h-[600px] bg-[#da3b28]/50 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 -left-40 translate-y-1/3 w-[800px] h-[400px] bg-[#da3b28]/40 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-0 -right-40 translate-y-1/3 w-[900px] h-[450px] bg-[#da3b28]/35 rounded-full blur-[110px] animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-0 left-1/4 translate-y-2/3 w-[600px] h-[300px] bg-[#da3b28]/30 rounded-full blur-[80px] animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-0 right-1/4 translate-y-2/3 w-[700px] h-[350px] bg-[#da3b28]/45 rounded-full blur-[90px] animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 text-[#da3b28] tracking-widest" style={{fontFamily: 'var(--font-bebas)'}}>
GALERIE
          </h2>
          
          <ModernGallery />
        </div>
      </section>


      {/* Footer */}
      <footer id="contact" className="py-16 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo in footer */}
          <div className="mb-8 flex justify-center">
            <Image 
              src="/logo.png" 
              alt="David Vincent Logo" 
              width={80}
              height={80}
              className="w-20 h-20 object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h3 className="text-2xl font-black text-[#da3b28] mb-8 tracking-wide" style={{fontFamily: 'var(--font-bebas)'}}>RESTEZ CONNECTÉS</h3>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-[#da3b28] transition-colors duration-300 font-medium">
              <span>Email</span>
            </a>
            <a 
              href="https://www.instagram.com/thedavidvincentgroup?utm_source=qr&igsh=YzM3a2NteDgxOWly" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-gray-600 hover:text-[#da3b28] transition-colors duration-300 font-medium"
            >
              <span>Instagram</span>
            </a>
            <a 
              href="https://www.youtube.com/@DavidVincent-ts5ex" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 text-gray-600 hover:text-[#da3b28] transition-colors duration-300 font-medium"
            >
              <span>YouTube</span>
            </a>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-500 text-sm">© 2024 David Vincent - Tous droits réservés</p>
            <p className="text-gray-400 text-xs mt-2">Rock français • Arles • Provence</p>
          </div>
        </div>
      </footer>
    </div>
  );
}