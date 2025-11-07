# Content Management Guide

This guide explains how to update website content using the JSON configuration files.

## Overview

All website content is managed through JSON files located in `frontend/public/data/`. This allows you to update content without modifying React components.

## JSON Files

### 1. intro.json
**Location:** `frontend/public/data/intro.json`

Controls the intro/home page content.

**Structure:**
```json
{
  "hero": {
    "name": "Haoqi",
    "title": "Hello, I'm {name}",
    "subtitle": "Welcome to My Personal Website"
  },
  "description": ["paragraph1", "paragraph2"],
  "chatEntrance": {
    "title": "Chat with MeBot",
    "description": "Start a conversation...",
    "placeholder": "Type your message..."
  },
  "features": [
    {
      "id": "feature-1",
      "icon": "🚀",
      "title": "Feature Title",
      "description": "Feature description"
    }
  ]
}
```

### 2. mystory.json
**Location:** `frontend/public/data/mystory.json`

Manages professional experience and educational background.

**Structure:**
```json
{
  "intro": {
    "title": "My Journey",
    "content": "Introduction text",
    "image": null
  },
  "experiences": [
    {
      "id": "exp-1",
      "title": "Job Title",
      "period": "2022 - Present",
      "story": "Description",
      "highlights": ["Achievement 1", "Achievement 2"],
      "image": null
    }
  ],
  "education": [
    {
      "id": "edu-1",
      "title": "Degree Name",
      "institution": "University Name",
      "period": "2020 - 2022",
      "story": "Description",
      "achievements": "GPA and focus areas",
      "image": null
    }
  ]
}
```

### 3. products.json
**Location:** `frontend/public/data/products.json`

Lists products and services.

**Structure:**
```json
{
  "pageTitle": "Products and Services",
  "pageSubtitle": "Subtitle text",
  "products": [
    {
      "id": 1,
      "title": "Product Name",
      "description": "Product description",
      "technologies": ["Tech1", "Tech2"],
      "link": "#"
    }
  ]
}
```

### 4. community.json
**Location:** `frontend/public/data/community.json`

Manages blog posts and community content.

**Structure:**
```json
{
  "pageTitle": "Community",
  "pageSubtitle": "Subtitle text",
  "blogPosts": [
    {
      "id": 1,
      "title": "Post Title",
      "date": "2024-01-15",
      "excerpt": "Brief description...",
      "readTime": "5 min read"
    }
  ]
}
```

### 5. footer.json
**Location:** `frontend/public/data/footer.json`

Controls footer content and links.

**Structure:**
```json
{
  "about": {
    "heading": "About Section",
    "text": "Description"
  },
  "quickLinks": {
    "heading": "Quick Links",
    "links": [
      { "label": "Link Text", "url": "/path" }
    ]
  },
  "contact": {
    "heading": "Contact",
    "items": [
      { "icon": "📧", "text": "contact@example.com" }
    ]
  },
  "cta": {
    "heading": "Get Started",
    "text": "CTA description",
    "buttonText": "Button Text",
    "buttonUrl": "/chat"
  },
  "copyright": "Site Name. All rights reserved.",
  "bottomLinks": [
    { "label": "Privacy Policy", "url": "#" }
  ]
}
```

### 6. navigation.json
**Location:** `frontend/public/data/navigation.json`

Defines navigation menu structure.

**Structure:**
```json
{
  "brand": {
    "name": "MeBot",
    "url": "/"
  },
  "navItems": [
    { "path": "/", "label": "Intro" }
  ]
}
```

### 7. site-config.json
**Location:** `frontend/public/data/site-config.json`

Site-wide configuration settings.

**Structure:**
```json
{
  "siteName": "AvoMeBot",
  "siteTitle": "AvoMeBot - Personal Website",
  "siteDescription": "Site description",
  "author": "Author Name",
  "theme": {
    "primaryColor": "#6B8E23",
    "accentColor": "#9ACD32"
  },
  "api": {
    "baseUrl": "http://localhost:8000"
  }
}
```

## How to Update Content

1. **Navigate to the JSON file** you want to modify in `frontend/public/data/`
2. **Edit the JSON file** with your desired content
3. **Validate JSON syntax** using a JSON validator if unsure
4. **Test locally** by running `npm run dev` in the frontend directory
5. **Build for production** using `npm run build`

## Best Practices

- **Maintain JSON structure:** Keep the same structure when updating values
- **Validate JSON:** Use a JSON validator to check for syntax errors
- **Test changes:** Always test in development before deploying
- **Backup:** Keep backups of JSON files before major changes
- **Images:** Currently, images are placeholders. You can add image paths when ready

## Adding New Items

### Add a new product:
1. Open `products.json`
2. Add a new object to the `products` array:
```json
{
  "id": 4,
  "title": "New Product",
  "description": "Description",
  "technologies": ["Tech1"],
  "link": "#"
}
```

### Add a new blog post:
1. Open `community.json`
2. Add a new object to the `blogPosts` array:
```json
{
  "id": 4,
  "title": "New Post",
  "date": "2024-01-20",
  "excerpt": "Description...",
  "readTime": "7 min read"
}
```

### Add a new navigation item:
1. Open `navigation.json`
2. Add a new object to the `navItems` array:
```json
{ "path": "/newpage", "label": "New Page" }
```

## Troubleshooting

**Content not updating:**
- Clear browser cache
- Rebuild the project with `npm run build`
- Check browser console for errors

**JSON syntax errors:**
- Use an online JSON validator
- Check for missing commas, brackets, or quotes
- Ensure all strings are properly escaped

**Missing content:**
- Verify the JSON file exists in `public/data/`
- Check that file names match exactly (case-sensitive)
- Look for error messages in browser console

## Support

For questions or issues, please refer to the main project README or open an issue in the repository.
