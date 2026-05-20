export type SkillStatus = "complete" | "scaffold";

export type Skill = {
  name: string;
  href: string;
  long: string;
  status: SkillStatus;
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
      { name: "cam-skill", href: "https://github.com/Earth-Space-Modeling-skills/cam-skill", long: "Community Atmosphere Model (CAM)", status: "complete" },
      { name: "cesm-skill", href: "https://github.com/Earth-Space-Modeling-skills/cesm-skill", long: "Community Earth System Model (CESM) superproject", status: "scaffold" },
      { name: "e3sm-skill", href: "https://github.com/Earth-Space-Modeling-skills/e3sm-skill", long: "Energy Exascale Earth System Model (E3SM)", status: "complete" },
      { name: "noresm-skill", href: "https://github.com/Earth-Space-Modeling-skills/noresm-skill", long: "Norwegian Earth System Model (NorESM)", status: "scaffold" },
      { name: "fms-skill", href: "https://github.com/Earth-Space-Modeling-skills/fms-skill", long: "GFDL Flexible Modeling System (FMS) framework", status: "scaffold" },
    ],
  },
  {
    slug: "atmosphere",
    idx: "02",
    nm: "Atmosphere",
    short: "Atmosphere",
    dsc: "Atmospheric circulation, weather, and chemistry models.",
    skills: [
      { name: "wrf-skill", href: "https://github.com/Earth-Space-Modeling-skills/wrf-skill", long: "Weather Research and Forecasting (WRF)", status: "complete" },
      { name: "waccm-skill", href: "https://github.com/Earth-Space-Modeling-skills/waccm-skill", long: "Whole Atmosphere Community Climate Model (WACCM)", status: "scaffold" },
      { name: "waccmx-skill", href: "https://github.com/Earth-Space-Modeling-skills/waccmx-skill", long: "Extended WACCM (ionosphere/thermosphere)", status: "scaffold" },
      { name: "gfdl-fv3-skill", href: "https://github.com/Earth-Space-Modeling-skills/gfdl-fv3-skill", long: "GFDL FV3 cubed-sphere dynamical core", status: "scaffold" },
      { name: "openifs-skill", href: "https://github.com/Earth-Space-Modeling-skills/openifs-skill", long: "ECMWF OpenIFS (research/education)", status: "scaffold" },
      { name: "regcm-skill", href: "https://github.com/Earth-Space-Modeling-skills/regcm-skill", long: "ICTP Regional Climate Model", status: "scaffold" },
      { name: "geos-chem-skill", href: "https://github.com/Earth-Space-Modeling-skills/geos-chem-skill", long: "GEOS-Chem atmospheric chemistry", status: "scaffold" },
    ],
  },
  {
    slug: "land-hydrology",
    idx: "03",
    nm: "Land surface and hydrology",
    short: "Land / hydrology",
    dsc: "Land surface models and watershed hydrology.",
    skills: [
      { name: "noahmp-skill", href: "https://github.com/Earth-Space-Modeling-skills/noahmp-skill", long: "Noah-MP land surface model and HRLDAS", status: "complete" },
      { name: "ctsm-skill", href: "https://github.com/Earth-Space-Modeling-skills/ctsm-skill", long: "Community Terrestrial Systems Model (CTSM/CLM)", status: "complete" },
      { name: "jules-skill", href: "https://github.com/Earth-Space-Modeling-skills/jules-skill", long: "Joint UK Land Environment Simulator (JULES)", status: "complete" },
      { name: "summa-skill", href: "https://github.com/Earth-Space-Modeling-skills/summa-skill", long: "Structure for Unifying Multiple Modeling Alternatives (SUMMA)", status: "complete" },
      { name: "vic-skill", href: "https://github.com/Earth-Space-Modeling-skills/vic-skill", long: "Variable Infiltration Capacity (VIC) macroscale hydrologic model", status: "complete" },
      { name: "parflow-skill", href: "https://github.com/Earth-Space-Modeling-skills/parflow-skill", long: "ParFlow parallel watershed flow model", status: "complete" },
    ],
  },
  {
    slug: "ocean",
    idx: "04",
    nm: "Ocean",
    short: "Ocean",
    dsc: "Global and regional ocean circulation models.",
    skills: [
      { name: "mom6-skill", href: "https://github.com/Earth-Space-Modeling-skills/mom6-skill", long: "Modular Ocean Model 6 (MOM6)", status: "complete" },
      { name: "mitgcm-skill", href: "https://github.com/Earth-Space-Modeling-skills/mitgcm-skill", long: "MIT General Circulation Model (MITgcm)", status: "scaffold" },
      { name: "fesom2-skill", href: "https://github.com/Earth-Space-Modeling-skills/fesom2-skill", long: "FESOM2 unstructured-mesh ocean", status: "scaffold" },
      { name: "roms-skill", href: "https://github.com/Earth-Space-Modeling-skills/roms-skill", long: "Regional Ocean Modeling System (ROMS)", status: "scaffold" },
    ],
  },
  {
    slug: "sea-ice",
    idx: "05",
    nm: "Sea ice",
    short: "Sea ice",
    dsc: "Sea-ice dynamics and thermodynamics.",
    skills: [
      { name: "cice-skill", href: "https://github.com/Earth-Space-Modeling-skills/cice-skill", long: "CICE Consortium sea-ice model", status: "scaffold" },
    ],
  },
];

export type PartnerSkill = {
  name: string;
  href: string;
  long: string;
  author: string;
};

export type PartnerGroup = {
  slug: string;
  nm: string;
  dsc: string;
  skills: PartnerSkill[];
};

export const partnerGroups: PartnerGroup[] = [
  {
    slug: "helio-models",
    nm: "Heliophysics / space physics models",
    dsc: "Partner skill repos for space physics models maintained outside the org namespace.",
    skills: [
      {
        name: "laps-skill",
        href: "https://github.com/huangzesen/laps-skill",
        long: "LingTai progressive-disclosure skill for LAPS, the UCLA-Pseudo-Spectral 3D Hall-MHD Fortran code.",
        author: "@huangzesen",
      },
      {
        name: "lingtai-batsrus-skill",
        href: "https://github.com/huangzesen/lingtai-batsrus-skill",
        long: "Skill for BATS-R-US, the Block-Adaptive Tree Solar-wind Roe-type Upwind Scheme MHD solver at the core of SWMF.",
        author: "@huangzesen",
      },
    ],
  },
  {
    slug: "helio-data",
    nm: "Heliophysics observation / data access",
    dsc: "Partner repos providing MCP servers and libraries for heliophysics data archives.",
    skills: [
      {
        name: "xhelio-cdaweb",
        href: "https://github.com/huangzesen/xhelio-cdaweb",
        long: "NASA CDAWeb data access for heliophysics: MCP server + Python library.",
        author: "@huangzesen",
      },
      {
        name: "xhelio-spice",
        href: "https://github.com/huangzesen/xhelio-spice",
        long: "SPICE toolkit access for heliophysics.",
        author: "@huangzesen",
      },
      {
        name: "xhelio-pds",
        href: "https://github.com/huangzesen/xhelio-pds",
        long: "NASA PDS (Planetary Data System) access for heliophysics.",
        author: "@huangzesen",
      },
    ],
  },
];

export const ORG_HANDLE = "earth-space-agent-skills";
export const ORG_URL = "https://github.com/earth-space-agent-skills";
export const ORG_NAME = "Earth-Space-Modeling-skills";
