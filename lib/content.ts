export const salon = {
  legal: 'DEJAVOU SALON INC',
  display: 'DejaVou',
  tagline: 'Be your own kind of beautiful.',
  address: {
    line1: '6 Railroad Ave',
    line2: 'Montvale, NJ 07645',
    maps: 'https://www.google.com/maps?q=6+Railroad+Ave+Montvale+NJ+07645',
  },
  phone: {
    display: '(201) 391-2013',
    href: 'tel:+12013912013',
    label: 'Mobile',
  },
  email: {
    address: 'dejavou_spa2016@yahoo.com',
    href: 'mailto:dejavou_spa2016@yahoo.com',
  },
  messenger: {
    href: 'https://m.me/100054298879878',
    label: 'Messenger',
  },
  facebook: 'https://www.facebook.com/profile.php?id=100054298879878',
  instagram: 'https://www.instagram.com/dejavoukolc?igsh=ZWcwczliMnMwOTFn',
  hours: [
    { day: 'Monday',    range: 'Closed' },
    { day: 'Tuesday',   range: '9:00 – 19:00' },
    { day: 'Wednesday', range: '9:00 – 16:00' },
    { day: 'Thursday',  range: '9:00 – 19:00' },
    { day: 'Friday',    range: '9:00 – 16:00' },
    { day: 'Saturday',  range: '9:00 – 16:00' },
    { day: 'Sunday',    range: 'By appointment' },
  ],
} as const;

export type ServiceRow = { name: string; price: string };
export type ServiceGroup = { title: string; subtitle?: string; rows: ServiceRow[] };

export const services: ServiceGroup[] = [
  {
    title: 'Cut',
    subtitle: 'Precision, proportion, presence.',
    rows: [
      { name: "Women's cut", price: '$70' },
      { name: "Men's cut", price: '$40' },
      { name: "Children's cut", price: '$35' },
      { name: 'Bang trim', price: '$10' },
    ],
  },
  {
    title: 'Color',
    subtitle: 'Single process, gloss, and gray blending.',
    rows: [
      { name: 'Single process', price: '$60' },
      { name: 'Single process with toner', price: '$95' },
      { name: 'Toner', price: '$45' },
      { name: 'Glaze', price: '$45' },
      { name: "Men's gray blend", price: '$30' },
    ],
  },
  {
    title: 'Highlights',
    subtitle: 'Hand-placed dimension.',
    rows: [
      { name: 'Full head', price: '$140' },
      { name: 'Half head', price: '$100' },
      { name: 'Partial', price: '$60' },
      { name: 'Ombré', price: 'On consultation' },
    ],
  },
  {
    title: 'Blow Dry',
    subtitle: 'Soft architecture.',
    rows: [
      { name: 'Blow-out', price: '$45' },
      { name: 'Blow-out with curls', price: '$55' },
      { name: 'Keratin blow-dry', price: '$60' },
    ],
  },
  {
    title: 'Hair Services',
    subtitle: 'Keratin, extensions, and occasion styling.',
    rows: [
      { name: 'Brazilian keratin treatment', price: '$200' },
      { name: 'Hair extensions', price: 'From $250' },
      { name: 'Up-do', price: 'From $65' },
      { name: 'Perm', price: '$120' },
    ],
  },
  {
    title: 'Lash Extensions',
    subtitle: 'Individual applications, refined.',
    rows: [
      { name: 'Natural set', price: '$195' },
      { name: 'Super 3D set', price: '$250' },
      { name: 'Touch-up · 2 weeks', price: '$75' },
      { name: 'Touch-up · 3 weeks', price: '$95' },
      { name: 'Touch-up · 4 weeks', price: '$125' },
      { name: 'Mini touch-up · 2 weeks', price: '$80' },
      { name: 'Lash removal', price: 'From $35' },
    ],
  },
  {
    title: 'Make-Up',
    subtitle: 'Editorial and occasion.',
    rows: [
      { name: 'Make-up application', price: 'From $75' },
      { name: 'Make-up with lashes', price: '$85' },
    ],
  },
  {
    title: 'Brow & Waxing',
    subtitle: 'Shape, definition, tint.',
    rows: [
      { name: 'Eyebrow wax', price: '$20' },
      { name: 'Lip wax', price: '$10' },
      { name: 'Chin wax', price: '$13' },
      { name: 'Eyebrow tint', price: '$20' },
      { name: 'Eyelash tint', price: '$35' },
    ],
  },
];

