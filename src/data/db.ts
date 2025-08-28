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
            image: "ram_01",
            description: "3200MHz CL16, diseño bajo perfil para compatibilidad"
        },
        {
            id: 8,
            name: "G.Skill Trident Z RGB 32GB (2x16GB) DDR5",
            price: 199,
            image: "ram_02",
            description: "6000MHz CL36, alto rendimiento con iluminación RGB"
        },
        {
            id: 9,
            name: "Kingston Fury Beast 16GB DDR5",
            price: 89,
            image: "ram_03",
            description: "5200MHz CL40, compatible con Intel XMP 3.0"
        }
    ],

};
