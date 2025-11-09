# MyStory Photos

This folder contains photo galleries for each milestone in the "My Story" section.

## Folder Structure

Each milestone has its own folder:
- `avomebot/` - Avo.ai (2025)
- `amazon/` - Amazon AI Science Team (2024)
- `pingan/` - PingAn AI Lab (2023)
- `johns-hopkins/` - Johns Hopkins University (2022)
- `tencent/` - Tencent Ads (2021)
- `bytedance/` - ByteDance (2020)

## Photo Requirements

- **Aspect Ratio**: 4:3 (landscape orientation)
- **Recommended Size**: 400px × 300px or larger (maintaining 4:3 ratio)
- **Format**: SVG, PNG, JPG, or WebP
- **Number of Photos**: 3 photos are displayed at once, but you can add more

## How to Add Your Photos

1. Navigate to the milestone folder (e.g., `avomebot/`)
2. Replace the placeholder files with your actual photos
3. Name your photos descriptively (e.g., `office-view.jpg`, `team-meeting.png`, `project-demo.jpg`)
4. Update the image paths in `/public/data/mystory.json`

## Example Configuration in mystory.json

```json
{
  "id": "avomebot",
  "year": "2025",
  "title": "Avo.ai",
  "story": "Your story here...",
  "images": [
    "/mystory-photos/avomebot/photo-1.jpg",
    "/mystory-photos/avomebot/photo-2.jpg",
    "/mystory-photos/avomebot/photo-3.jpg"
  ],
  "logo": "/avocado.svg",
  "category": "current"
}
```

## Features

- **Swipeable**: Users can swipe/drag to navigate through photos
- **Navigation Controls**: Arrow buttons and dot indicators for easy navigation
- **Responsive**: Displays 3 photos on desktop, 2 on tablet, 1 on mobile
- **Smooth Transitions**: Animated sliding between photos

## Tips

- Use high-quality images that represent each milestone
- Keep file sizes reasonable (under 500KB per image) for fast loading
- Ensure photos are well-lit and clear
- Consider using photos that tell a story about your experience at each company
