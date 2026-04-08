export interface NavLink {
  label: string;
  href: string;
}

export interface Program {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface ImpactStat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  progress: number;
  goal: string;
  raised: string;
  gradient: string;
  tag: string;
}

export interface EventItem {
  id: string;
  date: string;
  month: string;
  day: string;
  title: string;
  location: string;
  county: string;
  participants: number;
  maxParticipants: number;
  type: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  initials: string;
  color: string;
}

export interface Partner {
  id: string;
  name: string;
  type: string;
}

export interface VolunteerOption {
  id: string;
  icon: string;
  title: string;
  description: string;
  commitment: string;
  color: string;
}

export interface LearningResource {
  id: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  gradient: string;
}

export interface DonationTier {
  id: string;
  amount: number;
  currency: string;
  label: string;
  description: string;
  popular: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Impact', href: '#impact' },
  { label: 'Events', href: '#events' },
  { label: 'Get Involved', href: '#volunteer' },
  { label: 'Contact', href: '#contact' },
];

export const IMPACT_STATS: ImpactStat[] = [
  { value: 15000, suffix: '+', label: 'Volunteers', icon: 'Users' },
  { value: 200, suffix: '+', label: 'Cleanup Events', icon: 'Calendar' },
  { value: 50000, suffix: '', label: 'kg Waste Removed', icon: 'Trash2' },
  { value: 12, suffix: '', label: 'Counties Reached', icon: 'MapPin' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'urban-cleanup',
    icon: 'Building2',
    title: 'Urban Cleanup',
    description: "Transforming Kenyan cities through regular community-led cleanup drives, waste management education, and urban greening initiatives across Nairobi, Mombasa, and Kisumu.",
    color: 'green',
  },
  {
    id: 'forest-restoration',
    icon: 'TreePine',
    title: 'Forest Restoration',
    description: "Restoring Kenya's degraded forests through indigenous tree planting, community forest management, and partnering with local landowners to expand forest cover.",
    color: 'emerald',
  },
  {
    id: 'ocean-lake-conservation',
    icon: 'Waves',
    title: 'Ocean & Lake Conservation',
    description: "Protecting Lake Victoria, Lake Nakuru, and the Kenyan coast through plastic-free campaigns, fishing community engagement, and water quality monitoring.",
    color: 'blue',
  },
  {
    id: 'youth-climate-education',
    icon: 'GraduationCap',
    title: 'Youth Climate Education',
    description: "Empowering Kenya's next generation with environmental knowledge, climate action skills, and leadership opportunities through school programs and youth clubs.",
    color: 'yellow',
  },
  {
    id: 'sustainable-communities',
    icon: 'Home',
    title: 'Sustainable Communities',
    description: "Building resilient communities through sustainable agriculture training, renewable energy access, waste-to-wealth programs, and local conservation governance.",
    color: 'amber',
  },
  {
    id: 'policy-advocacy',
    icon: 'ScrollText',
    title: 'Policy Advocacy',
    description: "Advocating for strong environmental policies at county and national levels, engaging government, industry, and civil society to create lasting systemic change.",
    color: 'purple',
  },
];

export const CAMPAIGNS: Campaign[] = [
  {
    id: 'nairobi-river',
    title: 'Nairobi River Restoration Campaign',
    description: 'A six-month intensive effort to clean and restore the Nairobi River corridor, removing illegal dumpsites and planting riparian vegetation along 12km of riverbank.',
    progress: 68,
    goal: '500,000 KES',
    raised: '340,000 KES',
    gradient: 'from-green-600 to-emerald-700',
    tag: 'Active Campaign',
  },
  {
    id: 'mau-forest',
    title: 'Mau Forest Recovery Initiative',
    description: "Partnering with 20 community groups to plant 100,000 indigenous trees in the Mau Forest Complex - Kenya's largest water tower and home to 400+ animal species.",
    progress: 45,
    goal: '1,200,000 KES',
    raised: '540,000 KES',
    gradient: 'from-emerald-700 to-teal-700',
    tag: 'Ongoing',
  },
  {
    id: 'coastal-plastic',
    title: '#PlasticFreeCoast Kenya',
    description: "A national campaign to eliminate single-use plastics from Kenya's 536km coastline through community cleanups, business partnerships, and consumer awareness drives.",
    progress: 82,
    goal: '750,000 KES',
    raised: '615,000 KES',
    gradient: 'from-teal-600 to-cyan-700',
    tag: 'Nearly Complete',
  },
];

