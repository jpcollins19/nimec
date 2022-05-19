const {
  db,
  models: { User, Client, Reference, Service, EE },
} = require("../db/index.js");

const users = [{ email: "ahoover@nimec.net", password: "lincoln" }];

const clients = [
  {
    name: "Abundant Life Assembly",
    municipalAgg: false,
    organization: "Church",
  },
  {
    name: "Arlington Heights.",
    municipalAgg: true,
    organization: "Municipality",
  },
  { name: "Amboy", municipalAgg: false, organization: "Municipality" },
  { name: "Aroma Park", municipalAgg: true, organization: "Municipality" },
  { name: "Barrington", municipalAgg: true, organization: "Municipality" },
  {
    name: "Bartlett Park District",
    municipalAgg: false,
    organization: "Park District",
  },
  { name: "Beecher", municipalAgg: true, organization: "Municipality" },
  { name: "Belvidere", municipalAgg: true, organization: "Municipality" },
  {
    name: "Belvidere Township",
    municipalAgg: true,
    organization: "Municipality",
  },
  {
    name: "Bensenville Park District",
    municipalAgg: false,
    organization: "Park District",
  },
  { name: "Bourbonnais", municipalAgg: true, organization: "Municipality" },
  { name: "Bourbonnais Library", municipalAgg: false, organization: "Library" },
  { name: "Buffalo Grove", municipalAgg: true, organization: "Municipality" },
  { name: "Bradley", municipalAgg: true, organization: "Municipality" },
  { name: "Braidwood", municipalAgg: true, organization: "Municipality" },
  { name: "Brookfield", municipalAgg: false, organization: "Municipality" },
  {
    name: "Brookfield-Riverside Water Comm.",
    municipalAgg: false,
    organization: "Water Commission",
  },
  { name: "Calumet City", municipalAgg: true, organization: "Municipality" },
  { name: "Carol Stream", municipalAgg: false, organization: "Municipality" },
  {
    name: "Carpentersville",
    municipalAgg: false,
    organization: "Municipality",
  },
  { name: "Cary", municipalAgg: false, organization: "Municipality" },
  { name: "Channahon", municipalAgg: false, organization: "Municipality" },
  { name: "Chicago Hts", municipalAgg: true, organization: "Municipality" },
  { name: "Clarendon Hills", municipalAgg: true, organization: "Municipality" },
  { name: "Coal City", municipalAgg: false, organization: "Municipality" },
  { name: "Coal City Library", municipalAgg: false, organization: "Library" },
  { name: "Countryside", municipalAgg: true, organization: "Municipality" },
  {
    name: "Countryside Fire District",
    municipalAgg: false,
    organization: "Fire District",
  },
  {
    name: "Covenant Presbyterian Church",
    municipalAgg: false,
    organization: "Church",
  },
  { name: "Crest Hill", municipalAgg: true, organization: "Municipality" },
  { name: "Crete", municipalAgg: false, organization: "Municipality" },
  { name: "Crystal Lake", municipalAgg: true, organization: "Municipality" },
  {
    name: "Da Vinci Waldorf School",
    municipalAgg: false,
    organization: "School",
  },
  { name: "Darien", municipalAgg: true, organization: "Municipality" },
  { name: "Deerfield", municipalAgg: false, organization: "Municipality" },
  { name: "Dixon", municipalAgg: false, organization: "Municipality" },
  { name: "Du-Comm", municipalAgg: false, organization: "Municipality" },
  {
    name: "Dundee Twp Park District",
    municipalAgg: false,
    organization: "Park District",
  },
  { name: "Dwight", municipalAgg: true, organization: "Municipality" },
  {
    name: "East Dundee Fire District",
    municipalAgg: false,
    organization: "Fire District",
  },
  { name: "Eisenhower Library", municipalAgg: false, organization: "Library" },
  { name: "Ela Library", municipalAgg: false, organization: "Library" },
  { name: "Elburn", municipalAgg: true, organization: "Municipality" },
  {
    name: "Elk Grove Village",
    municipalAgg: false,
    organization: "Municipality",
  },
  { name: "Elwood", municipalAgg: false, organization: "Municipality" },
  { name: "Flossmoor", municipalAgg: true, organization: "Municipality" },
  { name: "Forest Park", municipalAgg: false, organization: "Municipality" },
  {
    name: "Fountaindale Library",
    municipalAgg: false,
    organization: "Library",
  },
  {
    name: "Fox River Grove",
    municipalAgg: false,
    organization: "Municipality",
  },
  {
    name: "Fox River Grove Library",
    municipalAgg: false,
    organization: "Library",
  },
  { name: "Franklin Park", municipalAgg: true, organization: "Municipality" },
  { name: "Frankfort Library", municipalAgg: false, organization: "Library" },
  { name: "Gardner", municipalAgg: false, organization: "Municipality" },
  { name: "Gilberts", municipalAgg: false, organization: "Municipality" },
  { name: "Glen Ellyn", municipalAgg: true, organization: "Municipality" },
  { name: "Glencoe", municipalAgg: false, organization: "Municipality" },
  {
    name: "Glendale Heights",
    municipalAgg: true,
    organization: "Municipality",
  },
  { name: "Glenside Library", municipalAgg: false, organization: "Library" },
  { name: "Glenview", municipalAgg: false, organization: "Municipality" },
  { name: "Glenwood", municipalAgg: true, organization: "Municipality" },
  { name: "Grundy County", municipalAgg: false, organization: "Municipality" },
  { name: "Gurnee", municipalAgg: true, organization: "Municipality" },
  { name: "Hanover Park", municipalAgg: true, organization: "Municipality" },
  { name: "Harwood Heights", municipalAgg: true, organization: "Municipality" },
  { name: "Harvard", municipalAgg: false, organization: "Municipality" },
  {
    name: "Harvard Fire District",
    municipalAgg: false,
    organization: "Fire District",
  },
  { name: "Hazel Crest", municipalAgg: false, organization: "Municipality" },
  { name: "Highland Park", municipalAgg: false, organization: "Municipality" },
  { name: "Hinsdale", municipalAgg: false, organization: "Municipality" },
  { name: "Hoffman Estates", municipalAgg: true, organization: "Municipality" },
  { name: "Homewood", municipalAgg: false, organization: "Municipality" },
  {
    name: "Homewood-Flossmoor Park",
    municipalAgg: false,
    organization: "Park District",
  },
  { name: "Hopkins Park", municipalAgg: false, organization: "Municipality" },
  {
    name: "Indian Prairie Library",
    municipalAgg: false,
    organization: "Library",
  },
  {
    name: "Indian Trails Library",
    municipalAgg: false,
    organization: "Library",
  },
  { name: "Island Lake", municipalAgg: true, organization: "Municipality" },
  { name: "Inner City Impact", municipalAgg: false, organization: "School" },
  {
    name: "Joliet Montessori School",
    municipalAgg: false,
    organization: "School",
  },
  { name: "Itasca", municipalAgg: true, organization: "Municipality" },
  { name: "Kankakee", municipalAgg: true, organization: "Municipality" },
  { name: "Kankakee County", municipalAgg: true, organization: "Municipality" },
  {
    name: "Lake in Hills Sanitary",
    municipalAgg: false,
    organization: "Water Commission",
  },
  {
    name: "Lake Villa Library District",
    municipalAgg: false,
    organization: "Library",
  },
  {
    name: "LaGrange Library District",
    municipalAgg: false,
    organization: "Library",
  },
  { name: "Lake Barrington", municipalAgg: true, organization: "Municipality" },
  { name: "Lake Zurich", municipalAgg: true, organization: "Municipality" },
  { name: "La Grange", municipalAgg: false, organization: "Municipality" },
  { name: "La Grange Park", municipalAgg: true, organization: "Municipality" },
  {
    name: "La Grange Park Library",
    municipalAgg: false,
    organization: "Library",
  },
  {
    name: "Lake in Hills Sanitary District",
    municipalAgg: false,
    organization: "Water Commission",
  },
  { name: "LaSalle", municipalAgg: false, organization: "Municipality" },
  { name: "Lake Villa Library", municipalAgg: false, organization: "Library" },
  {
    name: "Lee County Council of Aging",
    municipalAgg: false,
    organization: "Misc",
  },
  { name: "Libertyville", municipalAgg: true, organization: "Municipality" },
  { name: "Lisle", municipalAgg: true, organization: "Municipality" },
  { name: "Lincolnwood Library", municipalAgg: false, organization: "Library" },
  {
    name: "Lisle Woodridge Fire",
    municipalAgg: false,
    organization: "Fire District",
  },
  { name: "Lockport", municipalAgg: true, organization: "Municipality" },
  {
    name: "Lockport Park District",
    municipalAgg: false,
    organization: "Park District",
  },
  { name: "Lombard", municipalAgg: true, organization: "Municipality" },
  {
    name: "Long Grove Fire District",
    municipalAgg: false,
    organization: "Fire District",
  },
  { name: "Lindenhurst", municipalAgg: false, organization: "Municipality" },
  { name: "Manhattan", municipalAgg: false, organization: "Municipality" },
  { name: "Manteno", municipalAgg: true, organization: "Municipality" },
  { name: "Marengo", municipalAgg: false, organization: "Municipality" },
  { name: "Mendota", municipalAgg: false, organization: "Municipality" },
  { name: "Minonk", municipalAgg: false, organization: "Municipality" },
  { name: "Minooka", municipalAgg: false, organization: "Municipality" },
  { name: "Mokena", municipalAgg: true, organization: "Municipality" },
  { name: "Momence", municipalAgg: true, organization: "Municipality" },
  {
    name: "Mokena Park District",
    municipalAgg: false,
    organization: "Park District",
  },
  { name: "Montgomery", municipalAgg: true, organization: "Municipality" },
  { name: "Morris", municipalAgg: true, organization: "Municipality" },
  {
    name: "Morris Fire District",
    municipalAgg: false,
    organization: "Fire District",
  },
  { name: "Morton Grove", municipalAgg: true, organization: "Municipality" },
  { name: "Mundelein", municipalAgg: true, organization: "Municipality" },
  {
    name: "Mundelein Park District",
    municipalAgg: false,
    organization: "Park District",
  },
  { name: "New Lenox", municipalAgg: false, organization: "Municipality" },
  { name: "Norridge", municipalAgg: true, organization: "Municipality" },
  { name: "North Aurora", municipalAgg: true, organization: "Municipality" },
  { name: "Northlake", municipalAgg: false, organization: "Municipality" },
  { name: "North Chicago", municipalAgg: true, organization: "Municipality" },
  {
    name: "North Riverside Library",
    municipalAgg: false,
    organization: "Library",
  },
  {
    name: "North Moraine Water District",
    municipalAgg: false,
    organization: "Water Commission",
  },
  { name: "Orland Park", municipalAgg: true, organization: "Municipality" },
  { name: "Oswego", municipalAgg: true, organization: "Municipality" },
  {
    name: "Palatine Township",
    municipalAgg: true,
    organization: "Municipality",
  },
  {
    name: "Palatine Fire District",
    municipalAgg: false,
    organization: "Fire District",
  },
  { name: "Palos Heights.", municipalAgg: false, organization: "Municipality" },
  { name: "Palos Park", municipalAgg: true, organization: "Municipality" },
  { name: "Park Forest", municipalAgg: true, organization: "Municipality" },
  { name: "Park Ridge", municipalAgg: false, organization: "Municipality" },
  { name: "Pingree Grove", municipalAgg: false, organization: "Municipality" },
  { name: "Plainfield", municipalAgg: false, organization: "Municipality" },
  { name: "Plato Academy", municipalAgg: false, organization: "School" },
  { name: "Pontiac", municipalAgg: true, organization: "Municipality" },
  { name: "Prairie Grove", municipalAgg: true, organization: "Municipality" },
  {
    name: "Park Ridge Park District",
    municipalAgg: false,
    organization: "Park District",
  },
  { name: "Pecatonica", municipalAgg: false, organization: "Municipality" },
  { name: "Redick", municipalAgg: true, organization: "Municipality" },
  { name: "River Grove", municipalAgg: false, organization: "Municipality" },
  { name: "Riverside", municipalAgg: true, organization: "Municipality" },
  { name: "Roselle Library", municipalAgg: false, organization: "Library" },
  { name: "Round Lk Beach", municipalAgg: true, organization: "Municipality" },
  { name: "Schiller Park", municipalAgg: true, organization: "Municipality" },
  { name: "Shorewood", municipalAgg: false, organization: "Municipality" },
  {
    name: "South Barrington",
    municipalAgg: true,
    organization: "Municipality",
  },
  { name: "South Elgin", municipalAgg: true, organization: "Municipality" },
  { name: "South Holland", municipalAgg: false, organization: "Municipality" },
  { name: "St. Anne", municipalAgg: true, organization: "Municipality" },
  { name: "Streamwood", municipalAgg: false, organization: "Municipality" },
  {
    name: "Sun River Terrace",
    municipalAgg: true,
    organization: "Municipality",
  },
  { name: "Sugar Grove", municipalAgg: true, organization: "Municipality" },
  {
    name: "Sugar Grove Library District",
    municipalAgg: false,
    organization: "Library",
  },
  { name: "Sycamore", municipalAgg: true, organization: "Municipality" },
  { name: "Tinley Park", municipalAgg: true, organization: "Municipality" },
  {
    name: "Tinley Park Park District",
    municipalAgg: false,
    organization: "Park District",
  },
  {
    name: "Unity Christian Academy",
    municipalAgg: false,
    organization: "School",
  },
  { name: "Villa Park", municipalAgg: false, organization: "Municipality" },
  { name: "Warrenville", municipalAgg: true, organization: "Municipality" },
  { name: "Warrenville Library", municipalAgg: false, organization: "Library" },
  { name: "Wauconda", municipalAgg: false, organization: "Municipality" },
  {
    name: "Wauconda Fire District",
    municipalAgg: false,
    organization: "Fire District",
  },
  { name: "West Chicago", municipalAgg: true, organization: "Municipality" },
  { name: "West Dundee", municipalAgg: true, organization: "Municipality" },
  { name: "Wheaton", municipalAgg: false, organization: "Municipality" },
  {
    name: "Wheaton Park District",
    municipalAgg: false,
    organization: "Park District",
  },
  { name: "Wilmette", municipalAgg: false, organization: "Municipality" },
  { name: "Wilmington", municipalAgg: false, organization: "Municipality" },
  { name: "Wood Dale", municipalAgg: false, organization: "Municipality" },
  { name: "Wood Dale Library", municipalAgg: false, organization: "Library" },
  { name: "Woodridge", municipalAgg: true, organization: "Municipality" },
  {
    name: "Woodridge Park District",
    municipalAgg: false,
    organization: "Park District",
  },
  { name: "Wonder Lake", municipalAgg: false, organization: "Municipality" },
  { name: "Worth", municipalAgg: false, organization: "Municipality" },
];

