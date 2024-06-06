import {
  DailyPlan,
  Itinerary,
  ItineraryPlanner,
  ItinerarySummary,
  User,
} from "../types";

export const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const mainImageUrl =
  "https://s3-alpha-sig.figma.com/img/492d/e56e/d89c0b160b0a845bc64db304a69e59f2?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yx5cWpLkVA~z9QgTNt3o0xpsyRwSSh-ksAi7Qh8gHvDVoBLlvO-7Foc8WFDSewBBuI1SLw1~8B1NQi2rDyWyDlXrWP7qhpNJj-jjzDh1bq1Rb0f82RUNoWLBr1clziKdpvVsHGMyJYeiRQU-NFodrjkwCQlnw6oUbM92fG5pAHnXE4yRy51BkN7yVndEYXPuBzOf3s0U0BDN-O7q7CSocx~A9gabJUuDeIgIpLLBmb7JoTMG8jDaaQUSQ175-qNpu0RDBDry2dzuxfKiq9iyxVKxf28ZDASeBg0mM3Q1dmmiiJPT5uOTmF~PmMZlnZtf3jFqEnhL81qojHguR4GjWA__";

export const images = [
  "https://s3-alpha-sig.figma.com/img/4444/eb6b/fa804f8f120c7832ded5f69f0a53d6ec?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fclUdWNuEYid5p5o9Sg~FPXAlNZ0N~RvOOj2V4Gn1jWkgwiisO8LelgE2~kW~X1A6yXoCapiDDdcLYbKlcECYRJK8T895ZLQj0XlheXph0bJWLCDczN~N6RfMFCIRm566UIhiK7yxsIVQE8E5kgASY9NFvTwURZno5NOaFZ1zT1T8-6Aooi7meph1ZCM5-QUPUcy2pPNU53I~BDZL2dDWV15yyb6abimzVkpIILVTw-ZuLzNkQnGRXiVqUvubEBqfO77ByPXSp6bkAuZOswcV38OQzEi5WRbOW8CdOcDagVsn1qDHGfPHvAu2n~wEfIJFKz2hOGdi3tuuhh0rq4I-g__",
  "https://s3-alpha-sig.figma.com/img/9546/a308/21605885246d7f4f1b2b27239888f55e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HWJUlMMOY~z585fKT-4BqoZ8eQA1qOoM3ST1u9-Qbq2DUv5pLxHV-NuX9I-~zo9wGmyyD0DscLlS2hEwZtJyg2m97cTmR5EwhTYZfuLdd08vmSfdP9mnD3l3fItIQmw0ds3khBzNiEMG6MCxAKczkSqS1XYfHh7wRgECZMjruRZuJ6eGZKTcF6Ln9KUU44ib-2puLhY6HZVAEWn7CSKHLbRz7n5ZLK7oQvJk3UDJioVQ-mpvKqWOgO5c4k7jjTbSiEsTd00NFR7P1d3ilj0WyDLM4agW1u8Nz1EAbTHXcK4dnV0K0TOxQPcni7ix0loVinvrRHwdyhGEInw91f8FUg__",
  "https://s3-alpha-sig.figma.com/img/dfe5/b785/657f077035a0f10865a9ae6cc21727db?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aGJZfaYlSbhEyQeVHAx9LuGZVOVIEo~uovEKO2FKWvQW~d2DD6024iBE9GlKt2PwHb1xGZDRRy0FwvRTGREQf97OzLevmA~wsUTXlXkV-PRYMiemBIRAYU5b9uePPmrxm7GMgpymEfYoueZQewbbQ3DUT4gAY0oYscG~glW2wUcfRzSZx4s-UyLNb-A-pZ-S1LMDnJC-IrGJ2bxpkj-UYXVvXZaeViszeeZ4P1INhNNiG~Y1tghIdKehHNcWL6O9l8h4IVm2SXandjps0R230-CCYk3IhpQBu77iLdBNyIIeVzV2YJ1EB0lqVNPodHSLYDN2xKF68AeQqYjY1Wm3jw__",
  "https://s3-alpha-sig.figma.com/img/886a/5121/cbf3f5f0f39db85b05b2958b397b744b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IDyc5Rs8dxSqsOuPsoD-p4GZQN0yPCckfQ8OHR60CbNPRztALvi86xUgPOi79pWoC~XrRm7vlF6C2RMJ0IgpdqtzcH4~NMmT6~LFPBeMf8elAvKgd~a2jlgeAmeW78Zijq0EFXWGTrKMcMfUyV7Vd69chVOqrMfyCBK81GT5Wvn3TvH4HfGzMLJdZfyp20EhtGI7nbFTWBFZOZM6-7xPAG4hKiDfFoxTxjbbPDSngrKcaxIMSfdrI~ucwNMOoL7vGze~r8clXf5Vi29RKgy8~CGwDGtSHuf02grxRqveyE2X4ewEM~Xa~oBtJRhnh-0oKyH2pJt~Nwtajlwn6c-DRQ__",
];