export const EVENTS: EventItem[] = [
  {
    id: 'evt-1',
    date: '2025-03-15',
    month: 'MAR',
    day: '15',
    title: 'Uhuru Park Community Cleanup',
    location: 'Uhuru Park, Nairobi',
    county: 'Nairobi County',
    participants: 87,
    maxParticipants: 150,
    type: 'Urban Cleanup',
  },
  {
    id: 'evt-2',
    date: '2025-03-22',
    month: 'MAR',
    day: '22',
    title: 'World Water Day - Lake Victoria Cleanup',
    location: 'Kisumu Waterfront',
    county: 'Kisumu County',
    participants: 120,
    maxParticipants: 200,
    type: 'Water Conservation',
  },
  {
    id: 'evt-3',
    date: '2025-04-05',
    month: 'APR',
    day: '05',
    title: 'Karura Forest Tree Planting Day',
    location: 'Karura Forest',
    county: 'Nairobi County',
    participants: 45,
    maxParticipants: 100,
    type: 'Forest Restoration',
  },
  {
    id: 'evt-4',
    date: '2025-04-19',
    month: 'APR',
    day: '19',
    title: 'Mombasa Coastal Cleanup Drive',
    location: 'Bamburi Beach',
    county: 'Mombasa County',
    participants: 63,
    maxParticipants: 120,
    type: 'Coastal Cleanup',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Joining Keeping Kenya Clean 2030 changed my life. I went from watching my neighborhood deteriorate to leading weekly cleanups with 50 volunteers. The training and support are exceptional.',
    name: 'Amina Wanjiku',
    role: 'Community Cleanup Leader',
    location: 'Eastlands, Nairobi',
    initials: 'AW',
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 'test-2',
    quote: "As a teacher, I've seen the Youth Climate Education program transform my students. They now lead environmental clubs, educate their families, and think critically about sustainability.",
    name: 'Mr. David Ochieng',
    role: 'Primary School Teacher',
    location: 'Kisumu',
    initials: 'DO',
    color: 'from-amber-400 to-yellow-500',
  },
  {
    id: 'test-3',
    quote: "The Mau Forest initiative brought our community together. Families who never interacted now plant trees side by side. We've planted over 8,000 trees in our area alone.",
    name: 'Mama Nyokabi',
    role: 'Community Elder & Tree Planting Champion',
    location: 'Nakuru County',
    initials: 'MN',
    color: 'from-teal-400 to-cyan-500',
  },
];

export const PARTNERS: Partner[] = [
  { id: 'p1', name: 'Kenya Forest Service', type: 'Government' },
  { id: 'p2', name: 'NEMA Kenya', type: 'Government' },
  { id: 'p3', name: 'Kenya Red Cross', type: 'NGO' },
  { id: 'p4', name: 'UNEP Nairobi', type: 'International' },
  { id: 'p5', name: 'Safaricom Foundation', type: 'Corporate' },
  { id: 'p6', name: 'University of Nairobi', type: 'Academic' },
];

export const VOLUNTEER_OPTIONS: VolunteerOption[] = [
  {
    id: 'cleanup',
    icon: 'Trash2',
    title: 'Join a Cleanup',
    description: 'Participate in community cleanup events across Kenya. No experience needed — just bring your energy and willingness to make a difference.',
    commitment: '4-6 hours per event',
    color: 'green',
  },
  {
    id: 'trees',
    icon: 'Sprout',
    title: 'Plant Trees',
    description: "Help restore Kenya's forests and green spaces. Join our tree planting teams working in urban parks, forests, and rural watersheds.",
    commitment: 'Weekends & holidays',
    color: 'emerald',
  },
  {
    id: 'education',
    icon: 'BookOpen',
    title: 'Educate Youth',
    description: 'Share your knowledge and passion with young Kenyans through our school outreach program. Mentors, facilitators, and guest speakers needed.',
    commitment: '2-4 hours per week',
    color: 'amber',
  },
];

