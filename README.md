Commo Fundamentals

A free, offline-first field reference and toolkit for communications work — reference cards, field calculators, report formats, land navigation, and notes, all in a single web page that installs to your phone's home screen and runs with no signal.

No app store. No account. No data leaves your phone.

▶️ Open the app: https://YOUR-USERNAME.github.io/YOUR-REPO/

⚠️ Read first
Unclassified reference only. This app contains general, publicly available communications and land-navigation fundamentals. It is not a technical manual, contains no system-specific or controlled information, and is not a substitute for official doctrine, orders, or current publications.
Consumer-grade accuracy. Land Nav uses your phone's own GPS and magnetometer. Expect roughly 3–10 m position accuracy under open sky — good for general navigation, not survey or targeting precision. Always confirm against a known point and your issued equipment.
The phone is the limit. GPS and compass only run while the app is open and the screen is on, and the compass needs calibration (a figure-8 motion) and must be kept away from metal and magnets. Keep a map and a lensatic compass as your primary.
What's inside
Reference cards — antennas & propagation, RF & safety, and a general comms reference, plus a searchable glossary.
Field calculators — antenna cutting lengths, TACSAT azimuth/elevation, coordinate conversion (DD ⇄ DM/DMS/MGRS and MGRS → lat/long), distance & bearing, line-of-sight range, RF math (dBm, cable loss, VSWR), and an azimuth converter.
Report builders — fill-in formats for common field reports, copy to clipboard.
PACE planner and field checklists.
Land Nav (offline GPS) — live position in MGRS and lat/long; enter waypoints from an 8-/10-digit grid or lat/long; distance and true/grid/magnetic bearings; a homing arrow with turn directions; a compass rose with automatic magnetic declination (World Magnetic Model 2025); and a north-up plot of your waypoints.
Notes — folders, kept locally on your device, with backup/restore.
Live Zulu (UTC) clock and date-time group.
Hurry & Wait — a couple of offline games for the downtime.

Everything works offline once the app has been opened online a single time.

📲 Install it on your phone

This is a web app — you open one link, save it to your home screen, and from then on it launches and behaves like a normal app, including working with no signal.

⚠️ Do this once while you have internet. The first time you open the app online, it saves itself to your phone so it can run offline afterward (field, airplane mode, dead zones — it all still works).

🍎 iPhone / iPad

Must be done in Safari — Chrome on iPhone cannot add home-screen apps.

Open the link above in Safari.
Tap the Share button (the square with an arrow pointing up).
Scroll down and tap Add to Home Screen.
Tap Add (top-right).
🤖 Android

Use Chrome (or any Chromium browser — Edge, Brave, Samsung Internet).

Open the link above in Chrome.
Tap the ⋮ menu (three dots, top-right).
Tap Add to Home screen (it may say Install app).
Tap Add / Install to confirm.
✅ After it's installed
Works offline. Once opened online a single time, everything runs with no connection.
Launches like an app. Full-screen, its own icon, no address bar.
Your notes and waypoints stay on your phone. Nothing is uploaded anywhere.
To update: open the app while you have internet once in a while — it quietly pulls the newest version in the background and uses it next launch.
🔧 Troubleshooting
Problem	Fix
"Add to Home Screen" is missing	On iPhone you must use Safari, not Chrome.
App won't load offline	Open it online one time first so it can cache itself.
Still on an old version	Open it once with internet, then fully close and reopen.
Location/compass not working	Open Land Nav → Enable sensors and allow the permission prompt.
Privacy

The app runs entirely in your browser. There are no accounts, no analytics, and no servers — your notes, waypoints, and settings are stored only on your own device and are never transmitted. GPS and compass readings are used on-device for navigation and are not recorded or sent anywhere.

For maintainers

Static site, two files served from the repo root: index.html (the whole app) and sw.js (the offline service worker). Host on any HTTPS static host; GitHub Pages works out of the box. HTTPS is required for the service worker, geolocation, and device orientation. To release an update, replace index.html and bump the CACHE constant in sw.js (e.g. ...-v2 → ...-v3) so installed clients refresh automatically.

License & disclaimer

Provided as-is, with no warranty, for general reference and training familiarization. The authors are not responsible for decisions made using this tool. Always verify critical information against official, current sources and your issued equipment.
