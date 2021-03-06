const getDayOfTheYear = () => {
	const today = new Date();
	const start = new Date(today.getFullYear(), 0, 1);
	const diff = today - start;
	const oneDay = 1000 * 60 * 60 * 24;
	const day = Math.ceil(diff / oneDay);
	/* const day = Math.ceil(
		(today - new Date(today.getFullYear(), 0, 1)) / 86400000
	); */
	return day;
};

const dayOfTheYear = getDayOfTheYear();

const regularWords = [
	"hello",
	"patio",
	"panda",
	"Abuse",
	"Adult",
	"Agent",
	"Anger",
	"Beach",
	"Birth",
	"Block",
	"Blitz",
	"Board",
	"Brain",
	"Bread",
	"Break",
	"Brown",
	"Buyer",
	"Cause",
	"Chain",
	"Chair",
	"Chest",
	"Chief",
	"Child",
	"China",
	"Claim",
	"Coast",
	"Court",
	"Cover",
	"Cream",
	"Crime",
	"Crowd",
	"Crown",
	"Dance",
	"Death",
	"Depth",
	"Doubt",
	"Draft",
	"Dream",
	"Drink",
	"Drive",
	"Earth",
	"Entry",
	"Faith",
	"Fault",
	"Field",
	"Fight",
	"Final",
	"Focus",
	"Force",
	"Frame",
	"Frank",
	"Front",
	"Fruit",
	"Grant",
	"Group",
	"Guide",
	"Heart",
	"Henry",
	"Horse",
	"Hotel",
	"House",
	"Image",
	"Index",
	"Input",
	"Jones",
	"judge",
	"Knife",
	"Layer",
	"Lewis",
	"Lunch",
	"Major",
	"March",
	"Match",
	"Metal",
	"Model",
	"Money",
	"Month",
	"Mouth",
	"Music",
	"Night",
	"Noise",
	"North",
	"Novel",
	"Nurse",
	"Order",
	"Owner",
	"Panel",
	"Paper",
	"Party",
	"Phase",
	"Phone",
	"Pilot",
	"Pitch",
	"Place",
	"Plane",
	"Plant",
	"Plate",
	"Point",
	"Pound",
	"Power",
	"Price",
	"Pride",
	"Prize",
	"Radio",
	"Range",
	"Ratio",
	"Reply",
	"River",
	"Round",
	"Route",
	"Rugby",
	"Scale",
	"Scope",
	"Score",
	"Shape",
	"Share",
	"Shift",
	"Shirt",
	"Shock",
	"Sight",
	"Simon",
	"Smile",
	"Smith",
	"Smoke",
	"South",
	"Space",
	"Spite",
	"Sport",
	"Squad",
	"Stage",
	"Steam",
	"Stock",
	"Stone",
	"Store",
	"Study",
	"Style",
	"Sugar",
	"Table",
	"Thing",
	"Touch",
	"Tower",
	"Track",
	"Trade",
	"Train",
	"Trend",
	"Trial",
	"Uncle",
	"Unity",
	"Value",
	"Video",
	"Voice",
	"Waste",
	"Watch",
	"Water",
	"While",
	"White",
	"Whole",
	"Woman",
	"World",
	"Youth",
	"Alcon",
	"Aught",
	"Hella",
	"Ought",
	"Thine",
	"Whose",
	"Yours",
	"Admit",
	"Adopt",
	"Alter",
	"Argue",
	"Arise",
	"Avoid",
	"Begin",
	"Blame",
	"Break",
	"Bring",
	"Build",
	"Burst",
	"Catch",
	"Cause",
	"Claim",
	"Clean",
	"Clear",
	"Climb",
	"Close",
	"Count",
	"Cover",
	"Dance",
	"Doubt",
	"Drink",
	"Drive",
	"Enjoy",
	"Exist",
	"Fight",
	"Focus",
	"Force",
	"Imply",
	"Judge",
	"Laugh",
	"Learn",
	"Match",
	"Order",
	"Phone",
	"Place",
	"Point",
	"Prove",
	"Raise",
	"Reach",
	"Relax",
	"Share",
	"Shift",
	"Solve",
	"Sound",
	"Speak",
	"Spend",
	"Split",
	"Stand",
	"Stick",
	"Study",
	"Teach",
	"Thank",
	"Think",
	"Throw",
	"Touch",
	"Train",
	"Trust",
	"Voice",
	"Waste",
	"Watch",
	"Would",
	"Write",
	"Acute",
	"Alive",
	"Alone",
	"Angry",
	"Awful",
	"Basic",
	"Black",
	"Blind",
	"Brave",
	"Brief",
	"Broad",
	"Brown",
	"Cheap",
	"Chief",
	"Close",
	"Crazy",
	"Craze",
	"Flare",
	"Daily",
	"Dirty",
	"Early",
	"Empty",
	"Equal",
	"Exact",
	"Extra",
	"Faint",
	"False",
	"Final",
	"First",
	"Fresh",
	"Front",
	"Giant",
	"Grand",
	"Great",
	"Heavy",
	"Human",
	"Ideal",
	"Joint",
	"Large",
	"Light",
	"Lucky",
	"Magic",
	"Major",
	"Minor",
	"Moral",
	"Naked",
	"Nasty",
	"Other",
	"Outer",
	"Plain",
	"Prime",
	"Proud",
	"Quick",
	"Quiet",
	"Rapid",
	"Ready",
	"Right",
	"Roman",
	"Rough",
	"Royal",
	"Rural",
	"Sharp",
	"Short",
	"Sixth",
	"Smart",
	"Solid",
	"Spare",
	"Super",
	"Thick",
	"Third",
	"Tough",
	"Upset",
	"Urban",
	"Vague",
	"Valid",
	"Vital",
	"Wrong",
	"Young",
	"Afore",
	"After",
	"Since",
	"Until",
	"Waltz",
	"About",
	"Above",
	"Adown",
	"Afoul",
	"Gauze",
	"Agone",
	"Ahead",
	"Ahull",
	"Alife",
	"Alike",
	"Aline",
	"Aloft",
	"Alone",
	"Along",
	"Aloud",
	"Amply",
	"Amuck",
	"Aptly",
	"Aside",
	"Askew",
	"Awful",
	"Badly",
	"Below",
	"Dimly",
	"Drily",
	"Fatly",
	"Fitly",
	"Forte",
	"Forth",
	"Gaily",
	"Godly",
	"Haply",
	"Hotly",
	"Infra",
	"Jildi",
	"Lento",
	"Madly",
	"Maybe",
	"Newly",
	"Nobly",
	"Often",
	"Piano",
	"Plonk",
	"Plumb",
	"Quite",
	"Ramen",
	"Redly",
	"Sadly",
	"Secus",
	"Shily",
	"Spang",
	"Stark",
	"Stour",
	"Today",
	"Truly",
	"Twice",
	"Under",
	"Wanly",
	"Wetly",
	"Among",
	"Minus",
	"Neath",
	"Twirp",
	"Viola",
	"Psych",
	"Salve",
	"Skoal",
	"Thiam",
	"Thwap",
	"Adieu",
	"Adios",
	"Begad",
	"Blige",
	"Bravo",
	"Bring",
	"Frick",
	"Fudge",
	"Gratz",
	"Havoc",
	"Howay",
	"Howdy",
	"Kapow",
	"Lordy",
	"Mercy",
];

