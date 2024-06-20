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

const hotel =
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/fb/65/a9/frost-and-fire-hotel.jpg?w=700&h=-1&s=1";

const geyser =
  "https://static.wixstatic.com/media/df9fb8_95480ca40bef45cd871e104b54767506~mv2.jpg/v1/fill/w_640,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/df9fb8_95480ca40bef45cd871e104b54767506~mv2.jpg";

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
        imgUrl: geyser,
      },
      {
        id: 2,
        title: "Reykjadalur Valley",
        isCuratorsPick: true,
        desription: "Iconic hike, hot springs",
        imgUrl: geyser,
        duration: "1h",
      },
      {
        id: 3,
        title: "Geysir Thermal Field",
        isCuratorsPick: false,
        desription: "Geysers",
        imgUrl: geyser,
        duration: "1h",
      },
      {
        id: 4,
        title: "Skógafoss Waterfall",
        isCuratorsPick: true,
        desription: "Iconic hike",
        imgUrl: geyser,
        duration: "1h",
      },
      {
        id: 5,
        title: "Katla Ice Cave",
        isCuratorsPick: true,
        desription: "Ice caves",
        imgUrl: geyser,
        duration: "1h",
      },
    ],
    hotels: [
      {
        id: 1,
        imgUrl: hotel,
        isCuratorsPick: true,
        price: "$180+",
        rating: "9.1/10",
        title: "Frost and Fire Hotel",
        type: "Boutique hotel",
      },
      {
        id: 2,
        isCuratorsPick: true,
        price: "$230+",
        rating: "9.1/10",
        title: "The Greenhouse Hotel",
        imgUrl: hotel,
        type: "Luxury hotel",
      },
      {
        id: 3,
        imgUrl: hotel,
        isCuratorsPick: false,
        price: "$130+",
        rating: "9.1/10",
        title: "INNI",
        type: "Apart hotel",
      },
      {
        id: 4,
        imgUrl: hotel,
        isCuratorsPick: true,
        price: "$250+",
        rating: "9.1/10",
        title: "Magma Hotel",
        type: "Boutique hotel",
      },
      {
        id: 5,
        imgUrl: hotel,
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
        imgUrl: geyser,
      },
      {
        id: 5,
        title: "Katla Ice Cave",
        isCuratorsPick: true,
        desription: "Ice caves",
        duration: "1h",
        imgUrl: geyser,
      },
      {
        id: 3,
        title: "Geysir Thermal Field",
        isCuratorsPick: false,
        desription: "Geysers",
        duration: "1h",
        imgUrl: geyser,
      },
      {
        id: 4,
        title: "Skógafoss Waterfall",
        isCuratorsPick: true,
        desription: "Iconic hike",
        duration: "1h",
        imgUrl: geyser,
      },
      {
        id: 1,
        title: "Gullfoss Waterfall",
        isCuratorsPick: true,
        desription: "Waterfall",
        duration: "1h",
        imgUrl: geyser,
      },
    ],
    hotels: [
      {
        id: 5,
        isCuratorsPick: false,
        price: "$150+",
        rating: "9.1/10",
        title: "Hotel Vík í Mýrdal",
        type: "Boutique hotel",
        imgUrl: hotel,
      },
      {
        id: 2,
        isCuratorsPick: true,
        price: "$230+",
        rating: "9.1/10",
        title: "The Greenhouse Hotel",
        type: "Luxury hotel",
        imgUrl: hotel,
      },
      {
        id: 1,
        isCuratorsPick: true,
        price: "$180+",
        rating: "9.1/10",
        title: "Frost and Fire Hotel",
        type: "Boutique hotel",
        imgUrl: hotel,
      },

      {
        id: 3,
        isCuratorsPick: false,
        price: "$130+",
        rating: "9.1/10",
        title: "INNI",
        type: "Apart hotel",
        imgUrl: hotel,
      },
      {
        id: 4,
        isCuratorsPick: true,
        price: "$250+",
        rating: "9.1/10",
        title: "Magma Hotel",
        type: "Boutique hotel",
        imgUrl: hotel,
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
            imgUrl: geyser,
          },
          {
            id: 2,
            title: "Reykjadalur Valley",
            isCuratorsPick: true,
            duration: "1h",
            type: "Iconic hike",
            description: "Light traffic",
            imgUrl: geyser,
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
            imgUrl: geyser,
          },
          {
            id: 2,
            title: "Thingvellir",
            isCuratorsPick: false,
            duration: "1h",
            type: "Iconic hike",
            description: "Light traffic",
            imgUrl: geyser,
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
            imgUrl: geyser,
          },
          {
            id: 1,
            title: "Gullfoss Waterfall",
            isCuratorsPick: false,
            duration: "1h",
            type: "Iconic hike",
            description: "Light traffic",
            imgUrl: geyser,
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
            imgUrl: geyser,
          },
          {
            id: 1,
            title: "Geysir Thermal Field",
            isCuratorsPick: true,
            duration: "1h",
            type: "Iconic hike",
            imgUrl: geyser,
            description: "Light traffic",
          },
        ],
      },
    ],
  },
];
