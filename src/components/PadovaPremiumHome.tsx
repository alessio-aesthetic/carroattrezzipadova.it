import Link from 'next/link'
import { faqs, services, site, zones } from '@/data/site'
import styles from './PadovaPremiumHome.module.css'

const steps = [
  ['01', 'Ci dici dove sei', 'Una posizione precisa, il tipo di mezzo e quello che sta accadendo: poche informazioni utili per partire bene.'],
  ['02', 'Prepariamo il recupero', 'Valutiamo il mezzo da inviare e la soluzione piu adatta per raggiungerti e caricare il veicolo.'],
  ['03', 'Decidi la destinazione', 'Officina, carrozzeria, abitazione o deposito: concordiamo insieme dove portare la tua auto.'],
]

export default function PadovaPremiumHome() {
  const callHref = 'tel:' + site.tel

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label={site.name}>
          <img src="/images/brand-padova.png" alt={site.name} />
        </Link>
        <nav className={styles.nav} aria-label="Navigazione principale">
          <a href="#interventi">Interventi</a>
          <a href="#zone">Zone coperte</a>
          <a href="#domande">Domande</a>
        </nav>
        <a href={callHref} className={styles.headerCall}>Chiama {site.phone}</a>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroImage} role="img" aria-label="Carroattrezzi in assistenza a Padova" />
        <div className={styles.heroShade} />
        <div className={styles.heroGrid} />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}><span /> Soccorso stradale operativo 24 ore</p>
            <h1>Carroattrezzi a <em>Padova.</em><br />Pronto quando serve.</h1>
            <p className={styles.heroText}>Un veicolo fermo crea un problema concreto. Ti aiutiamo a organizzare il recupero con indicazioni chiare, un mezzo adeguato e la destinazione che preferisci.</p>
            <div className={styles.heroActions}>
              <a href={callHref} className={styles.callButton}>Chiama ora <strong>{site.phone}</strong></a>
              <a href="#interventi" className={styles.secondaryButton}>Scopri gli interventi <span>→</span></a>
            </div>
          </div>
          <aside className={styles.heroPanel}>
            <p className={styles.panelLabel}>Padova e provincia</p>
            <p className={styles.panelTitle}>Assistenza ordinata, anche quando tutto si ferma.</p>
            <div className={styles.panelLine} />
            <div className={styles.panelItems}>
              <span><b>24/7</b> reperibilita</span>
              <span><b>Auto</b> moto e furgoni</span>
              <span><b>Tu</b> scegli la destinazione</span>
            </div>
          </aside>
        </div>
        <div className={styles.heroFooter}>
          <span>RECUPERO VEICOLI</span><i /> <span>TRAINO AUTO</span><i /> <span>ASSISTENZA IN PANNE</span>
        </div>
      </section>

      <section className={styles.intro}>
        <p className={styles.sectionEyebrow}>Un aiuto concreto, senza confusione</p>
        <div className={styles.introGrid}>
          <h2>Quando l&apos;auto non riparte, avere un riferimento chiaro fa la differenza.</h2>
          <div>
            <p>Non basta mandare un carroattrezzi: bisogna capire <strong>dove intervenire, che veicolo recuperare e dove accompagnarlo.</strong> Da queste informazioni nasce un servizio piu preciso, pensato per non aggiungere stress a una situazione gia complicata.</p>
            <p>Che tu sia in citta, in una zona industriale o su una strada provinciale, gestiamo la richiesta con attenzione alla sicurezza del veicolo e delle persone presenti.</p>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Come lavoriamo</p>
          <h2>Tre passaggi. Una gestione piu serena.</h2>
        </div>
        <div className={styles.stepGrid}>
          {steps.map(([number, title, text]) => <article className={styles.step} key={number}>
            <span>{number}</span><h3>{title}</h3><p>{text}</p>
          </article>)}
        </div>
      </section>

      <section id="interventi" className={styles.services}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Interventi disponibili</p>
          <h2>La soluzione giusta per il tuo veicolo.</h2>
        </div>
        <div className={styles.serviceGrid}>
          {services.map((service, index) => <Link key={service.slug} href={'/servizi/' + service.slug + '/'} className={styles.serviceCard}>
            <span>0{index + 1}</span><h3>{service.title}</h3><p>{service.text}</p><b>Approfondisci <i>→</i></b>
          </Link>)}
        </div>
      </section>

      <section id="zone" className={styles.zones}>
        <div className={styles.zoneFeature}>
          <p className={styles.sectionEyebrow}>Dove interveniamo</p>
          <h2>Padova, i comuni vicini e le principali direttrici della provincia.</h2>
          <p>Ogni richiesta viene valutata in base al punto esatto in cui ti trovi. Lavoriamo per offrire una risposta organizzata tanto in centro quanto nelle aree residenziali, commerciali e industriali del territorio.</p>
          <a href={callHref}>Parla con noi <span>→</span></a>
        </div>
        <div className={styles.zoneList}>
          {zones.map((zone, index) => <Link key={zone.slug} href={'/zone/' + zone.slug + '/'}><b>{String(index + 1).padStart(2, '0')}</b>{zone.name}<span>↗</span></Link>)}
        </div>
      </section>

      <section id="domande" className={styles.faqs}>
        <div className={styles.sectionHead}>
          <p className={styles.sectionEyebrow}>Le risposte utili</p>
          <h2>Domande frequenti</h2>
        </div>
        <div className={styles.faqGrid}>
          {faqs.map((faq, index) => <details key={faq.question} className={styles.faq} open={index === 0}>
            <summary>{faq.question.replace(' a ', ' a Padova ')}<span>+</span></summary><p>{faq.answer}</p>
          </details>)}
        </div>
      </section>

      <section className={styles.finalCta}>
        <div><p className={styles.sectionEyebrow}>Serve assistenza adesso?</p><h2>Non restare fermo piu del necessario.</h2><p>Chiamaci, spiega brevemente cosa e successo e dove ti trovi. Da li costruiamo insieme il recupero piu adatto.</p></div>
        <a href={callHref}>Chiama {site.phone} <span>→</span></a>
      </section>

      <footer className={styles.footer}>
        <div><img src="/images/brand-padova.png" alt={site.name} /><p>Soccorso stradale e recupero veicoli a Padova e provincia.</p></div>
        <div><b>Contatti</b><a href={callHref}>{site.phone}</a><a href={'mailto:' + site.email}>{site.email}</a><p>{site.address}</p></div>
        <div><b>Servizi</b><Link href="/servizi/soccorso-stradale-24-ore/">Soccorso stradale</Link><Link href="/servizi/traino-auto/">Traino auto</Link><Link href="/contatti/">Contatti</Link></div>
      </footer>
    </main>
  )
}