export const LEARNING_RESOURCES: LearningResource[] = [
  {
    id: 'lr-1',
    category: 'Guide',
    title: "Kenya's Vanishing Forests: What You Can Do",
    description: "An accessible guide to understanding deforestation in Kenya — causes, impacts on water towers, and concrete actions communities can take to reverse the trend.",
    readTime: '8 min read',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    id: 'lr-2',
    category: 'Article',
    title: 'Plastic Pollution in Lake Victoria: The Hidden Crisis',
    description: "Lake Victoria is the world's second-largest freshwater lake — and it's under threat. Discover how plastic pollution is affecting millions of Kenyans and what's being done.",
    readTime: '6 min read',
    gradient: 'from-teal-500 to-cyan-600',
  },
  {
    id: 'lr-3',
    category: 'Toolkit',
    title: 'How to Organize a Community Cleanup: A Step-by-Step Guide',
    description: 'Everything you need to organize a successful cleanup event in your neighborhood — from permits to volunteers, waste disposal, and media outreach.',
    readTime: '12 min read',
    gradient: 'from-amber-500 to-yellow-600',
  },
];

export const DONATION_TIERS: DonationTier[] = [
  {
    id: 'tier-1',
    amount: 500,
    currency: 'KES',
    label: 'Tree Planter',
    description: "Plants 5 indigenous trees and supports one student's environmental workshop",
    popular: false,
  },
  {
    id: 'tier-2',
    amount: 1500,
    currency: 'KES',
    label: 'Community Champion',
    description: 'Funds a full community cleanup event including equipment and transportation',
    popular: true,
  },
  {
    id: 'tier-3',
    amount: 5000,
    currency: 'KES',
    label: 'Conservation Hero',
    description: 'Sponsors an entire school environmental program for one term',
    popular: false,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I volunteer for a cleanup event?',
    answer: "Volunteering is easy! Browse our upcoming events section, click \"Register\" on any event that interests you, and fill in your details. You'll receive a confirmation email with location details, what to bring, and a WhatsApp group link to connect with other volunteers.",
  },
  {
    id: 'faq-2',
    question: 'Do I need any special experience or equipment?',
    answer: 'No experience is needed for most volunteer roles. We provide all necessary equipment including gloves, bags, and safety vests. Just wear comfortable clothes and closed-toe shoes. For specialized roles like tree planting, we provide on-site training.',
  },
  {
    id: 'faq-3',
    question: 'How are donations used?',
    answer: 'At least 85% of every donation goes directly to programs — cleanup events, tree planting materials, school programs, and community training. 10% supports operations and 5% builds our emergency conservation response fund. We publish annual financial reports on our website.',
  },
  {
    id: 'faq-4',
    question: 'Can organizations or schools partner with you?',
    answer: 'Absolutely! We welcome corporate partners, schools, government agencies, and community organizations. We offer customized partnership packages including team cleanup days, school adoption programs, and co-branded campaigns. Contact us at partnerships@keepingkenyaclean.org.',
  },
  {
    id: 'faq-5',
    question: 'How do I start an environmental club at my school?',
    answer: 'Our Youth Climate Education team provides free starter kits for school environmental clubs including curriculum materials, teacher guides, and a network of peer mentors. Email youth@keepingkenyaclean.org or visit us at our Nairobi office to get started.',
  },
  {
    id: 'faq-6',
    question: 'Which counties does Keeping Kenya Clean 2030 operate in?',
    answer: "We currently operate in 12 counties: Nairobi, Mombasa, Kisumu, Nakuru, Kiambu, Machakos, Kajiado, Kilifi, Kwale, Nyeri, Embu, and Trans Nzoia. We're expanding to 20 counties by 2026. If you'd like to bring our programs to your county, reach out to us!",
  },
];
