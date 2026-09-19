import { SITE, FAQS } from "../const/site";

export function localBusinessJson() {
  return {
    "@context": "https://schema.org",
    "@type": "ExcavationContractor",
    "@id": `${SITE.url}/#isletme`,
    name: SITE.name,
    url: SITE.url,
    telephone: "+905377436120",
    priceRange: "₺₺",
    image: `${SITE.url}/og-gng.jpg`,
    description:
      "GNG Hafriyat, İstanbul Kadıköy Üsküdar Maltepe ve çevresinde hafriyat, kazı, yıkım, nakliye, kanal kazısı ve tesviye hizmetleri sunar. Temel kazısı, arazi tesviyesi, moloz taşıma, inşaat atığı ve hafriyat atığı yükleme, hafriyat toprağı nakliyesi, yıkım molozu kaldırma ve bertaraf işlerini kepçe, ekskavatör, forklift çatalı ve damperli kamyonlarla gerçekleştirir.",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.addressLocality,
      addressRegion: SITE.addressRegion,
      addressCountry: SITE.addressCountry,
    },
    areaServed: [
      "Üsküdar", "Kadıköy", "Maltepe", "Ataşehir", "Fikirtepe", "Osmanağa",
      "Kozyatağı", "Suadiye", "Erenköy", "Göztepe", "Acıbadem", "Bostancı",
      "Feneryolu", "Koşuyolu", "Hasanpaşa", "Rasimpaşa", "Merdivenköy",
      "Sahrayı Cedit", "19 Mayıs", "Dumlupınar",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    makesOffer: [
      "Temel Kazısı","Kanal Kazısı","Arazi Tesviyesi","Moloz Taşıma",
      "Yıkım Molozu Kaldırma","Hafriyat Nakliyesi","İnşaat Temel Dolgusu",
    ].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
  };
}

export function websiteJson() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "tr-TR",
  };
}

export function faqJson() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJson(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
