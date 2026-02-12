# Preeclampsia Risk Screener

An evidence-based clinical decision support tool for assessing preeclampsia risk and aspirin prophylaxis eligibility based on ACOG and USPSTF guidelines.

## 🩺 Overview

This web-based screener helps healthcare professionals identify pregnant patients who may benefit from low-dose aspirin prophylaxis to reduce preeclampsia risk.

**Live Tool:** [https://chukwumaonyeije.github.io/preeclampsia-screener/](https://chukwumaonyeije.github.io/preeclampsia-screener/)

## ✨ Modern React Version

This repository includes two versions:
1. **Static HTML Version** (`index.html`) - Single-file, lightweight screener
2. **Modern React Version** - Beautiful, interactive, mobile-first application

### Modern React Features
- **Conversational UI**: Step-by-step question flow with smooth animations
- **Serene Design**: Custom color palette (maternal-teal, soft-sage, clay) for a calming healthcare experience
- **Smooth Transitions**: Framer Motion animations for elegant user experience
- **Mobile-First**: Fully responsive with touch-optimized interactions
- **Progress Tracking**: Visual progress bar and step indicators
- **Faded Disclaimers**: Legally compliant medical disclaimers that are present but not visually overwhelming
- **Print Support**: Results can be printed for patient records

### Technology Stack
- React 18+ with Vite for fast development
- Tailwind CSS for utility-first styling
- Framer Motion for smooth animations
- Lucide React for beautiful icons
- Google Fonts (Inter + Playfair Display)

## Clinical Guidelines

Based on:
- [ACOG Practice Advisory (2021)](https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2021/12/clinical-guidance-for-the-integration-of-the-findings-of-the-us-preventive-services-task-force-recommendation-on-aspirin-use-to-prevent-preeclampsia)
- [USPSTF Recommendation (2021)](https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/aspirin-use-to-prevent-preeclampsia-and-related-morbidity-and-mortality)

### Recommendation Criteria

**Aspirin (81mg daily) is recommended if:**
- ≥1 high-risk factor present, OR
- ≥2 moderate-risk factors present

**Timing:** Start between 12-28 weeks gestation (optimally before 16 weeks), continue until delivery.

## 🚀 Getting Started (React Version)

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173/`

## Usage

This tool is designed for:
- Healthcare professionals (OB/GYNs, MFM specialists, midwives, etc.)
- Clinical education and training
- Point-of-care decision support

## ⚠️ Important Disclaimer

**This tool is for informational and educational purposes only.** It does NOT provide medical advice, diagnosis, or treatment recommendations.

All therapeutic decisions must be made in consultation with qualified healthcare providers, including:
- Board-certified obstetrician-gynecologists (OB/GYN)
- Maternal-fetal medicine (MFM) specialists
- Other qualified healthcare professionals

Always consider individual patient circumstances, contraindications, and patient preferences.

## 📁 Project Structure

```
preeclampsia-screener/
├── index.html              # Static HTML version (legacy)
├── src/
│   ├── App.jsx            # Main React application
│   ├── index.css          # Tailwind CSS configuration
│   └── main.jsx           # React entry point
├── public/                # Static assets
├── tailwind.config.js     # Tailwind configuration with custom colors
├── vite.config.js         # Vite configuration
└── package.json           # Dependencies
```

## 🎨 Design Philosophy

The modern version follows these principles:
1. **Medical Trust**: Serene, professional color palette that instills confidence
2. **Conversational Flow**: One question at a time reduces cognitive load
3. **Mobile-First**: Optimized for use on phones and tablets in clinical settings
4. **Subtle Compliance**: Medical disclaimers are present but don't dominate the interface
5. **Accessibility**: Keyboard navigation, screen reader support, and WCAG compliance

## License

MIT License - Free for educational and clinical use

## Contributing

Issues and pull requests welcome. Please ensure any changes maintain clinical accuracy and adhere to current ACOG/USPSTF guidelines.

---

**Created for clinical education and healthcare professional decision support**
