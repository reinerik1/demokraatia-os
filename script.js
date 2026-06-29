const form = document.querySelector("#decisionForm");
const proposal = document.querySelector("#proposal");
const category = document.querySelector("#category");
const impact = document.querySelector("#impact");
const resultTitle = document.querySelector("#resultTitle");
const reviewStatus = document.querySelector("#reviewStatus");
const coreProblem = document.querySelector("#coreProblem");

const pros = document.querySelector("#pros");
const cons = document.querySelector("#cons");
const risks = document.querySelector("#risks");
const nowImpact = document.querySelector("#nowImpact");
const midImpact = document.querySelector("#midImpact");
const longImpact = document.querySelector("#longImpact");
const checks = document.querySelector("#checks");

const templates = {
  "Regionaalpoliitika": {
    pros: [
      "Võib tugevdada töökohtade loomist väljaspool suuri keskusi.",
      "Aitab vähendada piirkondlikku ebavõrdsust.",
      "Annab kohalikele inimestele rohkem võimalusi ettevõtlusega alustada."
    ],
    cons: [
      "Maksusoodustus võib vähendada riigi tulusid, kui mõju ei ole mõõdetav.",
      "Soodustus võib minna ettevõtetele, kes oleksid tegutsenud ka ilma toetuseta.",
      "Piirkondade piiritlemine võib tekitada vaidlusi ja ebaõiglust."
    ],
    risks: [
      "Meetme kuritarvitamine fiktiivse asukoha kaudu.",
      "Liiga keeruline bürokraatia väikestele ettevõtjatele.",
      "Poliitiline surve jagada toetust nähtavuse, mitte mõju järgi."
    ],
    now: "Vajab kulude, sihtrühma ja kontrollimehhanismi täpsustamist.",
    mid: "Edu korral võib paraneda kohalike töökohtade arv ja teenuste kättesaadavus.",
    long: "Püsiv mõju sõltub sellest, kas piirkondades tekib iseseisev ettevõtluskeskkond, mitte ainult toetustest sõltuv mudel."
  },
  "Haridus": {
    pros: [
      "Võib tõsta oskuste taset ja vähendada tulevast ebavõrdsust.",
      "Haridusinvesteeringutel on tugev pikaajaline mõju.",
      "Aitab kohanduda tööturu muutustega."
    ],
    cons: [
      "Tulemused ilmnevad aeglaselt ja neid on raske ühe valimistsükli jooksul näidata.",
      "Halvasti sihitud meede võib kasvatada halduskulu.",
      "Õpetajate ja koolide koormus võib suureneda."
    ],
    risks: [
      "Reform tehakse ilma õpetajate tegeliku sisendita.",
      "Mõõdikud muutuvad liiga kitsaks.",
      "Nõrgemad piirkonnad ei saa piisavalt tuge rakendamiseks."
    ],
    now: "Vajab selget sihtrühma, mõõdikuid ja õpetajate kaasamist.",
    mid: "Võib parandada õpitulemusi ja vähendada koolide vahelist lõhet.",
    long: "Mõju võib avalduda tootlikkuses, tervises, sissetulekutes ja kodanikuaktiivsuses."
  },
  "Tervishoid": {
    pros: [
      "Võib parandada ligipääsu abile ja ennetada raskemaid haigusi.",
      "Varasem sekkumine võib vähendada tulevasi kulusid.",
      "Tugevdab inimeste turvatunnet."
    ],
    cons: [
      "Nõuab püsivat rahastust, mitte ühekordset kampaaniat.",
      "Tööjõupuudus võib piirata mõju.",
      "Prioriteetide seadmine võib olla ühiskondlikult tundlik."
    ],
    risks: [
      "Teenuse lubamine ilma tegeliku võimekuseta.",
      "Ebavõrdne ligipääs piirkondade vahel.",
      "Andmekaitse ja usalduse probleemid."
    ],
    now: "Vajab personali, raha ja ligipääsu tegeliku pudelikaela kaardistamist.",
    mid: "Võib vähendada ravijärjekordi ja parandada ennetust.",
    long: "Võib kasvatada tervena elatud aastaid ja vähendada sotsiaalkulusid."
  },
  "Maksud ja eelarve": {
    pros: [
      "Võib muuta süsteemi õiglasemaks või lihtsamaks.",
      "Selge rahastus aitab vältida katteta lubadusi.",
      "Eelarvemõju on võimalik läbipaistvalt modelleerida."
    ],
    cons: [
      "Maksumuutused võivad tekitada ootamatuid käitumismõjusid.",
      "Lühiajaline populaarsus võib varjata pikaajalist kulu.",
      "Mõju eri sissetulekugruppidele võib olla ebaühtlane."
    ],
    risks: [
      "Tuluprognoosid on liiga optimistlikud.",
      "Erandid muudavad süsteemi keeruliseks.",
      "Koormus nihkub vaiksematele ühiskonnagruppidele."
    ],
    now: "Vajab realistlikku tulude-kulude hinnangut.",
    mid: "Võib mõjutada investeeringuid, tarbimist ja riigi teenuste kvaliteeti.",
    long: "Oluline on võlakoormus, maksubaasi püsimine ja põlvkondadevaheline õiglus."
  },
  "Keskkond": {
    pros: [
      "Võib vähendada tulevasi kahjusid ja terviseriske.",
      "Annab ettevõtetele selgema suuna investeeringuteks.",
      "Looduskeskkonna hoidmine toetab elukvaliteeti."
    ],
    cons: [
      "Üleminekukulud võivad tabada osa inimesi või ettevõtteid järsult.",
      "Mõju võib olla väike, kui meede on halvasti sihitud.",
      "Liigne keerukus võib vähendada avalikku toetust."
    ],
    risks: [
      "Kulud ja kasud jaotuvad ebaõiglaselt.",
      "Rohepesu ilma mõõdetava mõjuta.",
      "Piirkondlikud eripärad jäävad arvestamata."
    ],
    now: "Vajab mõju, kulude ja kompensatsioonide selget hindamist.",
    mid: "Võib muuta investeeringuid ja tarbimiskäitumist.",
    long: "Peamine küsimus on, kas meede vähendab päriselt keskkonnakahju ja tulevasi kulusid."
  },
  "Julgeolek": {
    pros: [
      "Võib tõsta kriisivalmidust ja ühiskonna vastupidavust.",
      "Selge riskihinnang aitab ressursse paremini jagada.",
      "Tugevdab inimeste valmisolekut ja usaldust."
    ],
    cons: [
      "Võib piirata õigusi, kui kontrollid on nõrgad.",
      "Kulud võivad tõrjuda teisi olulisi valdkondi.",
      "Hirmupõhine kommunikatsioon võib moonutada arutelu."
    ],
    risks: [
      "Erakorralised meetmed muutuvad püsivaks.",
      "Läbipaistvus väheneb julgeoleku ettekäändel.",
      "Avalikkuse usaldus langeb, kui põhjendused on varjatud."
    ],
    now: "Vajab ohu, vajalikkuse ja proportsionaalsuse kontrolli.",
    mid: "Võib parandada valmisolekut, kui rakendamine on realistlik.",
    long: "Peab hoidma tasakaalu turvalisuse, vabaduste ja demokraatliku kontrolli vahel."
  }
};

function fillList(element, items) {
  element.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  });
}

function updateCard() {
  const selected = category.value;
  const data = templates[selected];
  const chosenFilters = [...document.querySelectorAll("input[type='checkbox']:checked")].map((item) => item.value);
  const needsReview = impact.value === "Suur" || impact.value === "Väga suur" || chosenFilters.length < 4;

  resultTitle.textContent = `${selected} ettepanek`;
  reviewStatus.textContent = needsReview ? "Vajab lisakontrolli" : "Esialgu piisav analüüs";
  reviewStatus.classList.toggle("ok", !needsReview);
  coreProblem.textContent = `${proposal.value.trim()} Süsteemi ülesanne on eristada soovitud eesmärk, võimalikud kõrvalmõjud ja otsuse tingimused.`;

  fillList(pros, data.pros);
  fillList(cons, data.cons);
  fillList(risks, data.risks);

  nowImpact.textContent = data.now;
  midImpact.textContent = data.mid;
  longImpact.textContent = data.long;

  checks.innerHTML = "";
  chosenFilters.forEach((filter) => {
    const div = document.createElement("div");
    div.className = "check";
    div.textContent = filter;
    checks.appendChild(div);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  updateCard();
});

updateCard();
