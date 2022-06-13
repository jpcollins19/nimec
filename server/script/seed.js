const {
  db,
  models: { User, Client, Reference, Service, EE, FAQ, Mission, Savings },
} = require("../db/index.js");

const users = [{ email: "ahoover@nimec.net", password: "lincoln" }];

const clients = [
  {
    name: "Abundant Life Assembly",
    municipalAgg: false,
    organization: "Misc",
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
    organization: "Misc",
  },
  { name: "Crest Hill", municipalAgg: true, organization: "Municipality" },
  { name: "Crete", municipalAgg: false, organization: "Municipality" },
  { name: "Crystal Lake", municipalAgg: true, organization: "Municipality" },
  {
    name: "Da Vinci Waldorf School",
    municipalAgg: false,
    organization: "Misc",
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
  { name: "Inner City Impact", municipalAgg: false, organization: "Misc" },
  {
    name: "Joliet Montessori School",
    municipalAgg: false,
    organization: "Misc",
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
  { name: "Plato Academy", municipalAgg: false, organization: "Misc" },
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
    organization: "Misc",
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
    title: "Public Works Director",
    quote:
      "Thanks for your work in organizing the NIMEC communities to band together. You have led us to a monumental change in how governments work for the common good, and provided a real, tangible benefit to citizens across the state.",
  },
  {
    title: "Finance Director",
    quote:
      "Once approved by voters, NIMEC provided a sample Plan of Operation and Governance, managed the bid process, and assisted in the negotiation of the contract. There were a few small glitches, as with any new program, and NIMEC was ready, willing, and more than able to handle those as they came up. Overall, NIMEC was an important asset to have throughout the entire process.",
  },
  {
    title: "City Administrator",
    quote:
      "NIMEC is a very professional company to work with. They walked the Village through the aggregation process and met personally with the Village along the way. Their promptness, organization and detail were exemplary.",
  },
  {
    title: "City Administrator",
    quote:
      "We had a great experience with NIMEC. They first introduced us to aggregation, then led us through the entire process. Our legal costs were kept to a minimum by using NIMEC's standardized documents. NIMEC saved our staff significant amounts of time and I'd definitely use them again.",
  },
  {
    title: "City Administrator",
    quote:
      "The experience working with NIMEC has been smooth sailing; the knowledge base of electric aggregation that was shared with the City was instrumental to the program's success. As this was a big change for the community and a large-scale program, NIMEC was up to the task at hand and always went above and beyond to assist not only City Staff but also residents that inquired about the program.",
  },
  {
    title: "Mayor",
    quote:
      "When considering the intimidating language in the state statute, the support and professional assistance received from NIMEC made the Electric Aggregation process simple. From the 'boilerplate' forms provided to the personal attendance by a professional consultant at our Public Hearings, NIMEC was there to walk the City Council through the process. In these tough economic times, NIMEC is one of the best things to happen to the citizens of the City of Morris in a long, long time!",
  },
  {
    title: "Mayor",
    quote:
      "NIMEC has been a tremendous resource in passing the electric aggregation referendum. His assistance and knowledge during this process has been invaluable. I would not hesitate in using NIMEC in the future if considering electrical aggregation.",
  },
];

const services = [
  {
    service: "Municipalities",
    date: "Spring 2022",
    title: "Go Green & Reduce Costs",
    synopsis:
      "NIMEC is the leading municipal aggregator of electricity in northern Illinois, having managed 100 municipal aggregations with a population base over 2,000,000. Currently, NIMEC manages more Municipal Aggregation programs than anyone else. Illinois municipalities can now negotiate lower electric rates for its residents' home bills. In the same way municipalities negotiate community-wide contracts for waste disposal or cable television, NIMEC helps communities purchase power for their residents. NIMEC's purchasing power of $150 million per year helps our members achieve aggressive rates for their residents.",
    // newsletter:
    //   "As rising prices with electricity and natural gas spread throughout the world, many are looking for new opportunities to reduce costs. Fortunately, a new opportunity for residents and municipalities called Community Solar can help. In this program, savings go to the resident on their electric bills, support green energy, and can run with a current municipal aggregation program.\n\nThis is not a new type of municipal aggregation program, and does not require any contracts or board approval. There is no commitment on the municipalities end.\n\nCommunity Solar offers two major benefits, green energy, as well as reduced costs. NIMEC’s suppliers can still help resident’s guarantee savings of 20% on the net metering energy credits on the ComEd bills, after the monthly subscription fee. Those savings are guaranteed each month, even when the ComEd rate changes.\n\nThe second benefit of Community Solar is the support of green energy. When using Community Solar, subscribers are supporting the use of a local solar farm in Illinois.\n\nPrices have been rising in Illinois, and worldwide. They currently are at a 10-year high. Demand for power in the US growing consistently since the lows in the 2020 year of COVID, but gas producers have been hesitant to add new production. This, coupled with the Ukraine situation, has caused power prices to escalate to multiyear highs.\n\nOnce a municipality moves forward, NIMEC’s suppliers will mail a postcard to residents with an opt-in to Community Solar. The post card is customizable to each municipalities’ wishes to ensure the best messaging and opt in rates. Other electronic options are available as well.\n\nIf a resident chooses to opt-in, they will receive two different bills, one from ComEd, and another from a supplier with the reduced costs and savings. There are no cancellation fees for the resident. In previous municipalities that have run this program, the opt in rate is around 3-5%.\n\nThere are also customizable options and benefits to the municipality if desired as well.\n\nNIMEC would welcome the opportunity to sit down and chat about how to implement this program, and achieve savings for the residents.",
    newsletter: "../../../public/pics/Spring 22 Comm Solar.pdf",
  },
  {
    service: "Commercial",
    date: "Spring 2022",
    title: "Community Solar Offers Savings",
    synopsis:
      "NIMEC has been helping its members purchase power and natural gas since 2006. In addition to the 100+ municipalities in northern Illinois, NIMEC also works with Park Districts, Libraries, Churches, and School's to lower their utility costs. NIMEC's retention rate averages 99%, while growing each year. On average, NIMEC members save around 27% annually. NIMEC will work to provide those interested an overview of their current utility situation, with options to help reduce cost.",
    // newsletter:
    //   "The State of Illinois has set a target of 100% renewable energy in Illinois by 2050. The State created the Community Solar initiative to help achieve their goal.\n\nCommunity Solar allows park districts/libraries to support solar energy projects in Illinois while reducing their energy costs. Savings vary by account but estimates of 10-15% savings are available on certain accounts.\n\nUnder the new legislation, developers will purchase acreage in northern and central Illinois and construct a solar farm. Individual park districts/libraries can then essentially commit to purchasing all the power from a certain number of solar panels.\n\nThis way, park districts and libraries can support solar energy without having to install solar panels at any of their facilities.\n\nBy purchasing power directly from the solar farm, savings are available to park districts and libraires. Each eligible account receives credits for 100% of the power produced by their panels. The developer then charges the account 80% of the value of that account's credits. Hence, that account is guaranteed to receive a 20% discount on the power generated by their panels. This translates into energy savings between 10 and 15% for the average account.\n\nThe park district/library will need to set up an automatic payment with the solar farm developer. The park district or library then receives the credit on their ComEd or supplier bill.\n\nThese accounts can continue to participate in NIMEC's group bidding; no change to your supplier is needed.\n\nOne may ask: how can the State of Illinois afford to pay the Community Solar credits to park districts/libraries. The answer is: the State is not paying these credits. All ComEd customers are!\n\nA small charge is appearing at the bottom of all ComEd bills, called Renewable Portfolio Standard, which includes monies for Community Solar. The credits to park districts/libraries are paid out of these RPS funds.\n\nNote: space Is limited.\n\nNIMEC is available to assist your move to CS. Contact us at your convenience.",
    newsletter: "../../../public/pics/Spring 22 Comm Solar.pdf",
  },
  {
    service: "Residential",
    date: "Spring 2022",
    title: "Community Solar Offers Savings",
    synopsis:
      "A new opportunity has opened up for residents in Illinois.  Community Solar, which is backed and incentivized by the state of Illinois, allows for guaranteed 20% savings on the supply of your electric bill, while creating energy from a local solar field (no solar panels on property is required). Yet, the program is so popular that there is limited availability. If interested, please reach out and see what options are available. ",
    // newsletter:
    //   "The State of Illinois has set a target of 100% renewable energy in Illinois by 2050. The State created the Community Solar initiative to help achieve their goal.\n\nCommunity Solar allows park districts/libraries to support solar energy projects in Illinois while reducing their energy costs. Savings vary by account but estimates of 10-15% savings are available on certain accounts.\n\nUnder the new legislation, developers will purchase acreage in northern and central Illinois and construct a solar farm. Individual park districts/libraries can then essentially commit to purchasing all the power from a certain number of solar panels.\n\nThis way, park districts and libraries can support solar energy without having to install solar panels at any of their facilities.\n\nBy purchasing power directly from the solar farm, savings are available to park districts and libraires. Each eligible account receives credits for 100% of the power produced by their panels. The developer then charges the account 80% of the value of that account's credits. Hence, that account is guaranteed to receive a 20% discount on the power generated by their panels. This translates into energy savings between 10 and 15% for the average account.\n\nThe park district/library will need to set up an automatic payment with the solar farm developer. The park district or library then receives the credit on their ComEd or supplier bill.\n\nThese accounts can continue to participate in NIMEC's group bidding; no change to your supplier is needed.\n\nOne may ask: how can the State of Illinois afford to pay the Community Solar credits to park districts/libraries. The answer is: the State is not paying these credits. All ComEd customers are!\n\nA small charge is appearing at the bottom of all ComEd bills, called Renewable Portfolio Standard, which includes monies for Community Solar. The credits to park districts/libraries are paid out of these RPS funds.\n\nNote: space Is limited.\n\nNIMEC is available to assist your move to CS. Contact us at your convenience.",
    newsletter: "../../../public/pics/Solar Offering.pdf",
  },
];

const EEs = [
  {
    name: "David Hoover",
    photo: "https://i.ytimg.com/vi/k_uZeCymShQ/maxresdefault.jpg",
    title: "Director",
    email: "dhoover@nimec.net",
    phone: "847-392-9300",
    synopsis:
      "David is NIMEC's Founder and Executive Director. He has consulted in the energy industry since 1992, having owned and managed Glenview Consulting Group through 2006. Glenview provided utility consulting services to 200 corporate and municipal clients. David formed NIMEC in 2006 to help his municipal clients take advantage of the savings opportunities presented through Illinois utility deregulation.\n\nDavid holds an MBA from Arizona State University and graduated cum laude with concentration in Business from the University of Colorado.",
    order: 1,
  },
  {
    name: "Adam Hoover",
    photo: "https://i.ytimg.com/vi/k_uZeCymShQ/maxresdefault.jpg",
    title: "Director, Strategic Accounts",
    email: "ahoover@nimec.net",
    phone: "847-732-2515",
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

const FAQs = [
  {
    order: 0,
    Q: "What do residents have to do to be in the aggregation and get the lower rate?",
    A: "All eligible residents are automatically included in the program once it has been approved by voters.",
  },
  {
    order: 1,
    Q: "What is the ComEd rate?",
    A: "The ComEd rate consists of three portions, two of which are adjusted twice annually, and the third of which can change monthly. to discover the current ComEd rate, visit Plug In Illinois.",
    linkNeeded: true,
    link: "https://pluginillinois.org/FixedRateBreakdownComEd.aspx",
    linkWord: "Plug In Illinois",
  },
  {
    order: 2,
    Q: "What if residents don't want to participate in the program?",
    A: "Residents will receive two opportunities to opt out of the aggregation program. When a new supplier is selected, they will receive a letter with an opt out form and ComEd will also send an opt out form.",
  },
  {
    order: 3,
    Q: "Can residents opt out before the program begins then return later to the supplier that won the bid in the aggregation?",
    A: "Yes.",
  },
  {
    order: 4,
    Q: "What is the referendum question?",
    A: "“Shall the village/city have the authority to arrange for the supply of electricity for its residential and small commercial retail customers who have not opted out of such a program?",
  },
  {
    order: 5,
    Q: "Are commercial accounts included in the aggregation?",
    A: "Currently, only commercial accounts that use less than 15,000 kWh’s/year are included. This generally includes only smaller commercial accounts. Larger commercial accounts are ineligible and need to negotiate an individual contract apart from the aggregation.",
  },
  {
    order: 6,
    Q: "What happens if the power goes out? Whom do residents call?",
    A: "Residents should continue to call ComEd with any service issues. ComEd will still deliver electricity. Residents will simply have a new supplier.",
  },
  {
    order: 7,
    Q: "Will residents then receive two separate bills—- one from the deliverer, the other from the supplier?",
    A: "No. Residents will only receive a bill from ComEd. The only difference on the bill is the new lower rate and the new supplier’s name will be listed.",
  },
  {
    order: 8,
    Q: "If a resident is getting offers from retail electric suppliers to switch for lower rates. What should they do?",
    A: "If residents switch their electric account to a new supplier prior to the aggregation program, they will not be included in the community aggregation. If a resident switches to a new supplier, and later wants to join the community aggregation, they may (possibly have to pay a termination fee to their current supplier. Residents should review the details of their suppliers’ agreement. There is no fee from the aggregation supplier to join the aggregation.",
  },
  {
    order: 9,
    Q: "What happens with ComEd? Won’t they increase charges to keep their profit margins?",
    A: "Residents’ choice of supplier has no impact on ComEd as they only deliver and do not supply the power. ComEd processes the bills for these supplier companies, and passes 100 percent of the revenue back to the company that generates the power. ComEd’s rates are regulated by the ICC, so any increase would have to first be approved by the ICC.",
  },
  {
    order: 10,
    Q: "What if the rate residents in the municipality currently have is lower than the power suppliers’ bids?",
    A: "No action will be taken. The municipality’s residents’ electric accounts will not move to a new supplier. The referendum does not mandate the municipality to switch to a new provider.",
  },
];

const missions = [
  {
    idd: 1,
    statement:
      "NIMEC is the leading municipal aggregator of electricity in northern Illinois, having managed 100 municipal aggregations with a population base approaching 2,000,000. NIMEC is the leader in Municipal Aggregation in Northern Illinois, managing more Municipal Aggregation programs than anyone else. Illinois municipalities can now negotiate lower electric rates for its residents' home bills. In the same way municipalities negotiate community-wide contracts for waste disposal or cable television, NIMEC helps communities purchase power for their residents. NIMEC's purchasing power of $150 million per year helps our members achieve aggressive rates for their residents.\n\nAdditionally, NIMEC has been helping its members (libraries, schools, fire districts, and park districts) purchase power for their water pumping, street lighting, and natural gas. NIMEC's retention rate averages 99%, while growing each year.",
  },
];

const savings = [
  {
    idd: 1,
    synopsis:
      "A new opportunity has opened up for residents in Illinois.  Community Solar, which is backed and incentivized by the state of Illinois, allows for guaranteed 20% savings on the supply of your electric bill, while creating energy from a local solar field (no solar panels on property is required). Yet, the program is so popular that there is limited availability. If interested, please reach out and see what options are available. ",
    attachment: "../../../public/pics/Nimec Rate Comparison.png",
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

  const [ref1, ref2, ref3, ref4, ref5, ref6, ref7] = await Promise.all(
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
        service: service.service,
        date: service.date,
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

  const [Q1] = await Promise.all(
    FAQs.map((faq) =>
      FAQ.create({
        order: faq.order,
        Q: faq.Q,
        A: faq.A,
        linkNeeded: faq.linkNeeded,
        link: faq.link,
        linkWord: faq.linkWord,
      })
    )
  );

  const [M1] = await Promise.all(
    missions.map((mission) =>
      Mission.create({
        idd: mission.idd,
        statement: mission.statement,
      })
    )
  );

  const [savings1] = await Promise.all(
    savings.map((saving) =>
      Savings.create({
        idd: saving.idd,
        synopsis: saving.synopsis,
        attachment: saving.attachment,
      })
    )
  );

  ref1.clientId = montgomery.id;
  ref2.clientId = sugarGrove.id;
  ref3.clientId = elburn.id;
  ref4.clientId = harvard.id;
  ref5.clientId = woodDale.id;
  ref6.clientId = morris.id;
  ref7.clientId = crestHill.id;

  await Promise.all([
    ref1.save(),
    ref2.save(),
    ref3.save(),
    ref4.save(),
    ref5.save(),
    ref6.save(),
    ref7.save(),
  ]);
};

module.exports = syncAndSeed;
