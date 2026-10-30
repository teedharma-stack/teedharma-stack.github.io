# teedharma-stack.github.io

## How to add content (no coding needed)
1. Upload any new files first (Add file > Upload files), e.g. `My_Model.xlsx`. Keep the exact filename.
2. Open `content.js`, click the pencil icon to edit.
3. Copy a template from the top of the file, paste it right after the line `items: [`, and fill in the text between the quotes.
4. Make sure the entry ends with `},` (brace + comma).
5. Click "Commit changes". Wait 1-2 minutes, then press Ctrl+F5 on the site.

The home page counters, the sidebar's "Latest research" list, and (soon) the Portfolio page all update by themselves.

## Your photo and CV
- Photo: upload a square photo into the `assets` folder named exactly `photo.jpg`. Until then your initials show.
- CV: to update it, just upload the new PDF named exactly `Teedharma_Somsuk_CV.pdf` (it replaces the old one). Optionally change `updated: "October 2026"` in `content.js`.

## Files you normally never touch
- `assets/style.css` (the design)
- `assets/site.js` (draws the sidebar and pages)
