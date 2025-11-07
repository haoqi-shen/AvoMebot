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

Manages community content with featured items, topics, and browsable content.

**Structure:**
```json
{
  "pageTitle": "Community",
  "pageSubtitle": "A living space for ideas and collaboration around MeBot",
  "overview": {
    "description": "Welcome description text"
  },
  "featured": {
    "title": "Featured Content",
    "items": [
      {
        "id": "feat-1",
        "type": "conversation|post|project",
        "title": "Content Title",
        "excerpt": "Brief description",
        "topic": "AI|Design|Product|Philosophy",
        "author": "Author Name",
        "date": "2024-01-15",
        "image": null,
        "likes": 42,
        "comments": 12
      }
    ]
  },
  "topics": [
    {
      "id": "topic-id",
      "name": "Topic Name",
      "icon": "🤖",
      "description": "Topic description",
      "count": 0
    }
  ],
  "recentContent": [
    {
      "id": "post-1",
      "type": "essay|note|lab|project|conversation",
      "title": "Content Title",
      "excerpt": "Brief description",
      "topic": "AI|Design|Product|Philosophy",
      "author": "Author Name",
      "date": "2024-01-15",
      "readTime": "8 min read",
      "image": null,
      "tags": ["Tag1", "Tag2"],
      "likes": 34,
      "comments": 7
    }
  ]
}
```

**Features:**
- **Overview Section**: Introduction to the community space
- **Featured Content**: Highlighted posts, projects, and conversations
- **Topic Filtering**: Browse content by different categories (Behavioural Interview, Amazon Leadership Principle, Awesome Material, Philosophy)
- **Content Cards**: Lightweight cards with metadata, tags, and engagement metrics
- **Interactive Filtering**: Click topic buttons to filter content dynamically
- **Dynamic Counts**: Topic counts are automatically calculated based on articles in `articles.json`

**Note:** Topic counts in `community.json` are set to 0 as they are dynamically calculated from `articles.json` at runtime.

### 4b. articles.json (NEW)
**Location:** `frontend/public/data/articles.json`

Manages all community articles with Notion integration. Each article belongs to a category that corresponds to a topic filter.

**Structure:**
```json
{
  "articles": [
    {
      "id": "article-1",
      "title": "Article Title",
      "excerpt": "Brief description of the article content",
      "category": "Behavioural Interview|Amazon Leadership Principle|Awesome Material|Philosophy",
      "notionUrl": "https://www.notion.so/your-notion-page-id",
      "author": "Author Name",
      "date": "2024-01-15",
      "readTime": "5 min read",
      "tags": ["Tag1", "Tag2", "Tag3"],
      "likes": 45,
      "comments": 8
    }
  ]
}
```

**Categories (Must match topic filters):**
- **Behavioural Interview**: STAR method, interview questions, and behavioral interview strategies
- **Amazon Leadership Principle**: Understanding and applying Amazon's leadership principles
- **Awesome Material**: Comprehensive guides, tutorials, and learning resources
- **Philosophy**: Deep thoughts, career reflections, and personal growth

**Fields:**
- **id**: Unique identifier for the article
- **title**: Article title (clickable link to Notion if notionUrl is provided)
- **excerpt**: Brief description or summary
- **category**: Must match one of the four categories above (case-sensitive)
- **notionUrl**: Link to the Notion page for this article
- **author**: Article author name
- **date**: Publication date (YYYY-MM-DD format)
- **readTime**: Estimated reading time
- **tags**: Array of topic tags for the article
- **likes**: Number of likes (for display purposes)
- **comments**: Number of comments (for display purposes)

**How it works:**
1. Articles are defined in `articles.json` with categories
2. The Community page automatically counts articles per category
3. Topic filter buttons show the actual count of articles in each category
4. Clicking a filter shows only articles from that category
5. Article titles link to their Notion pages when `notionUrl` is provided

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

### Add a featured community item:
1. Open `community.json`
2. Add a new object to the `featured.items` array:
```json
{
  "id": "feat-4",
  "type": "post",
  "title": "New Featured Post",
  "excerpt": "Brief description...",
  "topic": "Design",
  "author": "Author Name",
  "date": "2024-01-20",
  "image": null,
  "likes": 15,
  "comments": 3
}
```

### Add recent community content:
1. Open `community.json`
2. Add a new object to the `recentContent` array:
```json
{
  "id": "post-7",
  "type": "essay",
  "title": "New Content Title",
  "excerpt": "Brief description...",
  "topic": "Philosophy",
  "author": "Author Name",
  "date": "2024-01-20",
  "readTime": "5 min read",
  "image": null,
  "tags": ["Tag1", "Tag2", "Tag3"],
  "likes": 20,
  "comments": 4
}
```

### Add a new article with Notion link:
1. Open `articles.json`
2. Add a new object to the `articles` array:
```json
{
  "id": "article-11",
  "title": "Your Article Title",
  "excerpt": "Brief description of your article...",
  "category": "Behavioural Interview",
  "notionUrl": "https://www.notion.so/your-notion-page-id",
  "author": "Your Name",
  "date": "2024-01-20",
  "readTime": "7 min read",
  "tags": ["Interview", "STAR", "Tips"],
  "likes": 0,
  "comments": 0
}
```

**Important Notes:**
- The `category` field must exactly match one of: "Behavioural Interview", "Amazon Leadership Principle", "Awesome Material", or "Philosophy"
- The topic count for each category will automatically update based on the number of articles
- Provide valid Notion URLs for the `notionUrl` field
- Article titles will be clickable links to the Notion pages

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
