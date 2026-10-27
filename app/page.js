"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Trees,
  X,
  Building2,
  LandPlot,
  House,
  Quote,
  Search,
  Mail,
  Compass,
  KeyRound,
  Handshake,
  FileCheck2,
  Headset,
  Ruler,
  Heart,
} from "lucide-react";

const ORANGE = "#E86B2D";

// The six image choices below are carried over from your latest code.
// Update names, project details, availability and images to match RJK's verified inventory.
const properties = [
  {
    id: 1,
    name: "Green Valley Residences",
    type: "Residential",
    location: "Mirsharai, Chattogram",
    price: "Price on request",
    area: "Residential homes",
    status: "Featured property",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    description: "A welcoming residential concept with space to plan your next chapter.",
  },
  {
    id: 2,
    name: "Highway View Plots",
    type: "Land",
    location: "Mirsharai, Chattogram",
    price: "Price on request",
    area: "Land opportunity",
    status: "Land opportunity",
    image: "https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?auto=format&fit=crop&w=1200&q=85",
    description: "Explore land options and ask the RJK team about access, documents and availability.",
  },
  {
    id: 3,
    name: "The Courtyard Homes",
    type: "Residential",
    location: "Mirsharai, Chattogram",
    price: "Enquire for details",
    area: "Family-focused living",
    status: "Explore homes",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    description: "A contemporary home concept designed around comfort and everyday life.",
  },
  {
    id: 4,
    name: "Garden Edge House",
    type: "Residential",
    location: "Chattogram region",
    price: "Enquire for details",
    area: "Residential property",
    status: "New listing concept",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=85",
    description: "A modern house concept with a calm exterior and inviting outdoor space.",
  },
  {
    id: 5,
    name: "Family Park Residence",
    type: "Residential",
    location: "Mirsharai, Chattogram",
    price: "Price on request",
    area: "House opportunity",
    status: "Residential",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=85",
    description: "A practical family-home concept for buyers comparing residential options.",
  },
  {
    id: 6,
    name: "Horizon Living",
    type: "Land",
    location: "Mirsharai, Chattogram",
    price: "Enquire for details",
    area: "Land & planning",
    status: "Explore possibilities",
    image: "https://images.unsplash.com/photo-1628133287836-40bd5453bed1?auto=format&fit=crop&w=1200&q=85",
    description: "Discover a property opportunity and discuss your plans with the RJK team.",
  },
];

const services = [
  { icon: <House size={23} />, title: "Residential Properties", text: "Explore home options with details matched to your family, lifestyle and plans." },
  { icon: <LandPlot size={23} />, title: "Land & Plot Enquiries", text: "Discuss plot options, location preferences, access and the information you need." },
  { icon: <KeyRound size={23} />, title: "Property Consultation", text: "Talk through your goals and understand the next steps before making a decision." },
  { icon: <FileCheck2 size={23} />, title: "Documentation Guidance", text: "Know which ownership, approval and legal documents to independently verify." },
  { icon: <Compass size={23} />, title: "Location Assistance", text: "Compare neighbourhoods, connectivity and the practical details of a location." },
  { icon: <Handshake size={23} />, title: "Buyer Support", text: "Get a clear point of contact for questions, property visits and follow-up." },
];

