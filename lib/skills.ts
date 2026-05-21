export type SkillStatus = "complete" | "scaffold";

export type SkillMaintainer = {
  name: string;
  github?: string;
};

export type Skill = {
  name: string;
  href: string;
  long: string;
  status: SkillStatus;
  maintainer?: SkillMaintainer;
};

export type SkillGroup = {
  slug: string;
  idx: string;
  nm: string;
  short: string;
  dsc: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    slug: "earth-system",
    idx: "01",
    nm: "Earth-system / coupled",
    short: "Earth-system",
    dsc: "Coupled Earth and climate system models.",
    skills: [
      { name: "cam-skill", href: "https://github.com/earth-space-agent-skills/cam-skill", long: "Community Atmosphere Model (CAM)", status: "complete", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "cesm-skill", href: "https://github.com/earth-space-agent-skills/cesm-skill", long: "Community Earth System Model (CESM) superproject", status: "scaffold", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "e3sm-skill", href: "https://github.com/earth-space-agent-skills/e3sm-skill", long: "Energy Exascale Earth System Model (E3SM)", status: "complete", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "noresm-skill", href: "https://github.com/earth-space-agent-skills/noresm-skill", long: "Norwegian Earth System Model (NorESM)", status: "scaffold", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "fms-skill", href: "https://github.com/earth-space-agent-skills/fms-skill", long: "GFDL Flexible Modeling System (FMS) framework", status: "scaffold", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "ESFlow preprint", href: "https://egusphere.copernicus.org/preprints/2026/egusphere-2026-2237/", long: "module-grounded agentic AI framework for complex Earth system model analysis (Tian Zhou et al., 2026)", status: "complete", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "ESFlow Zenodo record", href: "https://zenodo.org/records/19350842", long: "source code, sample data, and benchmark outputs for ESFlow", status: "complete", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
    ],
  },
  {
    slug: "atmosphere",
    idx: "02",
    nm: "Atmosphere",
    short: "Atmosphere",
    dsc: "Atmospheric circulation, weather, and chemistry models.",
    skills: [
      { name: "wrf-skill", href: "https://github.com/earth-space-agent-skills/wrf-skill", long: "Weather Research and Forecasting (WRF)", status: "complete", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "waccm-skill", href: "https://github.com/earth-space-agent-skills/waccm-skill", long: "Whole Atmosphere Community Climate Model (WACCM)", status: "scaffold", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "waccmx-skill", href: "https://github.com/earth-space-agent-skills/waccmx-skill", long: "Extended WACCM (ionosphere/thermosphere)", status: "scaffold", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "gfdl-fv3-skill", href: "https://github.com/earth-space-agent-skills/gfdl-fv3-skill", long: "GFDL FV3 cubed-sphere dynamical core", status: "scaffold", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "openifs-skill", href: "https://github.com/earth-space-agent-skills/openifs-skill", long: "ECMWF OpenIFS (research/education)", status: "scaffold", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "regcm-skill", href: "https://github.com/earth-space-agent-skills/regcm-skill", long: "ICTP Regional Climate Model", status: "scaffold", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "geos-chem-skill", href: "https://github.com/earth-space-agent-skills/geos-chem-skill", long: "GEOS-Chem atmospheric chemistry", status: "scaffold", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
    ],
  },
  {
    slug: "land-hydrology",
    idx: "03",
    nm: "Land surface and hydrology",
    short: "Land / hydrology",
    dsc: "Land surface models and watershed hydrology.",
    skills: [
      { name: "noahmp-skill", href: "https://github.com/earth-space-agent-skills/noahmp-skill", long: "Noah-MP land surface model and HRLDAS", status: "complete", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "ctsm-skill", href: "https://github.com/earth-space-agent-skills/ctsm-skill", long: "Community Terrestrial Systems Model (CTSM/CLM)", status: "complete", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "jules-skill", href: "https://github.com/earth-space-agent-skills/jules-skill", long: "Joint UK Land Environment Simulator (JULES)", status: "complete", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "summa-skill", href: "https://github.com/earth-space-agent-skills/summa-skill", long: "Structure for Unifying Multiple Modeling Alternatives (SUMMA)", status: "complete", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "vic-skill", href: "https://github.com/earth-space-agent-skills/vic-skill", long: "Variable Infiltration Capacity (VIC) macroscale hydrologic model", status: "complete", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "parflow-skill", href: "https://github.com/earth-space-agent-skills/parflow-skill", long: "ParFlow parallel watershed flow model", status: "complete", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
    ],
  },
  {
    slug: "ocean",
    idx: "04",
    nm: "Ocean",
    short: "Ocean",
    dsc: "Global and regional ocean circulation models.",
    skills: [
      { name: "mom6-skill", href: "https://github.com/earth-space-agent-skills/mom6-skill", long: "Modular Ocean Model 6 (MOM6)", status: "complete", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "mitgcm-skill", href: "https://github.com/earth-space-agent-skills/mitgcm-skill", long: "MIT General Circulation Model (MITgcm)", status: "scaffold", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "fesom2-skill", href: "https://github.com/earth-space-agent-skills/fesom2-skill", long: "FESOM2 unstructured-mesh ocean", status: "scaffold", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
      { name: "roms-skill", href: "https://github.com/earth-space-agent-skills/roms-skill", long: "Regional Ocean Modeling System (ROMS)", status: "scaffold", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
    ],
  },
  {
    slug: "sea-ice",
    idx: "05",
    nm: "Sea ice",
    short: "Sea ice",
    dsc: "Sea-ice dynamics and thermodynamics.",
    skills: [
      { name: "cice-skill", href: "https://github.com/earth-space-agent-skills/cice-skill", long: "CICE Consortium sea-ice model", status: "scaffold", maintainer: { name: "Koutian Wu", github: "ktwu01" } },
    ],
  },
  {
    slug: "solid-earth",
    idx: "06",
    nm: "Solid Earth / finite fault",
    short: "Solid Earth",
    dsc: "Earthquake source and finite-fault modeling skill packages.",
    skills: [
      { name: "wasp-finitefault-skill", href: "https://github.com/liuwei1997/wasp-finitefault-skill", long: "WASP finite-fault source inversion skill package", status: "complete", maintainer: { name: "Liuwei Xu", github: "liuwei1997" } },
    ],
  },
  {
    slug: "heliophysics-models",
    idx: "07",
    nm: "Heliophysics / space physics models",
    short: "Heliophysics models",
    dsc: "Space-plasma and solar-wind models maintained alongside the core org.",
    skills: [
      { name: "laps-skill",            href: "https://github.com/huangzesen/laps-skill",            long: "LAPS, the UCLA-Pseudo-Spectral 3D Hall-MHD Fortran code (LingTai skill)", status: "complete", maintainer: { name: "Zesen Huang", github: "huangzesen" } },
      { name: "LAPS",                  href: "https://github.com/chenshihelio/LAPS",                long: "UCLA-Pseudo-Spectral 3D Hall-MHD Fortran code upstream repository",       status: "complete" },
      { name: "lingtai-batsrus-skill", href: "https://github.com/huangzesen/lingtai-batsrus-skill", long: "BATS-R-US, the Block-Adaptive Tree Solar-wind Roe-type Upwind Scheme MHD solver at the core of SWMF", status: "complete", maintainer: { name: "Zesen Huang", github: "huangzesen" } },
    ],
  },
  {
    slug: "heliophysics-data",
    idx: "08",
    nm: "Heliophysics observation / data access",
    short: "Heliophysics data",
    dsc: "MCP servers and Python libraries for heliophysics data archives.",
    skills: [
      { name: "xhelio-cdaweb", href: "https://github.com/huangzesen/xhelio-cdaweb", long: "NASA CDAWeb data access for heliophysics: MCP server + Python library", status: "complete", maintainer: { name: "Zesen Huang", github: "huangzesen" } },
      { name: "xhelio-spice",  href: "https://github.com/huangzesen/xhelio-spice",  long: "SPICE toolkit access for heliophysics",                                    status: "complete", maintainer: { name: "Zesen Huang", github: "huangzesen" } },
      { name: "xhelio-pds",    href: "https://github.com/huangzesen/xhelio-pds",    long: "NASA PDS (Planetary Data System) access for heliophysics",                 status: "complete", maintainer: { name: "Zesen Huang", github: "huangzesen" } },
    ],
  },
];

// Partner skill repos are folded into skillGroups above as additional domain groups.
// /#partners is now a People grid.

export type PersonRole = "science" | "executive" | "scholars";

export type Person = {
  name: string;
  affiliation: string;
  role: PersonRole;
  author?: boolean;
  note?: string;
  github?: string;
  link?: string;     // homepage / Google Scholar / personal site
  initials?: string; // portrait initials (auto-derived if omitted)
  gradient?: string; // CSS background for the gradient portrait
};

// Gradient palette borrowed from ScienceIntelligence/sci_intelligence_homepage
// (supabase/seed.ts), kept as plain CSS so we don't pull in their stack.
const GRAD_A = "linear-gradient(135deg, #eaf0f7 0%, #b8cbe0 45%, #2f3c52 110%)";
const GRAD_B = "linear-gradient(135deg, #e4ecf5 0%, #a8bdd6 45%, #27344a 110%)";
const GRAD_C = "linear-gradient(135deg, #f1f5fb 0%, #c9d8ea 45%, #3a4b64 110%)";
const GRAD_D = "linear-gradient(135deg, #ecf1f8 0%, #d6dfeb 45%, #445773 110%)";
const GRAD_E = "linear-gradient(45deg,  #eaf0f7 0%, #b8cbe0 45%, #2f3c52 110%)";
const GRAD_F = "linear-gradient(165deg, #eaf0f7 0%, #b8cbe0 45%, #2f3c52 110%)";
const GRAD_G = "linear-gradient(105deg, #dfe8f3 0%, #96adc9 45%, #1f2a3e 110%)";
const GRAD_H = "linear-gradient(165deg, #e4ecf5 0%, #a8bdd6 45%, #27344a 110%)";

export const people: Person[] = [
  // Scientific Committee
  { name: "Marco Velli",     affiliation: "Professor · UCLA",              role: "science", initials: "MV", gradient: GRAD_A },
  { name: "Chuanfei Dong",   affiliation: "Professor · Boston University", role: "science", initials: "CD", gradient: GRAD_B },

  // Executive Committee
  { name: "Koutian Wu",      affiliation: "PhD Student · UT Austin",       role: "executive", author: true, github: "ktwu01",     link: "https://scholar.google.com/citations?user=s9w1k-cAAAAJ&hl=en", initials: "KW", gradient: GRAD_H },
  { name: "Zesen Huang",     affiliation: "Postdoc · UCLA",                role: "executive", author: true, note: "corresponding", github: "huangzesen",                                                  initials: "ZH", gradient: GRAD_D },

  // Scholars
  { name: "Weihao Liu",      affiliation: "PhD Candidate · UMich",         role: "scholars", author: true,                                                                                                       initials: "WL", gradient: GRAD_E },
  { name: "Liuwei Xu",       affiliation: "UCLA",                          role: "scholars", github: "liuwei1997",                                                                                              initials: "LX", gradient: GRAD_F },
  { name: "Hejia Geng",      affiliation: "Researcher · Oxford",           role: "scholars",                       link: "https://scholar.google.com/citations?hl=en&user=ameiXi0AAAAJ",                       initials: "HG", gradient: GRAD_B },
  { name: "Jiachen Liu",     affiliation: "Meta",                          role: "scholars",                                                                                                                    initials: "JL", gradient: GRAD_G },
  { name: "Zigong Xu",       affiliation: "",                              role: "scholars",                                                                                                                    initials: "ZX", gradient: GRAD_C },
  { name: "Yuhan Wang",      affiliation: "ETH Zürich",                    role: "scholars",                                                                                                                    initials: "YW", gradient: GRAD_A },
  { name: "Liting Mai",      affiliation: "UIUC",                          role: "scholars",                                                                                                                    initials: "LM", gradient: GRAD_D },
];

export const ROLE_SECTIONS: {
  role: PersonRole;
  idx: string;
  label: string;
  eyebrow: string;
  lede: string;
}[] = [
  {
    role: "science",
    idx: "01",
    label: "Scientific Committee",
    eyebrow: "§ Scientific Committee",
    lede: "Faculty advisors and principal investigators whose groups anchor the research agenda.",
  },
  {
    role: "executive",
    idx: "02",
    label: "Executive Committee",
    eyebrow: "§ Executive Committee",
    lede: "Day-to-day operations: releases, issue triage, docs, partner outreach, funder relations, and research-integrity review. The committee reports to the community.",
  },
  {
    role: "scholars",
    idx: "03",
    label: "Scholars",
    eyebrow: "§ Scholars",
    lede: "Researchers contributing code, papers, knowledge units, and evaluation tasks. Contribution is the organizing principle.",
  },
];

export const ORG_HANDLE = "earth-space-agent-skills";
export const ORG_URL = "https://github.com/earth-space-agent-skills";
export const ORG_NAME = "Earth-Space-Modeling-skills";
