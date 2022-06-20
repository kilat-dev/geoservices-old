export interface emailProps {
  to?: string;
  subject?: string;
  body?: string;
}
export const composeEmailLink = ({to, subject, body}: emailProps) => {
  const defaultTo = 'geoservice@email.com';
  const defaultSubject = 'Quotation';
  const defaultBody = 'Saya ingin request quotation xxxx';
  return `mailto:${to || defaultTo}?subject=${subject || defaultSubject}&body=${body || defaultBody}`
}

export const companies = [
  {
    name: 'petroleumExperts',
    logo: "/assets/logo-petroleum-experts.png",
    url: 'https://www.google.com/',
    email: {
      body: 'Saya ingin request quotation Petroleum Experts'
    }
  },
  {
    name: 'emerson',
    logo: "/assets/logo-emerson.png",
    url: 'https://www.google.com/',
    email: {
      body: 'Saya ingin request quotation Emerson'
    }
  },
  {
    name: 'kappa',
    logo: "/assets/logo-kappa.png",
    url: 'https://www.google.com/',
    email: {
      body: 'Saya ingin request quotation Kappa'
    }
  },
  {
    name: 'technicalAlliance',
    logo: "/assets/logo-technical-alliance.png",
    url: 'https://www.google.com/',
    email: {
      body: 'Saya ingin request quotation Technical Alliance'
    }
  },
  {
    name: 'ikon',
    logo: "/assets/logo-ikon.png",
    url: 'https://www.google.com/',
    email: {
      body: 'Saya ingin request quotation Ikon'
    }
  },
  {
    name: 'petrosys',
    logo: "/assets/logo-petrosys.png",
    url: 'https://www.google.com/',
    email: {
      body: 'Saya ingin request quotation Petrosys'
    }
  },
  {
    name: 'ids',
    logo: "/assets/logo-ids.png",
    url: 'https://www.google.com/',
    email: {
      body: 'Saya ingin request quotation IDS'
    }
  },
  {
    name: 'neuralog',
    logo: "/assets/logo-neuralog.png",
    url: 'https://www.google.com/',
    email: {
      body: 'Saya ingin request quotation Neuralog'
    }
  },
  {
    name: 'aspentech',
    logo: "/assets/logo-aspentech.png",
    url: 'https://www.google.com/',
    email: {
      body: 'Saya ingin request quotation Aspentech'
    }
  },
]