const UNSPLASH = 'https://images.unsplash.com/';
const img = (id: string, w = 1400, q = 80) =>
  `${UNSPLASH}${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const images = {
  heroMain:        img('photo-1522337360788-8b13dee7a37e', 2000), // long hair editorial
  heroAlt:         img('photo-1519699047748-de8e457a634e', 2000),
  studioWide:      img('photo-1559599101-f09722fb4948', 1800),    // salon interior
  studioDetail1:   img('photo-1604654894610-df63bc536371', 900),
  studioDetail2:   img('photo-1580618672591-eb180b1a973f', 900),  // scissors
  signatureCut:    img('photo-1635805737707-575885ab0820', 1200), // hair close
  signatureColor:  img('photo-1560066984-138dadb4c035', 1200),    // hair color
  signatureLash:   img('photo-1617897903246-719242758050', 1200), // beauty
  ethosBg:         img('photo-1571646034647-52e6ea84b28c', 2000),
  contactHero:     img('photo-1605497788044-5a32c7078486', 1600),
};

export const gallery = [
  { url: img('photo-1522337360788-8b13dee7a37e', 1400), caption: 'Editorial long hair' },
  { url: img('photo-1504257432389-52343af06ae3', 1400), caption: 'Portrait, soft shape' },
  { url: img('photo-1519699047748-de8e457a634e', 1400), caption: 'Styled blow-out' },
  { url: img('photo-1560066984-138dadb4c035', 1400), caption: 'Hand-placed color' },
  { url: img('photo-1595476108010-b4d1f102b1b1', 1400), caption: 'Behind the chair' },
  { url: img('photo-1580489944761-15a19d654956', 1400), caption: 'Soft balayage' },
  { url: img('photo-1617897903246-719242758050', 1400), caption: 'Finishing touch' },
  { url: img('photo-1470259078422-826894b933aa', 1400), caption: 'Cool-toned color' },
];

export const signatures = [
  {
    name: 'Cut',
    desc: "Precision women's, men's, and children's cuts — finished dry, to the centimeter.",
    priceFrom: 'from $35',
    image: img('photo-1635805737707-575885ab0820', 1200),
    cta: 'Book a cut',
  },
  {
    name: 'Color',
    desc: 'Single process, hand-placed highlights, toners, and glazes that read like light.',
    priceFrom: 'from $60',
    image: img('photo-1560066984-138dadb4c035', 1200),
    cta: 'Book color',
  },
  {
    name: 'Lash',
    desc: 'Individual application, natural to super 3D sets, refined with two-week refills.',
    priceFrom: 'from $195',
    image: img('photo-1617897903246-719242758050', 1200),
    cta: 'Book lash',
  },
];

export const team = [
  {
    role: 'Lead Stylist',
    specialty: 'Precision cutting · blow-out architecture',
    bio: 'Cutting since well before the salon opened its doors, with a hand for one-length dry finishing and soft shaping. Books a year out for her regulars.',
    image: img('photo-1494790108377-be9c29b29330', 1100),
  },
  {
    role: 'Color Specialist',
    specialty: 'Balayage · hand-painted highlights · gloss',
    bio: 'Trained in foiling and free-hand placement, with a quiet obsession about the warmth of a finished tone. Brazilian keratin is her second language.',
    image: img('photo-1601049676869-702ea24cfd58', 1100),
  },
  {
    role: 'Lash & Brow Artist',
    specialty: 'Individual lash · tint · shaping',
    bio: 'Slow hands, fine-point tweezers, and a room dim enough to almost fall asleep in. Two-week refills keep things looking like the first day.',
    image: img('photo-1492106087820-71f1a00d2b11', 1100),
  },
];
