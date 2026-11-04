"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Award,
  Shield,
  ArrowRight,
  ArrowUpRight,
  Star,
  Menu,
  X,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Waves,
  Flame,
  Droplets,
  Wrench,
  Sun,
  Camera,
  Navigation,
  Compass,
  Check,
  HelpCircle,
  ExternalLink,
  MessageCircle,
  BadgeCheck,
  CheckCircle,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

// Informações Oficiais — Splash Piscinas Lagoa Santa (Exclusividade iGUi)
const COMPANY_NAME = "Splash Piscinas Lagoa Santa";
const COMPANY_FULL_NAME = "Splash Piscinas — Exclusividade iGUi";
const BRAND_SLOGAN = "Sua Piscina dos Sonhos Está Aqui · Exclusividade iGUi";
const BRAND_SUBTITLE =
  "+500 Famílias Realizadas com Splash em Lagoa Santa e Região. Piscinas de fibra premium com 15 anos de garantia de fábrica da maior rede do mundo.";

const WHATSAPP_NUMBER = "5531975299630";
const PHONE_DISPLAY = "(31) 97529-9630";
const LANDLINE_DISPLAY = "(31) 3688-0808";
const EMAIL_CONTACT = "contato@splashpiscinas.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/splashlagoasanta/";
const INSTAGRAM_HANDLE = "@splashlagoasanta";
const OFFICIAL_SITE_URL = "https://www.splashpiscinas.com.br/";

const ADDRESS_STREET = "Av. Acdo. Nilo Figueiredo, 3280";
const ADDRESS_NEIGHBORHOOD = "Dr. Lund";
const ADDRESS_CITY = "Lagoa Santa - MG";
const ADDRESS_CEP = "33400-000";
const ADDRESS_DISPLAY =
  "Av. Acdo. Nilo Figueiredo, 3280 - Dr. Lund, Lagoa Santa - MG, 33400-000";
const CITIES_SERVED =
  "Lagoa Santa, Vespasiano, Confins, Pedro Leopoldo, São José da Lapa, Santa Luzia, Serra do Cipó e Grande BH";

const GOOGLE_REVIEW_COUNT = "40";
const GOOGLE_RATING = "4,1";
const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Splash+Piscinas+Lagoa+Santa%0ASantos+Dumont+%C2%B7+Lagoa+Santa+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Acdo.+Nilo+Figueiredo%2C+3280+-+Dr.+Lund%2C+Lagoa+Santa+-+MG%2C+33400-000";
const WAZE_MAPS_URL =
  "https://waze.com/ul?q=Avenida+Academico+Nilo+Figueiredo+3280+Lagoa+Santa+MG";

// Assets Oficiais
const LOGO_SRC = "/logo-splash.png";
const IGUI_SEAL_SRC = "/igui-seal.png";
const SPLASH_DROPLETS_SRC = "/splash-droplets.png";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá! Gostaria de solicitar um orçamento e receber o catálogo de piscinas da Splash Piscinas Lagoa Santa.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// Serviços e Pilares Principais
interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  badge: string;
  icon: any;
  image: string;
  fullDesc: string;
  benefits: string[];
  ctaText: string;
  whatsappMessage: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "piscinas-fibra",
    title: "Piscinas de Fibra Splash (Exclusividade iGUi)",
    shortDesc:
      "Modelos modernos com prainha, banco anatômico, hidromassagem e 15 anos de garantia de estrutura de fábrica iGUi.",
    badge: "15 Anos de Garantia",
    icon: Waves,
    image: "/piscina-obra-7.jpeg",
    fullDesc:
      "Realize a piscina dos seus sonhos com a qualidade inquestionável da maior rede de piscinas do planeta. Os cascos de fibra Splash são fabricados com alta tecnologia em resina e gel coat isoftálico, oferecendo superfície lisa que não arranha, não prolifera fungos e proporciona instalação rápida e limpa em poucos dias.",
    benefits: [
      "Modelos compactos, médios e amplos para casas, sítios e condomínios",
      "Prainha para crianças, degraus amplos e hidromassagem relaxante",
      "15 anos de garantia na estrutura direto da fabricante iGUi",
      "Instalação ágil com acompanhamento técnico em Lagoa Santa e região",
    ],
    ctaText: "Pedir Catálogo de Modelos",
    whatsappMessage:
      "Olá! Gostaria de receber o catálogo completo com medidas e valores das Piscinas de Fibra Splash iGUi.",
  },
  {
    id: "filtragem-inteligente",
    title: "Filtros e Filtragem Ecológica Pratic iGUi",
    shortDesc:
      "Sistema de filtragem moderno que não desperdiça água para o esgoto, reduz o consumo de cloro e economiza energia.",
    badge: "Tecnologia Pratic",
    icon: Droplets,
    image: "/filtro-bomba.jpg",
    fullDesc:
      "Diga adeus ao desperdício de milhares de litros de água na retro-lavagem tradicional. O sistema de filtragem de cartucho ecológico iGUi/Splash retém partículas microscópicas, permite lavar o elemento filtrante em minutos com jato de água e mantém a piscina cristalina gastando até 70% menos energia elétrica.",
    benefits: [
      "Economia real de milhares de litros de água por mês",
      "Cartucho de poliéster lavável e reutilizável de alta durabilidade",
      "Motores silenciosos com baixo consumo na conta de luz",
      "Manuseio simplificado sem risco de errar registros",
    ],
    ctaText: "Saber Mais Sobre Filtros",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre o sistema de filtragem inteligente e ecológico da Splash/iGUi.",
  },
  {
    id: "aquecimento",
    title: "Aquecedores Solares & Trocadores de Calor",
    shortDesc:
      "Aproveite a temperatura perfeita da água durante os 365 dias do ano, curtindo sua piscina mesmo nos dias mais amenos.",
    badge: "Conforto 365 Dias",
    icon: Flame,
    image: "/aquecedor-real.jpg",
    fullDesc:
      "Lagoa Santa tem um clima maravilhoso, e com o sistema de aquecimento correto sua família aproveita a piscina de dia ou à noite, em qualquer estação do ano. Trabalhamos com placas solares de alta absorção e trocadores de calor com compressores inverter super econômicos e silenciosos.",
    benefits: [
      "Trocadores de calor elétricos inverter com alta eficiência energética",
      "Placas solares com polímeros resistentes a intempéries e raios UV",
      "Dimensionamento térmico exato para o volume de litros da sua piscina",
      "Instalação segura e assistência técnica autorizada em Lagoa Santa",
    ],
    ctaText: "Consultar Aquecimento",
    whatsappMessage:
      "Olá! Gostaria de um orçamento para aquecimento da minha piscina (solar ou trocador de calor).",
  },
  {
    id: "casa-maquinas",
    title: "Casa de Máquinas Segura & Automatizada",
    shortDesc:
      "Tecnologia embutida com tampa de segurança com trava para crianças e pets, protegendo todos os componentes.",
    badge: "Segurança Total",
    icon: Shield,
    image: "/quimicos-loja-fachada.jpg",
    fullDesc:
      "A casa de máquinas Splash iGUi foi projetada pensando na segurança da sua família e na longevidade dos equipamentos. Fabricada em fibra reforçada com ventilação estratégica e trava de segurança na tampa, evita acidentes com crianças e animais e protege bombas e quadros contra chuvas.",
    benefits: [
      "Design compacto e discreto que valoriza a área de deck",
      "Tampa segura com sistema de travamento para proteção infantil",
      "Quadro elétrico com disjuntor DR antichoque incorporado",
      "Fácil acesso para operação e manutenção preventiva",
    ],
    ctaText: "Ver Detalhes Técnicos",
    whatsappMessage:
      "Olá! Gostaria de informações sobre a casa de máquinas e comandos automáticos da Splash iGUi.",
  },
  {
    id: "iluminacao-cascatas",
    title: "Iluminação LED Subaquática & Cascatas",
    shortDesc:
      "Cascatas modernas em inox ou fibra e refletores LED RGB com controle remoto para transformar seu quintal num resort.",
    badge: "Design & Lazer",
    icon: Sun,
    image: "/cascata-real.jpg",
    fullDesc:
      "Dê vida nova e sofisticação à sua piscina. As cascatas proporcionam oxigenação constante da água e o som relaxante de queda d'água, enquanto a iluminação subaquática LED oferece dezenas de combinações de cores sincronizadas pelo controle remoto para banhos noturnos inesquecíveis.",
    benefits: [
      "Cascatas de parede e piso em aço inox 316 resistente ao cloro",
      "Refletores LED de alta potência com controle remoto sem fio",
      "Efeito cênico que valoriza o imóvel e encanta convidados",
      "Consumo elétrico ultra baixo e fácil instalação",
    ],
    ctaText: "Ver Cascatas e LED",
    whatsappMessage:
      "Olá! Gostaria de ver opções e fotos de cascatas e refletores LED para piscinas.",
  },
  {
    id: "quimicos-acessorios",
    title: "Químicos, Capas Térmicas & Manutenção",
    shortDesc:
      "Tudo o que sua piscina precisa à pronta entrega na loja de Lagoa Santa: cloro, capas, aspiradores e consultoria.",
    badge: "Pronta Entrega na Loja",
    icon: Sparkles,
    image: "/quimicos-hth-genco.jpg",
    fullDesc:
      "Mantenha a água sempre azul e saudável com o apoio da nossa loja física na Av. Acdo. Nilo Figueiredo. Dispomos de cloro de alto teor, algicidas, clarificantes, kits de teste, capas térmicas sob medida para reter o calor, capas de proteção com corda reforçada e mangueiras de aspiração.",
    benefits: [
      "Estoque completo de produtos químicos e acessórios à pronta entrega",
      "Fácil acesso e estacionamento amplo na Av. Acdo. Nilo Figueiredo, 3280",
      "Capas térmicas e de segurança confeccionadas sob medida",
      "Orientação técnica gratuita pelo WhatsApp com diagnóstico de água",
    ],
    ctaText: "Pedir Produtos na Loja",
    whatsappMessage:
      "Olá! Preciso de produtos químicos/acessórios para piscina e gostaria de consultar os valores.",
  },
];

