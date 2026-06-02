import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { CookieSettingsButton } from "@/components/consent/CookieSettingsButton";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: "Datenschutzerklärung der Kidgonet GmbH gemäß DSGVO.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false },
};

export default function DatenschutzPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-10 text-3xl font-extrabold text-text-dark md:text-4xl">
            Datenschutzerklärung
          </h1>

          <div className="prose-elternratgeber">
            <p>
              Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist:
            </p>
            <p>Jannis Hutzler</p>

            <h2>Ihre Betroffenenrechte</h2>
            <p>
              Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:
            </p>
            <ul>
              <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO),</li>
              <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO),</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),</li>
              <li>Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art. 18 DSGVO),</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO) und</li>
              <li>Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben (Art. 20 DSGVO).</li>
            </ul>
            <p>
              Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
            </p>
            <p>
              Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z. B. an die zuständige Aufsichtsbehörde des Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde.
            </p>
            <p>
              Eine Liste der Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter:{" "}
              <a
                href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html
              </a>.
            </p>

            <h2>Erfassung allgemeiner Informationen beim Besuch unserer Website</h2>
            <h3>Art und Zweck der Verarbeitung:</h3>
            <p>
              Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln, werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches.
            </p>
            <p>Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
            <ul>
              <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website,</li>
              <li>Sicherstellung einer reibungslosen Nutzung unserer Website,</li>
              <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
              <li>zur Optimierung unserer Website.</li>
            </ul>
            <p>
              Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Informationen dieser Art werden von uns ggfs. anonymisiert statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren.
            </p>

            <h3>Rechtsgrundlage und berechtigtes Interesse:</h3>
            <p>
              Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der Stabilität und Funktionalität unserer Website.
            </p>

            <h3>Empfänger:</h3>
            <p>
              Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Webseite als Auftragsverarbeiter tätig werden.
            </p>

            <h3>Speicherdauer:</h3>
            <p>
              Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr erforderlich sind. Dies ist für die Daten, die der Bereitstellung der Website dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung beendet ist.
            </p>
            <p>
              Im Falle der Speicherung der Daten in Logfiles ist dies nach spätestens 14 Tagen der Fall. Eine darüberhinausgehende Speicherung ist möglich. In diesem Fall werden die IP-Adressen der Nutzer anonymisiert, sodass eine Zuordnung des aufrufenden Clients nicht mehr möglich ist.
            </p>

            <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
            <p>
              Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne die IP-Adresse ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein. Aus diesem Grund ist ein Widerspruch ausgeschlossen.
            </p>

            <h2>Cookies</h2>
            <p>
              Wie viele andere Webseiten verwenden wir auch so genannte „Cookies“. Bei Cookies handelt es sich um kleine Textdateien, die auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Webseite besuchen.
            </p>
            <p>
              Sie können Sie einzelne Cookies oder den gesamten Cookie-Bestand löschen. Darüber hinaus erhalten Sie Informationen und Anleitungen, wie diese Cookies gelöscht oder deren Speicherung vorab blockiert werden können. Je nach Anbieter Ihres Browsers finden Sie die notwendigen Informationen unter den nachfolgenden Links:
            </p>
            <ul>
              <li>Mozilla Firefox: <a href="https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen" target="_blank" rel="noopener noreferrer">https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-entfernen</a></li>
              <li>Internet Explorer: <a href="https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies</a></li>
              <li>Google Chrome: <a href="https://support.google.com/accounts/answer/61416?hl=de" target="_blank" rel="noopener noreferrer">https://support.google.com/accounts/answer/61416?hl=de</a></li>
              <li>Opera: <a href="http://www.opera.com/de/help" target="_blank" rel="noopener noreferrer">http://www.opera.com/de/help</a></li>
              <li>Safari: <a href="https://support.apple.com/kb/PH17191?locale=de_DE&viewlocale=de_DE" target="_blank" rel="noopener noreferrer">https://support.apple.com/kb/PH17191</a></li>
            </ul>

            <h3>Speicherdauer und eingesetzte Cookies:</h3>
            <p>
              Soweit Sie uns durch Ihre Browsereinstellungen oder Zustimmung die Verwendung von Cookies erlauben, können folgende Cookies auf unseren Webseiten zum Einsatz kommen:
            </p>

            <h2>Technisch notwendige Cookies</h2>
            <h3>Art und Zweck der Verarbeitung:</h3>
            <p>
              Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu gestalten. Einige Elemente unserer Internetseite erfordern es, dass der aufrufende Browser auch nach einem Seitenwechsel identifiziert werden kann.
            </p>
            <p>
              Der Zweck der Verwendung technisch notwendiger Cookies ist, die Nutzung von Websites für die Nutzer zu vereinfachen. Einige Funktionen unserer Internetseite können ohne den Einsatz von Cookies nicht angeboten werden. Für diese ist es erforderlich, dass der Browser auch nach einem Seitenwechsel wiedererkannt wird.
            </p>
            <p>Für folgende Anwendungen benötigen wir Cookies:</p>
            <ul>
              <li>Warenkorb</li>
              <li>Übernahme von Spracheinstellungen</li>
              <li>Merken von Suchbegriffen</li>
            </ul>

            <h3>Rechtsgrundlage und berechtigtes Interesse:</h3>
            <p>
              Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einer nutzerfreundlichen Gestaltung unserer Website.
            </p>

            <h3>Empfänger:</h3>
            <p>
              Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Website als Auftragsverarbeiter tätig werden.
            </p>

            <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
            <p>
              Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne diese Daten ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und Services nicht verfügbar oder eingeschränkt sein.
            </p>

            <h3>Widerspruch</h3>
            <p>
              Lesen Sie dazu die Informationen über Ihr Widerspruchsrecht nach Art. 21 DSGVO weiter unten.
            </p>

            <h2>Technisch nicht notwendige Cookies</h2>
            <p>
              Des Weiteren setzen wir Cookies ein, um das Angebot auf unserer Website besser auf die Interessen unserer Besucher abzustimmen oder auf Basis statistischer Auswertungen allgemein zu verbessern.
            </p>
            <p>
              Welche Anbieter Cookies setzen, entnehmen Sie bitte den unten aufgeführten Informationen zu den eingesetzten Darstellungs-, Tracking-, Remarketing- und Webanalyse-Technologien.
            </p>

            <h3>Rechtsgrundlage:</h3>
            <p>
              Rechtsgrundlage für diese Verarbeitungen ist jeweils Ihre Einwilligung, Art. 6 Abs. 1 lit. a DSGVO.
            </p>

            <h3>Empfänger:</h3>
            <p>
              Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Website als Auftragsverarbeiter tätig werden.
            </p>
            <p>
              Weitere Empfänger entnehmen Sie bitte den unten aufgeführten Informationen zu den eingesetzten Darstellungs-, Tracking-, Remarketing- und Webanalyse-Technologien.
            </p>

            <h3>Drittlandtransfer:</h3>
            <p>
              Informationen hierzu entnehmen Sie bitte aus den Auflistungen der einzelnen Darstellungs-, Tracking-, Remarketing- und Webanalyse-Anbietern.
            </p>

            <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
            <p>
              Natürlich können Sie unsere Website grundsätzlich auch ohne Cookies betrachten. Webbrowser sind regelmäßig so eingestellt, dass sie Cookies akzeptieren. Im Allgemeinen können Sie die Verwendung von Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren (siehe Widerruf der Einwilligung).
            </p>
            <p>
              Bitte beachten Sie, dass einzelne Funktionen unserer Website möglicherweise nicht funktionieren, wenn Sie die Verwendung von Cookies deaktiviert haben.
            </p>

            <h3>Widerruf der Einwilligung:</h3>
            <p>
              Sie können Ihre Einwilligung jederzeit über unsere Cookie-Einstellungen widerrufen:
            </p>
            <p>
              <CookieSettingsButton className="inline-flex items-center gap-1 rounded-lg border border-[#4A4A49]/20 px-4 py-2 text-sm font-semibold text-[#4A4A49] transition hover:border-[#4A4A49]/50">
                Cookie-Einstellungen öffnen
              </CookieSettingsButton>
            </p>

            <h3>Profiling:</h3>
            <p>
              Inwiefern wir das Verhalten von Websitebesuchern mit pseudonymisierten Nutzerprofilen analysieren, entnehmen Sie bitte den unten aufgeführten Informationen zu den eingesetzten Darstellungs-, Tracking-, Remarketing- und Webanalyse-Technologien.
            </p>

            <h2>Registrierung auf unserer Website</h2>
            <h3>Art und Zweck der Verarbeitung:</h3>
            <p>
              Für die Registrierung auf unserer Website benötigen wir einige personenbezogene Daten, die über eine Eingabemaske an uns übermittelt werden.
            </p>
            <p>
              Ihre Registrierung ist für das Bereithalten bestimmter Inhalte und Leistungen auf unserer Website erforderlich.
            </p>

            <h3>Rechtsgrundlage:</h3>
            <p>
              Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt auf Grundlage einer Einwilligung des Nutzers (Art. 6 Abs. 1 lit. a DSGVO).
            </p>

            <h3>Empfänger:</h3>
            <p>
              Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Website als Auftragsverarbeiter tätig werden.
            </p>

            <h3>Speicherdauer:</h3>
            <p>
              Daten werden in diesem Zusammenhang nur verarbeitet, solange die entsprechende Einwilligung vorliegt.
            </p>

            <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
            <p>
              Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis Ihrer Einwilligung. Ohne die Bereitstellung Ihrer personenbezogenen Daten können wir Ihnen keinen Zugang auf unsere angebotenen Inhalte gewähren.
            </p>

            <h2>Erbringung kostenpflichtiger Leistungen</h2>
            <h3>Art und Zweck der Verarbeitung:</h3>
            <p>
              Zur Erbringung kostenpflichtiger Leistungen werden von uns zusätzliche Daten erfragt, wie z.B. Zahlungsangaben, um Ihre Bestellung ausführen zu können.
            </p>

            <h3>Rechtsgrundlage:</h3>
            <p>
              Die Verarbeitung der Daten, die für den Abschluss des Vertrages erforderlich ist, basiert auf Art. 6 Abs. 1 lit. b DSGVO.
            </p>

            <h3>Empfänger:</h3>
            <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>

            <h3>Speicherdauer:</h3>
            <p>
              Wir speichern diese Daten in unseren Systemen bis die gesetzlichen Aufbewahrungsfristen abgelaufen sind. Diese betragen grundsätzlich 6 oder 10 Jahre aus Gründen der ordnungsmäßigen Buchführung und steuerrechtlichen Anforderungen.
            </p>

            <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
            <p>
              Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Ohne die Bereitstellung Ihrer personenbezogenen Daten können wir Ihnen keinen Zugang auf unsere angebotenen Inhalte und Leistungen gewähren.
            </p>

            <h2>Newsletter</h2>
            <h3>Art und Zweck der Verarbeitung:</h3>
            <p>
              Für die Zustellung unseres Newsletters erheben wir personenbezogene Daten, die über eine Eingabemaske an uns übermittelt werden.
            </p>
            <p>
              Für eine wirksame Registrierung benötigen wir eine valide E-Mail-Adresse. Um zu überprüfen, dass eine Anmeldung tatsächlich durch den Inhaber einer E-Mail-Adresse erfolgt, setzen wir das „Double-Opt-in“-Verfahren ein. Hierzu protokollieren wir die Anmeldung zum Newsletter, den Versand einer Bestätigungsmail und den Eingang der hiermit angeforderten Antwort. Weitere Daten werden nicht erhoben.
            </p>

            <h3>Rechtsgrundlage:</h3>
            <p>
              Auf Grundlage Ihrer ausdrücklich erteilten Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), übersenden wir Ihnen regelmäßig unseren Newsletter bzw. vergleichbare Informationen per E-Mail an Ihre angegebene E-Mail-Adresse.
            </p>
            <p>
              Die Einwilligung zur Speicherung Ihrer persönlichen Daten und ihrer Nutzung für den Newsletterversand können Sie jederzeit mit Wirkung für die Zukunft widerrufen. In jedem Newsletter findet sich dazu ein entsprechender Link. Außerdem können Sie sich jederzeit auch direkt auf dieser Website abmelden oder uns Ihren Widerruf über die am Ende dieser Datenschutzhinweise angegebene Kontaktmöglichkeit mitteilen.
            </p>

            <h3>Empfänger:</h3>
            <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>

            <h3>Speicherdauer:</h3>
            <p>
              Die Daten werden in diesem Zusammenhang nur verarbeitet, solange die entsprechende Einwilligung vorliegt. Danach werden sie gelöscht.
            </p>

            <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
            <p>
              Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis Ihrer Einwilligung. Ohne bestehende Einwilligung können wir Ihnen unseren Newsletter leider nicht zusenden.
            </p>

            <h3>Widerruf der Einwilligung:</h3>
            <p>
              Die Einwilligung zur Speicherung Ihrer persönlichen Daten und ihrer Nutzung für den Newsletterversand können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Die Abmeldung kann über den in jeder E-Mail enthaltenen Link oder beim unten aufgeführten Datenschutzbeauftragten bzw. der für den Datenschutz zuständigen Person beantragt werden.
            </p>

            <h2>Kontaktformular</h2>
            <h3>Art und Zweck der Verarbeitung:</h3>
            <p>
              Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer validen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional.
            </p>

            <h3>Rechtsgrundlage:</h3>
            <p>
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p>
              Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.
            </p>
            <p>
              Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der in das Kontaktformular eingegebenen Daten zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).
            </p>

            <h3>Empfänger:</h3>
            <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>

            <h3>Speicherdauer:</h3>
            <p>Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht.</p>
            <p>
              Sofern es zu einem Vertragsverhältnis kommt, unterliegen wir den gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach Ablauf dieser Fristen.
            </p>

            <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
            <p>
              Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir können Ihre Anfrage jedoch nur bearbeiten, sofern Sie uns Ihren Namen, Ihre E-Mail-Adresse und den Grund der Anfrage mitteilen.
            </p>

            <h2>Einsatz von Google Analytics</h2>
            <p>
              <strong>Zweck:</strong> Auf unserer Website ist Google Analytics (mit Anonymisierungsfunktion) integriert. Google Analytics ist ein Web-Analyse-Dienst. Web-Analyse ist die Erhebung, Sammlung und Auswertung von Daten über das Verhalten von Besuchern von Internetseiten. Ein Web-Analyse-Dienst erfasst unter anderem Daten darüber, von welcher Internetseite eine betroffene Person auf unsere Internetseite gekommen ist (sogenannte Referrer), auf welche Unterseiten der Internetseite zugegriffen oder wie oft und für welche Verweildauer eine Unterseite betrachtet wurde. Wir setzen Web-Analyse überwiegend zur Optimierung unserer Website und zur Kosten-Nutzen-Analyse von Internetwerbung ein.
            </p>
            <p>
              Wir verwenden Google Analytics als Teil der Google Marketing Plattform. In der Anwendung beinhaltet Google Analytics auch Werbefunktionen (Double Click, Remarketing). Außerdem ist eine nutzerbasierte Analyse möglich, mit der sich Nutzerprofile bilden lassen.
            </p>
            <p>
              Der Zweck der Google-Analytics-Komponente ist die Analyse der Besucherströme auf unserer Internetseite. Google nutzt die gewonnenen Daten und Informationen unter anderem dazu, die Nutzung unserer Internetseite auszuwerten, um für uns Online-Reports, welche die Aktivitäten auf unseren Internetseiten aufzeigen, zusammenzustellen, und um weitere mit der Nutzung unserer Internetseite in Verbindung stehende Dienstleistungen zu erbringen.
            </p>
            <p>
              Die Werbefunktionen von Google Analytics ermöglichen es seinen Kunden, ein Remarketing-Publikum basierend auf bestimmten Verhaltens-, Demographie- und Interessendaten zu erstellen und diese Listen mit Google Ads zu teilen, Demographie- und Interessendaten in Ihren Analytics-Berichten zu verwenden und Segmente basierend auf Demographie- und Interessendaten zu erstellen. Zweck der Verarbeitung ist es, den Nutzer als Teil einer Zielgruppe spezifisch ansprechen und auch personalisierte Inhalte auf Basis der verarbeiteten personenbezogenen Daten zeigen zu können.
            </p>
            <p>
              Über die in dem Webseitenanalysedienst bereitgestellten Funktionen ist es Google möglich, Daten, Sitzungen und Interaktionen über mehrere Geräte hinweg einer pseudonymisierten User-ID zuzuordnen und so die Aktivitäten eines Nutzers geräte- und webseitenübergreifend zu analysieren.
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO / § 25 Abs. 1 TDDDG.
            </p>
            <p>
              <strong>Empfänger Ihrer Daten:</strong> Google Ireland Limited (Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland). Wir haben mit Google die datenschutzrechtlich erforderliche Vereinbarung abgeschlossen.
            </p>
            <p>
              Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie beispielsweise in der Datenschutzerklärung von Google:{" "}
              <a href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="noopener noreferrer">
                https://support.google.com/analytics/answer/6004245?hl=de
              </a>.
            </p>
            <p>
              <strong>Speicherdauer:</strong> Die durch das Tracking gespeicherten Daten werden gelöscht, sobald sie für die Aufzeichnungszwecke nicht mehr benötigt werden. In unserem Fall ist dies nach 26 Monaten der Fall.
            </p>
            <p>
              <strong>Widerrufs-, Widerspruchs- und Beseitigungsmöglichkeit:</strong> Sie können der Erhebung, Speicherung und Nutzung von Informationen durch Google jederzeit mit Wirkung für die Zukunft über die folgenden Wege widersprechen:
            </p>
            <ul>
              <li>Sie können durch Installation des von Google zur Verfügung gestellten Deaktivierungs-Add-Ons widersprechen. Weitere Informationen hierzu finden Sie unter <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=de</a>.</li>
              <li>Alternativ können Sie die Speicherung der von Google gesetzten Cookies durch eine entsprechende Einstellung Ihrer Browser-Software verhindern.</li>
              <li>Sie können jederzeit Ihre Einwilligung in die Erfassung Ihrer Daten durch Google Analytics widerrufen, indem Sie in unseren Datenschutz-Einstellungen den Schieberegler deaktivieren.</li>
            </ul>

            <h2>Google Ads</h2>
            <p>
              Wir nutzen den Dienst Google Ads der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland. Google Ads ermöglicht es uns, Anzeigen in der Google-Suchmaschine oder auf Drittwebseiten gezielt zu platzieren, um auf unser Angebot aufmerksam zu machen.
            </p>
            <p>
              Die Ausspielung der Anzeigen erfolgt auf Grundlage von Suchbegriffen, zuvor besuchten Webseiten oder Nutzerinteressen. Google verarbeitet dabei Daten wie IP-Adresse, Browserinformationen, genutzte Geräte und das Nutzerverhalten.
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Die Nutzung von Google Ads erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
            </p>
            <p>
              <strong>Datenübermittlung in Drittstaaten:</strong> Es kann nicht ausgeschlossen werden, dass Daten durch Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, auch in die USA übertragen werden. Google ist nach dem EU-U.S. Data Privacy Framework zertifiziert.
            </p>
            <p>
              <strong>Widerruf der Einwilligung:</strong> Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, z. B. über unsere Cookie-Einstellungen.
            </p>
            <p>
              Weitere Informationen finden Sie in der Datenschutzerklärung von Google:{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/privacy
              </a>
            </p>

            <h2>Google Ads Remarketing</h2>
            <p>
              Unsere Website nutzt die Remarketing-Funktion von Google Ads. Mithilfe dieser Funktion können wir Nutzern unserer Website auf anderen Webseiten innerhalb des Google-Werbenetzwerks gezielte Werbung anzeigen lassen.
            </p>
            <p>
              Dazu speichert Google ein Cookie auf Ihrem Endgerät, das Ihr Surfverhalten anonymisiert erfasst. Eine personenbezogene Identifikation ist Google dabei nicht möglich. Es wird lediglich eine Wiedererkennung des Browsers ermöglicht.
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
            </p>
            <p>
              <strong>Datenübermittlung in Drittstaaten:</strong> Die Datenverarbeitung kann in den USA erfolgen. Google ist nach dem EU-U.S. Data Privacy Framework zertifiziert.
            </p>
            <p>
              <strong>Widerruf der Einwilligung:</strong> Sie können Remarketing jederzeit in den Cookie-Einstellungen oder über diesen Link deaktivieren:{" "}
              <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">
                https://adssettings.google.com
              </a>
            </p>
            <p>
              Weitere Informationen finden Sie unter:{" "}
              <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">
                https://policies.google.com/technologies/ads
              </a>
            </p>

            <h2>Google Conversion-Tracking</h2>
            <p>
              Wir nutzen im Rahmen von Google Ads das sogenannte Conversion-Tracking. Wenn Sie auf eine von Google geschaltete Anzeige klicken, wird ein Cookie für das Conversion-Tracking gesetzt. Dieses Cookie verliert nach 30 Tagen seine Gültigkeit und dient nicht der persönlichen Identifizierung.
            </p>
            <p>
              Wenn Sie bestimmte Seiten unserer Website besuchen und das Cookie noch gültig ist, können Google und wir erkennen, dass Sie auf die Anzeige geklickt haben und zu unserer Seite weitergeleitet wurden.
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Die Speicherung von „Conversion-Cookies“ erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
            </p>
            <p>
              <strong>Datenübermittlung in Drittstaaten:</strong> Die Verarbeitung kann in den USA erfolgen. Google ist nach dem EU-U.S. Data Privacy Framework zertifiziert.
            </p>
            <p>
              <strong>Widerruf der Einwilligung:</strong> Sie können dem Conversion-Tracking jederzeit widersprechen, indem Sie die entsprechenden Einstellungen in Ihrem Browser oder in den Cookie-Einstellungen ändern.
            </p>
            <p>
              Weitere Informationen zum Conversion-Tracking und zu den Datenschutzbestimmungen von Google finden Sie hier:{" "}
              <a href="https://support.google.com/google-ads/answer/1722022" target="_blank" rel="noopener noreferrer">
                https://support.google.com/google-ads/answer/1722022
              </a>
            </p>

            <h2>Verwendung von Matomo</h2>
            <p>
              Soweit Sie ihre Einwilligung gegeben haben, wird auf dieser Website Matomo (vormals Piwik) eingesetzt, eine Open-Source-Software zur statistischen Auswertung von Besucherzugriffen. Anbieter der Software Matomo ist die InnoCraft Ltd., 150 Willis St, 6011 Wellington, Neuseeland.
            </p>
            <p>
              Matomo setzt einen Cookie (eine Textdatei) auf Ihrem Endgerät, mit dem Ihr Browser wiedererkannt werden kann. Werden Unterseiten unserer Website aufgerufen, werden folgende Informationen gespeichert:
            </p>
            <ul>
              <li>die IP-Adresse des Nutzers, gekürzt um die letzten zwei Bytes (anonymisiert)</li>
              <li>die aufgerufene Unterseite und Zeitpunkt des Aufrufs</li>
              <li>die Seite, von der der Nutzer auf unsere Webseite gelangt ist (Referrer)</li>
              <li>welcher Browser mit welchen Plugins, welches Betriebssystem und welche Bildschirmauflösung genutzt wird</li>
              <li>die Verweildauer auf der Website</li>
              <li>die Seiten, die von der aufgerufenen Unterseite aus angesteuert werden</li>
            </ul>
            <p>
              Die Verwendung von Matomo erfolgt zu dem Zweck, die Qualität unserer Website und ihre Inhalte zu verbessern. Dadurch erfahren wir, wie die Website genutzt wird und können so unser Angebot stetig optimieren.
            </p>
            <p>
              Durch die Anonymisierung der IP-Adresse um sechs Stellen tragen wir dem Interesse des Webseitenbesuchers am Schutz personenbezogener Daten Rechnung. Die Daten werden nicht dazu genutzt, den Nutzer der Website persönlich zu identifizieren und werden nicht mit anderen Daten zusammengeführt. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden nicht an Dritte weitergegeben.
            </p>

            <h3>Widerruf der Einwilligung:</h3>
            <p>
              Sie können Ihre Einwilligung zur Speicherung und Auswertung Ihrer Daten durch Matomo jederzeit über den unten aufgeführten Link widerrufen. Es wird dann ein sogenanntes Opt-Out-Cookie auf Ihrem Gerät gespeichert, das zwei Jahre Gültigkeit hat. Es hat zur Folge, dass Matomo keinerlei Sitzungsdaten erhebt. Beachten Sie allerdings, dass das Opt-Out-Cookie gelöscht wird, wenn Sie alle Cookies löschen.
            </p>
            <p>
              Nähere Informationen zu den Privatsphäre-Einstellungen der Matomo Software finden Sie unter folgendem Link:{" "}
              <a href="https://matomo.org/docs/privacy/" target="_blank" rel="noopener noreferrer">
                https://matomo.org/docs/privacy/
              </a>.
            </p>
            <p>
              Sie können die Verwendung von Cookies auch durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können.
            </p>

            <h2>SSL-Verschlüsselung</h2>
            <p>
              Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
            </p>

            <h2>Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO</h2>
            <h3>Einzelfallbezogenes Widerspruchsrecht</h3>
            <p>
              Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne von Art. 4 Nr. 4 DSGVO.
            </p>
            <p>
              Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
            </p>

            <h3>Empfänger eines Widerspruchs</h3>
            <p>
              Kidgonet GmbH<br />
              Jannis Hutzler<br />
              Eugen-Sänger-Ring 13<br />
              85649 Brunnthal
            </p>

            <h2>Änderung unserer Datenschutzbestimmungen</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>

            <h2>Fragen an den Datenschutzbeauftragten</h2>
            <p>
              Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserer Organisation:
            </p>
            <p>
              Kidgonet GmbH<br />
              Jannis Hutzler<br />
              Eugen-Sänger-Ring 13<br />
              85649 Brunnthal<br />
              E-Mail: <a href="mailto:info@kidgonet.de">info@kidgonet.de</a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