export const user: User = {
  avatarUrl:
    "https://s3-alpha-sig.figma.com/img/6b35/0c7e/993dea27641da83edc50d8e980f7f2d7?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TNDvcz-KFBq~MvjMveehgHbZ-d8W0qtD16hGCteeijAUhSp6QJiwA1xN4OFLKDrmbg2EY0BDZUXDLH2Do~bLfCXLYm7Y5gUr-oeNrggF6Px8wBva2hfs66D5u3DaVa-0~DeasP-i037VmfRDE8~Aup8~WDbX~g0Nh0n3DTOMNN3y~QV8MsA9yraKeLOlXABdTo2lIH7T0aX5egTlggZOyw1BZH0mrQVo1CvhufTXHFWYDCimYlKIOYsovFoFa7EeSPhLksSFmohxcFt0urXBgnNA6iHq34YfEQQQTbi3uMNcDDdzqVYntVAF90AGUXUQepxvL~9z75ZRSc30rtpHtQ__",
  role: "Fyno expert",
  name: "Sandra",
};

export const comment =
  "Welcome to Iceland, a land of breathtaking landscapes and unspoiled natural beauty. From its majestic waterfalls and geothermal wonders to the vibrant culture and rich history, Iceland promises an unforgettable adventure for every traveler.";

export const itinerarySummary: ItinerarySummary = {
  duration: 7,
  exploration: 4,
  flight: "7h 20m from SFO",
};

export const itineraryPlanner: ItineraryPlanner = {
  endDate: new Date(2024, 6, 11),
  from: "Reykjavík, KEF",
  to: "San Francisco, SFO",
  peopleCount: 2,
  startDate: new Date(2024, 6, 3),
};