// These are sample placeholders, not real customer reviews. Replace with approved quotes.
const testimonials = [
  { quote: "The most helpful part of a property journey is getting clear answers and knowing what to verify next.", name: "Sample client story", detail: "Replace with an approved customer quote" },
  { quote: "A good property discussion should begin by understanding the buyer's needs, not by rushing a decision.", name: "Sample client story", detail: "Replace with an approved customer quote" },
  { quote: "Location, documentation and transparent information make it easier to compare property options.", name: "Sample client story", detail: "Replace with an approved customer quote" },
  { quote: "Having one place to ask questions can make the process feel more organised and straightforward.", name: "Sample client story", detail: "Replace with an approved customer quote" },
  { quote: "It helps when a team listens to your plans and explains the details in a simple way.", name: "Sample client story", detail: "Replace with an approved customer quote" },
  { quote: "A considered decision takes time. Clear information helps you move forward with confidence.", name: "Sample client story", detail: "Replace with an approved customer quote" },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3 group" aria-label="RJK Limited home">
      <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-2xl bg-[#E86B2D] text-white shadow-[0_8px_20px_rgba(232,107,45,.22)] transition duration-300 group-hover:-rotate-3 group-hover:rounded-full">
        <span className="text-[17px] font-black tracking-[-.08em]">RJK</span>
      </span>
      <span className="leading-tight">
        <span className="block text-[15px] font-extrabold tracking-[.12em] text-[#171717]">RJK LIMITED</span>
        <span className="mt-1 block text-[9px] font-medium tracking-[.2em] text-black/45">PROPERTY & DEVELOPMENT</span>
      </span>
    </a>
  );
}