const references = [
  {
    name: "joe collins",
    title: "Public Works Director",
    quote:
      "Thanks for your work in organizing the NIMEC communities to band together. You have led us to a monumental change in how governments work for the common good, and provided a real, tangible benefit to citizens across the state. ",
  },
  {
    title: "City Administrator",
    quote:
      "NIMEC is a very professional company to work with. They walked the Village through the aggregation process and met personally with the Village along the way. Their promptness, organization and detail were exemplary.",
  },
];

const services = [
  {
    title: "Municipalities",
    synopsis:
      "NIMEC is the leading municipal aggregator of electricity in northern Illinois, having managed 100 municipal aggregations with a population base over 2,000,000. Currently, NIMEC manages more Municipal Aggregation programs than anyone else. Illinois municipalities can now negotiate lower electric rates for its residents' home bills. In the same way municipalities negotiate community-wide contracts for waste disposal or cable television, NIMEC helps communities purchase power for their residents. NIMEC's purchasing power of $150 million per year helps our members achieve aggressive rates for their residents.",
    newsletter: "newsletter goes here",
  },
  {
    title: "Commercial",
    synopsis:
      "NIMEC has been helping its members purchase power and natural gas since 2006. In addition to the 100+ municipalities in northern Illinois, NIMEC also works with Park Districts, Libraries, Churches, and School's to lower their utility costs. NIMEC's retention rate averages 99%, while growing each year. On average, NIMEC members save around 20% annually. NIMEC will work to provide those interested an overview of their current utility situation, with options to help reduce cost.",
    newsletter: "newsletter goes here",
  },
  {
    title: "Residential",
    synopsis:
      "A new opportunity has opened up for residents in Illinois.  Community Solar, which is backed and incentivized by the state of Illinois, allows for guaranteed 20% savings on the supply of your electric bill, while creating energy from a local solar field (no solar panels on property is required). Yet, the program is so popular that there is limited availability. If interested, please reach out and see what options are available. ",
    newsletter: "newsletter goes here",
  },
];

