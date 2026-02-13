# TODO: Fix Dark/Light Mode Toggle

**Date Created:** February 12, 2026  
**Priority:** Medium  
**Status:** Pending  

---

## 🐛 Current Issue

The dark/light mode toggle button is visible but not functioning correctly:
- App appears to be stuck in dark mode
- Toggle button doesn't switch between light and dark themes
- May be related to localStorage caching old dark mode preference

---

## 🎯 Desired Behavior

1. **Default State:** App should load in **light mode** (original soft-sage design)
2. **Toggle Functionality:** 
   - Click "Dark Mode" → Switch to dark theme
   - Click "Light Mode" → Switch back to light theme
3. **Persistence:** Remember user's choice in localStorage
4. **All Pages:** Theme should apply consistently across all 3 steps

---

## 💡 Potential Solutions to Try

### Option 1: Simple localStorage Clear
- Add a version number to localStorage key
- Force clear old `darkMode` key on app load
- Use new key like `darkMode_v2`

### Option 2: Force Light Mode Override
```javascript
// In useEffect, add:
useEffect(() => {
  // Force remove dark class on mount
  document.documentElement.classList.remove('dark');
  
  // Then check localStorage
  const saved = localStorage.getItem('darkMode');
  if (saved === 'true') {
    setDarkMode(true);
    document.documentElement.classList.add('dark');
  }
}, []);
```

### Option 3: Add Reset Button
- Add a hidden reset button for debugging
- Clears all localStorage and resets to light mode
- Useful for troubleshooting

---

## 📝 Testing Checklist

Once fixed, verify:
- [ ] Fresh load shows light mode (soft-sage background)
- [ ] Click "Dark Mode" switches to dark theme
- [ ] Click "Light Mode" switches back to light
- [ ] Refresh page remembers last choice
- [ ] Works on all 3 steps (High-Risk, Moderate-Risk, Results)
- [ ] Works in incognito/private window
- [ ] No console errors

---

## 🔍 Debugging Notes

### What We Know:
- ✅ Code builds successfully (no syntax errors)
- ✅ Dark mode classes are properly applied to all components
- ✅ Toggle button is visible and positioned correctly
- ❌ Theme not switching when button is clicked
- ❌ App defaulting to dark mode instead of light

### Files Involved:
- `src/App.jsx` - Main app component with dark mode state
- `src/index.css` - Tailwind v4 configuration with dark mode support

### Console Logs to Check:
- Current dark mode state: `console.log('Dark mode:', darkMode)`
- localStorage value: `console.log(localStorage.getItem('darkMode'))`
- Document class: `console.log(document.documentElement.classList)`

---

## 🚀 Deployment Notes

**IMPORTANT:** After fixing, test thoroughly in local dev environment BEFORE pushing to production!

```bash
# Local testing:
npm run dev
# Visit http://localhost:5173/
# Test toggle extensively
# Check browser console for errors

# Only after confirming it works:
git add .
git commit -m "fix: dark/light mode toggle functionality"
git push origin main
```

---

## ✅ Success Criteria

The issue will be considered **RESOLVED** when:
1. Fresh page load shows light mode by default
2. Toggle button successfully switches between themes
3. Theme persists across page refreshes
4. Works in both regular and incognito browsers
5. No console errors or warnings
6. Site remains stable and doesn't crash

---

## 📚 References

- **Current State:** Dark mode toggle visible but not functioning
- **Live Site:** https://www.preeclampsia-screener.com/
- **Tailwind Dark Mode Docs:** https://tailwindcss.com/docs/dark-mode
- **React State Hook Docs:** https://react.dev/reference/react/useState

---

**Notes for Tomorrow:**
- Take time to debug properly - no rush!
- Consider testing in multiple browsers (Chrome, Firefox, Edge)
- Maybe add a simple "Reset Theme" button temporarily for debugging
- Don't forget to clear browser cache when testing!

---

_Last Updated: February 12, 2026 at 10:48 PM_