// Depoimentos Reais de Clientes no Google (Nota 4,1 · 40 Avaliações)
const REVIEWS = [
  {
    name: "Carlos Eduardo Guimarães",
    rating: 5,
    tag: "Cliente em Lagoa Santa · Google",
    comment:
      "Experiência excelente com a Splash Lagoa Santa! Desde o primeiro atendimento na loja da Av. Nilo Figueiredo até a finalização da instalação da nossa piscina de fibra iGUi. Pessoal super atencioso, cumpriram rigorosamente o prazo e a piscina ficou perfeita. Nossa família está aproveitando todos os finais de semana!",
  },
  {
    name: "Mariana Alvarenga",
    rating: 5,
    tag: "Condomínio Versalhes · Lagoa Santa",
    comment:
      "Recomendo de olhos fechados. Estávamos em dúvida entre alvenaria e fibra, e o pessoal da Splash nos explicou todas as vantagens da fibra iGUi, principalmente o sistema de filtragem que não gasta água. A entrega foi muito rápida e o pós-venda sempre responde no WhatsApp quando temos alguma dúvida.",
  },
  {
    name: "Rodrigo Fonseca",
    rating: 5,
    tag: "Dr. Lund · Lagoa Santa",
    comment:
      "Atendimento nota 10! Loja muito bem estruturada, equipe educada e que realmente entende de piscina. Comprei os equipamentos e o sistema de aquecimento para a piscina do meu sítio e a água fica um espetáculo. Melhor preço da região e garantia de verdade.",
  },
  {
    name: "Fernanda Cristina Silva",
    rating: 5,
    tag: "Cliente Verificada no Google",
    comment:
      "Fizemos a instalação da nossa Splash com prainha e hidromassagem. Ficou maravilhosa! A equipe de escavação e assentamento trabalhou muito limpo e organizado. Parabéns à gerência e a todos os colaboradores de Lagoa Santa pelo capricho!",
  },
  {
    name: "Lucas Vasconcelos",
    rating: 5,
    tag: "Local Guide · 45 avaliações",
    comment:
      "Excelente suporte. Quando precisei de orientações sobre o tratamento inicial da água, mandei mensagem pelo WhatsApp e me orientaram com toda a paciência. Empresa séria com o respaldo da iGUi que dá muita tranquilidade.",
  },
  {
    name: "Patrícia Diniz",
    rating: 5,
    tag: "Santos Dumont · Lagoa Santa",
    comment:
      "Minha casa ganhou outro astral depois da piscina Splash! As crianças não saem mais de dentro d'água. A casa de máquinas com trava de proteção nos deixa muito tranquilos com os pets e crianças pequenas. Recomendo muito!",
  },
];

// Obras reais no portfólio Splash
const GALLERY_ITEMS = [
  {
    src: "/hero-pool.jpg",
    title: "Piscina Splash com Deck de Madeira & Iluminação",
    category: "Projetos Residenciais",
    desc: "Instalação moderna em Lagoa Santa com acabamento em deck, água cristalina e iluminação subaquática.",
  },
  {
    src: "/piscina-obra-7.jpeg",
    title: "Área Gourmet Integrada com Piscina de Fibra",
    category: "Piscinas Splash iGUi",
    desc: "Modelo espaçoso com prainha para banho de sol e hidroterapia em condomínio fechado.",
  },
  {
    src: "/piscina-obra-8.jpeg",
    title: "Complexo de Lazer Completo para Sítio",
    category: "Piscinas Familiares",
    desc: "Projeto com paisagismo, amplo espaço para natação e sistema de recirculação contínua.",
  },
  {
    src: "/piscina-obra-3.jpg",
    title: "Piscina com Prainha & Borda em Pedra São Tomé",
    category: "Linha Conforto",
    desc: "Degrau amplo para relaxamento, banho de sol molhado e segurança máxima para crianças.",
  },
  {
    src: "/cascata-real.jpg",
    title: "Cascata em Aço Inox com Jato Relaxante",
    category: "Acessórios & Design",
    desc: "Som natural de água corrente e beleza contemporânea para a sua área de lazer.",
  },
  {
    src: "/quimicos-loja-fachada.jpg",
    title: "Loja Oficial Splash Piscinas Lagoa Santa",
    category: "Showroom & Atendimento",
    desc: "Av. Acdo. Nilo Figueiredo, 3280 - Dr. Lund. Venha conhecer os modelos e tomar um café conosco.",
  },
];

