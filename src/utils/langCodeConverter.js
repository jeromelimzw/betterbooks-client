const langCodes = [
  {
    languageName: "Abkhazian",
    langEndonym: "аҧсуа бызшәа, аҧсшәа",
    langCode: "ab"
  },
  { languageName: "Afar", langEndonym: "Afaraf", langCode: "aa" },
  { languageName: "Afrikaans", langEndonym: "Afrikaans", langCode: "af" },
  { languageName: "Akan", langEndonym: "Akan", langCode: "ak" },
  { languageName: "Albanian", langEndonym: "Shqip", langCode: "sq" },
  { languageName: "Amharic", langEndonym: "አማርኛ", langCode: "am" },
  { languageName: "Arabic", langEndonym: "العربية", langCode: "ar" },
  { languageName: "Aragonese", langEndonym: "aragonés", langCode: "an" },
  { languageName: "Armenian", langEndonym: "Հայերեն", langCode: "hy" },
  { languageName: "Assamese", langEndonym: "অসমীয়া", langCode: "as" },
  {
    languageName: "Avaric",
    langEndonym: "авар мацӀ, магӀарул мацӀ",
    langCode: "av"
  },
  { languageName: "Avestan", langEndonym: "avesta", langCode: "ae" },
  { languageName: "Aymara", langEndonym: "aymar aru", langCode: "ay" },
  {
    languageName: "Azerbaijani",
    langEndonym: "azərbaycan dili",
    langCode: "az"
  },
  { languageName: "Bambara", langEndonym: "bamanankan", langCode: "bm" },
  { languageName: "Bashkir", langEndonym: "башҡорт теле", langCode: "ba" },
  { languageName: "Basque", langEndonym: "euskara, euskera", langCode: "eu" },
  {
    languageName: "Belarusian",
    langEndonym: "беларуская мова",
    langCode: "be"
  },
  { languageName: "Bengali", langEndonym: "বাংলা", langCode: "bn" },
  {
    languageName: "Bihari languages",
    langEndonym: "भोजपुरी",
    langCode: "bh"
  },
  { languageName: "Bislama", langEndonym: "Bislama", langCode: "bi" },
  { languageName: "Bosnian", langEndonym: "bosanski jezik", langCode: "bs" },
  { languageName: "Breton", langEndonym: "brezhoneg", langCode: "br" },
  {
    languageName: "Bulgarian",
    langEndonym: "български език",
    langCode: "bg"
  },
  { languageName: "Burmese", langEndonym: "ဗမာစာ", langCode: "my" },
  {
    languageName: "Catalan, Valencian",
    langEndonym: "català, valencià",
    langCode: "ca"
  },
  { languageName: "Chamorro", langEndonym: "Chamoru", langCode: "ch" },
  { languageName: "Chechen", langEndonym: "нохчийн мотт", langCode: "ce" },
  {
    languageName: "Chichewa, Chewa, Nyanja",
    langEndonym: "chiCheŵa, chinyanja",
    langCode: "ny"
  },
  {
    languageName: "Chinese",
    langEndonym: "中文(Zhōngwén), 汉语, 漢語",
    langCode: "zh"
  },
  { languageName: "Chuvash", langEndonym: "чӑваш чӗлхи", langCode: "cv" },
  { languageName: "Cornish", langEndonym: "Kernewek", langCode: "kw" },
  {
    languageName: "Corsican",
    langEndonym: "corsu, lingua corsa",
    langCode: "co"
  },
  { languageName: "Cree", langEndonym: "ᓀᐦᐃᔭᐍᐏᐣ", langCode: "cr" },
  { languageName: "Croatian", langEndonym: "hrvatski jezik", langCode: "hr" },
  {
    languageName: "Czech",
    langEndonym: "čeština, český jazyk",
    langCode: "cs"
  },
  { languageName: "Danish", langEndonym: "dansk", langCode: "da" },
  {
    languageName: "Divehi, Dhivehi, Maldivian",
    langEndonym: "ދިވެހި",
    langCode: "dv"
  },
  {
    languageName: "Dutch, Flemish",
    langEndonym: "Nederlands, Vlaams",
    langCode: "nl"
  },
  { languageName: "Dzongkha", langEndonym: "རྫོང་ཁ", langCode: "dz" },
  { languageName: "English", langEndonym: "English", langCode: "en" },
  { languageName: "Esperanto", langEndonym: "Esperanto", langCode: "eo" },
  {
    languageName: "Estonian",
    langEndonym: "eesti, eesti keel",
    langCode: "et"
  },
  { languageName: "Ewe", langEndonym: "Eʋegbe", langCode: "ee" },
  { languageName: "Faroese", langEndonym: "føroyskt", langCode: "fo" },
  { languageName: "Fijian", langEndonym: "vosa Vakaviti", langCode: "fj" },
  {
    languageName: "Finnish",
    langEndonym: "suomi, suomen kieli",
    langCode: "fi"
  },
  {
    languageName: "French",
    langEndonym: "français, langue française",
    langCode: "fr"
  },
  {
    languageName: "Fulah",
    langEndonym: "Fulfulde, Pulaar, Pular",
    langCode: "ff"
  },
  { languageName: "Galician", langEndonym: "Galego", langCode: "gl" },
  { languageName: "Georgian", langEndonym: "ქართული", langCode: "ka" },
  { languageName: "German", langEndonym: "Deutsch", langCode: "de" },
  {
    languageName: "Greek, Modern (1453-)",
    langEndonym: "ελληνικά",
    langCode: "el"
  },
  { languageName: "Guarani", langEndonym: "Avañe'ẽ", langCode: "gn" },
  { languageName: "Gujarati", langEndonym: "ગુજરાતી", langCode: "gu" },
  {
    languageName: "Haitian, Haitian Creole",
    langEndonym: "Kreyòl ayisyen",
    langCode: "ht"
  },
  { languageName: "Hausa", langEndonym: "(Hausa) هَوُسَ", langCode: "ha" },
  { languageName: "Hebrew", langEndonym: "עברית", langCode: "he" },
  { languageName: "Herero", langEndonym: "Otjiherero", langCode: "hz" },
  { languageName: "Hindi", langEndonym: "हिन्दी, हिंदी", langCode: "hi" },
  { languageName: "Hiri Motu", langEndonym: "Hiri Motu", langCode: "ho" },
  { languageName: "Hungarian", langEndonym: "magyar", langCode: "hu" },
  {
    languageName: "Interlingua (International Auxiliary Language Association)",
    langEndonym: "Interlingua",
    langCode: "ia"
  },
  {
    languageName: "Indonesian",
    langEndonym: "Bahasa Indonesia",
    langCode: "id"
  },
  {
    languageName: "Interlingue, Occidental",
    langEndonym: "Originally called Occidental; then Interlingue after WWII",
    langCode: "ie"
  },
  { languageName: "Irish", langEndonym: "Gaeilge", langCode: "ga" },
  { languageName: "Igbo", langEndonym: "Asụsụ Igbo", langCode: "ig" },
  {
    languageName: "Inupiaq",
    langEndonym: "Iñupiaq, Iñupiatun",
    langCode: "ik"
  },
  { languageName: "Ido", langEndonym: "Ido", langCode: "io" },
  { languageName: "Icelandic", langEndonym: "Íslenska", langCode: "is" },
  { languageName: "Italian", langEndonym: "Italiano", langCode: "it" },
  { languageName: "Inuktitut", langEndonym: "ᐃᓄᒃᑎᑐᑦ", langCode: "iu" },
  {
    languageName: "Japanese",
    langEndonym: "日本語 (にほんご)",
    langCode: "ja"
  },
  {
    languageName: "Javanese",
    langEndonym: "ꦧꦱꦗꦮ, Basa Jawa",
    langCode: "jv"
  },
  {
    languageName: "Kalaallisut, Greenlandic",
    langEndonym: "kalaallisut, kalaallit oqaasii",
    langCode: "kl"
  },
  { languageName: "Kannada", langEndonym: "ಕನ್ನಡ", langCode: "kn" },
  { languageName: "Kanuri", langEndonym: "Kanuri", langCode: "kr" },
  {
    languageName: "Kashmiri",
    langEndonym: "कश्मीरी, كشميري‎",
    langCode: "ks"
  },
  { languageName: "Kazakh", langEndonym: "қазақ тілі", langCode: "kk" },
  {
    languageName: "Central Khmer",
    langEndonym: "ខ្មែរ, ខេមរភាសា, ភាសាខ្មែរ",
    langCode: "km"
  },
  { languageName: "Kikuyu, Gikuyu", langEndonym: "Gĩkũyũ", langCode: "ki" },
  {
    languageName: "Kinyarwanda",
    langEndonym: "Ikinyarwanda",
    langCode: "rw"
  },
  {
    languageName: "Kirghiz, Kyrgyz",
    langEndonym: "Кыргызча, Кыргыз тили",
    langCode: "ky"
  },
  { languageName: "Komi", langEndonym: "коми кыв", langCode: "kv" },
  { languageName: "Kongo", langEndonym: "Kikongo", langCode: "kg" },
  { languageName: "Korean", langEndonym: "한국어", langCode: "ko" },
  { languageName: "Kurdish", langEndonym: "Kurdî, کوردی‎", langCode: "ku" },
  {
    languageName: "Kuanyama, Kwanyama",
    langEndonym: "Kuanyama",
    langCode: "kj"
  },
  {
    languageName: "Latin",
    langEndonym: "latine, lingua latina",
    langCode: "la"
  },
  {
    languageName: "Luxembourgish, Letzeburgesch",
    langEndonym: "Lëtzebuergesch",
    langCode: "lb"
  },
  { languageName: "Ganda", langEndonym: "Luganda", langCode: "lg" },
  {
    languageName: "Limburgan, Limburger, Limburgish",
    langEndonym: "Limburgs",
    langCode: "li"
  },
  { languageName: "Lingala", langEndonym: "Lingála", langCode: "ln" },
  { languageName: "Lao", langEndonym: "ພາສາລາວ", langCode: "lo" },
  {
    languageName: "Lithuanian",
    langEndonym: "lietuvių kalba",
    langCode: "lt"
  },
  { languageName: "Luba-Katanga", langEndonym: "Kiluba", langCode: "lu" },
  { languageName: "Latvian", langEndonym: "latviešu valoda", langCode: "lv" },
  { languageName: "Manx", langEndonym: "Gaelg, Gailck", langCode: "gv" },
  {
    languageName: "Macedonian",
    langEndonym: "македонски јазик",
    langCode: "mk"
  },
  {
    languageName: "Malagasy",
    langEndonym: "fiteny malagasy",
    langCode: "mg"
  },
  {
    languageName: "Malay",
    langEndonym: "Bahasa Melayu, بهاس ملايو‎",
    langCode: "ms"
  },
  { languageName: "Malayalam", langEndonym: "മലയാളം", langCode: "ml" },
  { languageName: "Maltese", langEndonym: "Malti", langCode: "mt" },
  { languageName: "Maori", langEndonym: "te reo Māori", langCode: "mi" },
  { languageName: "Marathi", langEndonym: "मराठी", langCode: "mr" },
  { languageName: "Marshallese", langEndonym: "Kajin M̧ajeļ", langCode: "mh" },
  { languageName: "Mongolian", langEndonym: "Монгол хэл", langCode: "mn" },
  { languageName: "Nauru", langEndonym: "Dorerin Naoero", langCode: "na" },
  {
    languageName: "Navajo, Navaho",
    langEndonym: "Diné bizaad",
    langCode: "nv"
  },
  {
    languageName: "North Ndebele",
    langEndonym: "isiNdebele",
    langCode: "nd"
  },
  { languageName: "Nepali", langEndonym: "नेपाली", langCode: "ne" },
  { languageName: "Ndonga", langEndonym: "Owambo", langCode: "ng" },
  {
    languageName: "Norwegian Bokmål",
    langEndonym: "Norsk Bokmål",
    langCode: "nb"
  },
  {
    languageName: "Norwegian Nynorsk",
    langEndonym: "Norsk Nynorsk",
    langCode: "nn"
  },
  { languageName: "Norwegian", langEndonym: "Norsk", langCode: "no" },
  {
    languageName: "Sichuan Yi, Nuosu",
    langEndonym: "ꆈꌠ꒿ Nuosuhxop",
    langCode: "ii"
  },
  {
    languageName: "South Ndebele",
    langEndonym: "isiNdebele",
    langCode: "nr"
  },
  {
    languageName: "Occitan",
    langEndonym: "occitan, lenga d'òc",
    langCode: "oc"
  },
  { languageName: "Ojibwa", langEndonym: "ᐊᓂᔑᓈᐯᒧᐎᓐ", langCode: "oj" },
  {
    languageName:
      "Church Slavic, Old Slavonic, Church Slavonic, Old Bulgarian, Old Church Slavonic",
    langEndonym: "ѩзыкъ словѣньскъ",
    langCode: "cu"
  },
  { languageName: "Oromo", langEndonym: "Afaan Oromoo", langCode: "om" },
  { languageName: "Oriya", langEndonym: "ଓଡ଼ିଆ", langCode: "or" },
  {
    languageName: "Ossetian, Ossetic",
    langEndonym: "ирон æвзаг",
    langCode: "os"
  },
  { languageName: "Panjabi, Punjabi", langEndonym: "ਪੰਜਾਬੀ", langCode: "pa" },
  { languageName: "Pali", langEndonym: "पाऴि", langCode: "pi" },
  { languageName: "Persian", langEndonym: "فارسی", langCode: "fa" },
  {
    languageName: "Polish",
    langEndonym: "język polski, polszczyzna",
    langCode: "pl"
  },
  { languageName: "Pashto, Pushto", langEndonym: "پښتو", langCode: "ps" },
  { languageName: "Portuguese", langEndonym: "Português", langCode: "pt" },
  {
    languageName: "Quechua",
    langEndonym: "Runa Simi, Kichwa",
    langCode: "qu"
  },
  {
    languageName: "Romansh",
    langEndonym: "Rumantsch Grischun",
    langCode: "rm"
  },
  { languageName: "Rundi", langEndonym: "Ikirundi", langCode: "rn" },
  {
    languageName: "Romanian, Moldavian, Moldovan",
    langEndonym: "Română",
    langCode: "ro"
  },
  { languageName: "Russian", langEndonym: "русский", langCode: "ru" },
  { languageName: "Sanskrit", langEndonym: "संस्कृतम्", langCode: "sa" },
  { languageName: "Sardinian", langEndonym: "sardu", langCode: "sc" },
  {
    languageName: "Sindhi",
    langEndonym: "सिन्धी, سنڌي، سندھی‎",
    langCode: "sd"
  },
  {
    languageName: "Northern Sami",
    langEndonym: "Davvisámegiella",
    langCode: "se"
  },
  {
    languageName: "Samoan",
    langEndonym: "gagana fa'a Samoa",
    langCode: "sm"
  },
  { languageName: "Sango", langEndonym: "yângâ tî sängö", langCode: "sg" },
  { languageName: "Serbian", langEndonym: "српски језик", langCode: "sr" },
  {
    languageName: "Gaelic, Scottish Gaelic",
    langEndonym: "Gàidhlig",
    langCode: "gd"
  },
  { languageName: "Shona", langEndonym: "chiShona", langCode: "sn" },
  {
    languageName: "Sinhala, Sinhalese",
    langEndonym: "සිංහල",
    langCode: "si"
  },
  {
    languageName: "Slovak",
    langEndonym: "Slovenčina, Slovenský Jazyk",
    langCode: "sk"
  },
  {
    languageName: "Slovenian",
    langEndonym: "Slovenski Jezik, Slovenščina",
    langCode: "sl"
  },
  {
    languageName: "Somali",
    langEndonym: "Soomaaliga, af Soomaali",
    langCode: "so"
  },
  { languageName: "Southern Sotho", langEndonym: "Sesotho", langCode: "st" },
  {
    languageName: "Spanish, Castilian",
    langEndonym: "Español",
    langCode: "es"
  },
  { languageName: "Sundanese", langEndonym: "Basa Sunda", langCode: "su" },
  { languageName: "Swahili", langEndonym: "Kiswahili", langCode: "sw" },
  { languageName: "Swati", langEndonym: "SiSwati", langCode: "ss" },
  { languageName: "Swedish", langEndonym: "Svenska", langCode: "sv" },
  { languageName: "Tamil", langEndonym: "தமிழ்", langCode: "ta" },
  { languageName: "Telugu", langEndonym: "తెలుగు", langCode: "te" },
  {
    languageName: "Tajik",
    langEndonym: "тоҷикӣ, toçikī, تاجیکی‎",
    langCode: "tg"
  },
  { languageName: "Thai", langEndonym: "ไทย", langCode: "th" },
  { languageName: "Tigrinya", langEndonym: "ትግርኛ", langCode: "ti" },
  { languageName: "Tibetan", langEndonym: "བོད་ཡིག", langCode: "bo" },
  {
    languageName: "Turkmen",
    langEndonym: "Türkmen, Түркмен",
    langCode: "tk"
  },
  { languageName: "Tagalog", langEndonym: "Wikang Tagalog", langCode: "tl" },
  { languageName: "Tswana", langEndonym: "Setswana", langCode: "tn" },
  {
    languageName: "Tonga (Tonga Islands)",
    langEndonym: "Faka Tonga",
    langCode: "to"
  },
  { languageName: "Turkish", langEndonym: "Türkçe", langCode: "tr" },
  { languageName: "Tsonga", langEndonym: "Xitsonga", langCode: "ts" },
  {
    languageName: "Tatar",
    langEndonym: "татар теле, tatar tele",
    langCode: "tt"
  },
  { languageName: "Twi", langEndonym: "Twi", langCode: "tw" },
  { languageName: "Tahitian", langEndonym: "Reo Tahiti", langCode: "ty" },
  {
    languageName: "Uighur, Uyghur",
    langEndonym: "ئۇيغۇرچە‎, Uyghurche",
    langCode: "ug"
  },
  { languageName: "Ukrainian", langEndonym: "Українська", langCode: "uk" },
  { languageName: "Urdu", langEndonym: "اردو", langCode: "ur" },
  {
    languageName: "Uzbek",
    langEndonym: "Oʻzbek, Ўзбек, أۇزبېك‎",
    langCode: "uz"
  },
  { languageName: "Venda", langEndonym: "Tshivenḓa", langCode: "ve" },
  { languageName: "Vietnamese", langEndonym: "Tiếng Việt", langCode: "vi" },
  { languageName: "Volapük", langEndonym: "Volapük", langCode: "vo" },
  { languageName: "Walloon", langEndonym: "Walon", langCode: "wa" },
  { languageName: "Welsh", langEndonym: "Cymraeg", langCode: "cy" },
  { languageName: "Wolof", langEndonym: "Wollof", langCode: "wo" },
  { languageName: "Western Frisian", langEndonym: "Frysk", langCode: "fy" },
  { languageName: "Xhosa", langEndonym: "isiXhosa", langCode: "xh" },
  { languageName: "Yiddish", langEndonym: "ייִדיש", langCode: "yi" },
  { languageName: "Yoruba", langEndonym: "Yorùbá", langCode: "yo" },
  {
    languageName: "Zhuang, Chuang",
    langEndonym: "Saɯ cueŋƅ, Saw cuengh",
    langCode: "za"
  },
  { languageName: "Zulu", langEndonym: "isiZulu", langCode: "zu" }
];

export default langCodes;
