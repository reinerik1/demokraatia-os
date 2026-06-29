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
const dataNeeds = document.querySelector("#dataNeeds");
const stakeholders = document.querySelector("#stakeholders");
const conditions = document.querySelector("#conditions");
const humanCheckpoints = document.querySelector("#humanCheckpoints");
const nowImpact = document.querySelector("#nowImpact");
const midImpact = document.querySelector("#midImpact");
const longImpact = document.querySelector("#longImpact");
const checks = document.querySelector("#checks");

const examples = {
  schoolNetwork: {
    category: "Koolivõrk ja haridus",
    impact: "Väga suur",
    proposal: "Kuidas korraldada koolivõrku nii, et väiksemates piirkondades säiliks ligipääs heale haridusele, aga õpetajate puudus ja kvaliteedivahed ei süveneks?"
  },
  entrepreneurship: {
    category: "Ettevõtluse arendus",
    impact: "Suur",
    proposal: "Kuidas toetada väiksemates piirkondades ettevõtlust nii, et tekiks päris töökohad ja kohalik lisandväärtus, mitte ainult toetustest sõltuv projektimajandus?"
  }
};

const templates = {
  "Koolivõrk ja haridus": {
    title: "Koolivõrgu ja hariduse ettepanek",
    core: "Koolivõrgu otsus ei ole ainult majade sulgemise või säilitamise küsimus. See puudutab laste ligipääsu heale õpetajale, kogukonna elujõudu, õpetajate töökoormust ja riigi võimet hoida kvaliteeti igas piirkonnas.",
    pros: [
      "Võib parandada hariduse kvaliteeti, kui õpetajad, tugiteenused ja õppevahendid koonduvad tugevamatesse keskustesse.",
      "Võib vähendada olukorda, kus laps saab kehvema hariduse ainult elukoha tõttu.",
      "Võib teha õpetajate töö atraktiivsemaks, kui koormus ja tugisüsteemid on paremini korraldatud."
    ],
    cons: [
      "Kooli kadumine võib nõrgestada kohaliku kogukonna tulevikutunnet.",
      "Pikem koolitee võib mõjutada laste heaolu, huviharidust ja perede igapäevast elu.",
      "Ainult kulupõhine otsus võib jätta kvaliteedi ja kogukondliku mõju liiga kitsalt mõõdetuks."
    ],
    risks: [
      "Otsus tehakse Exceli järgi, aga lapse ja pere tegelik elukorraldus jääb nähtamatuks.",
      "Kvaliteedivõit ei realiseeru, kui õpetajate puudus jääb lahendamata.",
      "Kogukonna usaldus langeb, kui otsus tundub ülalt alla surutud."
    ],
    dataNeeds: [
      "Õpetajate puuduse ja vanusstruktuuri andmed koolide kaupa.",
      "Õpilaste liikumisaeg, transpordi kvaliteet ja mõju perepäevale.",
      "Õpitulemused, tugiteenuste kättesaadavus ja õpetajate koormus.",
      "Kooli roll kogukonna teenuste, huvitegevuse ja piirkonna atraktiivsuse hoidmisel."
    ],
    stakeholders: [
      "Õpilased ja lapsevanemad.",
      "Õpetajad, tugispetsialistid ja koolijuhid.",
      "Kohalik omavalitsus ja kogukond.",
      "Tulevased pered, kes otsustavad piirkonda jäämise või kolimise üle."
    ],
    conditions: [
      "Muudatus on mõistlik ainult siis, kui kvaliteedivõit on selgelt kirjeldatud ja mõõdetav.",
      "Transpordi, huvihariduse ja tugiteenuste lahendus peab olema enne otsust realistlik.",
      "Kogukonnale peab jääma võimalus pakkuda alternatiivseid mudeleid, mitte ainult jah või ei valik."
    ],
    humanCheckpoints: [
      "Laste heaolu ja kohaliku elu mõju peab hindama inimene, mitte ainult mudel.",
      "Kui andmed näitavad kokkuhoidu, aga kogukondlik kahju on suur, peab otsus minema avalikku arutellu.",
      "Lõplik otsustaja peab avalikult põhjendama, milliseid kompromisse ta aktsepteerib."
    ],
    now: "Kohe on vaja kaardistada tegelik probleem: kas põhimure on kvaliteet, raha, õpetajate puudus, hooned või laste arvu langus.",
    mid: "5 aasta vaates tuleb hinnata, kas õpitulemused, õpetajate järelkasv ja perede rahulolu paranesid või halvenesid.",
    long: "20 aasta vaates määrab mõju see, kas piirkond jääb elujõuliseks ja kas laps saab kvaliteetse hariduse sõltumata sünnikohast."
  },
  "Ettevõtluse arendus": {
    title: "Ettevõtluse arenduse ettepanek",
    core: "Ettevõtluse arenduse eesmärk ei peaks olema lihtsalt toetuste jagamine, vaid kohaliku võimekuse kasvatamine: inimesed, oskused, kapital, taristu, turud ja aus riskijagamine.",
    pros: [
      "Võib luua töökohti ja lisandväärtust piirkondades, kus majanduslik aktiivsus on nõrgem.",
      "Võib anda kohalikele inimestele põhjuse jääda või tagasi tulla.",
      "Võib kasvatada maksubaasi, kui toetus aitab ettevõttel päriselt iseseisvaks saada."
    ],
    cons: [
      "Toetus võib minna projektidele, mis ei jää ilma avaliku rahata püsima.",
      "Liiga üldine meede võib aidata neid, kes oleksid hakkama saanud ka ilma toetuseta.",
      "Ettevõtluse arendus ei tööta, kui tööjõu, eluaseme, transpordi või interneti probleemid jäävad lahendamata."
    ],
    risks: [
      "Tekib toetussõltuvus, mitte päris konkurentsivõime.",
      "Raha liigub tuttavatesse võrgustikesse, kui valikukriteeriumid pole läbipaistvad.",
      "Mõõdetakse kulutatud toetust, mitte loodud väärtust."
    ],
    dataNeeds: [
      "Piirkonna tööjõu, oskuste ja palgataseme andmed.",
      "Taristu seis: transport, internet, energia, ruumid ja eluasemed.",
      "Ettevõtete ellujäämine 3 ja 5 aasta järel.",
      "Mitu eurot lisandväärtust või maksutulu tekib iga avaliku euro kohta."
    ],
    stakeholders: [
      "Kohalikud ettevõtjad ja alustajad.",
      "Töötajad, õppurid ja tagasi tulla soovivad inimesed.",
      "Kohalik omavalitsus ja arenduskeskused.",
      "Maksumaksja, kes kannab meetme kulu."
    ],
    conditions: [
      "Toetus peab olema seotud mõõdetava tulemusega, mitte ainult kuludokumendiga.",
      "Eelis peaks olema projektidel, mis kasvatavad kohalikku võimekust ka pärast toetuse lõppu.",
      "Valikukriteeriumid, hindajad ja tulemused peavad olema avalikult jälgitavad."
    ],
    humanCheckpoints: [
      "Kohalikud ettevõtjad peavad saama öelda, milline takistus päriselt pidurdab kasvu.",
      "Kui toetus loob eelise ühele grupile, peab inimene hindama õiglust ja turumoonutust.",
      "Lõplik otsustaja peab avalikult näitama, miks valitud meede on parem kui taristu, koolituse või maksureegli muutmine."
    ],
    now: "Kohe tuleb eristada, kas probleem on kapitali puudus, oskuste puudus, nõrk taristu, väike turg või ebakindel regulatsioon.",
    mid: "5 aasta vaates peab nägema, kas tekkisid püsivad ettevõtted, töökohad ja oskused, mitte ainult ajutised projektid.",
    long: "20 aasta vaates on eesmärk piirkonna majanduslik iseseisvus: vähem sõltuvust toetustest ja rohkem kohalikku lisandväärtust."
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

  resultTitle.textContent = data.title;
  reviewStatus.textContent = needsReview ? "Vajab kollektiivset kontrolli" : "Sobib esialgseks analüüsiks";
  reviewStatus.classList.toggle("ok", !needsReview);
  coreProblem.textContent = `${data.core} Sisend: ${proposal.value.trim()}`;

  fillList(pros, data.pros);
  fillList(cons, data.cons);
  fillList(risks, data.risks);
  fillList(dataNeeds, data.dataNeeds);
  fillList(stakeholders, data.stakeholders);
  fillList(conditions, data.conditions);
  fillList(humanCheckpoints, data.humanCheckpoints);

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

document.querySelectorAll("[data-example]").forEach((button) => {
  button.addEventListener("click", () => {
    const selectedExample = examples[button.dataset.example];
    proposal.value = selectedExample.proposal;
    category.value = selectedExample.category;
    impact.value = selectedExample.impact;
    updateCard();
    document.querySelector(".workspace").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  updateCard();
});

updateCard();
