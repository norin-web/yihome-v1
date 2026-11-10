// Every brand / app fact lives here so names, IDs and emails are never duplicated.
// PLACEHOLDER values are marked — replace them when the owner sends real data
// (App Store ID → run the iTunes lookup and refresh `app`).

export const site = {
  brand: "Yi Home",
  email: "gonzaloit@cifuentes.store",
  year: new Date().getFullYear(),
  operator: "Gonzalo Cifuentes",
  address: "Calle Martínez Maldonado 91, Málaga, Spain",
  tagline: "Live view, controls and alerts for your YI cameras on iPhone.",
  // wording follows section 9 of the owner's Terms of Use
  disclaimer: "Yi Home for iPhone by Gonzalo Cifuentes. YI and YI Home trademarks and related brand assets are used under authorization and remain the property of their respective rights holder. Apple and HomeKit are trademarks of Apple Inc.",
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
export const facts = ["Live view", "Pan and tilt controller", "Person and animal detection", "Save to Photos", "AI Assistant", "Indoor, outdoor and wireless models"];

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
    text: "Stuck on connection issues, alerts or saving recordings? Ask in AI Chat. It works with text only, your camera images stay out of it.",
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
  ["Pairing", "QR code setup with Wi‑Fi guidance, through HomeKit"],
  ["Privacy", "Camera video isn't uploaded to our servers; AI Chat sends text only"],
  ["Notifications", "Local, generated on your iPhone"],
  ["Developer", "Gonzalo Cifuentes, Málaga, Spain"],
  // PLACEHOLDER rows — fill from the iTunes lookup after release (no version number).
  ["Requires", "iOS version from the App Store listing", true],
  ["Category, size, price", "From the App Store listing", true],
  ["Language", "English"],
];

export const principles = [
  { n: "1", title: "Live first", text: "Your cameras are the home screen. No feeds or banners between you and the picture." },
  { n: "2", title: "Alerts you choose", text: "Person, animal and motion detection each have their own switch, per camera." },
  { n: "3", title: "Your video stays yours", text: "Camera video, recordings and event media are not uploaded to our servers. Saved clips go to your Photos." },
];

export const faq = [
  { q: "How do I add a camera?", a: "On the Cameras tab tap Add new, then choose your model in Select Model. Enter your Wi‑Fi name and password on the Wi‑Fi Setup screen, show the QR code to the camera and press Next when you hear “QR Code Scanned successfully”." },
  { q: "Which cameras are supported?", a: "The models listed in Select Model, grouped as Outside, Wireless and Indoor. Available features depend on the camera model, its software, HomeKit support and your network, so not every function works on every camera." },
  { q: "The QR code isn’t scanned. What now?", a: "Hold the phone 15–20 cm from the lens, raise the screen brightness and check the Wi‑Fi name and password on the Wi‑Fi Setup screen. Then try again." },
  { q: "How do I turn on Security alerts?", a: "Open Settings and turn on Security alerts, and allow notifications when iOS asks. For each camera, choose Person, Animal and Motion Detection in Camera settings. Notifications are generated on your iPhone." },
  { q: "How do I replay an event?", a: "Open Activity, pick the day and tap an event. Each one shows Tap to replay. To keep a clip, save it to your Photos library." },
  { q: "Is Yi Home a security monitoring service?", a: "No. It isn't an emergency response service or professional security monitoring. Detection, notifications and playback can be delayed or unavailable because of network conditions or hardware limits." },
  { q: "What does the AI Assistant see?", a: "Only the text you type and the earlier messages in that chat, which are sent to OpenAI to generate a reply. Images, video and recordings from your cameras are not sent. Avoid typing sensitive personal details." },
  { q: "Where is my data stored?", a: "Camera settings, activity history and AI chats are stored on your iPhone. Camera video and recordings are not uploaded to our servers." },
  { q: "How do I delete my account?", a: "Open Settings → Delete Account. It removes the account information kept on your device. Clips saved to Photos have to be deleted in Photos, and an active subscription has to be canceled separately." },
  { q: "How do I remove a camera?", a: "Open the camera, tap the settings icon, then Remove Camera." },
  { q: "How do I cancel my subscription?", a: "Subscriptions are billed to your Apple Account. Manage or cancel them in your iPhone's Settings → your name → Subscriptions. Deleting the app or your local account doesn't cancel an active subscription." },
  { q: "How do I restore a purchase?", a: "Use the restore purchases option in the app with the same Apple Account the subscription was bought with. Billing, cancellations and refunds are handled by Apple." },
];