export const itinerarys: Itinerary[] = [
  {
    id: 1,
    title: "Golden Circle Region",
    tags: ["Geysers", "Waterfalls", "Crater lakes"],
    description:
      "The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural landmarks within a relatively short distance from Reykjavík. This scenic loop includes three primary attractions: Þingvellir National Park, where you can explore the rift valley created by the diverging North American and Eurasian tectonic plates and witness the site of Iceland's ancient parliament.",
    dailyPlanId: 1,
    regionHighlights: [
      {
        id: 1,
        title: "Gullfoss Waterfall",
        isCuratorsPick: true,
        desription: "Waterfall",
        duration: "1h",
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/4444/eb6b/fa804f8f120c7832ded5f69f0a53d6ec?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fclUdWNuEYid5p5o9Sg~FPXAlNZ0N~RvOOj2V4Gn1jWkgwiisO8LelgE2~kW~X1A6yXoCapiDDdcLYbKlcECYRJK8T895ZLQj0XlheXph0bJWLCDczN~N6RfMFCIRm566UIhiK7yxsIVQE8E5kgASY9NFvTwURZno5NOaFZ1zT1T8-6Aooi7meph1ZCM5-QUPUcy2pPNU53I~BDZL2dDWV15yyb6abimzVkpIILVTw-ZuLzNkQnGRXiVqUvubEBqfO77ByPXSp6bkAuZOswcV38OQzEi5WRbOW8CdOcDagVsn1qDHGfPHvAu2n~wEfIJFKz2hOGdi3tuuhh0rq4I-g__",
      },
      {
        id: 2,
        title: "Reykjadalur Valley",
        isCuratorsPick: true,
        desription: "Iconic hike, hot springs",
        duration: "1h",
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/9546/a308/21605885246d7f4f1b2b27239888f55e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HWJUlMMOY~z585fKT-4BqoZ8eQA1qOoM3ST1u9-Qbq2DUv5pLxHV-NuX9I-~zo9wGmyyD0DscLlS2hEwZtJyg2m97cTmR5EwhTYZfuLdd08vmSfdP9mnD3l3fItIQmw0ds3khBzNiEMG6MCxAKczkSqS1XYfHh7wRgECZMjruRZuJ6eGZKTcF6Ln9KUU44ib-2puLhY6HZVAEWn7CSKHLbRz7n5ZLK7oQvJk3UDJioVQ-mpvKqWOgO5c4k7jjTbSiEsTd00NFR7P1d3ilj0WyDLM4agW1u8Nz1EAbTHXcK4dnV0K0TOxQPcni7ix0loVinvrRHwdyhGEInw91f8FUg__",
      },
      {
        id: 3,
        title: "Geysir Thermal Field",
        isCuratorsPick: false,
        desription: "Geysers",
        duration: "1h",
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/d2e6/19e3/605a00205931f0cf37a80568e5c91be8?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GOtV4H7nRUyDn0X6tUOnQpqLy-fywMpT3U2fDC4JygqO8lom0nYcGXgax9FYY0tZYHenX3hozSGq3p6IhRrtyCGyq6tez1zsuOa8WhRkKAu4ythovbelRAicVB23BrRJsRysVU10z78KIG20fMEhDnokS2hobs64diRaC8y7SB5hDYoX~bigqT0v02VOGXt4oU3Xxe9IrG~HW5xBr-YIJQHAo0OgMya2gTR1EaNXwfAqkIkNCVC0Q0ELnxO7V-WWg8Jh6ZXC0dqQUdlyB22Q8BKzXwBoiITVwc6a6nCBTVdnYYf9GlTA~jA2CUmfqW40ms3hwKXxjTmaO2R-woFg9Q__",
      },
      {
        id: 4,
        title: "Skógafoss Waterfall",
        isCuratorsPick: true,
        desription: "Iconic hike",
        duration: "1h",
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/81f0/413c/c555322d3184b28275dc999dea6bc1ae?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d8w6asK1USvWm1IbLO9NIr44546LOieM7iApZ9wnMJ8AblzUh-isZsXD1H2VbSc~fUs3Ar~JifZ4oY1voh6c-GPBustOrrwDTKjJEJQ8UX~qE-7Iut597X2806M8UE1A1ciN8uJkEA1~BZr85Tp-IP0RG6Q0RleDzAs9BFJPW3QfvE0XZLYns0P8BHccfMKsLn7orDuGdR5lqA66T9MRnpyU814Za8XAYQZhBDto2oOFl3jhf63aX8u~EVxid65VUB~w8aBwq7gXyZBJk6O90nw~6MQRodqzuDG3M1wove9MKl5EUYakXIg6lReWxFcOIFIglnrSu0kRVaitj1uvMA__",
      },
      {
        id: 5,
        title: "Katla Ice Cave",
        isCuratorsPick: true,
        desription: "Ice caves",
        duration: "1h",
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/886a/5121/cbf3f5f0f39db85b05b2958b397b744b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IDyc5Rs8dxSqsOuPsoD-p4GZQN0yPCckfQ8OHR60CbNPRztALvi86xUgPOi79pWoC~XrRm7vlF6C2RMJ0IgpdqtzcH4~NMmT6~LFPBeMf8elAvKgd~a2jlgeAmeW78Zijq0EFXWGTrKMcMfUyV7Vd69chVOqrMfyCBK81GT5Wvn3TvH4HfGzMLJdZfyp20EhtGI7nbFTWBFZOZM6-7xPAG4hKiDfFoxTxjbbPDSngrKcaxIMSfdrI~ucwNMOoL7vGze~r8clXf5Vi29RKgy8~CGwDGtSHuf02grxRqveyE2X4ewEM~Xa~oBtJRhnh-0oKyH2pJt~Nwtajlwn6c-DRQ__",
      },
    ],
    hotels: [
      {
        id: 1,
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/ac18/1bd9/039e91243794cbed6930c2a9310421d6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZ3JkFCYC8MJ9Oz5GoiqsC~6bM4p2N~HAdu6EjBhw6b01ju~VVyL1VUggdt4ZF0WYmYVVY0jniRZW0G15Dy0O-KjgMdUSGxRSU0tMF4LOxW5p2Cepi1RyQV87l65DskQmT9c~BCw~mOSy~DW~1cJd7CFgaMNWJbkHJ9Jl4Yu~dY6Y2tq~YuA3XsrUWdqE35sYDDws0LOYmXwR~AUrllcFIsU8LxOONMZRUozsabZmSzlHKqbu5Opq5WhsRWLRSZ49p75eKOYQcu-AGh7DR~kQ4TNxA~rAUxcx8BLu7N4MmwOxeD~TVyX5Mz4KNFwMq7EuceU7rvUHLfYQ~FmjWi6Pg__",
        isCuratorsPick: true,
        price: "$180+",
        rating: "9.1/10",
        title: "Frost and Fire Hotel",
        type: "Boutique hotel",
      },
      {
        id: 2,
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/9a51/539a/7fe7c7c479045a3f3ace40947fdd15ab?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aWBkjUWA01RnERShjahcPR5W-XACIQQFNU2NYibRJMxaAiZoFvWeNoUtb0--GTRCvQYKdBi8IcDBONy9OS9O22spRYEnHOkxsWBo~1cQp1cXSe7z0r8lsGbEj1cVGsSzsby75ZQNJMUpf9l~DYp3xaRx356YbSg-d7qtdac8gFn-X1Iqpsa1d3LoZsw0G8t0CLKVJsu6xcsI5~ffucnT9SXa8y-3W9geLVgF3cGUXAd~sUZrcANBiDWGah9RWGNXmSMlVNQiZSWh5243ER1fFK8YemsVVwS03xmEgmSInjtkKVh3Xwdx5Pd3u7bcLuAtpLsQQQIR7ZMFNa8adAqq5A__",
        isCuratorsPick: true,
        price: "$230+",
        rating: "9.1/10",
        title: "The Greenhouse Hotel",
        type: "Luxury hotel",
      },
      {
        id: 3,
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/88bd/1ee8/0348ad938aedf7007e096e7c1feb7496?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B8aPnpIsQAM~DeIiOSVSOp1pCFpCl3FKjgwO3i9c49TEAzinbRnu9CwMIzINeXYpa4RfItwQF1e5dg8pCZKGf0t7Xuk3fFHMvzvuh4VNXGwL~DFnzudAHZ4Ibj4z3azRRcJItkufP9Y-sVRBlqEVoi9hFP1tE1VL2M1iSOMmOKfCIGWX8R1qlXE7e-FHCih3EGzJmtZZCJP-YD7QYzIuRWsj6~X6vYyAXR1qxdECJFOIyp71Qmt2JIa0PDxkHwlIFVvSA5nmjesmhFDqusGeX5ZDTEiq~EnvNngLfa4QfEXGNLvdT-uCLWPQLL4U-yW62ldSZJ6wCvjZ8c0tsyxHgQ__",
        isCuratorsPick: false,
        price: "$130+",
        rating: "9.1/10",
        title: "INNI",
        type: "Apart hotel",
      },
      {
        id: 4,
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/dfe5/b785/657f077035a0f10865a9ae6cc21727db?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aGJZfaYlSbhEyQeVHAx9LuGZVOVIEo~uovEKO2FKWvQW~d2DD6024iBE9GlKt2PwHb1xGZDRRy0FwvRTGREQf97OzLevmA~wsUTXlXkV-PRYMiemBIRAYU5b9uePPmrxm7GMgpymEfYoueZQewbbQ3DUT4gAY0oYscG~glW2wUcfRzSZx4s-UyLNb-A-pZ-S1LMDnJC-IrGJ2bxpkj-UYXVvXZaeViszeeZ4P1INhNNiG~Y1tghIdKehHNcWL6O9l8h4IVm2SXandjps0R230-CCYk3IhpQBu77iLdBNyIIeVzV2YJ1EB0lqVNPodHSLYDN2xKF68AeQqYjY1Wm3jw__",
        isCuratorsPick: true,
        price: "$250+",
        rating: "9.1/10",
        title: "Magma Hotel",
        type: "Boutique hotel",
      },
      {
        id: 5,
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/3b1c/38f7/6ca6e744ef12e236150e6fccb3fa1b5b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JkbS3Ly4CkSzP8DCoAdiJgs-w9c5lgSctOMce5bL~w0cwJIkdJmRRl5-5cQWbtDUNSRlxVAJ8GeyCqPr8bkLLeHJrasK-0RnNkQiL0yoqw8seHX6MoPvGFj4X9q90iXaeqx5muBQsbdP~Ji2u6Z7JDK29uus4GgOed14raVqf4GOI4jYLXML9zbot56xKju5zixLVUr9DStCOGxNztazAeaoV3wYAKTLeYjYzXcjrlmVMYxBRdARbXFv3rK8~8tYNRTz2s8knD5~XcIGN71Z95-ejpp24wHU5CuQQJzCvHtYP7t9K6WUAPADGTS74zC4JyAEnd79W52OLslJWkD1VQ__",
        isCuratorsPick: false,
        price: "$150+",
        rating: "9.1/10",
        title: "Hotel Vík í Mýrdal",
        type: "Boutique hotel",
      },
    ],
  },
  {
    id: 2,
    title: "Golden Circle Region",
    tags: ["Geysers", "Geysers", "Geysers"],
    description:
      "The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural landmarks within a relatively short distance from Reykjavík. This scenic loop includes three primary attractions: Þingvellir National Park, where you can explore the rift valley created by the diverging North American and Eurasian tectonic plates and witness the site of Iceland's ancient parliament.",
    dailyPlanId: 2,
    regionHighlights: [
      {
        id: 2,
        title: "Reykjadalur Valley",
        isCuratorsPick: false,
        desription: "Iconic hike, hot springs",
        duration: "1h",
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/9546/a308/21605885246d7f4f1b2b27239888f55e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HWJUlMMOY~z585fKT-4BqoZ8eQA1qOoM3ST1u9-Qbq2DUv5pLxHV-NuX9I-~zo9wGmyyD0DscLlS2hEwZtJyg2m97cTmR5EwhTYZfuLdd08vmSfdP9mnD3l3fItIQmw0ds3khBzNiEMG6MCxAKczkSqS1XYfHh7wRgECZMjruRZuJ6eGZKTcF6Ln9KUU44ib-2puLhY6HZVAEWn7CSKHLbRz7n5ZLK7oQvJk3UDJioVQ-mpvKqWOgO5c4k7jjTbSiEsTd00NFR7P1d3ilj0WyDLM4agW1u8Nz1EAbTHXcK4dnV0K0TOxQPcni7ix0loVinvrRHwdyhGEInw91f8FUg__",
      },
      {
        id: 5,
        title: "Katla Ice Cave",
        isCuratorsPick: true,
        desription: "Ice caves",
        duration: "1h",
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/886a/5121/cbf3f5f0f39db85b05b2958b397b744b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IDyc5Rs8dxSqsOuPsoD-p4GZQN0yPCckfQ8OHR60CbNPRztALvi86xUgPOi79pWoC~XrRm7vlF6C2RMJ0IgpdqtzcH4~NMmT6~LFPBeMf8elAvKgd~a2jlgeAmeW78Zijq0EFXWGTrKMcMfUyV7Vd69chVOqrMfyCBK81GT5Wvn3TvH4HfGzMLJdZfyp20EhtGI7nbFTWBFZOZM6-7xPAG4hKiDfFoxTxjbbPDSngrKcaxIMSfdrI~ucwNMOoL7vGze~r8clXf5Vi29RKgy8~CGwDGtSHuf02grxRqveyE2X4ewEM~Xa~oBtJRhnh-0oKyH2pJt~Nwtajlwn6c-DRQ__",
      },
      {
        id: 3,
        title: "Geysir Thermal Field",
        isCuratorsPick: false,
        desription: "Geysers",
        duration: "1h",
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/d2e6/19e3/605a00205931f0cf37a80568e5c91be8?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GOtV4H7nRUyDn0X6tUOnQpqLy-fywMpT3U2fDC4JygqO8lom0nYcGXgax9FYY0tZYHenX3hozSGq3p6IhRrtyCGyq6tez1zsuOa8WhRkKAu4ythovbelRAicVB23BrRJsRysVU10z78KIG20fMEhDnokS2hobs64diRaC8y7SB5hDYoX~bigqT0v02VOGXt4oU3Xxe9IrG~HW5xBr-YIJQHAo0OgMya2gTR1EaNXwfAqkIkNCVC0Q0ELnxO7V-WWg8Jh6ZXC0dqQUdlyB22Q8BKzXwBoiITVwc6a6nCBTVdnYYf9GlTA~jA2CUmfqW40ms3hwKXxjTmaO2R-woFg9Q__",
      },
      {
        id: 4,
        title: "Skógafoss Waterfall",
        isCuratorsPick: true,
        desription: "Iconic hike",
        duration: "1h",
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/81f0/413c/c555322d3184b28275dc999dea6bc1ae?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d8w6asK1USvWm1IbLO9NIr44546LOieM7iApZ9wnMJ8AblzUh-isZsXD1H2VbSc~fUs3Ar~JifZ4oY1voh6c-GPBustOrrwDTKjJEJQ8UX~qE-7Iut597X2806M8UE1A1ciN8uJkEA1~BZr85Tp-IP0RG6Q0RleDzAs9BFJPW3QfvE0XZLYns0P8BHccfMKsLn7orDuGdR5lqA66T9MRnpyU814Za8XAYQZhBDto2oOFl3jhf63aX8u~EVxid65VUB~w8aBwq7gXyZBJk6O90nw~6MQRodqzuDG3M1wove9MKl5EUYakXIg6lReWxFcOIFIglnrSu0kRVaitj1uvMA__",
      },
      {
        id: 1,
        title: "Gullfoss Waterfall",
        isCuratorsPick: true,
        desription: "Waterfall",
        duration: "1h",
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/4444/eb6b/fa804f8f120c7832ded5f69f0a53d6ec?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fclUdWNuEYid5p5o9Sg~FPXAlNZ0N~RvOOj2V4Gn1jWkgwiisO8LelgE2~kW~X1A6yXoCapiDDdcLYbKlcECYRJK8T895ZLQj0XlheXph0bJWLCDczN~N6RfMFCIRm566UIhiK7yxsIVQE8E5kgASY9NFvTwURZno5NOaFZ1zT1T8-6Aooi7meph1ZCM5-QUPUcy2pPNU53I~BDZL2dDWV15yyb6abimzVkpIILVTw-ZuLzNkQnGRXiVqUvubEBqfO77ByPXSp6bkAuZOswcV38OQzEi5WRbOW8CdOcDagVsn1qDHGfPHvAu2n~wEfIJFKz2hOGdi3tuuhh0rq4I-g__",
      },
    ],
    hotels: [
      {
        id: 5,
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/3b1c/38f7/6ca6e744ef12e236150e6fccb3fa1b5b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JkbS3Ly4CkSzP8DCoAdiJgs-w9c5lgSctOMce5bL~w0cwJIkdJmRRl5-5cQWbtDUNSRlxVAJ8GeyCqPr8bkLLeHJrasK-0RnNkQiL0yoqw8seHX6MoPvGFj4X9q90iXaeqx5muBQsbdP~Ji2u6Z7JDK29uus4GgOed14raVqf4GOI4jYLXML9zbot56xKju5zixLVUr9DStCOGxNztazAeaoV3wYAKTLeYjYzXcjrlmVMYxBRdARbXFv3rK8~8tYNRTz2s8knD5~XcIGN71Z95-ejpp24wHU5CuQQJzCvHtYP7t9K6WUAPADGTS74zC4JyAEnd79W52OLslJWkD1VQ__",
        isCuratorsPick: false,
        price: "$150+",
        rating: "9.1/10",
        title: "Hotel Vík í Mýrdal",
        type: "Boutique hotel",
      },
      {
        id: 2,
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/9a51/539a/7fe7c7c479045a3f3ace40947fdd15ab?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aWBkjUWA01RnERShjahcPR5W-XACIQQFNU2NYibRJMxaAiZoFvWeNoUtb0--GTRCvQYKdBi8IcDBONy9OS9O22spRYEnHOkxsWBo~1cQp1cXSe7z0r8lsGbEj1cVGsSzsby75ZQNJMUpf9l~DYp3xaRx356YbSg-d7qtdac8gFn-X1Iqpsa1d3LoZsw0G8t0CLKVJsu6xcsI5~ffucnT9SXa8y-3W9geLVgF3cGUXAd~sUZrcANBiDWGah9RWGNXmSMlVNQiZSWh5243ER1fFK8YemsVVwS03xmEgmSInjtkKVh3Xwdx5Pd3u7bcLuAtpLsQQQIR7ZMFNa8adAqq5A__",
        isCuratorsPick: true,
        price: "$230+",
        rating: "9.1/10",
        title: "The Greenhouse Hotel",
        type: "Luxury hotel",
      },
      {
        id: 1,
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/ac18/1bd9/039e91243794cbed6930c2a9310421d6?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IZ3JkFCYC8MJ9Oz5GoiqsC~6bM4p2N~HAdu6EjBhw6b01ju~VVyL1VUggdt4ZF0WYmYVVY0jniRZW0G15Dy0O-KjgMdUSGxRSU0tMF4LOxW5p2Cepi1RyQV87l65DskQmT9c~BCw~mOSy~DW~1cJd7CFgaMNWJbkHJ9Jl4Yu~dY6Y2tq~YuA3XsrUWdqE35sYDDws0LOYmXwR~AUrllcFIsU8LxOONMZRUozsabZmSzlHKqbu5Opq5WhsRWLRSZ49p75eKOYQcu-AGh7DR~kQ4TNxA~rAUxcx8BLu7N4MmwOxeD~TVyX5Mz4KNFwMq7EuceU7rvUHLfYQ~FmjWi6Pg__",
        isCuratorsPick: true,
        price: "$180+",
        rating: "9.1/10",
        title: "Frost and Fire Hotel",
        type: "Boutique hotel",
      },

      {
        id: 3,
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/88bd/1ee8/0348ad938aedf7007e096e7c1feb7496?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B8aPnpIsQAM~DeIiOSVSOp1pCFpCl3FKjgwO3i9c49TEAzinbRnu9CwMIzINeXYpa4RfItwQF1e5dg8pCZKGf0t7Xuk3fFHMvzvuh4VNXGwL~DFnzudAHZ4Ibj4z3azRRcJItkufP9Y-sVRBlqEVoi9hFP1tE1VL2M1iSOMmOKfCIGWX8R1qlXE7e-FHCih3EGzJmtZZCJP-YD7QYzIuRWsj6~X6vYyAXR1qxdECJFOIyp71Qmt2JIa0PDxkHwlIFVvSA5nmjesmhFDqusGeX5ZDTEiq~EnvNngLfa4QfEXGNLvdT-uCLWPQLL4U-yW62ldSZJ6wCvjZ8c0tsyxHgQ__",
        isCuratorsPick: false,
        price: "$130+",
        rating: "9.1/10",
        title: "INNI",
        type: "Apart hotel",
      },
      {
        id: 4,
        imgUrl:
          "https://s3-alpha-sig.figma.com/img/dfe5/b785/657f077035a0f10865a9ae6cc21727db?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aGJZfaYlSbhEyQeVHAx9LuGZVOVIEo~uovEKO2FKWvQW~d2DD6024iBE9GlKt2PwHb1xGZDRRy0FwvRTGREQf97OzLevmA~wsUTXlXkV-PRYMiemBIRAYU5b9uePPmrxm7GMgpymEfYoueZQewbbQ3DUT4gAY0oYscG~glW2wUcfRzSZx4s-UyLNb-A-pZ-S1LMDnJC-IrGJ2bxpkj-UYXVvXZaeViszeeZ4P1INhNNiG~Y1tghIdKehHNcWL6O9l8h4IVm2SXandjps0R230-CCYk3IhpQBu77iLdBNyIIeVzV2YJ1EB0lqVNPodHSLYDN2xKF68AeQqYjY1Wm3jw__",
        isCuratorsPick: true,
        price: "$250+",
        rating: "9.1/10",
        title: "Magma Hotel",
        type: "Boutique hotel",
      },
    ],
  },
];