const proWords = [
	"abide",
	"abled",
	"abmho",
	"abode",
	"abohm",
	"aboil",
	"ached",
	"acing",
	"acned",
	"acold",
	"admen",
	"admin",
	"adobe",
	"agile",
	"agone",
	"ahing",
	"ahold",
	"ailed",
	"aimed",
	"alcid",
	"aleph",
	"algid",
	"algin",
	"alien",
	"align",
	"alike",
	"aline",
	"alkie",
	"almeh",
	"aloin",
	"alone",
	"along",
	"amble",
	"amend",
	"amice",
	"amide",
	"amido",
	"amigo",
	"amine",
	"amino",
	"amnic",
	"amnio",
	"amole",
	"among",
	"amped",
	"ample",
	"ancho",
	"angel",
	"angle",
	"anglo",
	"anile",
	"anime",
	"ankle",
	"anode",
	"anole",
	"aphid",
	"aping",
	"bacon",
	"badge",
	"bagel",
	"baked",
	"baled",
	"banco",
	"baned",
	"beach",
	"beano",
	"becap",
	"bedim",
	"befog",
	"begad",
	"began",
	"begin",
	"being",
	"belch",
	"belga",
	"belon",
	"bench",
	"bhang",
	"bicep",
	"bield",
	"biked",
	"bilge",
	"bimah",
	"binal",
	"binge",
	"bingo",
	"biome",
	"biped",
	"bipod",
	"black",
	"blade",
	"blain",
	"blame",
	"bland",
	"blank",
	"bleak",
	"blech",
	"blend",
	"blimp",
	"blind",
	"bling",
	"blink",
	"block",
	"bloke",
	"blond",
	"boche",
	"bogie",
	"bogle",
	"bohea",
	"boing",
	"boink",
	"bokeh",
	"bonce",
	"boned",
	"cabin",
	"cable",
	"cadge",
	"caged",
	"caked",
	"calif",
	"camel",
	"cameo",
	"campi",
	"campo",
	"caned",
	"canid",
	"canoe",
	"caped",
	"capon",
	"cebid",
	"ceiba",
	"celom",
	"chafe",
	"chain",
	"chalk",
	"champ",
	"chang",
	"chape",
	"cheap",
	"chela",
	"chemo",
	"chiao",
	"chide",
	"chief",
	"chiel",
	"child",
	"chile",
	"chimb",
	"chime",
	"chimp",
	"china",
	"chine",
	"ching",
	"chino",
	"choil",
	"choke",
	"chola",
	"choli",
	"chomp",
	"cibol",
	"clade",
	"claim",
	"clamp",
	"clang",
	"clank",
	"clean",
	"climb",
	"clime",
	"cline",
	"cling",
	"clink",
	"cloak",
	"clomb",
	"clomp",
	"clone",
	"clonk",
	"cnida",
	"cobia",
	"coble",
	"coden",
	"coign",
	"coked",
	"coled",
	"colin",
	"comae",
	"comal",
	"combe",
	"combi",
	"coned",
	"conga",
	"conge",
	"copal",
	"coped",
	"copen",
	"dance",
	"danio",
	"debag",
	"decaf",
	"decal",
	"decan",
	"defog",
	"deign",
	"demic",
	"demob",
	"demoi",
	"demon",
	"denim",
	"dhobi",
	"dhole",
	"dinge",
	"dingo",
	"dobie",
	"dobla",
	"dogie",
	"dogma",
	"doing",
	"dolce",
	"dolci",
	"dolma",
	"domal",
	"domic",
	"donga",
	"eikon",
	"eking",
	"elain",
	"eland",
	"elfin",
	"eloin",
	"email",
	"enoki",
	"ephod",
	"epoch",
	"fable",
	"faced",
	"fadge",
	"fagin",
	"faked",
	"fakie",
	"famed",
	"fecal",
	"feign",
	"felid",
	"felon",
	"fiche",
	"fidge",
	"field",
	"fiend",
	"filch",
	"filed",
	"final",
	"finca",
	"finch",
	"fined",
	"flack",
	"flake",
	"flame",
	"flank",
	"fleam",
	"fleck",
	"flick",
	"flied",
	"fling",
	"flock",
	"flong",
	"focal",
	"foehn",
	"fogie",
	"folia",
	"folic",
	"gable",
	"galed",
	"galop",
	"gambe",
	"gamed",
	"gamic",
	"gamin",
	"ganef",
	"ganof",
	"gaped",
	"gecko",
	"gelid",
	"genic",
	"genip",
	"genoa",
	"genom",
	"geoid",
	"gibed",
	"gimel",
	"ginch",
	"gipon",
	"glace",
	"glade",
	"gland",
	"gleam",
	"glean",
	"gleba",
	"glide",
	"glime",
	"gloam",
	"globe",
	"gnome",
	"goban",
	"golem",
	"gonad",
	"gonch",
	"gonef",
	"gonia",
	"gonif",
	"gopik",
	"hacek",
	"haick",
	"hakim",
	"haled",
	"halid",
	"halon",
	"hance",
	"haole",
	"helio",
	"hemal",
	"hemic",
	"hemin",
	"hiked",
	"himbo",
	"hinge",
	"hogan",
	"hoick",
	"hoked",
	"holed",
	"holme",
	"homed",
	"homie",
	"honda",
	"honed",
	"hongi",
	"hopak",
	"hoped",
	"ideal",
	"ileac",
	"image",
	"imago",
	"imbed",
	"imped",
	"impel",
	"incog",
	"indol",
	"ingle",
	"inked",
	"inkle",
	"kalif",
	"kelim",
	"kenaf",
	"kench",
	"kendo",
	"khadi",
	"kheda",
	"kiang",
	"kibla",
	"kinda",
	"klieg",
	"klong",
	"knead",
	"knife",
	"koine",
	"laced",
	"laden",
	"laich",
	"laigh",
	"laked",
	"lamed",
	"lance",
	"lanch",
	"lapin",
	"leach",
	"leman",
	"lemon",
	"liane",
	"liang",
	"ligan",
	"liked",
	"liken",
	"liman",
	"limba",
	"limbo",
	"limed",
	"limen",
	"limpa",
	"linac",
	"lined",
	"linga",
	"lingo",
	"loach",
	"lobed",
	"loche",
	"locie",
	"loden",
	"lodge",
	"logan",
	"logia",
	"logic",
	"login",
	"longe",
	"loped",
	"maced",
	"mache",
	"macho",
	"macle",
	"macon",
	"mafic",
	"magic",
	"mahoe",
	"maile",
	"malic",
	"maneb",
	"maned",
	"mange",
	"mango",
	"manic",
	"maple",
	"medal",
	"media",
	"medic",
	"melic",
	"melon",
	"menad",
	"miche",
	"midge",
	"miked",
	"milch",
	"milpa",
	"minae",
	"mince",
	"mined",
	"minke",
	"mocha",
	"mochi",
	"modal",
	"model",
	"mohel",
	"monad",
	"monde",
	"monic",
	"monie",
	"moped",
	"nacho",
	"naked",
	"naled",
	"named",
	"neigh",
	"nicad",
	"niche",
	"nicol",
	"nidal",
	"nikah",
	"noble",
	"nodal",
	"nomad",
	"nopal",
	"oaked",
	"oaken",
	"obeah",
	"obeli",
	"ocean",
	"ogham",
	"ogled",
	"ohing",
	"ohmic",
	"oiled",
	"okapi",
	"olden",
	"oldie",
	"oleic",
	"olein",
	"omega",
	"opine",
	"oping",
	"paced",
	"padle",
	"paeon",
	"paged",
	"pagod",
	"paled",
	"paned",
	"panel",
	"panic",
	"peach",
	"pecan",
	"pedal",
	"pekan",
	"pekin",
	"pelon",
	"penal",
	"pengo",
	"phage",
	"phial",
	"phone",
	"piano",
	"pibal",
	"pical",
	"piked",
	"pilaf",
	"pilea",
	"piled",
	"pinch",
	"pined",
	"pingo",
	"pinko",
	"place",
	"plack",
	"plage",
	"plaid",
	"plain",
	"plane",
	"plank",
	"plead",
	"plena",
	"pleon",
	"plica",
	"plied",
	"plink",
	"plonk",
	"poach",
	"podia",
	"poind",
	"poked",
	"poled",
	"polka",
	"pombe",
	"ponce",
];

const wordOfTheDay = regularWords[dayOfTheYear - 1];
export default wordOfTheDay;