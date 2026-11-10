// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// PLACEHOLDER values are marked — replace them when the owner sends real data
// (App Store ID → run the iTunes lookup and refresh `app`).

export const site = {
  brand: "Yi Home",
  email: "gonzaloit@cifuentes.store",
  year: new Date().getFullYear(),
  // PLACEHOLDER: operator (legal entity) comes with the owner's Terms of Use.
  operator: "PLACEHOLDER",
  // PLACEHOLDER: replace with the trademark wording from the owner's Terms.
  disclaimer: "Live view, controls and alerts for your YI cameras on iPhone.",
};

export const app = {
  id: "6825845993",
  url: "https://apps.apple.com/app/id6825845993",
  // App isn't live yet (iTunes lookup returns 0 results, 2026-11-10).
  // Refresh from https://itunes.apple.com/lookup?id=6825845993 after release.
  minIOS: "PLACEHOLDER",
  category: "PLACEHOLDER",
};

export const nav = [
  { to: "/app", label: "App" },
  { to: "/about", label: "About" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
];

// Everything below follows the app's own screens (Figma "Yi-home-V1"):
// Cameras, Controller, Activity, Alerts, Camera settings, AI Chat, Select Model.
export const facts = ["Live view", "Pan and tilt controller", "Person and animal detection", "Security alerts", "AI Assistant", "Indoor, outdoor and wireless models"];

export const features = [
  {
    key: "cameras",
    title: "All your cameras on one screen",
    text: "Swipe between cameras on the Cameras tab and open any of them in one tap. Add a new one whenever you need.",
    img: "/images/screen-home.webp",
  },
  {
    key: "activity",
    title: "Activity, hour by hour",
    text: "Person Detected and Animal Detected events line up on a timeline. Tap to replay.",
    img: "/images/screen-live-activity.webp",
  },
  {
    key: "controller",
    title: "Steer the view",
    text: "Pan and tilt with the Controller, take a snapshot or start recording while you watch live.",
    img: "/images/screen-controller.webp",
  },
  {
    key: "ai",
    title: "Ask the AI Assistant",
    text: "Stuck on connection issues, alerts or saving recordings? Ask in AI Chat and get an answer right in the app.",
    img: "/images/screen-ai-home.webp",
  },
];

// Model names exactly as listed on the Select Model screen.
export const models: Record<"Outside" | "Wireless" | "Indoor", string[]> = {
  Outside: [
    "YI 2K Outdoor Dome Camera",
    "YI 2K Outdoor Camera 1080p",
    "Kami Outdoor Security Camera",
    "YI 1080p Outdoor PTZ Camera",
    "YI Outdoor 2K Pro Camera",
    "YI 4G Battery Camera",
  ],
  Wireless: ["YI 2K Pan-Tilt Outdoor Solar", "Kami Wire-Free Camera", "Kami Wireless Outdoor Camera", "Kami Wire-Free Solar Camera 2"],
  Indoor: [
    "Kami Fall Detect Camera",
    "YI Dome Guard Smart IP PTZ",
    "YI 2K Light Bulb Security Camera",
    "YI Dual-Lens Indoor Camera",
    "YI Home Camera",
    "YI 1080p Home Camera",
  ],
};

// Event cards use the labels and sample data from the app's Activity / Alerts screens.
export const alerts = [
  { title: "Person Detected", camera: "YI Camera 2342", meta: "Family Room, 21:32 21 Jun 2026", dot: "live" },
  { title: "Animal Detected", camera: "YI Camera 2342", meta: "Family Room, 13:12 21 Jul 2026", dot: "warn" },
];

export const steps = [
  { n: "Step 1", title: "Download the app", text: "Get Yi Home from the App Store, pick your region and sign in.", icon: true },
  { n: "Step 2", title: "Add your camera", text: "Tap Add new, choose your model in Select Model and enter your Wi‑Fi name and password." },
  { n: "Step 3", title: "Scan and watch", text: "Show the QR code to the camera. When you hear “QR Code Scanned successfully”, press Next and you’re live." },
];

// Suggested names from the Camera Info screen.
export const rooms = ["Living Room", "Kitchen", "Dining Room", "Children", "Garden", "Bedroom"];

export const appFeatures = [
  { title: "Live view", text: "Watch a camera live with the date, time and battery level on screen. Snapshot, record and sound are one tap away.", img: "/images/screen-controller.webp" },
  { title: "Controller", text: "A round pad pans and tilts the camera, so you can look around the room without moving it.", img: "/images/screen-controller.webp" },
  { title: "Activity and Alerts", text: "Every Person Detected, Animal Detected and Low Battery event, grouped by day with the camera and time.", img: "/images/screen-alerts.webp" },
  { title: "Camera settings", text: "Person, Animal and Motion Detection each have their own switch. Remove a camera from the same screen.", img: "/images/screen-camera-settings.webp" },
  { title: "AI Chat", text: "The AI Assistant answers questions about connection issues, how alerts work and how to save recordings.", img: "/images/screen-ai-chat.webp" },
];

export const reel = ["home", "controller", "activity", "ai-chat", "select-model", "qr"].map((n) => `/images/screen-${n}.webp`);

export const specs: [string, string, boolean?][] = [
  ["Platform", "iPhone"],
  ["Tabs", "Cameras, Activity, AI Chat"],
  ["Cameras", "YI and Kami models: outdoor, wireless and indoor"],
  ["Detection", "Person, animal and motion"],
  ["Pairing", "Wi‑Fi and QR code"],
  // PLACEHOLDER rows — fill from the iTunes lookup after release (no version number).
  ["Requires", "iOS version from the App Store listing", true],
  ["Category, size, price", "From the App Store listing", true],
  ["Language", "English"],
];

export const principles = [
  { n: "1", title: "Live first", text: "Your cameras are the home screen. No feeds or banners between you and the picture." },
  { n: "2", title: "Alerts you choose", text: "Person, animal and motion detection each have their own switch, per camera." },
  { n: "3", title: "Help in the app", text: "The AI Assistant covers connection issues, alerts and recordings, right where you need it." },
];

export const faq = [
  { q: "How do I add a camera?", a: "On the Cameras tab tap Add new, then choose your model in Select Model. Enter your Wi‑Fi name and password on the Wi‑Fi Setup screen, show the QR code to the camera and press Next when you hear “QR Code Scanned successfully”." },
  { q: "Which cameras are supported?", a: "The models listed in Select Model, grouped as Outside, Wireless and Indoor: YI and Kami cameras." },
  { q: "The QR code isn’t scanned. What now?", a: "Hold the phone 15–20 cm from the lens, raise the screen brightness and check the Wi‑Fi name and password on the Wi‑Fi Setup screen. Then try again." },
  { q: "How do I turn on Security alerts?", a: "Open Settings and turn on Security alerts. For each camera, choose Person, Animal and Motion Detection in Camera settings." },
  { q: "How do I replay an event?", a: "Open Activity, pick the day and tap an event. Each one shows Tap to replay." },
  { q: "How do I remove a camera?", a: "Open the camera, tap the settings icon, then Remove Camera." },
  { q: "How do I cancel my subscription?", a: "Subscriptions are billed through your Apple ID. Manage or cancel them in your iPhone's Settings → your name → Subscriptions. Deleting the app doesn't cancel an active subscription." },
  { q: "How do I restore a purchase?", a: "Previous purchases can be restored in the app with the same Apple ID they were made with. Refunds and billing are handled by Apple." },
];