function PropertyCard({ item, onEnquire, index }) {
  return (
    <motion.article
      layout
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ delay: index * 0.06 }}
      className="group overflow-hidden rounded-[22px] border border-black/[.06] bg-white shadow-[0_8px_28px_rgba(23,23,23,.045)] transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(23,23,23,.10)]"
    >
      <div className="relative h-[245px] overflow-hidden bg-[#e5e2dc]">
        <img src={item.image} alt={item.name} loading="lazy" className="object-cover w-full h-full transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />
        <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-[#F4F2EE]/95 px-3 py-2 text-[9px] font-bold uppercase tracking-[.13em] text-[#171717]">{item.status}</span>
        <button onClick={() => onEnquire(item.name)} aria-label={`Enquire about ${item.name}`} className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-[#E86B2D] text-white transition duration-300 hover:rotate-45 hover:bg-[#171717]"><ArrowUpRight size={20} /></button>
      </div>
      <div className="p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3 text-xs text-black/50"><MapPin size={14} className="text-[#E86B2D]" />{item.location}</div>
        <h3 className="text-xl font-bold tracking-tight text-[#171717]">{item.name}</h3>
        <p className="mt-2 min-h-[48px] text-sm leading-6 text-black/55">{item.description}</p>
        <div className="mt-5 flex items-end justify-between gap-3 border-t border-black/[.08] pt-4">
          <div><p className="text-[9px] font-semibold uppercase tracking-[.14em] text-black/40">Property type</p><p className="mt-1 text-sm font-semibold">{item.area}</p></div>
          <button onClick={() => onEnquire(item.name)} className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-[#D95C24] transition hover:gap-2.5">Enquire <ArrowRight size={15} /></button>
        </div>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [modalProperty, setModalProperty] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", interest: "Land", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const filtered = useMemo(() => properties.filter((p) =>
    (filter === "All" || p.type === filter) &&
    `${p.name} ${p.location} ${p.description}`.toLowerCase().includes(search.toLowerCase())
  ), [filter, search]);

  function openEnquiry(name = "") {
    setModalProperty(name);
    setForm((f) => ({ ...f, interest: name || f.interest }));
    setSubmitted(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  function submitEnquiry(e) {
    e.preventDefault();
    const message = `Hello RJK Limited, my name is ${form.name}. Phone: ${form.phone}. Interested in: ${modalProperty || form.interest}. Message: ${form.message || "Please share more details."}`;
    // Add RJK's WhatsApp number after wa.me/ when the company confirms it.
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  const navItems = [["Home", "#home"], ["Properties", "#properties"], ["Our Services", "#services"], ["About RJK", "#about"], ["Client Stories", "#stories"]];

  return (
    <main id="home" className="overflow-hidden bg-[#F4F2EE] text-[#171717] selection:bg-[#E86B2D]/20">
      {/* Announcement strip */}
      <div className="bg-[#171717] text-white">
        <div className="mx-auto flex min-h-[36px] max-w-7xl items-center justify-between gap-4 px-5 text-[10px] sm:text-xs">
          <span className="flex items-center gap-2 text-white/80"><MapPin size={13} className="text-[#F08A51]" /> Mirsharai, Chattogram, Bangladesh</span>
          <a href="#contact" className="hidden items-center gap-2 transition hover:text-[#F08A51] sm:flex">Let’s discuss your property plans <ArrowUpRight size={13} className="text-[#F08A51]" /></a>
          <span className="sm:hidden text-white/65">Property with purpose</span>
        </div>
      </div>

      {/* Premium sticky navbar */}
      <header className="sticky top-0 z-40 border-b border-black/[.07] bg-[#F4F2EE]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
          <Logo />
          <nav className="items-center hidden gap-7 xl:flex">
            {navItems.map(([label, href]) => <a key={label} href={href} className="group relative py-2 text-[12px] font-semibold text-black/65 transition hover:text-[#D95C24]"><span>{label}</span><span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#E86B2D] transition-all duration-300 group-hover:w-full" /></a>)}
          </nav>
          <a href="#contact" className="hidden items-center gap-3 rounded-full bg-[#E86B2D] px-5 py-3.5 text-xs font-bold text-white transition hover:bg-[#171717] sm:flex">Book a consultation <ArrowUpRight size={15} /></a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[#171717] lg:hidden" aria-label="Toggle menu">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
        <AnimatePresence>
          {menuOpen && <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-black/[.07] bg-[#F4F2EE] px-5 lg:hidden"><div className="grid gap-1 py-4 mx-auto max-w-7xl">{navItems.map(([label, href]) => <a key={label} onClick={() => setMenuOpen(false)} href={href} className="rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-white hover:text-[#D95C24]">{label}</a>)}<a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#E86B2D] px-5 py-3.5 text-sm font-bold text-white">Contact RJK <ArrowUpRight size={16} /></a></div></motion.nav>}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section className="relative px-5 pt-10 pb-20 mx-auto max-w-7xl sm:pb-24 sm:pt-14 lg:px-8 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[.88fr_1.12fr] lg:gap-14">
          <motion.div initial="hidden" animate="show" variants={reveal} className="relative z-10 py-3 lg:py-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E86B2D]/20 bg-white px-4 py-2.5 text-[9px] font-bold uppercase tracking-[.15em] text-[#171717] sm:text-[10px]"><Sparkles size={13} className="text-[#E86B2D]" /> Rooted in Mirsharai. Ready for what’s next.</div>
            <h1 className="max-w-[620px] text-[47px] font-semibold leading-[1.02] tracking-[-.065em] sm:text-6xl xl:text-[76px]">Find your place.<br />Build your <span className="font-serif italic font-normal text-[#E86B2D]">future.</span></h1>
            <p className="mt-6 max-w-md text-[14px] leading-7 text-black/60 sm:text-base">Explore property opportunities with a local perspective, clear information and guidance shaped around your plans.</p>
            <div className="flex flex-wrap gap-3 mt-8"><a href="#properties" className="group inline-flex items-center gap-3 rounded-full bg-[#E86B2D] px-6 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#171717]">Explore properties <span className="grid transition rounded-full h-7 w-7 place-items-center bg-white/15 group-hover:rotate-45"><ArrowUpRight size={16} /></span></a><a href="#about" className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white/60 px-6 py-4 text-sm font-bold transition hover:border-[#E86B2D] hover:bg-white">Meet RJK <ArrowRight size={16} /></a></div>
            <div className="flex items-center gap-4 pt-6 mt-10 border-t border-black/10"><div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#171717] text-[#F08A51]"><Handshake size={21} /></div><p className="max-w-[260px] text-xs leading-5 text-black/55"><span className="font-bold text-[#171717]">Personal guidance. Clear next steps.</span><br />Start with a conversation about what matters to you.</p></div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }} className="relative">
            <div className="relative h-[420px] overflow-hidden rounded-[26px] bg-[#ded9d1] sm:h-[540px] lg:h-[600px]"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90" alt="Contemporary residential property" className="h-full w-full object-cover transition duration-1000 hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/10" /><div className="absolute left-5 top-5 rounded-full border border-white/30 bg-black/20 px-4 py-2.5 text-[9px] font-bold uppercase tracking-[.15em] text-white backdrop-blur-md sm:left-7 sm:top-7">Property • People • Possibility</div><div className="absolute flex items-end justify-between gap-4 text-white bottom-7 left-6 right-6 sm:bottom-9 sm:left-9 sm:right-9"><div><p className="text-[10px] font-bold uppercase tracking-[.2em] text-[#FFB185]">A place to grow</p><p className="mt-2 text-2xl font-medium sm:text-4xl">Make room for life.</p></div><a href="#properties" className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#E86B2D] text-white transition hover:rotate-45 hover:bg-white hover:text-[#171717]"><ArrowUpRight size={22} /></a></div></div>
            <div className="absolute -bottom-5 right-5 hidden max-w-[235px] rounded-2xl border border-black/[.04] bg-white p-5 shadow-[0_15px_45px_rgba(0,0,0,.10)] sm:block"><div className="mb-2 flex items-center gap-2 text-[#E86B2D]"><ShieldCheck size={19} /><span className="text-xs font-extrabold text-[#171717]">Clarity at every step</span></div><p className="text-xs leading-5 text-black/55">Ask questions, review the details and make decisions at your own pace.</p></div>
          </motion.div>
        </div>
      </section>

      {/* Brand values strip */}
      <section className="border-y border-black/[.07] bg-white"><div className="grid grid-cols-2 px-5 mx-auto max-w-7xl sm:grid-cols-4 lg:px-8">{[["01", "Local perspective"], ["02", "Clear communication"], ["03", "Personal guidance"], ["04", "Thoughtful decisions"]].map(([n, label]) => <div key={n} className="flex items-center gap-3 border-black/[.07] px-2 py-5 sm:border-r sm:px-5 sm:py-7 last:border-r-0"><span className="text-xs font-extrabold text-[#E86B2D]">{n}</span><span className="text-xs font-semibold sm:text-sm">{label}</span></div>)}</div></section>

      {/* Properties: six cards */}
      <section id="properties" className="px-5 py-20 mx-auto max-w-7xl sm:py-28 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={reveal} className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#D95C24]">Explore property</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.05em] sm:text-5xl">A place for your<br /><span className="font-serif font-normal italic text-[#E86B2D]">next chapter.</span></h2></div><p className="max-w-md text-sm leading-7 text-black/55">Browse residential and land opportunities in Mirsharai and the wider Chattogram region. Ask our team for current availability and verified project details.</p></motion.div>
        <div className="flex flex-col justify-between gap-4 mt-9 sm:flex-row sm:items-center"><div className="flex flex-wrap gap-2">{["All", "Residential", "Land"].map((f) => <button key={f} onClick={() => setFilter(f)} className={`rounded-full px-5 py-3 text-xs font-bold transition ${filter === f ? "bg-[#171717] text-white" : "border border-black/10 bg-white text-black/65 hover:border-[#E86B2D] hover:text-[#D95C24]"}`}>{f}</button>)}</div><label className="flex items-center gap-3 rounded-full border border-black/10 bg-white px-4 py-3 sm:w-[285px]"><Search size={16} className="text-[#E86B2D]" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name or location..." className="w-full text-sm bg-transparent outline-none" aria-label="Search properties" /></label></div>
        <motion.div layout className="grid gap-5 mt-7 md:grid-cols-2 lg:grid-cols-3">{filtered.map((item, index) => <PropertyCard key={item.id} item={item} index={index} onEnquire={openEnquiry} />)}</motion.div>
        {filtered.length === 0 && <div className="py-12 mt-8 text-sm text-center border border-dashed rounded-2xl border-black/20 text-black/55">No matching properties. Try another search or select “All”.</div>}
        <p className="mt-5 text-[10px] leading-5 text-black/40">Listing note: The six cards use the six image choices in your latest code. Confirm project names, availability, locations and details with RJK Limited before publishing.</p>
      </section>

      {/* About */}
      <section id="about" className="bg-[#E8E5DF] py-20 sm:py-28"><div className="grid items-center gap-12 px-5 mx-auto max-w-7xl lg:grid-cols-2 lg:gap-20 lg:px-8"><motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal} className="relative"><div className="h-[420px] overflow-hidden rounded-[24px] sm:h-[520px]"><img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85" alt="Modern home interior" loading="lazy" className="h-full w-full object-cover transition duration-700 hover:scale-[1.03]" /></div><div className="absolute -bottom-5 right-4 rounded-2xl bg-[#E86B2D] p-5 text-white shadow-lg sm:right-6 sm:p-6"><Trees size={24} /><p className="mt-3 max-w-[150px] text-sm font-bold leading-5">Rooted in place. Focused on people.</p></div></motion.div><motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={reveal}><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#D95C24]">Get to know RJK</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.05em] sm:text-5xl">Real estate is more than <span className="font-serif font-normal italic text-[#E86B2D]">property.</span></h2><p className="mt-6 text-sm leading-7 text-black/60 sm:text-[15px]">It’s where plans take shape, families grow and new chapters begin. RJK Limited aims to make property decisions feel more considered through clear conversations, local insight and attention to the details that matter.</p><p className="mt-4 text-sm leading-7 text-black/60 sm:text-[15px]">With a focus on Mirsharai and the wider Chattogram region, we start by understanding what matters to you—whether you’re exploring land, planning a home or simply comparing options.</p><a href="#contact" className="mt-8 inline-flex items-center gap-3 border-b border-[#E86B2D] pb-2 text-sm font-bold transition hover:gap-4">Start a conversation <ArrowUpRight size={17} className="text-[#E86B2D]" /></a><div className="grid grid-cols-2 gap-5 pt-6 mt-10 border-t border-black/10"><div><Compass size={21} className="text-[#E86B2D]" /><h3 className="mt-3 text-sm font-bold">Local perspective</h3><p className="mt-2 text-xs leading-5 text-black/55">A focus on the region and its opportunities.</p></div><div><MessageCircle size={21} className="text-[#E86B2D]" /><h3 className="mt-3 text-sm font-bold">Human service</h3><p className="mt-2 text-xs leading-5 text-black/55">Straightforward conversations without pressure.</p></div></div></motion.div></div></section>

      {/* Services: six cards */}
      <section id="services" className="px-5 py-20 mx-auto max-w-7xl sm:py-28 lg:px-8"><div className="max-w-2xl mx-auto text-center"><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#D95C24]">How we can help</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.05em] sm:text-5xl">Support for every<br /><span className="font-serif font-normal italic text-[#E86B2D]">step forward.</span></h2><p className="mt-5 text-sm leading-7 text-black/55">A more considered property journey starts with the right information and the right conversation.</p></div><div className="grid gap-4 mt-12 sm:grid-cols-2 lg:grid-cols-3">{services.map((service, index) => <motion.article key={service.title} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} variants={reveal} transition={{ delay: index * .05 }} className="group rounded-[22px] border border-black/[.07] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#E86B2D]/35 hover:shadow-[0_16px_40px_rgba(23,23,23,.07)] sm:p-7"><div className="flex items-center justify-between"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#FBE8DD] text-[#D95C24] transition group-hover:bg-[#E86B2D] group-hover:text-white">{service.icon}</span><span className="text-xs font-bold text-black/30">0{index + 1}</span></div><h3 className="mt-6 text-lg font-bold">{service.title}</h3><p className="mt-3 text-sm leading-6 text-black/55">{service.text}</p><a href="#contact" className="mt-5 inline-flex items-center gap-2 text-xs font-extrabold text-[#D95C24]">Talk to us <ArrowRight size={14} className="transition group-hover:translate-x-1" /></a></motion.article>)}</div></section>

      {/* CTA */}
      <section className="bg-[#171717] py-16 text-white sm:py-20"><div className="mx-auto grid max-w-7xl items-center gap-8 px-5 md:grid-cols-[1fr_auto] lg:px-8"><div><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#F08A51]">Your next chapter starts here</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl">Let’s talk about what<br />you want to <span className="font-serif font-normal italic text-[#F08A51]">build next.</span></h2><p className="max-w-xl mt-4 text-sm leading-7 text-white/60">Share your plans with RJK Limited and take the next step with better information.</p></div><a href="#contact" className="inline-flex w-fit items-center gap-4 rounded-full bg-[#E86B2D] px-6 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#171717]">Contact our team <ArrowUpRight size={18} /></a></div></section>

      {/* Testimonials: six cards, clearly marked as placeholders */}
      <section id="stories" className="px-5 py-20 mx-auto max-w-7xl sm:py-28 lg:px-8"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#D95C24]">Client experience</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.05em] sm:text-5xl">Trust grows through<br /><span className="font-serif font-normal italic text-[#E86B2D]">every conversation.</span></h2></div><p className="max-w-md text-sm leading-7 text-black/55">We want every client to feel heard, informed and comfortable asking questions. Publish real client feedback here only after getting their approval.</p></div><div className="mt-9 flex items-start gap-3 rounded-2xl border border-[#E86B2D]/20 bg-[#FBE8DD] p-4 text-xs leading-5 text-[#7E3A1A]"><Quote size={18} className="mt-0.5 shrink-0" /><p><strong>Preview content:</strong> These six cards are sample placeholders for layout only, not genuine customer reviews. Replace each quote and name with verified feedback and permission before the site goes live.</p></div><div className="grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-3">{testimonials.map((item, index) => <motion.article key={index} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} variants={reveal} className="flex min-h-[240px] flex-col justify-between rounded-[22px] border border-black/[.07] bg-white p-6 transition hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(23,23,23,.06)] sm:p-7"><div><div className="flex items-center justify-between"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#FBE8DD] text-[#D95C24]"><Quote size={18} /></span><span className="text-[10px] font-bold uppercase tracking-[.12em] text-black/30">Story 0{index + 1}</span></div><p className="mt-5 text-[15px] leading-7 text-black/75">“{item.quote}”</p></div><div className="mt-6 border-t border-black/[.08] pt-4"><p className="text-sm font-extrabold">{item.name}</p><p className="mt-1 text-[10px] text-black/45">{item.detail}</p></div></motion.article>)}</div></section>

      {/* Contact */}
      <section id="contact" className="bg-[#E8E5DF] py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.85fr_1.15fr] lg:gap-20 lg:px-8"><div><p className="text-[10px] font-extrabold uppercase tracking-[.2em] text-[#D95C24]">Let’s talk property</p><h2 className="mt-4 text-4xl font-semibold leading-tight tracking-[-.05em] sm:text-5xl">Tell us what<br />you’re <span className="font-serif font-normal italic text-[#E86B2D]">looking for.</span></h2><p className="max-w-md mt-5 text-sm leading-7 text-black/60">Share a few details to prepare a WhatsApp enquiry. Our team can discuss your requirements and help you understand possible next steps.</p><div className="space-y-5 mt-9"><div className="flex items-start gap-4"><span className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#D95C24]"><MapPin size={18} /></span><div><p className="text-sm font-bold">Our region</p><p className="mt-1 text-sm text-black/55">Mirsharai, Chattogram, Bangladesh</p></div></div><div className="flex items-start gap-4"><span className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#D95C24]"><MessageCircle size={18} /></span><div><p className="text-sm font-bold">Direct enquiry</p><p className="mt-1 text-sm text-black/55">Use the form to prepare your WhatsApp message.</p></div></div><div className="p-4 text-xs leading-5 border rounded-2xl border-black/10 bg-white/60 text-black/55">Before launch, add RJK Limited’s verified WhatsApp number, office address, email and social links.</div></div></div>
        <form onSubmit={submitEnquiry} className="rounded-[24px] border border-black/[.04] bg-white p-6 shadow-[0_15px_50px_rgba(23,23,23,.06)] sm:p-9"><div className="flex items-center justify-between gap-4 mb-7"><div><p className="text-xl font-extrabold">Property enquiry</p><p className="mt-1 text-xs text-black/45">We’ll prepare your message in WhatsApp.</p></div><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#FBE8DD] text-[#D95C24]"><MessageCircle size={22} /></span></div><div className="grid gap-5 sm:grid-cols-2"><label className="text-xs font-bold">Full name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className="mt-2 w-full rounded-xl border border-black/10 bg-[#F4F2EE] px-4 py-3.5 text-sm font-normal outline-none transition focus:border-[#E86B2D]" /></label><label className="text-xs font-bold">Phone number<input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+880 1XXX-XXXXXX" className="mt-2 w-full rounded-xl border border-black/10 bg-[#F4F2EE] px-4 py-3.5 text-sm font-normal outline-none transition focus:border-[#E86B2D]" /></label><label className="text-xs font-bold sm:col-span-2">Property interest<select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className="mt-2 w-full rounded-xl border border-black/10 bg-[#F4F2EE] px-4 py-3.5 text-sm font-normal outline-none transition focus:border-[#E86B2D]"><option>Land</option><option>Residential</option><option>Commercial property</option><option>Investment enquiry</option><option>General enquiry</option></select></label><label className="text-xs font-bold sm:col-span-2">Message <span className="font-normal text-black/40">(optional)</span><textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} placeholder="Location preference, budget range or questions..." className="mt-2 w-full resize-y rounded-xl border border-black/10 bg-[#F4F2EE] px-4 py-3.5 text-sm font-normal outline-none transition focus:border-[#E86B2D]" /></label></div><button type="submit" className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#E86B2D] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#171717]">Continue on WhatsApp <ArrowUpRight size={17} /></button>{submitted && <p className="flex items-center justify-center gap-2 mt-3 text-xs font-semibold text-green-700"><Check size={14} /> WhatsApp message prepared. Send it in WhatsApp to complete your enquiry.</p>}<p className="mt-4 text-center text-[10px] leading-5 text-black/40">This demo opens WhatsApp and does not save enquiry data to a server.</p></form>
      </div></section>

      {/* Footer */}
      <footer className="bg-[#171717] py-10 text-white"><div className="px-5 mx-auto max-w-7xl lg:px-8"><div className="flex flex-col justify-between gap-8 pb-8 border-b border-white/15 md:flex-row md:items-center"><div><Logo /><p className="max-w-sm mt-4 text-xs leading-6 text-white/50">Thoughtful property opportunities in Mirsharai and the wider Chattogram region.</p></div><div className="flex flex-wrap text-xs gap-x-7 gap-y-3 text-white/60">{navItems.map(([label, href]) => <a key={label} className="transition hover:text-[#F08A51]" href={href}>{label}</a>)}<a className="transition hover:text-[#F08A51]" href="#contact">Contact</a></div></div><div className="flex flex-col justify-between gap-3 pt-6 text-[10px] text-white/40 sm:flex-row"><p>© {new Date().getFullYear()} RJK Limited. All rights reserved.</p><p>Mirsharai, Chattogram, Bangladesh</p></div></div></footer>
    </main>
  );
}
