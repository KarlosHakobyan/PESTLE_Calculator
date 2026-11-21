# PESTLE Calculator

A web application for strategic macro-environment analysis using the **PESTLE** framework (*Political, Economic, Social, Technological, Legal, Environmental*), featuring weighted scoring, interactive HTML5 Canvas charts, multi-language support (**RU / EN / HY**), light and dark themes, and report exports.

## Key Features

* **6 PESTLE Categories + Combined View**: manage factors across *Political*, *Economic*, *Social*, *Technological*, *Legal*, and *Environmental* dimensions, or view all factors together in one list.

* **Scoring Scale from −25 to +25**: calculate each factor score using the formula:

  $$
  \text{Score} = \text{Type } (+1 / -1) \times \text{Importance } (1\ldots5) \times \text{Impact / Likelihood } (1\ldots5)
  $$

* **Real-Time Analytics Dashboard**:

  * macro-environment favorability index (percentage with outlook summary);

  * net score, opportunity-to-threat ratio, and maximum/minimum factor scores;

  * **Top 3 Opportunities** and **Top 3 Threats** lists.

* **Interactive Charts (HTML5 Canvas)**: switch between **Radar** and **Balance** modes with automatic color adaptation for light and dark themes.

* **Filtering, Sorting, and Editing**: filter by impact type (*Opportunity / Threat*), sort by magnitude or score, and attach notes or action plans to any factor.

* **Localization and Themes**: switch between Russian (`RU`), English (`EN`), and Armenian (`HY`), as well as light and dark UI themes.

* **Info Modal**: built-in reference modal covering the PESTLE framework, scoring formula, and step-by-step usage instructions.

* **Auto-Save and Export**: automatic persistence in `localStorage`, a pre-loaded demo dataset, one-click summary copying, and **CSV** and **JSON** exports.

## Project Structure

```
pestle-calculator/
├── index.html   # Interface layout and Info modal
├── styles.css   # Styling, light/dark themes, and responsive grid
├── app.js       # Scoring logic, translations, Canvas charts, exports, and localStorage
└── README.md    # Project documentation
```

## Running the Project

The project is built with vanilla HTML, CSS, and JavaScript and requires no build step.

### Option 1: Open Directly in a Browser

Open `index.html` by double-clicking it in your file manager or via **File → Open File** in your browser.

### Option 2: Run via a Local Server

In a terminal inside the project directory, run one of the following commands:

* **Node.js**:

  ```
  npx --yes http-server -p 5500 -o
  ```

* **Python 3**:

  ```
  python -m http.server 5500
  ```

  Then open `http://localhost:5500` in your browser.

## Author

`(C) Karlos Hakobyan`
