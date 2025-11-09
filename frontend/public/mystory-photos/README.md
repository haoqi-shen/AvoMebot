# MyStory Photos

This folder contains photo galleries for each milestone in the "My Story" section.

## Folder Structure

Each milestone has its own folder:
- `avomebot/` - Avo.ai (2025)
- `amazon/` - Amazon AI Science Team (2024)
- `northeastern/` - Northeastern University (2023)
- `pingan/` - PingAn AI Lab (2023)
- `johns-hopkins/` - Johns Hopkins University (2022)
- `tencent/` - Tencent Ads (2021)
- `bytedance/` - ByteDance (2020)

## Photo Requirements

- **Aspect Ratio**: 4:3 (landscape orientation)
- **Recommended Size**: 400px × 300px or larger (maintaining 4:3 ratio)
- **Format**: PNG, JPG, or WebP (PNG preferred)
- **Number of Photos**: 3 photos are displayed at once, but you can add more

## How to Add Your Photos

1. Navigate to the milestone folder (e.g., `northeastern/`)
2. Replace the placeholder files with your actual photos
3. Name your photos as `placeholder-1.png`, `placeholder-2.png`, `placeholder-3.png` (or use .jpg extension)
4. The photos will be automatically loaded from these folders

## Example Configuration in mystory.json

```json
{
  "id": "northeastern",
  "year": "2023",
  "title": "Northeastern University",
  "story": "Studied Computer Software Engineering",
  "images": [
    "/mystory-photos/northeastern/placeholder-1.png",
    "/mystory-photos/northeastern/placeholder-2.png",
    "/mystory-photos/northeastern/placeholder-3.png"
  ],
  "logo": "/logos/northeastern.svg",
  "category": "education"
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
- Consider using photos that tell a story about your experience at each company/institution
