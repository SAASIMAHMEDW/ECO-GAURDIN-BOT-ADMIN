const Bots = [
  {
    id: 1,
    name: "John",
    batteryPercentage: 85,
    batteryTemperature: 35,
    latitude: "12°51'51.5",
    longitude: "74°55'02.2",
    status: "Active",
    // lastUpdated : "2022-01-01",
  },
  {
    id: 2,
    name: "Emily",
    batteryPercentage: 60,
    batteryTemperature: 32,
    latitude: "12°50'47.7",
    longitude: "74°53'03.2",
    status: "Not Active",
  },
  {
    id: 3,
    name: "Michael",
    batteryPercentage: 92,
    batteryTemperature: 28,
    latitude: "12°48'22.9",
    longitude: "74°50'35.5",
    status: "Active",
  },
  {
    id: 4,
    name: "Sarah",
    batteryPercentage: 45,
    batteryTemperature: 33,
    latitude: "12°56'08.4",
    longitude: "74°47'19.2",
    status: "Not Active",
  },
  {
    id: 5,
    name: "David",
    batteryPercentage: 75,
    batteryTemperature: 30,
    latitude: "13°00'31.2",
    longitude: "74°47'19.2",
    status: "Active",
  },
  {
    id: 6,
    name: "Sophia",
    batteryPercentage: 50,
    batteryTemperature: 31,
    latitude: "13°03'39.8",
    longitude: "74°46'41.6",
    status: "Not Active",
  },
  {
    id: 7,
    name: "James",
    batteryPercentage: 68,
    batteryTemperature: 29,
    latitude: "12°53'51.9",
    longitude: "75°03'11.8",
    status: "Active",
  },
  {
    id: 8,
    name: "Olivia",
    batteryPercentage: 80,
    batteryTemperature: 34,
    latitude: "13°03'52.0",
    longitude: "74°46'39.8",
    status: "Active",
  },
  {
    id: 9,
    name: "Daniel",
    batteryPercentage: 40,
    batteryTemperature: 36,
    latitude: "13°13'51.0",
    longitude: "74°44'09.5",
    status: "Not Active",
  },
  {
    id: 10,
    name: "Emma",
    batteryPercentage: 95,
    batteryTemperature: 27,
    latitude: "13°20'31.7",
    longitude: "74°47'07.9",
    status: "Active",
  },
];

const BotsMarkers = [
  {
    id: 1,
    name: "John",
    location: [12.866341634891002, 74.92545135665465],
    status: "Active",
  },
  {
    id: 2,
    name: "Emily",
    location: [12.866644958992746, 74.92500342774701],
    status: "Not Active",
  },
  {
    id: 3,
    name: "Michael",
    location: [12.866618810377739, 74.9258027260373],
    status: "Active",
  },
  {
    id: 4,
    name: "Sarah",
    location: [12.866692026492915, 74.92492832589421],
    status: "Not Active",
  },
  {
    id: 5,
    name: "David",
    location: [12.866257959212174, 74.92500879216506],
    status: "Active",
  },
  {
    id: 6,
    name: "Sophia",
    location: [12.866576972588037, 74.92454745221227],
    status: "Not Active",
  },
  {
    id: 7,
    name: "James",
    location: [12.865959864379526, 74.92570884872133],
    status: "Active",
  },
  {
    id: 8,
    name: "Olivia",
    location: [12.867161868228054, 74.92515551845982],
    status: "Active",
  },
  {
    id: 9,
    name: "Daniel",
    location: [12.866260081060759, 74.92469301166115],
    status: "Not Active",
  },
  {
    id: 10,
    name: "Emma",
    location: [12.86649641180429, 74.9244888707293],
    status: "Active",
  },
];

const LargeWasteLocations = [
  {
    id: 1,
    name: "John",
    location: [12.866341634891002, 74.92545135665465],
    status: "Active",
  },
  {
    id: 5,
    name: "David",
    location: [12.866257959212174, 74.92500879216506],
    status: "Active",
  },

  {
    id: 9,
    name: "Daniel",
    location: [12.866260081060759, 74.92469301166115],
    status: "Not Active",
  },

];

const TurtlesRegion = [
  {
    id: 1,
    name: "Turtle 1",
    latitude: 12.8608,
    longitude: 74.8237,
  },
  {
    id: 2,
    name: "Turtle 2",
    latitude: 13.2107,
    longitude: 74.7981,
  },
  {
    id: 3,
    name: "Turtle 3",
    latitude: 12.8762,
    longitude: 74.8382,
  },
  {
    id: 4,
    name: "Turtle 4",
    latitude: 13.3311,
    longitude: 74.7036,
  },
  {
    id: 5,
    name: "Turtle 5",
    latitude: 12.8723,
    longitude: 74.8194,
  },
  {
    id: 6,
    name: "Turtle 6",
    latitude: 13.1799,
    longitude: 74.7345,
  },
  {
    id: 7,
    name: "Turtle 7",
    latitude: 12.8701,
    longitude: 74.8475,
  },
  {
    id: 8,
    name: "Turtle 8",
    latitude: 13.0593,
    longitude: 74.7629,
  },
  {
    id: 9,
    name: "Turtle 9",
    latitude: 12.9261,
    longitude: 74.8139,
  },
  {
    id: 10,
    name: "Turtle 10",
    latitude: 13.2365,
    longitude: 74.8005,
  },
];

export { 
  Bots, 
  BotsMarkers,
  LargeWasteLocations, 
  TurtlesRegion 
};
