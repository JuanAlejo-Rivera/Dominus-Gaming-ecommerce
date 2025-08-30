import type { dbproducts } from '../types';

export const db: dbproducts = {
    cpu: [
        {
            id: 1,
            name: "Intel Core i9-13900K",
            price: 579,
            image: "core9",
            description: "Procesador de 24 núcleos y 32 hilos, con turbo de hasta 5.8 GHz. Ideal para gaming competitivo y creación de contenido, con soporte para DDR5 y socket LGA1700."
        },
        {
            id: 2,
            name: "AMD Ryzen 9 7900X",
            price: 469,
            image: "ryzen9",
            description: "CPU de 12 núcleos y 24 hilos con arquitectura Zen 4. Perfecto para juegos y productividad, compatible con AM5, PCIe 5.0 y memoria DDR5."
        },
        {
            id: 3,
            name: "Intel Core i5-13600KF",
            price: 299,
            image: "core5",
            description: "14 núcleos y 20 hilos con hasta 5.1 GHz, gran opción calidad/precio para gaming en 1080p y 1440p. Requiere GPU dedicada."
        },
        {
            id: 19,
            name: "AMD Ryzen 7 5800X3D",
            price: 359,
            image: "ryzen7",
            description: "8 núcleos, 16 hilos y la innovadora 3D V-Cache. Rendimiento brutal en gaming, aún con DDR4 y AM4."
        },
        {
            id: 20,
            name: "Intel Core i7-12700K",
            price: 379,
            image: "core7",
            description: "12 núcleos híbridos con arquitectura Alder Lake. Gran balance para juegos y multitarea."
        },
        {
            id: 21,
            name: "AMD Ryzen 5 7600X",
            price: 249,
            image: "ryzen5",
            description: "6 núcleos y 12 hilos Zen 4. Una opción accesible para plataformas AM5 con DDR5."
        }
    ],
    ram: [
        {
            id: 7,
            name: "Corsair Vengeance LPX 16GB (2x8GB) DDR4",
            price: 65,
            image: "vengeance",
            description: "Kit de 3200MHz CL16 con diseño de bajo perfil, ideal para gabinetes compactos y builds confiables de gaming o uso general."
        },
        {
            id: 8,
            name: "G.Skill Trident Z RGB 32GB (2x16GB) DDR5",
            price: 179,
            image: "trident",
            description: "Memoria DDR5 a 6000MHz CL36 con iluminación RGB. Gran rendimiento para gaming y creadores que buscan velocidad y estilo."
        },
        {
            id: 9,
            name: "Kingston Fury Beast 16GB DDR5",
            price: 79,
            image: "fury",
            description: "Módulo DDR5 de 5200MHz con soporte para XMP 3.0. Accesible y confiable para actualizar a plataformas modernas."
        },
        {
            id: 22,
            name: "TeamGroup T-Force Delta RGB 32GB DDR5",
            price: 169,
            image: "delta",
            description: "Kit DDR5 a 6400MHz con diseño gaming agresivo y RGB brillante."
        },
        {
            id: 23,
            name: "Crucial Ballistix 16GB DDR4",
            price: 75,
            image: "crucial",
            description: "Memoria DDR4 de 3600MHz CL16, excelente relación calidad/precio."
        },
        {
            id: 24,
            name: "Patriot Viper Steel 64GB DDR4 (2x32GB)",
            price: 289,
            image: "viper",
            description: "Memoria de alta capacidad para edición de video, multitarea intensiva y servidores caseros."
        }
    ],
    gpu: [
        {
            id: 4,
            name: "NVIDIA GeForce RTX 4070",
            price: 549,
            image: "rtx",
            description: "GPU con 12GB GDDR6X, excelente para gaming en 1440p con Ray Tracing y DLSS 3. Gran balance entre consumo y rendimiento."
        },
        {
            id: 5,
            name: "AMD Radeon RX 7900 XT",
            price: 699,
            image: "amd",
            description: "20GB GDDR6 y arquitectura RDNA 3, diseñada para juegos en 4K y alto rendimiento en productividad a un precio competitivo."
        },
        {
            id: 6,
            name: "NVIDIA GeForce RTX 3060 Ti",
            price: 349,
            image: "3060",
            description: "Con 8GB GDDR6, es ideal para gaming en 1080p y 1440p. Ofrece gran relación calidad/precio y soporte para DLSS y Ray Tracing."
        },
        {
            id: 25,
            name: "NVIDIA GeForce RTX 4090",
            price: 1599,
            image: "4090",
            description: "Lo más potente para 4K y 3D rendering. 24GB GDDR6X con DLSS 3 y Ray Tracing de última generación."
        },
        {
            id: 26,
            name: "AMD Radeon RX 6800 XT",
            price: 529,
            image: "amd6800",
            description: "16GB GDDR6, gran rendimiento en 1440p y 4K, excelente opción frente a la RTX 3080."
        },
        {
            id: 27,
            name: "Intel Arc A770 16GB",
            price: 339,
            image: "intelarc",
            description: "GPU de Intel con 16GB GDDR6, soporte para Ray Tracing y AV1. Alternativa novedosa en la gama media."
        }
    ],
    storage: [
        {
            id: 10,
            name: "Samsung 980 Pro 1TB NVMe SSD",
            price: 109,
            image: "samsung",
            description: "SSD PCIe Gen4 con velocidades de hasta 7000 MB/s. Perfecto para juegos y programas pesados, con alta fiabilidad."
        },
        {
            id: 11,
            name: "WD Black SN850X 2TB NVMe SSD",
            price: 219,
            image: "western",
            description: "NVMe Gen4 con hasta 7300 MB/s, recomendado para gamers y creadores. Compatible con PC y consolas de nueva generación."
        },
        {
            id: 12,
            name: "Seagate Barracuda 2TB HDD",
            price: 49,
            image: "barracuda",
            description: "HDD de 7200 RPM y 256MB caché, económico y confiable para almacenamiento masivo de juegos y archivos."
        },
        {
            id: 28,
            name: "Crucial P5 Plus 1TB NVMe",
            price: 99,
            image: "memocrucial",
            description: "SSD Gen4 con velocidades de hasta 6600 MB/s, excelente para gaming rápido."
        },
        {
            id: 29,
            name: "Kingston A2000 500GB NVMe",
            price: 49,
            image: "kingston",
            description: "SSD accesible con rendimiento confiable para builds de bajo presupuesto."
        },
        {
            id: 30,
            name: "Toshiba X300 4TB HDD",
            price: 119,
            image: "toshiba",
            description: "Disco duro de alto rendimiento para almacenamiento masivo de juegos y multimedia."
        }
    ],
    psu: [
        {
            id: 13,
            name: "Corsair RM850x 850W 80+ Gold",
            price: 129,
            image: "corsair",
            description: "Fuente modular con certificación 80+ Gold. Silenciosa, eficiente y perfecta para PCs gaming de gama alta."
        },
        {
            id: 14,
            name: "EVGA SuperNOVA 750W 80+ Bronze",
            price: 89,
            image: "evga",
            description: "Fuente confiable con eficiencia Bronze y protecciones integradas. Una buena opción para builds de gama media."
        },
        {
            id: 15,
            name: "Seasonic Prime GX-850 850W 80+ Gold",
            price: 249,
            image: "seasonic",
            description: "Fuente premium con componentes japoneses y certificación Gold. Ultra eficiente y muy silenciosa."
        },
        {
            id: 31,
            name: "Cooler Master V850 SFX Gold",
            price: 159,
            image: "cooler",
            description: "Fuente compacta SFX para gabinetes pequeños, eficiente y silenciosa."
        },
        {
            id: 32,
            name: "Thermaltake Toughpower GF1 750W",
            price: 109,
            image: "toughpower",
            description: "Fuente modular con certificación Gold y componentes de alta durabilidad."
        },
        {
            id: 33,
            name: "Be Quiet! Straight Power 11 1000W",
            price: 289,
            image: "quiet",
            description: "Fuente ultra silenciosa de 1000W, ideal para equipos con GPU de gama alta."
        }
    ],
    peripherals: [
        {
            id: 16,
            name: "Logitech G Pro X Superlight",
            price: 139,
            image: "mouse_01",
            description: "Mouse gamer inalámbrico ultraligero de 63g, con sensor HERO 25K y batería de larga duración. Ideal para esports."
        },
        {
            id: 17,
            name: "SteelSeries Apex Pro TKL",
            price: 179,
            image: "keyboard_01",
            description: "Teclado mecánico con switches magnéticos ajustables y RGB. Construcción robusta y compacto para gaming competitivo."
        },
        {
            id: 18,
            name: "HyperX Cloud II Wireless",
            price: 129,
            image: "headset_01",
            description: "Auriculares inalámbricos con sonido 7.1 virtual y micrófono con cancelación de ruido. Hasta 30 horas de batería."
        },
        {
            id: 34,
            name: "Razer DeathAdder V3 Pro",
            price: 149,
            image: "razer",
            description: "Mouse ergonómico inalámbrico con sensor Focus Pro 30K. Ligero y preciso."
        },
        {
            id: 35,
            name: "ASUS ROG Claymore II",
            price: 249,
            image: "asus_keyboard",
            description: "Teclado modular inalámbrico con switches ópticos y diseño premium."
        },
        {
            id: 36,
            name: "Logitech G733 Lightspeed",
            price: 159,
            image: "g733",
            description: "Headset inalámbrico con RGB, micrófono desmontable y hasta 29 horas de batería."
        }
    ]
};
