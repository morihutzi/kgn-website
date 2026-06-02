export type GlossarTerm = {
  /** Maschinenlesbarer Slug, z.B. "bildschirmzeit" */
  slug: string;
  /** Angezeigter Begriff */
  term: string;
  /** Kurzdefinition — ein Satz, direkt und zitierbar (für DefinedTerm-Schema) */
  shortDefinition: string;
  /** Ausführliche Erklärung — 2–4 Sätze */
  description: string;
  /** Optionale interne Verlinkung */
  learnMoreHref?: string;
  learnMoreLabel?: string;
};

export const glossarTerms: GlossarTerm[] = [
  {
    slug: "bildschirmzeit",
    term: "Bildschirmzeit",
    shortDefinition:
      "Bildschirmzeit bezeichnet die tägliche Gesamtdauer, die eine Person mit der Nutzung digitaler Geräte wie Smartphones, Tablets oder Computern verbringt.",
    description:
      "Bei Kindern und Jugendlichen ist die Bildschirmzeit ein wichtiger Gesundheitsfaktor. Die WHO und die BZgA empfehlen für Kinder unter 12 Jahren klare Tageslimits. Eltern können mit Kinderschutz-Apps wie Kidgonet Bildschirmzeitlimits geräteübergreifend festlegen und automatisch durchsetzen — ohne ständige Konflikte.",
    learnMoreHref: "/bildschirmzeit",
    learnMoreLabel: "Bildschirmzeit mit Kidgonet begrenzen",
  },
  {
    slug: "dns-filter",
    term: "DNS-Filter",
    shortDefinition:
      "Ein DNS-Filter ist eine Technik, die den Zugriff auf Webseiten blockiert, indem sie unerwünschte Domains auf DNS-Ebene sperrt, bevor Inhalte geladen werden.",
    description:
      "Im Gegensatz zu browserbasierten Filtern wirkt ein DNS-Filter auf alle Apps und Browser gleichzeitig — unabhängig davon, welche App das Internet nutzt. Kidgonet setzt DNS-Filterung direkt auf dem Gerät des Kindes ein, ohne den Datenverkehr über externe Server umzuleiten. Damit bleibt die Privatsphäre geschützt und die Verbindungsgeschwindigkeit unbeeinträchtigt.",
    learnMoreHref: "/webfilter",
    learnMoreLabel: "Webfilter bei Kidgonet",
  },
  {
    slug: "webfilter",
    term: "Webfilter",
    shortDefinition:
      "Ein Webfilter blockiert automatisch den Zugriff auf Webseiten mit unangemessenen oder schädlichen Inhalten und schützt so Kinder beim Surfen im Internet.",
    description:
      "Moderne Webfilter für Kinder arbeiten mit Blacklists (Listen gesperrter Domains), Whitelist-Modus (nur erlaubte Seiten) oder KI-basierter Inhaltserkennung. Kidgonet nutzt einen altersgerechten DNS-basierten Webfilter mit drei Stufen: bis 6 Jahre, bis 12 Jahre und bis 16 Jahre. Der Filter ist browserunabhängig und gilt für alle installierten Apps.",
    learnMoreHref: "/webfilter",
    learnMoreLabel: "Webfilter einrichten mit Kidgonet",
  },
  {
    slug: "parental-control",
    term: "Parental Control",
    shortDefinition:
      "Parental Control (englisch für Elternkontrolle) bezeichnet Software-Funktionen, mit denen Eltern die Smartphone- und Internetnutzung ihrer Kinder steuern und einschränken können.",
    description:
      "Parental-Control-Apps bieten typischerweise Bildschirmzeitlimits, Webfilter, App-Sperren und Standortverfolgung. Es gibt zwei Ansätze: Betriebssystem-integrierte Lösungen wie Apple Screen Time oder Google Family Link sowie spezialisierte Drittanbieter-Apps wie Kidgonet, die plattformübergreifend und ohne Hersteller-Bindung funktionieren.",
    learnMoreHref: "/was-kann-die-app",
    learnMoreLabel: "Kidgonet Funktionen im Überblick",
  },
  {
    slug: "kinderschutz-app",
    term: "Kinderschutz-App",
    shortDefinition:
      "Eine Kinderschutz-App ist eine Anwendung, die Eltern dabei hilft, die digitale Nutzung ihrer Kinder zu steuern, schädliche Inhalte zu blockieren und die Online-Sicherheit zu gewährleisten.",
    description:
      "Gute Kinderschutz-Apps schützen nicht nur, sondern respektieren dabei die Privatsphäre der Kinder. Kidgonet liest keine Nachrichten, Chats oder App-Inhalte. Stattdessen setzt die App auf transparente Regeln, die Eltern und Kinder gemeinsam festlegen können — nach dem Prinzip Vertrauen statt Überwachung.",
    learnMoreHref: "/was-kann-die-app",
    learnMoreLabel: "Was kann Kidgonet?",
  },
  {
    slug: "bildschirmpause",
    term: "Bildschirmpause",
    shortDefinition:
      "Eine Bildschirmpause ist ein festgelegter Zeitraum, in dem die Nutzung von Smartphones oder Tablets automatisch gesperrt wird — zum Beispiel während der Hausaufgaben, beim Essen oder in der Nacht.",
    description:
      "Bildschirmpausen lassen sich in Kinderschutz-Apps zeitgesteuert einrichten. In Kidgonet können Eltern für jedes Kind individuelle Pausen definieren und dabei Ausnahmen für bestimmte Apps (z.B. Lern-Apps oder Musik) zulassen. Das Kind sieht auf seinem Gerät einen Sperrbildschirm mit einem Countdown bis zur nächsten erlaubten Nutzungszeit.",
    learnMoreHref: "/bildschirmzeit",
    learnMoreLabel: "Bildschirmpausen einrichten",
  },
  {
    slug: "app-sperre",
    term: "App-Sperre",
    shortDefinition:
      "Eine App-Sperre verhindert, dass Kinder bestimmte Apps auf ihrem Smartphone öffnen oder installieren können.",
    description:
      "App-Sperren sind besonders nützlich, um Zugang zu sozialen Netzwerken, Spielen oder anderen altersungeeigneten Anwendungen zu beschränken. Mit Kidgonet können Eltern einzelne Apps für jedes Kind gezielt sperren oder freigeben. Die Sperre gilt auch dann, wenn das Kind die App bereits installiert hat.",
    learnMoreHref: "/apps-freigeben",
    learnMoreLabel: "Apps sperren mit Kidgonet",
  },
  {
    slug: "geraeteortung",
    term: "Geräteortung",
    shortDefinition:
      "Geräteortung ermöglicht es Eltern, den aktuellen Standort des Smartphones ihres Kindes in Echtzeit nachzuvollziehen.",
    description:
      "Seriöse Kinderschutz-Apps rufen den Standort nur auf aktive Anfrage ab — keine kontinuierliche Hintergrundverfolgung ohne Wissen des Kindes. Kidgonet zeigt den Standort des Kindes im Elternportal an. Das Kind wird über die Standortfreigabe informiert und kann über den SOS-Button auch selbst Hilfe anfordern.",
    learnMoreHref: "/standort",
    learnMoreLabel: "Standortfunktion bei Kidgonet",
  },
  {
    slug: "dsgvo",
    term: "DSGVO (Datenschutz-Grundverordnung)",
    shortDefinition:
      "Die DSGVO ist die europäische Datenschutz-Grundverordnung, die Regeln für die Erhebung, Verarbeitung und Speicherung personenbezogener Daten vorschreibt.",
    description:
      "Für Kinderschutz-Apps ist DSGVO-Konformität besonders wichtig, da die App Daten von Minderjährigen verarbeitet. DSGVO-konforme Apps speichern nur die Daten, die für die Funktion unbedingt notwendig sind, geben diese nicht an Dritte weiter und hosten sie vorzugsweise auf Servern innerhalb der EU. Kidgonet ist vollständig DSGVO-konform mit Serverstandort Deutschland.",
    learnMoreHref: "/datenschutz",
    learnMoreLabel: "Datenschutz bei Kidgonet",
  },
  {
    slug: "cybermobbing",
    term: "Cybermobbing",
    shortDefinition:
      "Cybermobbing bezeichnet die wiederholte, absichtliche Schädigung einer Person durch digitale Medien wie Nachrichten, Bilder oder soziale Netzwerke.",
    description:
      "Cybermobbing betrifft laut Studien etwa 15–20 % aller Kinder und Jugendlichen in Deutschland. Anders als klassisches Mobbing findet es rund um die Uhr statt und hinterlässt digitale Spuren. Eltern können mit Webfiltern und App-Sperren den Zugang zu bestimmten sozialen Netzwerken einschränken — eine vollständige Prävention erfordert aber vor allem offene Gespräche und Medienkompetenz.",
    learnMoreHref: "/elternratgeber",
    learnMoreLabel: "Mehr im Elternratgeber",
  },
  {
    slug: "medienkompetenz",
    term: "Medienkompetenz",
    shortDefinition:
      "Medienkompetenz ist die Fähigkeit, digitale Medien kritisch zu nutzen, Inhalte zu bewerten und sicher im Internet zu agieren.",
    description:
      "Medienkompetenz gilt als wichtigste Schutzressource von Kindern im Netz. Sie umfasst das Erkennen von Fake News, den sicheren Umgang mit persönlichen Daten, das Verstehen von Werbung und den respektvollen Umgang in Online-Communities. Kinderschutz-Apps sind ein technisches Hilfsmittel — kein Ersatz für die Förderung von Medienkompetenz.",
    learnMoreHref: "/elternratgeber",
    learnMoreLabel: "Ratgeber: Digitale Erziehung",
  },
  {
    slug: "screen-time",
    term: "Screen Time (Apple)",
    shortDefinition:
      "Screen Time ist Apples eingebaute Funktion zur Bildschirmzeitkontrolle auf iPhone, iPad und Mac.",
    description:
      "Screen Time ist auf allen Apple-Geräten kostenlos verfügbar und ermöglicht Bildschirmzeitlimits, App-Sperren und Inhaltsfilter. Die Funktion ist jedoch auf Apple-Geräte beschränkt und lässt sich nicht plattformübergreifend einsetzen. Familien mit Android-Geräten oder gemischter Gerätelandschaft benötigen eine eigenständige Kinderschutz-App wie Kidgonet, die auf iOS und Android gleichermassen funktioniert.",
    learnMoreHref: "/kindersicherung-iphone",
    learnMoreLabel: "Kindersicherung iPhone",
  },
  {
    slug: "phishing",
    term: "Phishing",
    shortDefinition:
      "Phishing ist ein Betrugsversuch, bei dem Angreifer gefälschte E-Mails, Nachrichten oder Webseiten einsetzen, um Zugangsdaten oder persönliche Informationen zu stehlen.",
    description:
      "Kinder und Jugendliche sind besonders gefährdet, weil sie Absender-Adressen und gefälschte Websites seltener kritisch prüfen. Typische Phishing-Versuche versprechen Gewinne, Gratis-Spiele-Währung oder geben sich als bekannte Dienste (Instagram, Roblox, PayPal) aus. Medienkompetenz und ein guter Webfilter, der bekannte Phishing-Domains blockiert, sind die effektivsten Schutzmaßnahmen.",
    learnMoreHref: "/elternratgeber",
    learnMoreLabel: "Mehr im Elternratgeber",
  },
  {
    slug: "online-grooming",
    term: "Online-Grooming",
    shortDefinition:
      "Online-Grooming bezeichnet die gezielte Kontaktaufnahme Erwachsener zu Kindern im Internet mit dem Ziel der sexuellen Belästigung oder Ausbeutung.",
    description:
      "Groomer bauen über Wochen oder Monate Vertrauen auf — oft über Spiele, soziale Netzwerke oder Messengerdienste. Sie bitten um persönliche Fotos oder schlagen Treffen vor. Eltern sollten offen mit Kindern über dieses Risiko sprechen und klare Regeln für den Kontakt mit Unbekannten online vereinbaren. Die Nummer gegen Kummer (116 111) bietet kostenlose Beratung.",
    learnMoreHref: "/elternratgeber",
    learnMoreLabel: "Ratgeber: Sicherheit im Netz",
  },
  {
    slug: "google-family-link",
    term: "Google Family Link",
    shortDefinition:
      "Google Family Link ist Googles kostenlose Kinderschutz-Lösung für Android-Geräte, die Eltern Bildschirmzeitlimits, App-Genehmigungen und Standortverfolgung ermöglicht.",
    description:
      "Family Link ist tief ins Android-Betriebssystem integriert und für Kinder unter 13 Jahren konzipiert. Die Funktionen sind jedoch begrenzt: kein browserunabhängiger Webfilter, keine geräteübergreifende Verwaltung von iOS-Geräten. Kidgonet ergänzt oder ersetzt Family Link mit einem DNS-basierten Webfilter, der plattformübergreifend auf iOS und Android funktioniert.",
    learnMoreHref: "/kindersicherung-android",
    learnMoreLabel: "Kindersicherung Android",
  },
  {
    slug: "inkognito-modus",
    term: "Inkognito-Modus",
    shortDefinition:
      "Der Inkognito-Modus ist ein Browser-Funktion, die den lokalen Browserverlauf nicht speichert — schützt aber nicht vor DNS-basierten Webfiltern.",
    description:
      "Viele Eltern glauben, dass ein Webfilter im Inkognito-Modus umgangen werden kann. Das stimmt für browserbasierte Filter, nicht aber für DNS-Filter. Kidgonet setzt auf DNS-Filterung auf Betriebssystem-Ebene: Egal ob Inkognito-Modus, privates Surfen oder ein anderer Browser — der Filter greift immer, weil er vor dem Laden der Seite wirkt.",
    learnMoreHref: "/webfilter",
    learnMoreLabel: "So funktioniert der Webfilter",
  },
  {
    slug: "in-app-kaeufe",
    term: "In-App-Käufe",
    shortDefinition:
      "In-App-Käufe sind kostenpflichtige Zusatzinhalte innerhalb kostenloser Apps und Spiele — etwa Spielwährung, Erweiterungen oder Abonnements.",
    description:
      "Kinder tätigen In-App-Käufe oft unabsichtlich oder ohne das Kostenrisiko zu verstehen. Besonders Free-to-Play-Spiele sind darauf ausgelegt, Kaufanreize zu setzen. Eltern können In-App-Käufe im App Store und Google Play durch eine Kaufbestätigung mit Passwort oder biometrischer Authentifizierung schützen. Auf Android-Geräten kann Kidgonet zudem Shopping-Apps komplett sperren.",
    learnMoreHref: "/apps-freigeben",
    learnMoreLabel: "Apps sperren mit Kidgonet",
  },
  {
    slug: "fake-news",
    term: "Fake News",
    shortDefinition:
      "Fake News sind bewusst falsche oder irreführende Informationen, die über soziale Netzwerke, Messenger oder Webseiten verbreitet werden.",
    description:
      "Kinder und Jugendliche begegnen Fake News täglich — auf TikTok, Instagram, YouTube und in Gruppen-Chats. Die Fähigkeit, Quellen zu prüfen und Inhalte kritisch zu hinterfragen, ist Teil der Medienkompetenz. Bundeszentrale für politische Bildung und Klicksafe.de bieten kostenlose Materialien, um Fake-News-Erkennung mit Kindern zu üben.",
    learnMoreHref: "/elternratgeber",
    learnMoreLabel: "Medienkompetenz im Ratgeber",
  },
  {
    slug: "sexting",
    term: "Sexting",
    shortDefinition:
      "Sexting bezeichnet das Versenden oder Empfangen von Nachrichten, Fotos oder Videos mit sexuellem Inhalt über digitale Geräte.",
    description:
      "Unter Jugendlichen ist Sexting weit verbreitet. Das Problem: Einmal versendete Bilder können unkontrolliert weitergeleitet werden. Das Versenden von intimen Bildern Minderjähriger ist in Deutschland strafbar — auch unter Gleichaltrigen. Eltern sollten das Thema offen ansprechen und keine technischen Verbote als alleinige Lösung nutzen.",
    learnMoreHref: "/elternratgeber",
    learnMoreLabel: "Ratgeber: Sicherheit im Netz",
  },
  {
    slug: "vpn",
    term: "VPN (Virtual Private Network)",
    shortDefinition:
      "Ein VPN leitet den Internetverkehr über einen externen Server und kann dabei browserbasierte und manche DNS-basierte Filter umgehen.",
    description:
      "Technisch versierte Jugendliche nutzen VPN-Apps manchmal, um Webfilter zu umgehen. Kidgonet begegnet dem durch Betriebssystem-tiefe Integration: Auf Android wird der Webfilter als lokales VPN-Profil eingerichtet, das Vorrang vor anderen VPN-Verbindungen hat. Die Nutzung externer VPN-Apps kann in Kidgonet zusätzlich gesperrt werden.",
    learnMoreHref: "/webfilter",
    learnMoreLabel: "Webfilter bei Kidgonet",
  },
  {
    slug: "altersfreigabe",
    term: "Altersfreigabe (USK / FSK)",
    shortDefinition:
      "Altersfreigaben kennzeichnen, ab welchem Alter Medieninhalte — Spiele (USK) oder Filme (FSK) — als geeignet eingestuft werden.",
    description:
      "Die USK (Unterhaltungssoftware Selbstkontrolle) vergibt Altersfreigaben für Computerspiele, die FSK (Freiwillige Selbstkontrolle) für Filme. Beide Systeme sind freiwillig und gelten für den Kauf, nicht für Online-Inhalte. Im App Store und Google Play gibt es eigene Alterskategorien. Eltern können in Kidgonet App-Kategorien nach Altersfreigabe filtern.",
    learnMoreHref: "/apps-freigeben",
    learnMoreLabel: "App-Freigaben verwalten",
  },
  {
    slug: "tiktok-kinderschutz",
    term: "TikTok Kinderschutz",
    shortDefinition:
      "TikTok bietet mit dem Family Pairing-Modus eigene Kinderschutzfunktionen — diese sind jedoch auf TikTok beschränkt und kein Ersatz für eine umfassende Kinderschutz-App.",
    description:
      "TikTok Family Pairing erlaubt Eltern, Bildschirmzeit, eingeschränkten Modus und DM-Funktion zu steuern. Für Kinder unter 13 Jahren ist TikTok offiziell nicht erlaubt. Die plattforminternen Kontrollen können umgangen werden, etwa durch ein neues Konto. Eine DNS-basierte Kinderschutz-App wie Kidgonet kann TikTok geräteübergreifend sperren, unabhängig vom verwendeten Account.",
    learnMoreHref: "/webfilter",
    learnMoreLabel: "Apps und Seiten sperren",
  },
  {
    slug: "gaming-sucht",
    term: "Gaming-Sucht / exzessive Mediennutzung",
    shortDefinition:
      "Gaming-Sucht bezeichnet ein unkontrollierbares Verlangen nach digitalen Spielen, das soziale, schulische oder gesundheitliche Bereiche beeinträchtigt.",
    description:
      "Die WHO hat Gaming Disorder 2018 als offizielle Erkrankung anerkannt. Anzeichen sind: Kontrollverlust über die Spielzeit, sozialer Rückzug, Vernachlässigung von Schule oder Hobbys und Reizbarkeit bei Unterbrechung. Feste Bildschirmzeitregeln, Pausen und spielfreie Zeiten — zum Beispiel über Kidgonet — helfen, gesunde Gewohnheiten zu etablieren, bevor problematische Muster entstehen.",
    learnMoreHref: "/bildschirmzeit",
    learnMoreLabel: "Bildschirmzeit begrenzen",
  },
  {
    slug: "whatsapp-kinder",
    term: "WhatsApp und Kinder",
    shortDefinition:
      "WhatsApp ist ab 16 Jahren nutzbar (EU-Datenschutzrecht), wird aber häufig schon von jüngeren Kindern verwendet.",
    description:
      "Die offizielle Altersgrenze für WhatsApp liegt in der EU bei 16 Jahren. In der Praxis ist die App ab Grundschule weit verbreitet. Eltern können WhatsApp in Kidgonet zeitlich begrenzen (z.B. erst ab 15 Uhr nach den Hausaufgaben) oder in Pausen vollständig sperren, ohne die App ganz zu deinstallieren.",
    learnMoreHref: "/apps-freigeben",
    learnMoreLabel: "Apps zeitlich einschränken",
  },
  {
    slug: "digitale-auszeit",
    term: "Digitale Auszeit",
    shortDefinition:
      "Eine digitale Auszeit ist ein bewusst geplanter Zeitraum ohne Smartphone- oder Internetnutzung — zur Erholung und für analoge Aktivitäten.",
    description:
      "Regelmässige digitale Auszeiten gelten als wirksames Mittel gegen exzessive Mediennutzung. Sie können spontan (SOS-Sperre) oder geplant (Schlafensgehen, Familienessen) eingerichtet werden. In Kidgonet lässt sich die Auszeit per Tap im Elternportal aktivieren oder automatisch für festgelegte Uhrzeiten einrichten — ohne dem Kind das Gerät wegnehmen zu müssen.",
    learnMoreHref: "/sperrmodus",
    learnMoreLabel: "Sperrmodus bei Kidgonet",
  },
  {
    slug: "nummer-gegen-kummer",
    term: "Nummer gegen Kummer",
    shortDefinition:
      "Die Nummer gegen Kummer (116 111) ist eine kostenlose, anonyme Telefonberatung für Kinder und Jugendliche in Deutschland.",
    description:
      "Kinder können dort bei Problemen jeder Art anrufen — egal ob Cybermobbing, Streit zu Hause oder Druck in der Schule. Kidgonet verlinkt die Nummer gegen Kummer direkt im Kindermodus der App, damit Kinder in Notlagen schnell Hilfe finden. Die Elternhotline (0800 111 0 550) berät Erwachsene bei Sorgen rund um ihre Kinder.",
    learnMoreHref: "/was-kann-die-app",
    learnMoreLabel: "SOS-Funktionen bei Kidgonet",
  },
];

/** Alphabetisch sortiert nach Term */
export const glossarTermsSorted = [...glossarTerms].sort((a, b) =>
  a.term.localeCompare(b.term, "de"),
);

/** Alle Anfangsbuchstaben mit mindestens einem Term */
export const glossarLetters = [
  ...new Set(glossarTermsSorted.map((t) => t.term[0].toUpperCase())),
];
