const requirements= [
  {
    id: "DE_TUM_MSC_CS",
    country: "Germany",
    university: "Technical University of Munich",
    program_name: "MSc in Computer Science",
    category: "MSc",
    application_deadline: "31 May (Winter)",     // typical annual deadline for international students :contentReference[oaicite:1]{index=1}
    ielts_required: "6.5 overall",
    minimum_gpa: "3.5/4.0 approx",
    scholarship_available: ["DAAD Scholarships", "TUM Excellence Scholarships"],
    application_portal: "TUMonline / Uni Assist",
    research_focus: null,
    living_cost_estimate_eur_per_year: 12000,
  },
  {
    id: "SE_KTH_MSC_CS",
    country: "Sweden",
    university: "KTH Royal Institute of Technology",
    program_name: "MSc in Computer Science",
    category: "MSc",
    application_deadline: "15 January",
    ielts_required: "6.5 overall minimum",
    minimum_gpa: "3.3–3.5/4.0 (competitive)",
    scholarship_available: ["KTH Scholarships (tuition fee)"],   // covers tuition only :contentReference[oaicite:2]{index=2}
    application_portal: "UniversityAdmissions.se",
    research_focus: null,
    living_cost_estimate_eur_per_year: 12000,   // Sweden student living ~€10k–€14k/yr
  },
  {
    id: "NL_TUDELFT_MSC_CS",
    country: "Netherlands",
    university: "TU Delft",
    program_name: "MSc in Computer Science",
    category: "MSc",
    application_deadline: "1 Dec (Scholarship) / Jan 15 (Admission)", 
    ielts_required: "6.5 overall (min 6.0 parts)",    // scholarship criteria :contentReference[oaicite:3]{index=3}
    minimum_gpa: "80% / equivalent",
    scholarship_available: ["Justus & Louise van Effen Excellence Scholarship","NL Scholarship"],
    application_portal: "TU Delft online admission",
    research_focus: null,
    living_cost_estimate_eur_per_year: 10000,
  },
  {
    id: "CH_ETH_PHD_CS",
    country: "Switzerland",
    university: "ETH Zurich",
    program_name: "PhD in Computer Science",
    category: "PhD",
    application_deadline: "30 Nov (non-Swiss Bachelor’s)", 
    ielts_required: "7.0 overall minimum",
    minimum_gpa: "No strict published minimum; competitive",
    scholarship_available: ["ETH Excellence Scholarship"],
    application_portal: "ETH eApply",
    research_focus: "Core CS, Systems, AI, Theory, HPC",
    living_cost_estimate_eur_per_year: 20730,   // approximate living & rent costs :contentReference[oaicite:4]{index=4}
  },
  {
    id: "FR_PS_SACLAY_PHD_CS",
    country: "France",
    university: "Université Paris-Saclay",
    program_name: "PhD in Computer Science",
    category: "PhD",
    application_deadline: "Varies (contact dept)",
    ielts_required: "6.5–7.0 (preferred)",
    minimum_gpa: "3.5/4.0",
    scholarship_available: ["Eiffel Excellence Scholarship"],
    application_portal: "Local university portal",
    research_focus: "Algorithms, AI, Data Science",
    living_cost_estimate_eur_per_year: 12000,
  },
  {
    id: "FI_AALTO_MSC_CS",
    country: "Finland",
    university: "Aalto University",
    program_name: "MSc in Computer, Communication & Information Sciences",
    category: "MSc",
    application_deadline: "Jan–Feb",  
    ielts_required: "6.5 overall",
    minimum_gpa: "3.4/4.0",
    scholarship_available: ["Finnish Government Scholarship Pool"],
    application_portal: "Studyinfo.fi",
    research_focus: null,
    living_cost_estimate_eur_per_year: 11000,
  },
  {
    id: "ES_UPC_PHD_CS",
    country: "Spain",
    university: "Universitat Politècnica de Catalunya",
    program_name: "PhD in Computer Architecture",
    category: "PhD",
    application_deadline: "Varies by specialization",
    ielts_required: "6.5 overall (or equivalent)",
    minimum_gpa: "3.3/4.0",
    scholarship_available: ["University-specific funding"],
    application_portal: "UPC portal",
    research_focus: "Computer Architecture, Embedded Systems",
    living_cost_estimate_eur_per_year: 10000,
  },
  {
    id: "FR_PS_SACLAY_MSC_DS",
    country: "France",
    university: "Université Paris-Saclay",
    program_name: "MSc in Data Science",
    category: "MSc",
    application_deadline: "Fixed (check official site)",
    ielts_required: "6.5",
    minimum_gpa: "3.5/4.0",
    scholarship_available: ["Eiffel Excellence Scholarship"],
    application_portal: "FranceUniversiteNumerique",
    research_focus: null,
    living_cost_estimate_eur_per_year: 12000,
  }
];

export const searchRequirements = ({ query }: { query: string }) => {
  //  find requirements with regex match of country name, university name, or program name
  const regex = new RegExp(query, "i");
  const filteredRequirements = requirements.filter((req) => {
    return (
      regex.test(req.country) ||
      regex.test(req.university) ||
      regex.test(req.category) ||
      regex.test(req.minimum_gpa)

    );
  });

  return filteredRequirements;
};