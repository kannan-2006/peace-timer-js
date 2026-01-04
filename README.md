# 🧘‍♂️ Peace Timer

**Peace Timer** is a mindfulness web app that helps you unplug for a bit. Choose from a set of short timers—20 seconds, 30 seconds, 40 seconds, or a full minute—and let yourself just breathe while the countdown runs.

## ✨ Features

* **Preset Durations:** Jump right in with one tap—20, 30, 40 seconds, or a minute.
* **Live Countdown:** The timer updates every second, so you always see how much time you have left.
* **Automatic Reset:** Start a new timer anytime. If you already have one running, the app stops it and starts fresh—no weird overlaps.
* **Session Complete Message:** When time’s up, you get a clear “Your moment is complete” message.
* **Clean, Calm Design:** Soft gradient backgrounds and a centered, card-style layout give the app a relaxing vibe. Bootstrap 4 keeps everything tidy and responsive.

## 🛠️ Built With

* **HTML5:** Structure for the timer, buttons, and headings.
* **CSS3:** Custom styles for gradients, layout, and button sizing.
* **Bootstrap 4:** Flexbox utilities (`d-flex`, `justify-content-center`) for centering content.
* **JavaScript (Vanilla):** Handles all the timing, interval clearing, and UI updates.

## 🚀 How It Works

Everything revolves around the `decreaseTimer` function.

1. **Pick a Time:** Click any time button—the script grabs the number of seconds from the button’s text.
2. **Manage State:** If another timer’s already running, the script clears it before starting a new one.
3. **Run the Countdown:** It sets up a new interval. Every second, it subtracts one from the timer and updates the display.
4. **Finish the Session:** When the timer hits zero, it clears the interval and shows your completion message.

## 📂 Project Structure

* `Peace Timer.html`: Contains the HTML—the main layout, header, and timer buttons.
* `Peace Timer.css`: All the styling—gradients, button layouts, and responsive tweaks.
* `Peace Timer.js`: Handles the countdown logic, button clicks, and timer updates.
