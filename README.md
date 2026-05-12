# Chaibhai — Static Website

A simple, fast static website built with plain HTML, CSS, and vanilla JavaScript.
No build tools required. Edit files directly and push to deploy.

---

## How to edit the site

1. Open `index.html` in any text editor.
2. Search for `<!-- REPLACE:` to find every placeholder that needs your real content.
3. Edit `styles.css` to change colors, fonts, or spacing — look for the `REPLACE` comments at the top under **DESIGN TOKENS**.
4. `script.js` handles the mobile menu, scroll animations, and copyright year. You probably won't need to touch it.

---

## How to replace placeholder images

1. Add your image files to `assets/images/`.
2. In `index.html`, find the `<img>` tags and update the `src` attribute to match your filename, e.g.:
   ```html
   <img src="./assets/images/your-photo.jpg" alt="Description of photo" />
   ```
3. Suggested sizes:
   - Hero image: 1200 × 800 px, named `hero.jpg`
   - Product/menu images: 600 × 400 px
   - About photo: 800 × 600 px
4. Use `.jpg` for photos, `.png` for images with transparency, `.svg` for logos/icons.
5. Keep file names lowercase with hyphens (e.g. `masala-chai.jpg`), no spaces.

---

## How to commit and push changes

```bash
# Stage your changes
git add .

# Write a short message describing what you changed
git commit -m "Update menu and contact info"

# Push to GitHub
git push origin main
```

The site will update automatically within a minute or two after you push.

---

## How to enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/Mark-NYC/chaibhai`
2. Click **Settings** (top navigation bar of the repo).
3. In the left sidebar, click **Pages**.
4. Under **Build and deployment**:
   - **Source**: select **Deploy from a branch**
   - **Branch**: select **main**
   - **Folder**: select **/ (root)**
5. Click **Save**.
6. Wait 1–2 minutes, then reload the Settings → Pages page.
7. You'll see a green banner with your live URL.

---

## Where to find the live site URL

After enabling Pages, your site will be at:

```
https://mark-nyc.github.io/chaibhai/
```

If you don't see it immediately, wait a minute and refresh the Settings → Pages page.

---

## How to add a custom domain later

1. Buy a domain (e.g. from Namecheap, Google Domains, Cloudflare).
2. In your domain registrar's DNS settings, add:
   - **CNAME record**: `www` → `mark-nyc.github.io`
   - Or 4 **A records** pointing to GitHub's IPs (see GitHub docs: "Managing a custom domain for your GitHub Pages site").
3. In GitHub → Settings → Pages → **Custom domain**, type your domain (e.g. `www.yourdomain.com`) and click Save.
4. Check **Enforce HTTPS** once the certificate is issued (can take up to 24 hours).

---

## How to transfer this repo to someone else

1. Go to the repo **Settings** → scroll to the bottom → **Danger Zone** → **Transfer**.
2. Enter the new owner's GitHub username.
3. Confirm the transfer.

The new owner will need to re-enable GitHub Pages under their account (Settings → Pages → Save again). The site URL will change to `https://new-owner.github.io/chaibhai/` unless they set a custom domain.

Because this site uses **relative paths** (`./styles.css`, `./assets/images/...`), everything will keep working after the transfer without any code changes.

---

## File structure

```
/
  index.html       ← main page (all sections)
  styles.css       ← all styling
  script.js        ← mobile nav, scroll animations, copyright year
  README.md        ← this file
  .gitignore       ← ignores .DS_Store and other junk
  .nojekyll        ← tells GitHub Pages not to run Jekyll
  /assets
    /images
      .gitkeep     ← keeps the folder tracked by git (delete after adding images)
```
