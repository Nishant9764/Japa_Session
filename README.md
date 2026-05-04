# 🔔 Japa Session Tool

<p align="center">
  <img src="https://img.shields.io/badge/Hare_Krishna-🙏-orange?style=for-the-badge" alt="Hare Krishna"/>
  <img src="https://img.shields.io/badge/Made_with-❤️-red?style=for-the-badge" alt="Made with Love"/>
  <img src="https://img.shields.io/badge/Platform-Web_%7C_Android-blue?style=for-the-badge" alt="Platform"/>
  <img src="https://img.shields.io/badge/Offline-Ready-green?style=for-the-badge" alt="Offline Ready"/>
</p>

<p align="center">
  <em>A distraction-free chanting session tool designed for screen-sharing over Google Meet</em>
</p>

---

## ✨ Features

- 🖼️ **Slideshow** — Auto-rotating images from `NRJD_Pics/` folder (10s per slide, smooth crossfade)
- 📿 **Mantra Overlay** — Hare Krishna Maha-mantra displayed on every slide
- ⏱️ **3-Minute Timer** — Countdown with auto-reset & restart
- 🔔 **Temple Bell** — Real temple bell sound (plays 3 times on timer completion)
- 🎛️ **Manual Controls** — Start, Pause, Reset, Next (bell + reset), Fullscreen
- 👁️ **Hideable UI** — Controls can be hidden for clean screen sharing
- 📱 **PWA** — Works offline after first load
- ⌨️ **Keyboard Shortcuts** — Full control without touching the mouse

## 🚀 Quick Start (Web)

```bash
# No dependencies needed — uses only Node.js built-in modules
node server.js
```

Open **http://localhost:3000** in Chrome 🌐

## 🖼️ Adding Images

Place `.jpg`, `.jpeg`, or `.png` files in the `NRJD_Pics/` folder. They will be auto-detected.

## 📱 Android APK Build

### Prerequisites
- Node.js 18+
- Android Studio with SDK installed
- Java 17+

### Steps

```bash
# 1. Install Capacitor
npm install @capacitor/core @capacitor/cli

# 2. Initialize Capacitor (already configured)
npx cap init "Japa Session Tool" com.nrjd.japasession --web-dir .

# 3. Add Android platform
npm install @capacitor/android
npx cap add android

# 4. Copy web assets to Android project
npx cap copy android

# 5. Open in Android Studio
npx cap open android

# 6. Build APK from Android Studio: Build > Build Bundle(s) / APK(s) > Build APK(s)
```

For the Android build, images should be bundled in the `NRJD_Pics/` folder before running `cap copy`.

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` / `Enter` | ▶️ Start / ⏸ Pause timer |
| `R` | 🔄 Reset timer to 3:00 |
| `N` | ⏭️ Next (play bell + reset) |
| `F` | 🖥️ Toggle fullscreen |
| `H` | 👁️ Hide/show controls |

## 💡 Screen Sharing Tips

1. 🌐 Open in Chrome, press `F` for fullscreen
2. 📺 In Google Meet, share the Chrome **tab** (not window) for best quality
3. 👁️ Press `H` to hide controls during sharing
4. ⌨️ Use keyboard shortcuts to control without showing UI

---

## 👨‍💻 Made by Krishna

<p align="center">
  <a href="https://www.linkedin.com/in/krishnakayaking/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="https://www.youtube.com/@TechieKrishnaKayaking"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube"/></a>
  <a href="https://www.instagram.com/techiekrishnakayaking/"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram"/></a>
  <a href="https://www.techiekrishnakayaking.com/"><img src="https://img.shields.io/badge/Website-4285F4?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Website"/></a>
  <a href="https://topmate.io/techie_krishna_kayaking"><img src="https://img.shields.io/badge/Topmate-00C853?style=for-the-badge&logo=bookstack&logoColor=white" alt="Topmate"/></a>
  <a href="https://play.google.com/store/apps/details?id=co.diaz.ycvkc&hl=en_IN"><img src="https://img.shields.io/badge/Google_Play-414141?style=for-the-badge&logo=google-play&logoColor=white" alt="Google Play"/></a>
</p>

<p align="center">🙏 Hare Krishna 🙏</p>
