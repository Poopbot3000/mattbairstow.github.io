# Matt Bairstow — Portfolio Site

A dark, minimal artist/maker portfolio built as a static site, hosted free on GitHub Pages.

---

## Folder Structure

```
your-repo/
│
├── index.html                  ← Homepage (your name + 6 project rows)
│
├── projects/
│   ├── project-01.html         ← Project subpage (copy this for each project)
│   ├── project-02.html
│   ├── project-03.html
│   ├── project-04.html
│   ├── project-05.html
│   └── project-06.html
│
└── assets/
    └── images/
        ├── placeholder.jpg     ← Replace with your actual images
        ├── project-01-hero.jpg
        ├── project-01-process-1.jpg
        └── (etc.)
```

---

## Setup: GitHub Pages (Step by Step)

### 1. Create a GitHub account
Go to https://github.com and sign up if you don't have one.

### 2. Create a new repository
- Click the **+** icon (top right) → **New repository**
- Name it exactly: `yourusername.github.io`  
  (replace `yourusername` with your actual GitHub username)
- Set it to **Public**
- Click **Create repository**

### 3. Upload your files
- On your new repo page, click **Add file** → **Upload files**
- Drag and drop everything: `index.html`, the `projects/` folder, and the `assets/` folder
- Scroll down, click **Commit changes**

### 4. Enable GitHub Pages
- Go to your repo's **Settings** tab
- Click **Pages** in the left sidebar
- Under "Source", select **Deploy from a branch**
- Choose **main** branch, **/ (root)** folder
- Click **Save**

Your site will be live at `https://yourusername.github.io` within a minute or two.

---

## Connect Your Custom Domain

### In GitHub:
- Go to **Settings → Pages**
- Under "Custom domain", type your domain (e.g. `mattbairstow.com`)
- Click **Save**
- GitHub will create a file called `CNAME` in your repo automatically

### In your domain registrar (wherever you bought your domain):
Add these DNS records:

**A Records** (point to GitHub's servers):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record** (for www):
```
Type:  CNAME
Name:  www
Value: yourusername.github.io
```

DNS changes take 24–48 hours to fully propagate. After that, your site will live at your custom domain.

---

## Adding Your Images

Replace the placeholder images by uploading your own to `assets/images/`.

Then update the `src` attribute in the HTML. For example in `index.html`:
```html
<!-- Change this: -->
<img src="assets/images/placeholder.jpg" alt="Project One" />

<!-- To this: -->
<img src="assets/images/my-actual-photo.jpg" alt="Project One" />
```

For project subpages, image paths go up one level:
```html
<img src="../assets/images/my-photo.jpg" alt="Process step" />
```

---

## Adding More Projects

To add a 7th project (or more):

1. Copy `projects/project-01.html` → rename it `project-07.html`
2. Edit the title, text, and image names inside it
3. In `index.html`, copy one of the project blocks and update the number, title, description, and link

---

## Editing Text

All text is directly in the HTML files. Search for placeholder text like:
- `Project Title One` → replace with your real project name
- `A short line or two describing the work` → your actual description
- The paragraph text in each project subpage → your process notes

---

## Questions / Next Steps

Things we can add later:
- Smooth page transitions
- A lightbox for clicking individual process images
- An About page
- A Contact section
- Hover animations on the project images
- A music/audio player section

Just ask!
