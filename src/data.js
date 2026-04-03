export const ROUTES = [
  {
    id: "r1",
    shortName: "G1",
    name: "Green Loop",
    color: "#35d07f",
    glow: "rgba(53, 208, 127, 0.35)",
    activeHours: "7:00 AM - 11:00 PM",
    durationLabel: "12-16 min",
    stops: [
      { id: "r1s1", name: "Union Plaza", x: 13, y: 78 },
      { id: "r1s2", name: "Science Hall", x: 23, y: 66 },
      { id: "r1s3", name: "Library East", x: 31, y: 49 },
      { id: "r1s4", name: "Stadium Gate", x: 43, y: 33 },
      { id: "r1s5", name: "North Quad", x: 59, y: 18 }
    ]
  },
  {
    id: "r2",
    shortName: "B2",
    name: "Blue Ridge",
    color: "#3ba7ff",
    glow: "rgba(59, 167, 255, 0.35)",
    activeHours: "7:30 AM - 10:30 PM",
    durationLabel: "14-19 min",
    stops: [
      { id: "r2s1", name: "Health Center", x: 74, y: 20 },
      { id: "r2s2", name: "Arts Commons", x: 83, y: 37 },
      { id: "r2s3", name: "Bryant Transit", x: 68, y: 49 },
      { id: "r2s4", name: "Student Rec", x: 52, y: 46 },
      { id: "r2s5", name: "South Village", x: 40, y: 56 }
    ]
  },
  {
    id: "r3",
    shortName: "S7",
    name: "Sunset Express",
    color: "#ff8a3d",
    glow: "rgba(255, 138, 61, 0.35)",
    activeHours: "8:00 AM - 9:30 PM",
    durationLabel: "10-14 min",
    stops: [
      { id: "r3s1", name: "West Deck", x: 12, y: 30 },
      { id: "r3s2", name: "Engineering", x: 25, y: 37 },
      { id: "r3s3", name: "Student Center", x: 39, y: 41 },
      { id: "r3s4", name: "Business School", x: 56, y: 42 },
      { id: "r3s5", name: "Museum Walk", x: 71, y: 35 }
    ]
  },
  {
    id: "r4",
    shortName: "P4",
    name: "Purple Connector",
    color: "#b86dff",
    glow: "rgba(184, 109, 255, 0.35)",
    activeHours: "7:00 AM - 8:00 PM",
    durationLabel: "16-22 min",
    stops: [
      { id: "r4s1", name: "Innovation Hub", x: 20, y: 18 },
      { id: "r4s2", name: "Honors Hall", x: 34, y: 26 },
      { id: "r4s3", name: "Central Lawn", x: 49, y: 35 },
      { id: "r4s4", name: "Rec Fields", x: 58, y: 57 }
    ]
  },
  {
    id: "r5",
    shortName: "R9",
    name: "Red Line",
    color: "#ff5f6d",
    glow: "rgba(255, 95, 109, 0.35)",
    activeHours: "6:30 AM - 12:00 AM",
    durationLabel: "18-24 min",
    stops: [
      { id: "r5s1", name: "East Village", x: 80, y: 63 },
      { id: "r5s2", name: "Law School", x: 73, y: 73 },
      { id: "r5s3", name: "Main Library", x: 57, y: 78 },
      { id: "r5s4", name: "Commons", x: 39, y: 73 },
      { id: "r5s5", name: "Transit Center", x: 25, y: 82 }
    ]
  },
  {
    id: "r6",
    shortName: "T3",
    name: "Teal Crosstown",
    color: "#17d4c5",
    glow: "rgba(23, 212, 197, 0.35)",
    activeHours: "8:00 AM - 10:00 PM",
    durationLabel: "11-15 min",
    stops: [
      { id: "r6s1", name: "Aquatics Center", x: 76, y: 84 },
      { id: "r6s2", name: "South Quad", x: 63, y: 70 },
      { id: "r6s3", name: "Dining Hall", x: 50, y: 58 },
      { id: "r6s4", name: "Music Building", x: 35, y: 50 }
    ]
  }
];

export const BUILDINGS = [
  "Student Recreation Center",
  "Bryant Denny Stadium",
  "Science Hall",
  "North Quad",
  "Union Plaza",
  "Engineering Complex",
  "Main Library",
  "Business School",
  "Health Center",
  "Innovation Hub",
  "Aquatics Center",
  "Arts Commons"
];

export const USER_LOCATION = { x: 28, y: 61, label: "Current Location" };

export const TIMETABLES = {
  r1: ["7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM"],
  r5: ["6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM"]
};