const EEs = [
  {
    name: "David Hoover",
    photo: "https://i.ytimg.com/vi/k_uZeCymShQ/maxresdefault.jpg",
    title: "Boss",
    email: "david@gmail.com",
    phone: "555-555-5555",
    synopsis:
      "David is NIMEC's Founder and Executive Director. He has consulted in the energy industry since 1992, having owned and managed Glenview Consulting Group through 2006. Glenview provided utility consulting services to 200 corporate and municipal clients. David formed NIMEC in 2006 to help his municipal clients take advantage of the savings opportunities presented through Illinois utility deregulation.\n\nDavid holds an MBA from Arizona State University and graduated cum laude with concentration in Business from the University of Colorado.",
    order: 1,
  },
  {
    name: "Adam Hoover",
    photo: "https://i.ytimg.com/vi/k_uZeCymShQ/maxresdefault.jpg",
    title: "Office Bitch",
    email: "adam@gmail.com",
    phone: "555-555-5555",
    synopsis: `Adam is a Director of Strategic Accounts at NIMEC. He has implemented municipal aggregation deals, Community Solar opportunities, as well as fixed rates with power and natural gas for Fire Districts, Park Districts, schools, and churches.\n\nPreviously Adam was a teacher in Chicago Public Schools for 10 years, as well as a head basketball coach for eight years. He graduated from Taylor University, and got his Masters from Concordia in California. He is an avid Chicago sports fan, and enjoys time with his wife Karen, and 2 yr old dog, Lincoln.`,
    order: 2,
  },
  {
    name: "Dad Chad",
    photo: "https://i.ytimg.com/vi/k_uZeCymShQ/maxresdefault.jpg",
    title: "CEO",
    email: "chad@gmail.com",
    phone: "555-555-5555",
    synopsis: `Chad enjoys long walks on the beach1`,
    order: 3,
  },
];

