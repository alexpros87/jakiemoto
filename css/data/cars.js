const carDatabase = [
    {
        id: 1,
        name: "Toyota Yaris",
        brand: "Toyota",
        type: "Miejski",
        priceMin: 55000,
        priceMax: 85000,
        priceRange: "55 000 - 85 000 zł",
        image: "🚗",
        features: ["Niskie spalanie", "Kompaktowy", "Niezawodny", "Hybryda"],
        scores: {
            cena: 8, spalanie: 9, bezpieczenstwo: 8, komfort: 7,
            osiagi: 5, przestrzen: 4, wyposazenie: 7, niezawodnosc: 9, marka: 7
        },
        suitableFor: {
            ages: ["18-25", "26-35"],
            drivingEnv: ["miasto", "mieszane"],
            interests: ["ekologia", "technologia"],
            professions: ["student", "it", "kreatywny"]
        },
        otomotoSearch: "toyota-yaris"
    },
    {
        id: 2,
        name: "Volkswagen Golf",
        brand: "Volkswagen",
        type: "Kompakt",
        priceMin: 75000,
        priceMax: 130000,
        priceRange: "75 000 - 130 000 zł",
        image: "🚙",
        features: ["Wszechstronny", "Jakość wnętrza", "Technologia", "Bezpieczny"],
        scores: {
            cena: 6, spalanie: 7, bezpieczenstwo: 9, komfort: 8,
            osiagi: 7, przestrzen: 6, wyposazenie: 8, niezawodnosc: 8, marka: 8
        },
        suitableFor: {
            ages: ["26-35", "36-45"],
            drivingEnv: ["miasto", "mieszane", "trasa"],
            interests: ["technologia", "predkosc"],
            professions: ["it", "finanse", "sprzedaz"]
        },
        otomotoSearch: "volkswagen-golf"
    },
    {
        id: 3,
        name: "BMW Seria 3",
        brand: "BMW",
        type: "Sedan premium",
        priceMin: 140000,
        priceMax: 240000,
        priceRange: "140 000 - 240 000 zł",
        image: "🏎️",
        features: ["Premium", "Sportowy", "Luksusowe wnętrze", "Prestiż"],
        scores: {
            cena: 4, spalanie: 5, bezpieczenstwo: 9, komfort: 9,
            osiagi: 9, przestrzen: 6, wyposazenie: 9, niezawodnosc: 7, marka: 10
        },
        suitableFor: {
            ages: ["26-35", "36-45", "46-55"],
            drivingEnv: ["trasa", "mieszane"],
            interests: ["luksus", "predkosc", "technologia"],
            professions: ["finanse", "wlasciciel", "medycyna"]
        },
        otomotoSearch: "bmw-seria-3"
    },
    {
        id: 4,
        name: "Skoda Octavia",
        brand: "Skoda",
        type: "Liftback/Kombi",
        priceMin: 90000,
        priceMax: 150000,
        priceRange: "90 000 - 150 000 zł",
        image: "🚗",
        features: ["Przestronny", "Opłacalny", "Praktyczny", "Niezawodny"],
        scores: {
            cena: 8, spalanie: 7, bezpieczenstwo: 8, komfort: 8,
            osiagi: 6, przestrzen: 9, wyposazenie: 7, niezawodnosc: 8, marka: 6
        },
        suitableFor: {
            ages: ["26-35", "36-45", "46-55"],
            drivingEnv: ["mieszane", "trasa"],
            interests: ["rodzina", "podroze"],
            professions: ["sprzedaz", "medycyna", "wlasciciel"]
        },
        otomotoSearch: "skoda-octavia"
    },
    {
        id: 5,
        name: "Toyota RAV4",
        brand: "Toyota",
        type: "SUV",
        priceMin: 120000,
        priceMax: 190000,
        priceRange: "120 000 - 190 000 zł",
        image: "🚙",
        features: ["Wszechstronny", "Niezawodny", "Przestronny", "Hybryda"],
        scores: {
            cena: 6, spalanie: 7, bezpieczenstwo: 9, komfort: 8,
            osiagi: 6, przestrzen: 8, wyposazenie: 7, niezawodnosc: 10, marka: 8
        },
        suitableFor: {
            ages: ["26-35", "36-45", "46-55"],
            drivingEnv: ["mieszane", "teren"],
            interests: ["rodzina", "outdoor", "podroze"],
            professions: ["medycyna", "wlasciciel", "budownictwo"]
        },
        otomotoSearch: "toyota-rav4"
    },
    {
        id: 6,
        name: "Fiat 500",
        brand: "Fiat",
        type: "Miejski",
        priceMin: 45000,
        priceMax: 75000,
        priceRange: "45 000 - 75 000 zł",
        image: "🚗",
        features: ["Kompaktowy", "Stylowy", "Tani w utrzymaniu", "Łatwy w parkowaniu"],
        scores: {
            cena: 9, spalanie: 8, bezpieczenstwo: 6, komfort: 5,
            osiagi: 4, przestrzen: 3, wyposazenie: 5, niezawodnosc: 6, marka: 6
        },
        suitableFor: {
            ages: ["18-25", "26-35"],
            drivingEnv: ["miasto"],
            interests: ["ekologia"],
            professions: ["student", "kreatywny"]
        },
        otomotoSearch: "fiat-500"
    },
    {
        id: 7,
        name: "Mercedes-Benz Klasa E",
        brand: "Mercedes-Benz",
        type: "Limuzyna",
        priceMin: 190000,
        priceMax: 340000,
        priceRange: "190 000 - 340 000 zł",
        image: "🚘",
        features: ["Luksusowy", "Prestiżowy", "Komfortowy", "Bezpieczny"],
        scores: {
            cena: 2, spalanie: 5, bezpieczenstwo: 10, komfort: 10,
            osiagi: 8, przestrzen: 8, wyposazenie: 10, niezawodnosc: 8, marka: 10
        },
        suitableFor: {
            ages: ["36-45", "46-55", "55+"],
            drivingEnv: ["trasa", "mieszane"],
            interests: ["luksus", "technologia"],
            professions: ["wlasciciel", "finanse", "medycyna"]
        },
        otomotoSearch: "mercedes-benz-klasa-e"
    },
    {
        id: 8,
        name: "Mazda CX-5",
        brand: "Mazda",
        type: "SUV",
        priceMin: 110000,
        priceMax: 170000,
        priceRange: "110 000 - 170 000 zł",
        image: "🚙",
        features: ["Elegancki", "Jakość wykończenia", "Przyjemność jazdy", "Niezawodny"],
        scores: {
            cena: 6, spalanie: 7, bezpieczenstwo: 8, komfort: 8,
            osiagi: 7, przestrzen: 7, wyposazenie: 7, niezawodnosc: 8, marka: 7
        },
        suitableFor: {
            ages: ["26-35", "36-45"],
            drivingEnv: ["mieszane", "trasa"],
            interests: ["predkosc", "rodzina", "podroze"],
            professions: ["kreatywny", "sprzedaz", "it"]
        },
        otomotoSearch: "mazda-cx-5"
    },
    {
        id: 9,
        name: "Kia Sportage",
        brand: "Kia",
        type: "SUV",
        priceMin: 95000,
        priceMax: 155000,
        priceRange: "95 000 - 155 000 zł",
        image: "🚙",
        features: ["7 lat gwarancji", "Nowoczesny design", "Dobra cena", "Przestronny"],
        scores: {
            cena: 7, spalanie: 7, bezpieczenstwo: 8, komfort: 7,
            osiagi: 6, przestrzen: 8, wyposazenie: 8, niezawodnosc: 8, marka: 6
        },
        suitableFor: {
            ages: ["26-35", "36-45", "46-55"],
            drivingEnv: ["mieszane", "teren"],
            interests: ["rodzina", "outdoor", "podroze"],
            professions: ["medycyna", "budownictwo", "sprzedaz"]
        },
        otomotoSearch: "kia-sportage"
    },
    {
        id: 10,
        name: "Audi A4",
        brand: "Audi",
        type: "Sedan premium",
        priceMin: 130000,
        priceMax: 210000,
        priceRange: "130 000 - 210 000 zł",
        image: "🚘",
        features: ["Quattro", "Premium", "Technologia", "Jakość wykonania"],
        scores: {
            cena: 4, spalanie: 6, bezpieczenstwo: 9, komfort: 9,
            osiagi: 8, przestrzen: 7, wyposazenie: 9, niezawodnosc: 7, marka: 9
        },
        suitableFor: {
            ages: ["26-35", "36-45", "46-55"],
            drivingEnv: ["trasa", "mieszane"],
            interests: ["luksus", "technologia", "predkosc"],
            professions: ["finanse", "wlasciciel", "it"]
        },
        otomotoSearch: "audi-a4"
    },
    {
        id: 11,
        name: "Dacia Duster",
        brand: "Dacia",
        type: "SUV budżetowy",
        priceMin: 65000,
        priceMax: 100000,
        priceRange: "65 000 - 100 000 zł",
        image: "🚙",
        features: ["Najtańszy SUV", "Terenowy", "Praktyczny", "Prosty"],
        scores: {
            cena: 10, spalanie: 7, bezpieczenstwo: 6, komfort: 5,
            osiagi: 5, przestrzen: 7, wyposazenie: 4, niezawodnosc: 7, marka: 4
        },
        suitableFor: {
            ages: ["18-25", "26-35", "55+"],
            drivingEnv: ["teren", "mieszane"],
            interests: ["outdoor", "podroze"],
            professions: ["student", "budownictwo", "emeryt"]
        },
        otomotoSearch: "dacia-duster"
    },
    {
        id: 12,
        name: "Honda Civic",
        brand: "Honda",
        type: "Kompakt",
        priceMin: 85000,
        priceMax: 135000,
        priceRange: "85 000 - 135 000 zł",
        image: "🚗",
        features: ["Niezawodny", "Oszczędny", "Sportowy wygląd", "Dobra wartość"],
        scores: {
            cena: 7, spalanie: 8, bezpieczenstwo: 8, komfort: 7,
            osiagi: 7, przestrzen: 6, wyposazenie: 7, niezawodnosc: 9, marka: 7
        },
        suitableFor: {
            ages: ["18-25", "26-35", "36-45"],
            drivingEnv: ["miasto", "mieszane"],
            interests: ["predkosc", "ekologia"],
            professions: ["student", "it", "medycyna"]
        },
        otomotoSearch: "honda-civic"
    },
    {
        id: 13,
        name: "Volvo XC60",
        brand: "Volvo",
        type: "SUV premium",
        priceMin: 170000,
        priceMax: 270000,
        priceRange: "170 000 - 270 000 zł",
        image: "🚙",
        features: ["Najbezpieczniejszy", "Skandynawski design", "Rodzinny", "Premium"],
        scores: {
            cena: 4, spalanie: 6, bezpieczenstwo: 10, komfort: 9,
            osiagi: 7, przestrzen: 8, wyposazenie: 9, niezawodnosc: 8, marka: 9
        },
        suitableFor: {
            ages: ["36-45", "46-55"],
            drivingEnv: ["mieszane", "trasa"],
            interests: ["rodzina", "luksus"],
            professions: ["medycyna", "wlasciciel", "finanse"]
        },
        otomotoSearch: "volvo-xc60"
    },
    {
        id: 14,
        name: "Hyundai Tucson",
        brand: "Hyundai",
        type: "SUV",
        priceMin: 100000,
        priceMax: 165000,
        priceRange: "100 000 - 165 000 zł",
        image: "🚙",
        features: ["Nowoczesny design", "5 lat gwarancji", "Hybryda", "Przestronny"],
        scores: {
            cena: 7, spalanie: 7, bezpieczenstwo: 8, komfort: 8,
            osiagi: 6, przestrzen: 8, wyposazenie: 8, niezawodnosc: 8, marka: 6
        },
        suitableFor: {
            ages: ["26-35", "36-45", "46-55"],
            drivingEnv: ["mieszane", "miasto"],
            interests: ["rodzina", "technologia"],
            professions: ["sprzedaz", "medycyna", "it"]
        },
        otomotoSearch: "hyundai-tucson"
    },
    {
        id: 15,
        name: "Ford Focus",
        brand: "Ford",
        type: "Kompakt",
        priceMin: 65000,
        priceMax: 105000,
        priceRange: "65 000 - 105 000 zł",
        image: "🚗",
        features: ["Przyjemność jazdy", "Praktyczny", "Dobra cena", "Technologia"],
        scores: {
            cena: 7, spalanie: 7, bezpieczenstwo: 8, komfort: 7,
            osiagi: 7, przestrzen: 6, wyposazenie: 7, niezawodnosc: 7, marka: 6
        },
        suitableFor: {
            ages: ["18-25", "26-35"],
            drivingEnv: ["miasto", "mieszane"],
            interests: ["predkosc", "technologia"],
            professions: ["student", "it", "sprzedaz"]
        },
        otomotoSearch: "ford-focus"
    },
    {
        id: 16,
        name: "Opel Corsa",
        brand: "Opel",
        type: "Miejski