export const dailyPlans: DailyPlan[] = [
  {
    id: 1,
    days: [
      {
        id: 1,
        duration: "40m",
        items: [
          {
            id: 1,
            title: "Gullfoss Waterfall",
            isCuratorsPick: true,
            duration: "1h",
            type: "Iconic hike",
            description: "Light traffic",
            imgUrl:
              "https://s3-alpha-sig.figma.com/img/4444/eb6b/fa804f8f120c7832ded5f69f0a53d6ec?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fclUdWNuEYid5p5o9Sg~FPXAlNZ0N~RvOOj2V4Gn1jWkgwiisO8LelgE2~kW~X1A6yXoCapiDDdcLYbKlcECYRJK8T895ZLQj0XlheXph0bJWLCDczN~N6RfMFCIRm566UIhiK7yxsIVQE8E5kgASY9NFvTwURZno5NOaFZ1zT1T8-6Aooi7meph1ZCM5-QUPUcy2pPNU53I~BDZL2dDWV15yyb6abimzVkpIILVTw-ZuLzNkQnGRXiVqUvubEBqfO77ByPXSp6bkAuZOswcV38OQzEi5WRbOW8CdOcDagVsn1qDHGfPHvAu2n~wEfIJFKz2hOGdi3tuuhh0rq4I-g__",
          },
          {
            id: 2,
            title: "Reykjadalur Valley",
            isCuratorsPick: true,
            duration: "1h",
            type: "Iconic hike",
            description: "Light traffic",
            imgUrl:
              "https://s3-alpha-sig.figma.com/img/9546/a308/21605885246d7f4f1b2b27239888f55e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HWJUlMMOY~z585fKT-4BqoZ8eQA1qOoM3ST1u9-Qbq2DUv5pLxHV-NuX9I-~zo9wGmyyD0DscLlS2hEwZtJyg2m97cTmR5EwhTYZfuLdd08vmSfdP9mnD3l3fItIQmw0ds3khBzNiEMG6MCxAKczkSqS1XYfHh7wRgECZMjruRZuJ6eGZKTcF6Ln9KUU44ib-2puLhY6HZVAEWn7CSKHLbRz7n5ZLK7oQvJk3UDJioVQ-mpvKqWOgO5c4k7jjTbSiEsTd00NFR7P1d3ilj0WyDLM4agW1u8Nz1EAbTHXcK4dnV0K0TOxQPcni7ix0loVinvrRHwdyhGEInw91f8FUg__",
          },
        ],
      },
      {
        id: 2,
        duration: "1h 40m",
        items: [
          {
            id: 1,
            title: "Geysir Thermal Field",
            isCuratorsPick: true,
            duration: "1h",
            type: "Iconic hike",
            description: "Light traffic",
            imgUrl:
              "https://s3-alpha-sig.figma.com/img/d2e6/19e3/605a00205931f0cf37a80568e5c91be8?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GOtV4H7nRUyDn0X6tUOnQpqLy-fywMpT3U2fDC4JygqO8lom0nYcGXgax9FYY0tZYHenX3hozSGq3p6IhRrtyCGyq6tez1zsuOa8WhRkKAu4ythovbelRAicVB23BrRJsRysVU10z78KIG20fMEhDnokS2hobs64diRaC8y7SB5hDYoX~bigqT0v02VOGXt4oU3Xxe9IrG~HW5xBr-YIJQHAo0OgMya2gTR1EaNXwfAqkIkNCVC0Q0ELnxO7V-WWg8Jh6ZXC0dqQUdlyB22Q8BKzXwBoiITVwc6a6nCBTVdnYYf9GlTA~jA2CUmfqW40ms3hwKXxjTmaO2R-woFg9Q__",
          },
          {
            id: 2,
            title: "Thingvellir",
            isCuratorsPick: false,
            duration: "1h",
            type: "Iconic hike",
            description: "Light traffic",
            imgUrl:
              "https://s3-alpha-sig.figma.com/img/aba6/fb11/6a71f337bbad6bad1440f5896bad01bb?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=evm1eY1xbWhR6v9tHztxKG3L5GXUFjlHcbnPN9tW5RdzEQd3tx0HoY-HHk9lknlLsDFxbdeFHhUN91VjBake1MnxF8~S9opsjTn4R4pRR7YWHAo9QgnXYjwb8TH0B14nIr~6x7mbW1v8Xf4dkTNGZGkgfSEgRPVKeYP0MLQZfwHlFAUVsUsoRItOw2nQFOhw16o~MuWrF-Z~qGnJIA6LmLQU-WJr3Kwe~e4Qqq-yA6UeDB-fWfHWKMkepgNqH6QKXmItWH2kQaOEzFY2Fioj8~Jsfw6i8qgUND8zKNOs0zCNRDQ2PeHvqxnUWqHxiK~05GBjI~9TGnzfmlBIg1fxEA__",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    days: [
      {
        id: 1,
        duration: "40m",
        items: [
          {
            id: 2,
            title: "Reykjadalur Valley",
            isCuratorsPick: false,
            duration: "1h",
            type: "Iconic hike",
            description: "Light traffic",
            imgUrl:
              "https://s3-alpha-sig.figma.com/img/9546/a308/21605885246d7f4f1b2b27239888f55e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HWJUlMMOY~z585fKT-4BqoZ8eQA1qOoM3ST1u9-Qbq2DUv5pLxHV-NuX9I-~zo9wGmyyD0DscLlS2hEwZtJyg2m97cTmR5EwhTYZfuLdd08vmSfdP9mnD3l3fItIQmw0ds3khBzNiEMG6MCxAKczkSqS1XYfHh7wRgECZMjruRZuJ6eGZKTcF6Ln9KUU44ib-2puLhY6HZVAEWn7CSKHLbRz7n5ZLK7oQvJk3UDJioVQ-mpvKqWOgO5c4k7jjTbSiEsTd00NFR7P1d3ilj0WyDLM4agW1u8Nz1EAbTHXcK4dnV0K0TOxQPcni7ix0loVinvrRHwdyhGEInw91f8FUg__",
          },
          {
            id: 1,
            title: "Gullfoss Waterfall",
            isCuratorsPick: false,
            duration: "1h",
            type: "Iconic hike",
            description: "Light traffic",
            imgUrl:
              "https://s3-alpha-sig.figma.com/img/4444/eb6b/fa804f8f120c7832ded5f69f0a53d6ec?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fclUdWNuEYid5p5o9Sg~FPXAlNZ0N~RvOOj2V4Gn1jWkgwiisO8LelgE2~kW~X1A6yXoCapiDDdcLYbKlcECYRJK8T895ZLQj0XlheXph0bJWLCDczN~N6RfMFCIRm566UIhiK7yxsIVQE8E5kgASY9NFvTwURZno5NOaFZ1zT1T8-6Aooi7meph1ZCM5-QUPUcy2pPNU53I~BDZL2dDWV15yyb6abimzVkpIILVTw-ZuLzNkQnGRXiVqUvubEBqfO77ByPXSp6bkAuZOswcV38OQzEi5WRbOW8CdOcDagVsn1qDHGfPHvAu2n~wEfIJFKz2hOGdi3tuuhh0rq4I-g__",
          },
        ],
      },
      {
        id: 2,
        duration: "1h 40m",
        items: [
          {
            id: 2,
            title: "Thingvellir",
            isCuratorsPick: true,
            duration: "1h",
            type: "Iconic hike",
            description: "Light traffic",
            imgUrl:
              "https://s3-alpha-sig.figma.com/img/aba6/fb11/6a71f337bbad6bad1440f5896bad01bb?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=evm1eY1xbWhR6v9tHztxKG3L5GXUFjlHcbnPN9tW5RdzEQd3tx0HoY-HHk9lknlLsDFxbdeFHhUN91VjBake1MnxF8~S9opsjTn4R4pRR7YWHAo9QgnXYjwb8TH0B14nIr~6x7mbW1v8Xf4dkTNGZGkgfSEgRPVKeYP0MLQZfwHlFAUVsUsoRItOw2nQFOhw16o~MuWrF-Z~qGnJIA6LmLQU-WJr3Kwe~e4Qqq-yA6UeDB-fWfHWKMkepgNqH6QKXmItWH2kQaOEzFY2Fioj8~Jsfw6i8qgUND8zKNOs0zCNRDQ2PeHvqxnUWqHxiK~05GBjI~9TGnzfmlBIg1fxEA__",
          },
          {
            id: 1,
            title: "Geysir Thermal Field",
            isCuratorsPick: true,
            duration: "1h",
            type: "Iconic hike",
            description: "Light traffic",
            imgUrl:
              "https://s3-alpha-sig.figma.com/img/d2e6/19e3/605a00205931f0cf37a80568e5c91be8?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GOtV4H7nRUyDn0X6tUOnQpqLy-fywMpT3U2fDC4JygqO8lom0nYcGXgax9FYY0tZYHenX3hozSGq3p6IhRrtyCGyq6tez1zsuOa8WhRkKAu4ythovbelRAicVB23BrRJsRysVU10z78KIG20fMEhDnokS2hobs64diRaC8y7SB5hDYoX~bigqT0v02VOGXt4oU3Xxe9IrG~HW5xBr-YIJQHAo0OgMya2gTR1EaNXwfAqkIkNCVC0Q0ELnxO7V-WWg8Jh6ZXC0dqQUdlyB22Q8BKzXwBoiITVwc6a6nCBTVdnYYf9GlTA~jA2CUmfqW40ms3hwKXxjTmaO2R-woFg9Q__",
          },
        ],
      },
    ],
  },
];
