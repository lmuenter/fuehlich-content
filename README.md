# fuehlich-content
Main Repo for generating static content of the Website for Fühlich, the best arts studio this side of the river Weser. This project utilizes the `Pelican` CMS to author HTML pages and pushes newly authored pages to an S3 Bucket hosting static files.

Using `Pelican` comes with major advantages as this setup is completely free, and provides customizability via easy-to-write themes.

In pelican, content is written in Markdown (.md), which is then transpiled to HTML using the theme as a basis.

## Prerequisites
- git
- npm
- conda

## Setup
For local development, you can follow this workflow. The project requires pelican, a local copy of the attila theme, and webpack in order to be used locally.

1. **Clone the repository**:
```
git clone -gh "lmuenter/fuehlich-content"
cd fuehlich-content
```

2. **Setup npm**:
```
npm install
```

3. **Setup conda environmend**:
Note: If you haven't installed conda yet, you can install it like [so](https://www.vultr.com/docs/how-to-install-miniconda-on-ubuntu-22-04/)
```
conda env create -f environment.yml
```

4. **Clone the attila theme**:
```
git clone https://github.com/arulrajnet/attila
```

5. **run webpack**
```
npx webpack
```

This will generate the necessary bundle in our local theme.

That's it!

## Writing Content

Content is authored using Pelican with markdown files:

1. enter our pelican project directory
```
cd pelican
```

2. Write a page in Markdown
Create a file, e.g., update.md inside the content/ directory:
``` md
---
Title: My First Update
Date: 2023-10-23
Category: Update
---

We are growing
```

3. Generate Static Files:
This will also transpile our Markdown into HTML based on our theme.
```
pelican content
```

All the necessary files are now in the output/ directory.

4. Publish Your Changes:
Push to the main branch to trigger the deployment to S3
```
git push
```

This action will sync the output/ directory with our static S3 bucket using GitHub Actions.