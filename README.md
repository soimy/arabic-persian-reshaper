# arabic-persian-reshaper
Node.js module for reshaping Right-To-Left (Arabic/Persian) charators in string

### Usage:
```javascript
const reshaper = require('arabic-persian-reshaper');
reshaper.PersianShaper.convertArabic('ففف ف') // will reshape each charactor based on their position using Persian positions
reshaper.ArabicShaper.convertArabic('ففف ف') // will reshape each charactor based on their position using Arabic positions
```

Special thanks to @alex-clay to add support for arabic charactors!(I don't know it's missing)

### Changes in [alex's](https://github.com/alex-clay/arabic-persian-reshaper) fork:
- added charset.arabic.txt asset for soimy/msdf-bmfont-xml. This includes characters in Arabic that are not in Persian and it could be merged with charset.persian.txt safely.
- renamed index.js to PersianShaper.js
- added ArabicShaper.js which is modified from PersianShaper.js (index.js) to include characters found in Arabic. This cannot be safely merged with PersianShaper in its current form because JavaScript charCodeAt assigns the charcode for the final form of ALEF_MAKSURA 1640 to YEH_Farsi 1709
