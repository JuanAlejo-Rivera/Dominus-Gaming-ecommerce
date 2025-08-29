import type { dbproducts } from '../types';


export const db: dbproducts = {
    cpu: [
        {
            id: 1,
            name: "Intel Core i9-13900K",
            price: 589,
            image: "core9",
            description: "24 núcleos, 32 hilos, hasta 5.8 GHz, socket LGA1700"
        },
        {
            id: 2,
            name: "AMD Ryzen 9 7900X",
            price: 549,
            image: "ryzen9",
            description: "12 núcleos, 24 hilos, arquitectura Zen 4, socket AM5"
        },
        {
            id: 3,
            name: "Intel Core i5-13600KF",
            price: 319,
            image: "core5",
            description: "14 núcleos, 20 hilos, hasta 5.1 GHz, sin gráficos integrados"
        }
    ],
    ram: [
        {
            id: 7,
            name: "Corsair Vengeance LPX 16GB (2x8GB) DDR4",
            price: 79,
            image: "vengeance",
            description: "3200MHz CL16, diseño bajo perfil para compatibilidad"
        },
        {
            id: 8,
            name: "G.Skill Trident Z RGB 32GB (2x16GB) DDR5",
            price: 199,
            image: "trident",
            description: "6000MHz CL36, alto rendimiento con iluminación RGB"
        },
        {
            id: 9,
            name: "Kingston Fury Beast 16GB DDR5",
            price: 89,
            image: "fury",
            description: "5200MHz CL40, compatible con Intel XMP 3.0"
        }
    ],
    gpu: [
        {
            id: 4,
            name: "NVIDIA GeForce RTX 4070",
            price: 599,
            image: "rtx",
            description: "12GB GDDR6X, Ray Tracing, DLSS 3, ideal gaming 1440p"
        },
        {
            id: 5,
            name: "AMD Radeon RX 7900 XT",
            price: 749,
            image: "amd",
            description: "20GB GDDR6, arquitectura RDNA 3, rendimiento 4K"
        },
        {
            id: 6,
            name: "NVIDIA GeForce RTX 3060 Ti",
            price: 399,
            image: "3060",
            description: "8GB GDDR6, excelente calidad/precio para 1080p y 1440p"
        }
    ],
    storage: [
        {
            id: 10,
            name: "Samsung 980 Pro 1TB NVMe SSD",
            price: 129,
            image: "samsung",
            description: "PCIe Gen4, hasta 7000 MB/s lectura, ideal gaming"
        },
        {
            id: 11,
            name: "WD Black SN850X 2TB NVMe SSD",
            price: 249,
            image: "western",
            description: "PCIe Gen4, hasta 7300 MB/s, recomendado para creadores"
        },
        {
            id: 12,
            name: "Seagate Barracuda 2TB HDD",
            price: 55,
            image: "barracuda",
            description: "7200 RPM, 256MB caché, ideal para almacenamiento masivo"
        }
    ],
    psu: [
        {
            id: 13,
            name: "Corsair RM850x 850W 80+ Gold",
            price: 139,
            image: "corsair",
            description: "Totalmente modular, certificación Gold, silenciosa"
        },
        {
            id: 14,
            name: "EVGA SuperNOVA 750W 80+ Bronze",
            price: 109,
            image: "evga",
            description: "Confiable, eficiente y con protecciones integradas"
        },
        {
            id: 15,
            name: "Seasonic Prime GX-850 850W 80+ Gold",
            price: 299,
            image: "seasonic",
            description: "Fuente premium, ultra eficiente y silenciosa"
        }
    ],
    peripherals: [
        {
            id: 16,
            name: "Logitech G Pro X Superlight",
            price: 149,
            image: "mouse_01",
            description: "Mouse gamer inalámbrico ultraligero, 63g"
        },
        {
            id: 17,
            name: "SteelSeries Apex Pro TKL",
            price: 199,
            image: "keyboard_01",
            description: "Teclado mecánico con switches ajustables y RGB"
        },
        {
            id: 18,
            name: "HyperX Cloud II Wireless",
            price: 149,
            image: "headset_01",
            description: "Auriculares gaming con sonido envolvente 7.1"
        }
    ]
};