const syncAndSeed = async () => {
  await db.sync({ force: true });
  /////////////////////////////////////////////////////////////
  const [Hoov] = await Promise.all(
    users.map((user) =>
      User.create({
        email: user.email,
        password: user.password,
      })
    )
  );

  const [
    abundantLifeAssembly,
    arlingtonHeights,
    amboy,
    aromaPark,
    barrington,
    bartlettParkDistrict,
    beecher,
    belvidere,
    belvidereTownship,
    bensenvilleParkDistrict,
    bourbonnais,
    bourbonnaisLibrary,
    buffaloGrove,
    bradley,
    braidwood,
    brookfield,
    brookfield_riversideWaterComm,
    calumetCity,
    carolStream,
    carpentersville,
    cary,
    channahon,
    chicagoHts,
    clarendonHills,
    coalCity,
    coalCityLibrary,
    countryside,
    countrysideFireDistrict,
    covenantPresbyterianChurch,
    crestHill,
    crete,
    crystalLake,
    daVinciWaldorfSchool,
    darien,
    deerfield,
    dixon,
    du_comm,
    dundeeTwpParkDistrict,
    dwight,
    eastDundeeFireDistrict,
    eisenhowerLibrary,
    elaLibrary,
    elburn,
    elkGroveVillage,
    elwood,
    flossmoor,
    forestPark,
    fountaindaleLibrary,
    foxRiverGrove,
    foxRiverGroveLibrary,
    franklinPark,
    frankfortLibrary,
    gardner,
    gilberts,
    glenEllyn,
    glencoe,
    glendaleHeights,
    glensideLibrary,
    glenview,
    glenwood,
    grundyCounty,
    gurnee,
    hanoverPark,
    harwoodHeights,
    harvard,
    harvardFireDistrict,
    hazelCrest,
    highlandPark,
    hinsdale,
    hoffmanEstates,
    homewood,
    homewood_flossmoorPark,
    hopkinsPark,
    indianPrairieLibrary,
    indianTrailsLibrary,
    islandLake,
    innerCityImpact,
    jolietMontessoriSchool,
    itasca,
    kankakee,
    kankakeeCounty,
    lakeInHillsSanitary,
    lakeVillaLibraryDistrict,
    lagrangeLibraryDistrict,
    lakeBarrington,
    lakeZurich,
    laGrange,
    laGrangePark,
    laGrangeParkLibrary,
    lakeInHillsSanitaryDistrict,
    lasalle,
    lakeVillaLibrary,
    leeCountyCouncilOfAging,
    libertyville,
    lisle,
    lincolnwoodLibrary,
    lisleWoodridgeFire,
    lockport,
    lockportParkDistrict,
    lombard,
    longGroveFireDistrict,
    lindenhurst,
    manhattan,
    manteno,
    marengo,
    mendota,
    minonk,
    minooka,
    mokena,
    momence,
    mokenaParkDistrict,
    montgomery,
    morris,
    morrisFireDistrict,
    mortonGrove,
    mundelein,
    mundeleinParkDistrict,
    newLenox,
    norridge,
    northAurora,
    northlake,
    northChicago,
    northRiversideLibrary,
    northMoraineWaterDistrict,
    orlandPark,
    oswego,
    palatineTownship,
    palatineFireDistrict,
    palosHeights,
    palosPark,
    parkForest,
    parkRidge,
    pingreeGrove,
    plainfield,
    platoAcademy,
    pontiac,
    prairieGrove,
    parkRidgeParkDistrict,
    pecatonica,
    redick,
    riverGrove,
    riverside,
    roselleLibrary,
    roundLkBeach,
    schillerPark,
    shorewood,
    southBarrington,
    southElgin,
    southHolland,
    stAnne,
    sunRiverTerrace,
    streamwood,
    sugarGrove,
    sugarGroveLibraryDistrict,
    sycamore,
    tinleyPark,
    tinleyParkParkDistrict,
    unityChristianAcademy,
    villaPark,
    warrenville,
    warrenvilleLibrary,
    wauconda,
    waucondaFireDistrict,
    westChicago,
    westDundee,
    wheaton,
    wheatonParkDistrict,
    wilmette,
    wilmington,
    woodDale,
    woodDaleLibrary,
    woodridge,
    woodridgeParkDistrict,
    wonderLake,
    worth,
  ] = await Promise.all(
    clients.map((client) =>
      Client.create({
        name: client.name,
        municipalAgg: client.municipalAgg,
        organization: client.organization,
      })
    )
  );

  const [ref1, ref2] = await Promise.all(
    references.map((reference) =>
      Reference.create({
        name: reference.name,
        title: reference.title,
        quote: reference.quote,
      })
    )
  );

  const [municipalities, commercial, residential] = await Promise.all(
    services.map((service) =>
      Service.create({
        title: service.title,
        synopsis: service.synopsis,
        newsletter: service.newsletter,
      })
    )
  );

  const [David, Adam, Chad] = await Promise.all(
    EEs.map((ee) =>
      EE.create({
        name: ee.name,
        photo: ee.photo,
        title: ee.title,
        email: ee.email,
        phone: ee.phone,
        synopsis: ee.synopsis,
        order: ee.order,
      })
    )
  );

  ref1.clientId = abundantLifeAssembly.id;
  ref2.clientId = arlingtonHeights.id;

  await Promise.all([ref1.save(), ref2.save()]);
};

module.exports = syncAndSeed;
