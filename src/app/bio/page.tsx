'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Bio() {
  const [visibleElements, setVisibleElements] = useState<Set<number>>(new Set())
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleElements(prev => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('[data-index]')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Image 
            src="/logo.png" 
            alt="David Vincent" 
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#da3b28] transition-colors font-medium">Accueil</Link>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/#musique" className="text-gray-700 hover:text-[#da3b28] transition-colors font-medium">Musique</a>
            <span className="text-[#da3b28] font-medium">Bio</span>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/#concerts" className="text-gray-700 hover:text-[#da3b28] transition-colors font-medium">Concerts</a>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/#contact" className="text-gray-700 hover:text-[#da3b28] transition-colors font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section simplifié */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        
        {/* Halo d'atterrissage ovni en bas - plus subtil */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-[#da3b28]/20 rounded-full blur-[80px] animate-pulse"></div>
        </div>
        
        <div 
          data-index="0"
          className={`max-w-4xl mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${
            visibleElements.has(0) 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-10'
          }`}
        >
          <h1 className="text-6xl font-black mb-6 text-[#da3b28] tracking-wide" style={{fontFamily: 'var(--font-bebas)'}}>
            DAVID VINCENT
          </h1>
          <p className="text-xl text-gray-100 leading-relaxed max-w-2xl mx-auto">
            L&apos;ovni musical qui atterrit dans un halo rougeoyant d&apos;énergie
          </p>
        </div>
      </section>

      {/* Contenu principal simplifié */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Intro */}
          <div 
            data-index="1"
            className={`mb-20 transition-all duration-1000 delay-300 ${
              visibleElements.has(1) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <blockquote className="text-2xl text-gray-700 leading-relaxed italic text-center mb-8 border-l-4 border-[#da3b28] pl-8">
              &ldquo;David Vincent les a vus. Il les a vus car ses membres étaient nés, à cet autre siècle où les Pixies ont sorti Doolittle ; chacun d&apos;entre eux se souvient précisément de ce à quoi il était occupé lorsqu&apos;on annonça la mort de Kurt Cobain à la radio.&rdquo;
            </blockquote>
          </div>

          {/* Génération impossible */}
          <div 
            data-index="2"
            className={`mb-20 transition-all duration-1000 delay-500 ${
              visibleElements.has(2) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-black mb-8 text-gray-900 tracking-wide text-center" style={{fontFamily: 'var(--font-bebas)'}}>
              UNE GÉNÉRATION IMPOSSIBLE
            </h2>
            <div className="prose prose-xl max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Comment peut-on encore craindre la fin d&apos;un siècle, le XXème siècle, qui est déjà advenue ? Névrose des XY auxquels l&apos;injonction d&apos;avoir à changer la vie n&apos;en finit pas de les torturer.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                C&apos;est de ce mal que se nourrit l&apos;œuvre de David Vincent qui, à l&apos;instar du protagoniste de la série éponyme, livre une bataille contre un ennemi aux multiples visages dans une guerre perdue d&apos;avance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Narcissisme, frustration, désir. Soumission, dépression, déliquescence. La musique de David Vincent est paradoxale. Elle recèle en elle toutes les contradictions de cette génération impossible, celle qui a commencé au vinyle et se noie dans les algorithmes.
              </p>
            </div>
          </div>

          {/* Rock hybride */}
          <div 
            data-index="3"
            className={`mb-20 transition-all duration-1000 delay-700 ${
              visibleElements.has(3) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-black mb-8 text-gray-900 tracking-wide text-center" style={{fontFamily: 'var(--font-bebas)'}}>
              ROCK HYBRIDE
            </h2>
            <div className="prose prose-xl max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Rock hybride, teinté de noise, de cold wave et d&apos;indus, où l&apos;organique confronte le synthétique, dans lequel le viscéral s&apos;arme d&apos;électro, la fuzz toise la boîte à rythme, pour sonner comme un acte de résistance et de foi inextinguible en avenir déjà échu.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Délibérément brute, et tout à la fois complexe, l&apos;écriture musicale, fulgurante mais maîtrisée, révèle l&apos;étendue et la richesse des amours musicales qui portent les deux partenaires de David Vincent.
              </p>
            </div>
          </div>

          {/* Les compositions */}
          <div 
            data-index="4"
            className={`mb-20 transition-all duration-1000 delay-900 ${
              visibleElements.has(4) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-black mb-12 text-gray-900 tracking-wide text-center" style={{fontFamily: 'var(--font-bebas)'}}>
              LES COMPOSITIONS
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-black mb-4 text-[#da3b28]" style={{fontFamily: 'var(--font-oswald)'}}>LA VILLE</h3>
                <p className="text-gray-700 leading-relaxed">
                  Un hymne, voire une messe à la ville et à sa duplicité, à son inquiétante étrangeté, qui nous lie comme nous éloigne. Morceau cathédrale - quelques notes d&apos;orgue comme un épilogue fugace - la chaleur de la voix, les mots réconfortants, tranchent avec l&apos;instrumental et sa froideur binaire toute métallique.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black mb-4 text-[#da3b28]" style={{fontFamily: 'var(--font-oswald)'}}>LA VIE ME VA</h3>
                <p className="text-gray-700 leading-relaxed">
                  Contraste tant elle est, sur le plan instrumental, chaude et palpitante. On y parle de renoncement, de concession mais jamais de compromission. Comme une litanie, au nom du corps, la vie.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black mb-4 text-[#da3b28]" style={{fontFamily: 'var(--font-oswald)'}}>THE SWEET CHILD</h3>
                <p className="text-gray-700 leading-relaxed">
                  Aux relents noise, s&apos;appuyant sur la progressivité de la structure musicale, met l&apos;auditeur sous la pression de la distorsion et des percussions jusqu&apos;à ce que la tension dramatique atteigne son paroxysme. Le morceau se mue alors en une complainte qui, grâce au velours de la voix, vous caresse jusqu&apos;à ce que batterie et guitare vous piquent à nouveau dans l&apos;échine par surprise. C&apos;est assurément un morceau maîtrisé et les arrangements lui confèrent épaisseur et texture.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-black mb-4 text-[#da3b28]" style={{fontFamily: 'var(--font-oswald)'}}>THE STORM</h3>
                <p className="text-gray-700 leading-relaxed">
                  Un morceau en deux actes qui dure... Ces morceaux plus longs sont de véritables narratifs musicaux, à la dramaturgie assumée, contrastant avec les deux premiers morceaux plutôt courts en langue française, conçus pour atteindre immédiatement leur cible dans un format « chanson » familier.
                </p>
              </div>
            </div>
          </div>

          {/* La formation */}
          <div 
            data-index="5"
            className={`mb-20 transition-all duration-1000 delay-1100 ${
              visibleElements.has(5) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-black mb-8 text-gray-900 tracking-wide text-center" style={{fontFamily: 'var(--font-bebas)'}}>
              LA FORMATION
            </h2>
            
            <div className="prose prose-xl max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                David Vincent est un groupe originaire d&apos;Arles. Le duo qualifie sa musique de rock, au sens très large du terme, il peut aller d&apos;un titre 100% électronique à un titre complètement instrumental, chanter en anglais comme en français. David est au chant, Vincent aux instruments. Les textes de David viennent donner un sens, une direction aux compositions de Vincent, et inversement.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Ce projet réunissant ces deux amis de 20 ans a commencé de manière épistolaire, pour prendre forme en 2024, et se concrétiser par quelques concerts dans la région arlésienne et la mise en ligne de vidéos sur YouTube.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Sur plateau, ils proposent deux formats différents. Les rejoignent un batteur et un bassiste, tandis que David et Vincent jouent de la guitare. Au chant, David, accompagné du chœur des musiciens. Les morceaux prennent alors une envergure pleinement rock, puissant et le plaisir de leurs comparses d&apos;un soir révèle la générosité d&apos;un duo qui sait ce qu&apos;est un collectif.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Le groupe propose également un format plus resserré, sous forme de performance où la machine supplée l&apos;humain voire le dépasse grâce aux dons de sorciers de Vincent. Ce format ne perd pas en puissance ce qu&apos;il gagne en sincérité, véritable miroir où se révèlent pleinement les personnalités si différentes mais complémentaires de ces deux artistes.
              </p>
            </div>
          </div>

          {/* Textes et langue */}
          <div 
            data-index="6"
            className={`mb-20 transition-all duration-1000 delay-1300 ${
              visibleElements.has(6) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-black mb-8 text-gray-900 tracking-wide text-center" style={{fontFamily: 'var(--font-bebas)'}}>
              TEXTES & LANGUE
            </h2>
            
            <div className="prose prose-xl max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Les textes sont à l&apos;image de cette quête perpétuelle d&apos;identité qui est l&apos;essence même du groupe. La langue y varie, d&apos;une soif de reconnaissance au parler universel (The Storm, The Sweet Child) à l&apos;invitation à l&apos;intime dans un français maternel (La vie me va, La ville).
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                La langue y oscille entre pure poésie et refrains au gimmick entêtant. La langue y tangue entre scansion, supplication et envolées lyriques, démontrant la richesse vocale et la maturité technique du chant.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Les thèmes abordés par David Vincent sont multiples, du macro (La Ville) au micro (La Vie), mais l&apos;atmosphère demeure toujours sombre, bien souvent mélancolique (Storm part. 2) voire cynique (The Sweet Child). Pourtant, malgré une forme de renoncement, David Vincent, comme bien souvent les écorchés, n&apos;abdiquent jamais.
              </p>
            </div>
          </div>

          {/* Influences détaillées */}
          <div 
            data-index="7"
            className={`mb-20 transition-all duration-1000 delay-1500 ${
              visibleElements.has(7) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-black mb-8 text-gray-900 tracking-wide text-center" style={{fontFamily: 'var(--font-bebas)'}}>
              INFLUENCES
            </h2>
            
            <div className="prose prose-xl max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Si les deux compères ont un panthéon commun et partagent un amour excessif des Beatles, David Bowie, Pink Floyd, Pixies, Radiohead, PJ Harvey, Interpol, Ghinzu, Rage Against the Machine, Fontaines DC, IDLES ou encore NTM, leurs influences personnelles divergent.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>David</strong> a été bercé par la chanson française. Grand fan de la scène bordelaise des années 90, il écoute toujours et encore beaucoup d&apos;auteurs français du siècle dernier (Serge Gainsbourg, Jacques Brel, Barbara, Léo Ferré, Georges Brassens, Alain Bashung) comme contemporains (Dominique A., Les Rita Mitsouko, Feu ! Chatterton, Bertrand Belin, Philippe Katerine, Fishbach, Mademoiselle K.). Les stars des années 60 à 80 ont toujours leur place dans sa playlist (Led Zeppelin, Jimi Hendrix, Elvis Presley, Sly Stone, The Doors ou encore Madonna).
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>Vincent</strong> voue un culte démesuré à Muse, talonné par The Strokes et s&apos;est nourri des sons les plus divers allant de Sade, Assassin, 113, Deftones, The Chemical Brothers, System of a Down, Blur ou encore Korn, Tool, Poutre.
              </p>
            </div>
          </div>

          {/* L'histoire de Cara Mia */}
          <div 
            data-index="8"
            className={`mb-20 transition-all duration-1000 delay-1700 ${
              visibleElements.has(8) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-black mb-8 text-gray-900 tracking-wide text-center" style={{fontFamily: 'var(--font-bebas)'}}>
              L&apos;HÉRITAGE
            </h2>
            
            <div className="prose prose-xl max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                David Vincent. Ou plutôt David, Vincent sans David. On ne peut passer sous silence l&apos;antériorité de leur collaboration musicale. David et Vincent ont déjà joué ensemble, dans le cadre d&apos;une précédente formation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                David au chant et à la guitare, Vincent à la batterie et un autre David - celui qui n&apos;est plus - mais dont la passion pour la musique demeure bien vivante pour couler encore dans les veines des membres de feu Cara Mia.
              </p>
            </div>
          </div>

          {/* L'espoir malgré tout */}
          <div 
            data-index="9"
            className={`mb-20 transition-all duration-1000 delay-1900 ${
              visibleElements.has(9) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <h2 className="text-4xl font-black mb-8 text-gray-900 tracking-wide text-center" style={{fontFamily: 'var(--font-bebas)'}}>
              L&apos;ESPOIR MALGRÉ TOUT
            </h2>
            
            <div className="prose prose-xl max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Le projet porté par le groupe touche au cœur et, même si ce n&apos;était pas l&apos;intention première, sourd une forme d&apos;espoir voire de joie qui se répand insensiblement chez son auditeur.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Si les médias des années 60 ont tenté de mettre à jour, derrière chacun des envahisseurs, les tourments d&apos;une Amérique paranoïaque, David Vincent pourchasse, lui aussi, ses démons comme ceux de son époque à coup de loop entêtant, et mène une croisade dans chaque arpège, dans chaque envolée, dans chaque climax épique.
              </p>
            </div>
          </div>

          {/* Conclusion finale */}
          <div 
            data-index="10"
            className={`mb-20 transition-all duration-1000 delay-2100 ${
              visibleElements.has(10) 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-10'
            }`}
          >
            <div className="prose prose-xl max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Les retours positifs sur le projet David Vincent ont accéléré les choses, des dates moins confidentielles commencent à tomber, le groupe est enfin prêt et décidé à monter sur scène, dans un halo rougeoyant d&apos;énergie où atterrira enfin leur ovni musical.
              </p>
            </div>
            
            <blockquote className="text-2xl text-gray-700 leading-relaxed italic text-center border-l-4 border-[#da3b28] pl-8 mt-8">
              &ldquo;Au fond, David Vincent démontre que, derrière chaque bonhomme dramatiquement banal, peut se cacher un envahisseur qui vous joue une musique vous essorant le cœur et corrompant votre âme et l&apos;on ne sait pas bien, à la fin, si David Vincent est là pour nous sauver ou nous soumettre...&rdquo;
            </blockquote>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Link 
              href="/"
              className="inline-block px-8 py-4 bg-[#da3b28] text-white font-black rounded-lg hover:bg-[#b8321f] transition-all duration-300 shadow-lg hover:shadow-xl tracking-wide"
              style={{fontFamily: 'var(--font-oswald)'}}
            >
              ← RETOUR À L&apos;ACCUEIL
            </Link>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
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
  )
}