// Perguntas Frequentes
const FAQS = [
  {
    question: "Qual a diferença entre a Splash Piscinas e as piscinas convencionais?",
    answer:
      "A Splash Piscinas faz parte do Grupo iGUi — a maior rede de piscinas em fibra de vidro do mundo, com presença em mais de 50 países. Isso significa que você conta com tecnologia de ponta, processos fabris certificados, 15 anos de garantia estrutural de fábrica e o exclusivo sistema de filtragem ecológica que não joga água fora na retro-lavagem.",
  },
  {
    question: "Quanto tempo demora a instalação de uma piscina de fibra Splash?",
    answer:
      "Uma das grandes vantagens da piscina de fibra Splash iGUi é a rapidez e limpeza da obra. Enquanto uma piscina tradicional de alvenaria pode levar meses com sujeira constante, a piscina de fibra geralmente é instalada e entregue pronta para uso em poucos dias (em média de 7 a 15 dias úteis, dependendo do terreno e do projeto de deck).",
  },
  {
    question: "Como funciona a garantia de 15 anos da Splash iGUi?",
    answer:
      "A estrutura de fibra de vidro da sua piscina Splash possui 15 anos de garantia de fábrica contra vazamentos e falhas estruturais, assegurada diretamente pelo Grupo iGUi. Você recebe o termo oficial de garantia e conta com a nossa loja física em Lagoa Santa para qualquer suporte necessário ao longo dos anos.",
  },
  {
    question: "Onde fica a loja da Splash Piscinas em Lagoa Santa?",
    answer:
      "Nossa loja e showroom oficial ficam na Av. Acdo. Nilo Figueiredo, 3280 - Dr. Lund, Lagoa Santa - MG (CEP 33400-000), na principal avenida comercial da cidade, com estacionamento amplo e fácil acesso. Atendemos de segunda a sexta-feira, das 08h às 18h, e aos sábados, das 08h às 13h.",
  },
  {
    question: "Vocês atendem outras cidades além de Lagoa Santa?",
    answer:
      "Sim! Atendemos com agilidade toda a cidade de Lagoa Santa (bairros urbanos, condomínios fechados e áreas rurais), além de Vespasiano, Confins, Pedro Leopoldo, São José da Lapa, Santa Luzia, Serra do Cipó e toda a Região Metropolitana de Belo Horizonte.",
  },
  {
    question: "Como faço para receber um orçamento e a visita de um consultor?",
    answer:
      "É muito simples e sem compromisso! Basta clicar em qualquer botão de WhatsApp nesta página ou ligar para (31) 97529-9630 ou (31) 3688-0808. Nossa equipe envia o catálogo completo de modelos com medidas, tira dúvidas e pode agendar uma visita técnica gratuita no seu imóvel para avaliar o espaço ideal.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [diagnosticTab, setDiagnosticTab] = useState<
    "comprar" | "aquecimento" | "filtragem" | "quimicos" | "assistencia"
  >("comprar");

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] text-[#0f172a] selection:bg-[#e6007e] selection:text-white">
      {/* 1. TOPBAR DE CREDIBILIDADE & CONTATO RÁPIDO */}
      <div className="bg-[#07172c] text-white text-[12.5px] border-b border-[#1b3a63] py-2 px-4 sm:px-6 relative z-30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Esquerda: Google Review & Autoridade iGUi */}
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#0d2342] hover:bg-[#15345f] transition-colors px-2.5 py-0.5 rounded-full text-white text-[12px] font-semibold border border-[#07c9f3]/40"
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="font-bold text-white">Google {GOOGLE_RATING}</span>
              <span className="text-cyan-200">
                ({GOOGLE_REVIEW_COUNT} avaliações reais)
              </span>
            </a>
            <span className="hidden sm:inline text-cyan-400/40">•</span>
            <span className="inline-flex items-center gap-1.5 bg-[#e6007e]/20 text-pink-300 px-2 py-0.5 rounded-full text-[11.5px] font-bold border border-[#e6007e]/30">
              <BadgeCheck size={13} className="text-[#e6007e]" />
              Exclusividade iGUi · +500 Famílias Realizadas
            </span>
            <span className="hidden lg:inline text-cyan-400/40">•</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <MapPin size={13} className="text-[#07c9f3]" />
              Av. Acdo. Nilo Figueiredo, 3280 - Dr. Lund, Lagoa Santa
            </span>
          </div>

          {/* Direita: Horários & Telefones */}
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-end text-[12px]">
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-300">
              <Clock size={13} className="text-[#07c9f3]" />
              Aberto · Fecha 18:00
            </span>
            <span className="hidden sm:inline text-cyan-400/40">•</span>
            <a
              href={`tel:${LANDLINE_DISPLAY.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
            >
              <Phone size={13} className="text-[#07c9f3]" />
              <span className="font-semibold">{LANDLINE_DISPLAY}</span>
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
            >
              <WhatsAppIcon size={14} />
              <span>{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. NAVBAR MODERNA */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 sm:h-24 flex items-center justify-between gap-4">
          {/* Logo Splash Piscinas Oficial */}
          <a
            href="#"
            className="flex items-center gap-3 group transition-transform hover:scale-[1.02]"
            aria-label="Página Inicial Splash Piscinas"
          >
            <div className="relative w-48 sm:w-64 h-16 sm:h-20">
              <Image
                src={LOGO_SRC}
                alt="Splash Piscinas Lagoa Santa — Exclusividade iGUi"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[14px] font-medium text-slate-700">
            <a
              href="#modelos"
              className="hover:text-[#e6007e] transition-colors py-2 font-semibold"
            >
              Modelos de Piscinas
            </a>
            <a
              href="#tecnologia-igui"
              className="hover:text-[#e6007e] transition-colors py-2 flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#0273f1] animate-pulse"></span>
              Exclusividade iGUi
            </a>
            <a
              href="#servicos"
              className="hover:text-[#e6007e] transition-colors py-2"
            >
              Produtos & Serviços
            </a>
            <a
              href="#galeria"
              className="hover:text-[#e6007e] transition-colors py-2"
            >
              Projetos Realizados
            </a>
            <a
              href="#depoimentos"
              className="hover:text-[#e6007e] transition-colors py-2"
            >
              Avaliações Google
            </a>
            <a
              href="#localizacao"
              className="hover:text-[#e6007e] transition-colors py-2"
            >
              Loja Lagoa Santa
            </a>
            <a
              href="#faq"
              className="hover:text-[#e6007e] transition-colors py-2"
            >
              Dúvidas
            </a>
          </nav>

          {/* Botões de Ação na Direita */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Splash Piscinas Lagoa Santa"
              className="p-2 text-slate-500 hover:text-[#e6007e] transition-colors rounded-lg hover:bg-slate-100"
            >
              <InstagramIcon size={20} />
            </a>
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Estou navegando no site e gostaria de solicitar uma proposta de investimento para uma piscina Splash."
              )}
              target="_blank"
              size="sm"
              variant="whatsapp"
            >
              <WhatsAppIcon size={16} />
              <span>Pedir Proposta WhatsApp</span>
            </GlowingButton>
          </div>

          {/* Botão Menu Mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Drawer Mobile */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl"
            >
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
                <div className="relative w-40 h-14">
                  <Image
                    src={LOGO_SRC}
                    alt="Splash Piscinas"
                    fill
                    className="object-contain object-left"
                  />
                </div>
                <span className="text-xs font-bold text-[#0273f1] bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                  Grupo iGUi
                </span>
              </div>
              <nav className="flex flex-col gap-3 text-[15px] font-medium text-slate-800">
                <a
                  href="#modelos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-100 flex items-center justify-between"
                >
                  Modelos de Piscinas de Fibra
                  <ArrowRight size={16} className="text-[#e6007e]" />
                </a>
                <a
                  href="#tecnologia-igui"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-100 flex items-center justify-between"
                >
                  Exclusividade iGUi (Garantia de 15 Anos)
                  <span className="text-xs bg-pink-100 text-[#e6007e] font-bold px-2 py-0.5 rounded-full">
                    Oficial
                  </span>
                </a>
                <a
                  href="#servicos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-100"
                >
                  Produtos, Filtros & Aquecimento
                </a>
                <a
                  href="#galeria"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-100"
                >
                  Fotos de Obras Realizadas
                </a>
                <a
                  href="#depoimentos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-100"
                >
                  Avaliações no Google (4,1 ★ · 40 clientes)
                </a>
                <a
                  href="#localizacao"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-100"
                >
                  Loja na Av. Nilo Figueiredo, 3280
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-slate-100"
                >
                  Perguntas Frequentes
                </a>

                <div className="pt-3 flex flex-col gap-2">
                  <GlowingButton
                    href={getWhatsAppUrl()}
                    target="_blank"
                    size="md"
                    variant="whatsapp"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={18} />
                    <span>WhatsApp: {PHONE_DISPLAY}</span>
                  </GlowingButton>
                  <a
                    href={`tel:${LANDLINE_DISPLAY.replace(/\D/g, "")}`}
                    className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-50"
                  >
                    <Phone size={16} className="text-[#e6007e]" />
                    Ligar no Fixo: {LANDLINE_DISPLAY}
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. HERO SECTION — VIBRANTE, ENERGÉTICA E COM IDENTIDADE SPLASH */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#07172c] via-[#0d2342] to-[#041224] text-white pt-12 pb-20 lg:pt-16 lg:pb-28">
        {/* Glow e Ondas de Fundo nas Cores do Logo */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e6007e] rounded-full blur-[160px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-[#07c9f3] rounded-full blur-[170px] translate-y-1/3 -translate-x-1/4"></div>
          <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-[#0273f1] rounded-full blur-[150px] -translate-y-1/2 opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Coluna Esquerda: Textos & Proposta de Valor */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge de Autoridade com Selo iGUi */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[13px] font-semibold text-cyan-200">
                <span className="flex h-2.5 w-2.5 rounded-full bg-[#e6007e] animate-pulse"></span>
                <span className="text-white font-bold">Exclusividade iGUi em Lagoa Santa</span>
                <span className="text-white/30">•</span>
                <span className="text-amber-300 font-bold flex items-center gap-1">
                  <Star size={13} className="fill-amber-400 text-amber-400" />
                  <span>4,1 no Google (40 avaliações)</span>
                </span>
              </div>

              {/* Logo Oficial Splash Piscinas em Destaque */}
              <div className="flex justify-center lg:justify-start pt-1">
                <div className="relative w-64 sm:w-80 h-24 sm:h-32 drop-shadow-2xl">
                  <Image
                    src={LOGO_SRC}
                    alt="Splash Piscinas — A Original (Exclusividade iGUi)"
                    fill
                    priority
                    className="object-contain object-center lg:object-left"
                  />
                </div>
              </div>

              {/* Headline H1 com as cores originais da Splash */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.12] text-white font-heading">
                Sua piscina dos sonhos está aqui com a tecnologia e garantia{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff1493] via-[#e6007e] to-[#07c9f3]">
                  iGUi
                </span>
                .
              </h1>

              {/* Subtítulo / Proposta de Valor */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Mais de <strong>500 famílias realizadas</strong> em Lagoa Santa e região. Piscinas de fibra premium com <strong>15 anos de garantia de fábrica</strong>, instalação rápida, sistema de filtragem que economiza água e assessoria técnica do início ao fim.
              </p>

              {/* Destaques Rápidos com Ícones */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-left">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
                  <div className="flex items-center gap-2 text-[#07c9f3] font-bold text-sm">
                    <Shield size={16} />
                    <span>15 Anos Garantia</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Garantia de estrutura direto da fábrica iGUi
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
                  <div className="flex items-center gap-2 text-[#ff69b4] font-bold text-sm">
                    <Sparkles size={16} />
                    <span>+500 Famílias</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Sonhos realizados em Lagoa Santa e Grande BH
                  </p>
                </div>
                <div className="col-span-2 sm:col-span-1 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xs">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <Clock size={16} />
                    <span>Instalação Rápida</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Sua piscina pronta em dias, sem meses de obra
                  </p>
                </div>
              </div>

              {/* Grupo de Botões CTA */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-3">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de receber um atendimento e pedir minha proposta de investimento para piscina Splash."
                  )}
                  target="_blank"
                  size="lg"
                  variant="primary"
                  className="font-bold text-base shadow-xl shadow-pink-600/30"
                >
                  <WhatsAppIcon size={20} />
                  <span>Peça Sua Proposta de Investimento</span>
                </GlowingButton>
                <GlowingButton
                  href="#modelos"
                  size="lg"
                  variant="outlineWhite"
                  className="font-semibold text-base"
                >
                  <Waves size={18} className="text-[#07c9f3]" />
                  <span>Ver Modelos e Medidas</span>
                </GlowingButton>
              </div>

              {/* Avaliação Social Prova */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-300">
                <div className="flex -space-x-2">
                  <span className="w-8 h-8 rounded-full bg-[#e6007e] flex items-center justify-center text-white font-bold text-xs ring-2 ring-white">
                    CG
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#07c9f3] flex items-center justify-center text-slate-900 font-bold text-xs ring-2 ring-white">
                    MA
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#0273f1] flex items-center justify-center text-white font-bold text-xs ring-2 ring-white">
                    RF
                  </span>
                  <span className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-xs ring-2 ring-white">
                    FC
                  </span>
                </div>
                <div>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-[12px] text-slate-200">
                    <span className="font-bold text-white">Nota 4,1 no Google</span> · 40 avaliações de clientes reais em Lagoa Santa
                  </p>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Imagem da Piscina com Badge iGUi */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Moldura Principal com Imagem de Piscina Cristalina de Alto Padrão */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-slate-900 group">
                  <div className="relative h-[360px] sm:h-[440px] w-full">
                    <Image
                      src="/hero-pool.jpg"
                      alt="Piscina de Fibra Splash entregue em Lagoa Santa"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041224] via-transparent to-transparent opacity-85"></div>
                  </div>

                  {/* Selo Oficial Splash Piscinas no Canto Superior Direito */}
                  <div className="absolute top-3.5 right-3.5 bg-white/95 text-slate-900 rounded-xl p-2 shadow-xl border border-white/40 backdrop-blur-xs flex items-center gap-2">
                    <div className="relative w-28 h-12">
                      <Image
                        src={LOGO_SRC}
                        alt="Splash Piscinas Lagoa Santa — Oficial"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Informações Sobrepostas na Imagem */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#07172c]/90 backdrop-blur-md border border-white/15">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#07c9f3]">
                          Lagoa Santa - MG
                        </span>
                        <h2 className="text-white font-bold text-base">
                          Piscina de Fibra com Hidro & Deck
                        </h2>
                        <p className="text-xs text-slate-300">
                          Av. Acdo. Nilo Figueiredo, 3280 · Dr. Lund
                        </p>
                      </div>
                      <a
                        href={getWhatsAppUrl("Olá! Vi a foto da piscina no site e gostaria de solicitar uma proposta de investimento.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-[#e6007e] hover:bg-[#c40065] text-white transition-colors shrink-0 shadow-md"
                        aria-label="Pedir orçamento"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SELETOR RÁPIDO DE NECESSIDADE — O QUE VOCÊ PROCURA HOJE? */}
      <section
        id="diagnostico"
        className="py-14 bg-white border-b border-slate-200 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-[#e6007e] text-xs font-bold uppercase tracking-wider mb-2 border border-pink-200">
              <Sparkles size={14} /> Atendimento Personalizado Splash
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Como podemos realizar seu projeto hoje?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Selecione o seu objetivo e fale diretamente com o consultor certo da Splash em Lagoa Santa:
            </p>
          </div>

          {/* Abas Interativas */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
            <button
              type="button"
              onClick={() => setDiagnosticTab("comprar")}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                diagnosticTab === "comprar"
                  ? "bg-[#e6007e] text-white shadow-md shadow-pink-500/25"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Waves size={16} />
              <span>Comprar Minha Piscina</span>
            </button>
            <button
              type="button"
              onClick={() => setDiagnosticTab("aquecimento")}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                diagnosticTab === "aquecimento"
                  ? "bg-[#e6007e] text-white shadow-md shadow-pink-500/25"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Flame size={16} />
              <span>Aquecer Minha Piscina</span>
            </button>
            <button
              type="button"
              onClick={() => setDiagnosticTab("filtragem")}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                diagnosticTab === "filtragem"
                  ? "bg-[#e6007e] text-white shadow-md shadow-pink-500/25"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Droplets size={16} />
              <span>Filtro Ecológico iGUi</span>
            </button>
            <button
              type="button"
              onClick={() => setDiagnosticTab("quimicos")}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                diagnosticTab === "quimicos"
                  ? "bg-[#e6007e] text-white shadow-md shadow-pink-500/25"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Sparkles size={16} />
              <span>Produtos & Tratamento</span>
            </button>
            <button
              type="button"
              onClick={() => setDiagnosticTab("assistencia")}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                diagnosticTab === "assistencia"
                  ? "bg-[#e6007e] text-white shadow-md shadow-pink-500/25"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <Wrench size={16} />
              <span>Assistência Técnica</span>
            </button>
          </div>

          {/* Painel do Diagnóstico */}
          <div className="bg-gradient-to-br from-slate-50 to-pink-50/40 border border-pink-100 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto shadow-sm">
            {diagnosticTab === "comprar" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pink-100 text-[#e6007e] text-xs font-bold">
                    <CheckCircle2 size={13} /> 15 Anos de Garantia Estrutural
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Quer instalar a piscina perfeita na sua casa ou sítio?
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Trabalhamos com os modelos originais de fibra da Splash iGUi, projetados para valorizar seu imóvel e garantir momentos inesquecíveis. Fazemos a simulação completa de investimento e enviamos o catálogo com medidas sob medida para o seu terreno.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-[#e6007e]" /> Modelos com prainha e hidro
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-[#e6007e]" /> Instalação rápida sem estresse
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-[#e6007e]" /> Visita técnica em Lagoa Santa
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-[#e6007e]" /> Garantia de fábrica da maior rede
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-4 flex flex-col gap-3 justify-center items-center text-center p-4 bg-white rounded-xl border border-pink-200 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-pink-100 text-[#e6007e] flex items-center justify-center">
                    <Waves size={24} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">
                      Catálogo & Medidas
                    </span>
                    <span className="text-xs text-slate-500">
                      Veja fotos e dimensões
                    </span>
                  </div>
                  <GlowingButton
                    href={getWhatsAppUrl(
                      "Olá! Gostaria de receber o catálogo de modelos e pedir uma proposta de investimento para instalar piscina."
                    )}
                    target="_blank"
                    size="sm"
                    variant="primary"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Ver Modelos no WhatsApp</span>
                  </GlowingButton>
                </div>
              </div>
            )}

            {diagnosticTab === "aquecimento" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                    <Flame size={13} /> Água Quentinha os 365 Dias do Ano
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Aproveite a piscina mesmo à noite ou no inverno
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Instalamos trocadores de calor elétricos inverter e placas de aquecimento solar dimensionados com precisão técnica para o tamanho da sua piscina, com máxima eficiência e economia de energia.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-amber-600" /> Trocadores silenciosos inverter
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-amber-600" /> Placas solares com proteção UV
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-amber-600" /> Capas térmicas sob medida
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-amber-600" /> Dimensionamento técnico sem custo
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-4 flex flex-col gap-3 justify-center items-center text-center p-4 bg-white rounded-xl border border-amber-200 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center">
                    <Sun size={24} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">
                      Dimensionamento Grátis
                    </span>
                    <span className="text-xs text-slate-500">
                      Solar ou Trocador de Calor
                    </span>
                  </div>
                  <GlowingButton
                    href={getWhatsAppUrl(
                      "Olá! Gostaria de uma simulação de aquecedor (solar ou elétrico) para a minha piscina."
                    )}
                    target="_blank"
                    size="sm"
                    variant="amber"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Pedir Simulação</span>
                  </GlowingButton>
                </div>
              </div>
            )}

            {diagnosticTab === "filtragem" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-100 text-[#07c9f3] text-xs font-bold">
                    <Droplets size={13} /> Sistema Pratic iGUi
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    O filtro ecológico que não joga água pelo ralo
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Ao contrário dos filtros de areia que descartam água potável a cada limpeza, o filtro de cartucho Splash iGUi permite retirar e lavar o elemento filtrante com mangueira de jardim, retendo micropartículas e mantendo a água cristalina com simplicidade.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-cyan-600" /> Retenção superior de partículas
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-cyan-600" /> Limpeza rápida sem ferramentas
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-cyan-600" /> Menor consumo elétrico
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-cyan-600" /> Peças e refis originais em Lagoa Santa
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-4 flex flex-col gap-3 justify-center items-center text-center p-4 bg-white rounded-xl border border-cyan-200 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 text-[#07c9f3] flex items-center justify-center">
                    <Droplets size={24} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">
                      Filtro Pratic iGUi
                    </span>
                    <span className="text-xs text-slate-500">
                      Conheça essa tecnologia
                    </span>
                  </div>
                  <GlowingButton
                    href={getWhatsAppUrl(
                      "Olá! Gostaria de entender mais sobre o sistema de filtragem de cartucho ecológico da Splash iGUi."
                    )}
                    target="_blank"
                    size="sm"
                    variant="cyan"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Tirar Dúvidas do Filtro</span>
                  </GlowingButton>
                </div>
              </div>
            )}

            {diagnosticTab === "quimicos" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    <Sparkles size={13} /> Loja Física na Av. Nilo Figueiredo, 3280
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Cloro, clarificantes e químicos à pronta entrega
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Encontre produtos originais com orientação especializada no balcão da loja. Se a sua piscina estiver verde ou turva, mande uma foto pelo WhatsApp que orientamos o tratamento correto sem desperdício de produto.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Pronta entrega em Lagoa Santa
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Estacionamento amplo na porta
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Diagnóstico de água gratuito por foto
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-emerald-600" /> Baldes de cloro e dosadores
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-4 flex flex-col gap-3 justify-center items-center text-center p-4 bg-white rounded-xl border border-emerald-200 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Camera size={24} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">
                      Mandar Foto da Água
                    </span>
                    <span className="text-xs text-slate-500">
                      Receba a receita em minutos
                    </span>
                  </div>
                  <GlowingButton
                    href={getWhatsAppUrl(
                      "Olá! Gostaria de consultar os produtos químicos e tirar uma dúvida sobre a água da minha piscina."
                    )}
                    target="_blank"
                    size="sm"
                    variant="whatsapp"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Mandar Mensagem</span>
                  </GlowingButton>
                </div>
              </div>
            )}

            {diagnosticTab === "assistencia" && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
                    <Wrench size={13} /> Assistência Técnica Oficial
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Manutenção, peças e suporte em Lagoa Santa
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Precisa de reparo no motor, troca de elementos filtrantes, regulagem de casa de máquinas ou assistência em refletores LED e aquecedores? Nossa equipe especializada atende com peças originais e garantia de serviço.
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-sky-600" /> Peças e refis originais iGUi
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-sky-600" /> Técnicos capacitados de fábrica
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-sky-600" /> Atendimento ágil em Lagoa Santa e região
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-sky-600" /> Revisão preventiva e corretiva
                    </li>
                  </ul>
                </div>
                <div className="md:col-span-4 flex flex-col gap-3 justify-center items-center text-center p-4 bg-white rounded-xl border border-sky-200 shadow-xs">
                  <div className="w-12 h-12 rounded-full bg-sky-100 text-[#0273f1] flex items-center justify-center">
                    <Wrench size={24} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block text-sm">
                      Falar com Técnico
                    </span>
                    <span className="text-xs text-slate-500">
                      Suporte especializado
                    </span>
                  </div>
                  <GlowingButton
                    href={getWhatsAppUrl(
                      "Olá! Preciso de assistência técnica para a minha piscina ou equipamentos em Lagoa Santa."
                    )}
                    target="_blank"
                    size="sm"
                    variant="blue"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={16} />
                    <span>Chamar Assistência</span>
                  </GlowingButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. DIFERENCIAL EXCLUSIVO — POR QUE A SPLASH iGUi É DIFERENTE */}
      <section id="tecnologia-igui" className="py-16 sm:py-24 bg-[#07172c] text-white relative overflow-hidden">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#e6007e] rounded-full blur-[160px] opacity-25 pointer-events-none"></div>
        <div className="absolute -left-20 bottom-0 w-80 h-80 bg-[#07c9f3] rounded-full blur-[140px] opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold border border-pink-500/30">
                <BadgeCheck size={14} className="text-[#e6007e]" />
                A Maior Rede de Piscinas do Mundo
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-heading leading-tight">
                A segurança e tranquilidade que só a Splash iGUi oferece para sua família
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Construir uma piscina é um investimento para a vida toda. Com a Splash Piscinas Lagoa Santa, você não corre riscos com aventureiros ou empresas sem respaldo de fábrica:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <span className="text-2xl font-black text-[#e6007e] block mb-1">
                    15 Anos
                  </span>
                  <span className="font-bold text-sm block text-white">
                    Garantia Estrutural
                  </span>
                  <p className="text-xs text-slate-300 mt-1">
                    Garantia real documentada com a chancela da fabricante iGUi.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <span className="text-2xl font-black text-[#07c9f3] block mb-1">
                    +500
                  </span>
                  <span className="font-bold text-sm block text-white">
                    Famílias Atendidas
                  </span>
                  <p className="text-xs text-slate-300 mt-1">
                    Experiência comprovada em condomínios e casas de Lagoa Santa.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <span className="text-2xl font-black text-amber-400 block mb-1">
                    4,1 ★
                  </span>
                  <span className="font-bold text-sm block text-white">
                    No Google
                  </span>
                  <p className="text-xs text-slate-300 mt-1">
                    40 avaliações autênticas destacando nosso atendimento e pontualidade.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá! Gostaria de conversar com um especialista da Splash Piscinas em Lagoa Santa."
                  )}
                  target="_blank"
                  size="md"
                  variant="primary"
                  className="font-bold shadow-lg shadow-pink-600/30"
                >
                  <WhatsAppIcon size={18} />
                  <span>Falar com Consultor Splash</span>
                </GlowingButton>
                <span className="text-xs text-slate-400">
                  Visita técnica gratuita em Lagoa Santa e condomínios vizinhos
                </span>
              </div>
            </div>

            {/* Card Visual com Selo iGUi e Destaques */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 text-slate-900 relative">
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="relative w-44 sm:w-52 h-16 sm:h-20">
                    <Image
                      src={LOGO_SRC}
                      alt="Splash Piscinas Lagoa Santa — Oficial"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-xs font-bold text-[#e6007e] bg-pink-50 px-2.5 py-1 rounded-full border border-pink-200">
                      Loja Oficial
                    </span>
                    <span className="block text-[11px] text-slate-500 mt-1">
                      Lagoa Santa - MG
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                    <CheckCircle className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <div>
                      <strong className="text-slate-900 block">Gel Coat Especial de Alto Brilho:</strong>
                      <span className="text-slate-600">Superfície ultra lisa que evita o acúmulo de sujeira e facilita a limpeza semanal.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                    <CheckCircle className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <div>
                      <strong className="text-slate-900 block">Prainha & Bancos Anatômicos:</strong>
                      <span className="text-slate-600">Perfeito para relaxar com drinks, tomar sol molhado e garantir diversão segura para as crianças.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                    <CheckCircle className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                    <div>
                      <strong className="text-slate-900 block">Casa de Máquinas com Trava de Proteção:</strong>
                      <span className="text-slate-600">Total segurança contra o acesso indevido de crianças ou animais de estimação.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                  <span className="text-xs font-semibold text-slate-500">
                    Showroom na Av. Acdo. Nilo Figueiredo, 3280 · Dr. Lund
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CATÁLOGO DE PRODUTOS & SERVIÇOS — GRID MODERNO */}
      <section
        id="servicos"
        className="py-16 sm:py-24 bg-[#f8fafc] scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#e6007e] block mb-2 font-bold">
                Pilares de Excelência Splash
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                Tudo o que você precisa para o lazer da sua família
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Da escolha do modelo ideal de piscina de fibra ao aquecimento solar, iluminação subaquática e produtos químicos à pronta entrega.
              </p>
            </div>
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Gostaria de consultar o catálogo de modelos e produtos da Splash Piscinas Lagoa Santa."
              )}
              target="_blank"
              size="md"
              variant="outlinePink"
            >
              <span>Falar no WhatsApp</span>
              <ArrowRight size={16} />
            </GlowingButton>
          </div>

          {/* Grid de Cards */}
          <div id="modelos" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 scroll-mt-24">
            {SERVICES.map((serv) => {
              const IconComp = serv.icon;
              return (
                <div
                  key={serv.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-pink-300 transition-all duration-300 flex flex-col group"
                >
                  {/* Foto de Capa do Card */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={serv.image}
                      alt={serv.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#07172c]/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20">
                      {serv.badge}
                    </div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-pink-50 text-[#e6007e] flex items-center justify-center mb-3">
                        <IconComp size={22} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#e6007e] transition-colors leading-snug">
                        {serv.title}
                      </h3>
                      <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                        {serv.shortDesc}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedService(serv)}
                        className="text-xs font-bold text-[#e6007e] hover:text-[#c40065] flex items-center gap-1 cursor-pointer"
                      >
                        Ver detalhes & benefícios
                        <ArrowRight size={14} />
                      </button>
                      <a
                        href={getWhatsAppUrl(serv.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-pink-50 text-[#e6007e] hover:bg-pink-100 transition-colors"
                        aria-label={`Orçamento de ${serv.title}`}
                      >
                        <WhatsAppIcon size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. MODAL INTERATIVO DE DETALHES DO SERVIÇO */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200 relative max-h-[90vh] flex flex-col"
            >
              {/* Header do Modal com Imagem */}
              <div className="relative h-44 w-full shrink-0">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent"></div>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
                  aria-label="Fechar modal"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-pink-300">
                    {selectedService.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Corpo do Modal */}
              <div className="p-6 overflow-y-auto space-y-4">
                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedService.fullDesc}
                </p>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                    O que está incluído & diferenciais exclusivos:
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {selectedService.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#e6007e] shrink-0 mt-0.5"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer do Modal com CTA */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Fechar
                </button>
                <GlowingButton
                  href={getWhatsAppUrl(selectedService.whatsappMessage)}
                  target="_blank"
                  size="sm"
                  variant="whatsapp"
                >
                  <WhatsAppIcon size={16} />
                  <span>{selectedService.ctaText}</span>
                </GlowingButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 8. GALERIA DE OBRAS & PROJETOS REAIS */}
      <section id="galeria" className="py-16 sm:py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e6007e] block mb-2 font-bold">
              Portfólio em Lagoa Santa e Região
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Piscinas entregues e famílias satisfeitas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Confira fotos de instalações reais da Splash Piscinas iGUi em condomínios, sítios e residências de Lagoa Santa e região metropolitana.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 bg-slate-900"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10.5px] font-bold uppercase tracking-wider text-pink-300 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs mt-1 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Gostaria de ver mais fotos de piscinas instaladas pela Splash em Lagoa Santa."
              )}
              target="_blank"
              size="md"
              variant="outlinePink"
            >
              <span>Ver Mais Fotos e Modelos no WhatsApp</span>
              <ArrowRight size={16} />
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* 9. LOJA FÍSICA NA AV. ACDO. NILO FIGUEIREDO, 3280 — DR. LUND */}
      <section
        id="localizacao"
        className="py-16 sm:py-24 bg-gradient-to-b from-[#f8fafc] to-pink-50/40 border-t border-slate-200 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Foto do Showroom Splash */}
              <div className="lg:col-span-6 space-y-3">
                <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-300 shadow-md group">
                  <Image
                    src="/quimicos-loja-fachada.jpg"
                    alt="Loja física da Splash Piscinas em Lagoa Santa na Av. Acdo. Nilo Figueiredo 3280"
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#07172c]/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20 backdrop-blur-xs flex items-center gap-1.5">
                    <BadgeCheck size={14} className="text-[#e6007e]" />
                    <span>Loja Oficial em Lagoa Santa</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-md border border-slate-200">
                    Av. Acdo. Nilo Figueiredo, 3280
                  </div>
                </div>
                <p className="text-xs text-slate-500 text-center">
                  Estoque completo de produtos químicos, filtros, acessórios e atendimento com equipe especializada iGUi.
                </p>
              </div>

              {/* Informações de Localização & Rotas */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#e6007e] block mb-1 font-bold">
                    Venha Tomar um Café Conosco
                  </span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                    Loja e Showroom Splash em Lagoa Santa
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                    Estamos localizados na principal via de acesso da cidade: <strong>Av. Acdo. Nilo Figueiredo, 3280 - Dr. Lund</strong>. Espaço amplo, estacionamento fácil na porta e uma equipe pronta para apresentar os modelos em fibra de perto.
                  </p>
                </div>

                <div className="space-y-3 text-sm text-slate-700">
                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <MapPin className="text-[#e6007e] shrink-0 mt-0.5" size={18} />
                    <div>
                      <strong className="block text-slate-900">Endereço:</strong>
                      <span>{ADDRESS_DISPLAY}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <Clock className="text-[#e6007e] shrink-0 mt-0.5" size={18} />
                    <div>
                      <strong className="block text-slate-900">
                        Horário de Funcionamento:
                      </strong>
                      <span>
                        Segunda a Sexta: 08:00 às 18:00 | Sábado: 08:00 às 13:00
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <Phone className="text-[#e6007e] shrink-0 mt-0.5" size={18} />
                    <div>
                      <strong className="block text-slate-900">
                        Contatos Oficiais:
                      </strong>
                      <span>
                        Fixo: {LANDLINE_DISPLAY} · WhatsApp: {PHONE_DISPLAY}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Botões de Rotas em 1 Clique */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <GlowingButton
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    size="md"
                    variant="primary"
                  >
                    <Navigation size={16} />
                    <span>Abrir no Google Maps</span>
                  </GlowingButton>
                  <GlowingButton
                    href={WAZE_MAPS_URL}
                    target="_blank"
                    size="md"
                    variant="outline"
                  >
                    <Compass size={16} />
                    <span>Traçar Rota no Waze</span>
                  </GlowingButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. PROVA SOCIAL — DEPOIMENTOS REAIS DO GOOGLE */}
      <section
        id="depoimentos"
        className="py-16 sm:py-24 bg-white border-t border-slate-200 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            {/* Badge Google */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200 mb-3">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400" />
                ))}
              </div>
              <span>Nota 4,1 com 40 avaliações reais no Google</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              O que dizem os clientes da Splash Lagoa Santa
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Pontualidade na entrega, qualidade da fibra iGUi e suporte de verdade em Lagoa Santa e região.
            </p>
          </div>

          {/* Grid de Depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((rev, index) => (
              <div
                key={index}
                className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={15}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                      {rev.tag}
                    </span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    “{rev.comment}”
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#e6007e] to-[#07c9f3] text-white font-bold text-xs flex items-center justify-center shrink-0">
                    {rev.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">
                      {rev.name}
                    </h3>
                    <span className="text-[11px] text-slate-500">
                      Avaliação verificada no Google
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#e6007e] hover:text-[#c40065]"
            >
              <span>Ver todas as 40 avaliações no perfil do Google</span>
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* 11. FAQ — PERGUNTAS FREQUENTES */}
      <section
        id="faq"
        className="py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200 scroll-mt-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#e6007e] block mb-2 font-bold">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
              Perguntas frequentes sobre piscinas Splash iGUi
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Respostas diretas e transparentes para você planejar a sua piscina com tranquilidade.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 font-bold text-slate-900 flex items-center justify-between gap-4 hover:bg-slate-50/70 transition-colors cursor-pointer text-sm sm:text-base"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-2.5">
                      <HelpCircle size={18} className="text-[#e6007e] shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-[#e6007e]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-5 pb-5 text-slate-600 text-sm sm:text-[14.5px] leading-relaxed border-t border-slate-100 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-pink-50 border border-pink-100 text-center">
            <h3 className="font-bold text-slate-900 text-base">
              Ainda tem alguma dúvida sobre medidas, terreno ou valores?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 max-w-lg mx-auto">
              Nossa equipe está disponível no WhatsApp agora para tirar dúvidas sem nenhum compromisso.
            </p>
            <div className="mt-4">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá! Tenho uma dúvida sobre os modelos e a instalação da piscina Splash que não encontrei no site."
                )}
                target="_blank"
                size="sm"
                variant="whatsapp"
              >
                <WhatsAppIcon size={16} />
                <span>Conversar no WhatsApp com Especialista</span>
              </GlowingButton>
            </div>
          </div>
        </div>
      </section>

      {/* 12. BANNER FINAL DE CONVERSÃO / CTA */}
      <section className="py-16 bg-gradient-to-r from-[#e6007e] via-[#c40065] to-[#07172c] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-5">
          <span className="inline-block bg-white/20 backdrop-blur-xs text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/30">
            Sua Piscina dos Sonhos Começa Aqui
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-heading leading-tight">
            Pronto para transformar a área de lazer da sua família?
          </h2>
          <p className="text-pink-100 text-sm sm:text-lg max-w-2xl mx-auto">
            Peça agora sua proposta de investimento personalizada. Garantia de 15 anos iGUi, instalação ágil e suporte permanente em Lagoa Santa.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá! Gostaria de pedir minha proposta de investimento para uma piscina Splash iGUi."
              )}
              target="_blank"
              size="lg"
              variant="whatsapp"
              className="text-base font-bold shadow-xl shadow-green-900/30"
            >
              <WhatsAppIcon size={20} />
              <span>Chamar no WhatsApp ({PHONE_DISPLAY})</span>
            </GlowingButton>
            <GlowingButton
              href={`tel:${LANDLINE_DISPLAY.replace(/\D/g, "")}`}
              size="lg"
              variant="white"
              className="text-slate-900 font-bold"
            >
              <Phone size={18} className="text-[#e6007e]" />
              <span>Ligar no Fixo: {LANDLINE_DISPLAY}</span>
            </GlowingButton>
          </div>
        </div>
      </section>

      {/* 13. FOOTER COMPLETO COM DADOS DA EMPRESA */}
      <footer className="bg-[#041224] text-slate-300 text-xs sm:text-sm border-t border-[#1b3a63] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            {/* Coluna 1: Logo & Missão */}
            <div className="lg:col-span-4 space-y-4">
              <div className="relative w-56 sm:w-64 h-20 sm:h-24">
                <Image
                  src={LOGO_SRC}
                  alt="Splash Piscinas Lagoa Santa — Oficial"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                Sua Piscina dos Sonhos Está Aqui. Loja oficial Splash Piscinas em Lagoa Santa - MG com Exclusividade iGUi. Piscinas de fibra premium, sistemas de filtragem inteligentes, aquecimento, cascatas e assistência completa para mais de 500 famílias.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#e6007e] text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram da Splash Piscinas Lagoa Santa"
                >
                  <InstagramIcon size={18} />
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 text-white flex items-center justify-center transition-colors"
                  aria-label="WhatsApp da Splash Piscinas"
                >
                  <WhatsAppIcon size={18} />
                </a>
                <a
                  href={OFFICIAL_SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-[#0273f1] text-white flex items-center justify-center transition-colors"
                  aria-label="Site Oficial Splash Piscinas"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* Coluna 2: Produtos & Serviços */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">
                Modelos & Serviços
              </h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a
                    href="#modelos"
                    className="hover:text-white transition-colors"
                  >
                    Piscinas de Fibra Splash (iGUi)
                  </a>
                </li>
                <li>
                  <a
                    href="#modelos"
                    className="hover:text-white transition-colors"
                  >
                    Modelos com Prainha e Hidro
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Filtragem Ecológica Pratic iGUi
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Aquecedores Solares e Elétricos
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Cascatas Inox e Iluminação LED
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Casa de Máquinas Segura com Trava
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Químicos e Acessórios Pronta Entrega
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Links Rápidos */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">
                Navegação
              </h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#modelos"
                    className="hover:text-white transition-colors"
                  >
                    Modelos de Piscinas
                  </a>
                </li>
                <li>
                  <a
                    href="#tecnologia-igui"
                    className="hover:text-white transition-colors"
                  >
                    Exclusividade iGUi
                  </a>
                </li>
                <li>
                  <a
                    href="#galeria"
                    className="hover:text-white transition-colors"
                  >
                    Projetos Realizados
                  </a>
                </li>
                <li>
                  <a
                    href="#depoimentos"
                    className="hover:text-white transition-colors"
                  >
                    Avaliações Google (4,1 ★)
                  </a>
                </li>
                <li>
                  <a
                    href="#localizacao"
                    className="hover:text-white transition-colors"
                  >
                    Loja Lagoa Santa
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-white transition-colors">
                    Perguntas Frequentes
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 4: Contato & Endereço */}
            <div className="lg:col-span-3 space-y-3">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">
                Endereço & Atendimento
              </h3>
              <div className="space-y-2.5 text-xs text-slate-400">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-[#07c9f3] shrink-0 mt-0.5" />
                  <span>
                    Av. Acdo. Nilo Figueiredo, 3280 - Dr. Lund, Lagoa Santa - MG, CEP 33400-000
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={15} className="text-[#07c9f3] shrink-0" />
                  <span>Fixo: {LANDLINE_DISPLAY}</span>
                </div>
                <div className="flex items-center gap-2">
                  <WhatsAppIcon size={15} className="text-emerald-400 shrink-0" />
                  <span>WhatsApp: {PHONE_DISPLAY}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={15} className="text-[#07c9f3] shrink-0" />
                  <span>Seg a Sex: 08:00 às 18:00 | Sáb: 08:00 às 13:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={15} className="text-[#07c9f3] shrink-0" />
                  <span>{EMAIL_CONTACT}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright e Assinatura */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
            <div>
              <p>
                © {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos
                reservados.
              </p>
              <p className="text-[11px] text-slate-600 mt-0.5">
                {COMPANY_FULL_NAME} • Lagoa Santa - MG · Av. Acdo. Nilo Figueiredo, 3280
              </p>
            </div>
            <div className="text-slate-400 text-xs">
              Splash Piscinas Lagoa Santa • Exclusividade iGUi
            </div>
          </div>
        </div>
      </footer>

      {/* 14. BOTÃO FLUTUANTE DE WHATSAPP COM AVISO DE RESPOSTA RÁPIDA */}
      <aside aria-label="Atendimento Rápido WhatsApp" className="fixed bottom-5 right-5 z-40 flex items-center gap-2 group">
        <a
          href={getWhatsAppUrl(
            "Olá! Estou no site da Splash Piscinas Lagoa Santa e gostaria de tirar uma dúvida pelo WhatsApp."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebd5b] text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-105"
          aria-label="Falar com especialista Splash no WhatsApp"
        >
          <WhatsAppIcon size={22} />
          <span className="hidden sm:inline font-bold text-xs tracking-wide">
            Falar no WhatsApp
          </span>
        </a>
      </aside>
    </main>
  );
}
