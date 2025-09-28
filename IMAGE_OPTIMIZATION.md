# Image Optimization Documentation

## Overview

This document outlines the comprehensive image optimization strategy implemented for the Fondation Marie Mwape website to ensure optimal performance, fast loading times, and excellent user experience.

## Next.js Image Optimization Configuration

### next.config.mjs Settings

```javascript
images: {
  formats: ["image/webp", "image/avif"],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  minimumCacheTTL: 31536000,
  dangerouslyAllowSVG: true,
  contentDispositionType: "attachment",
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
}
```

### Key Features:

- **Modern Formats**: WebP and AVIF support for better compression
- **Responsive Breakpoints**: Optimized for various device sizes
- **Long-term Caching**: 1-year cache TTL for better performance
- **SVG Security**: Safe SVG handling with CSP

## Image Implementation Details

### 1. Logo Component (`/components/ui/logo/index.tsx`)

**Optimization Features:**

- `priority`: Ensures logo loads immediately (above fold)
- `quality={90}`: High quality for branding consistency
- `sizes`: Responsive sizing for different breakpoints
- `placeholder="blur"`: Smooth loading experience
- Error handling fallback to Heart icon

```tsx
<Image
  src="/logo.png"
  alt="Fondation Marie Mwape Logo"
  width={pixelSizes[size]}
  height={pixelSizes[size]}
  className="object-contain w-full h-full"
  priority
  quality={90}
  sizes="(max-width: 768px) 32px, (max-width: 1024px) 40px, 48px"
  placeholder="blur"
  blurDataURL="data:image/png;base64,..."
/>
```

### 2. Founder Profile Image (`/app/page.tsx`)

**Optimization Features:**

- `priority`: Critical above-the-fold content
- `quality={85}`: Balance between quality and file size
- Responsive sizing for different viewports
- Blur placeholder for smooth loading

```tsx
<Image
  src="/founder-pic.jpg"
  alt="Marie Mwape Kashimbo, Fondatrice"
  width={500}
  height={600}
  className="w-full h-auto object-cover rounded-2xl"
  priority
  quality={85}
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### 3. Background Images

**Foundation Logo Backgrounds:**

- `loading="lazy"`: Deferred loading for background elements
- `quality={75}`: Lower quality for backgrounds
- `sizes="100vw"`: Full viewport width coverage
- Blur placeholders for smooth transitions

**Desktop Background:**

```tsx
<Image
  src="/foundation-logo.jpg"
  alt="Foundation Logo Background"
  fill
  className="object-contain opacity-70 dark:opacity-60 scale-x-[-1]"
  sizes="100vw"
  quality={75}
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### 4. Content Images

**Gallery and Article Images:**

- `loading="lazy"`: Performance optimization
- `quality={80}`: Good balance for content images
- Responsive sizes based on container
- Blur placeholders for UX

## Performance Benefits

### 1. **Format Optimization**

- Automatic WebP/AVIF conversion
- Up to 50% smaller file sizes
- Fallback to JPEG/PNG for older browsers

### 2. **Responsive Images**

- Device-appropriate image sizes
- Reduced bandwidth usage on mobile
- Faster loading on smaller screens

### 3. **Loading Strategy**

- `priority` for above-the-fold images
- `loading="lazy"` for below-the-fold content
- Progressive loading with blur placeholders

### 4. **Caching Strategy**

- Long-term browser caching (1 year)
- CDN-optimized delivery
- Automatic cache invalidation on updates

## Image Quality Settings

| Image Type        | Quality | Reasoning                   |
| ----------------- | ------- | --------------------------- |
| Logo              | 90%     | High quality for branding   |
| Profile Photos    | 85%     | Good quality for portraits  |
| Background Images | 75%     | Lower quality acceptable    |
| Content Images    | 80%     | Balance quality/performance |

## Responsive Breakpoints

### Logo Sizes

```
(max-width: 768px) 32px    // Mobile
(max-width: 1024px) 40px   // Tablet
48px                       // Desktop
```

### Content Images

```
(max-width: 768px) 100vw   // Mobile full width
(max-width: 1024px) 50vw   // Tablet half width
500px                      // Desktop fixed width
```

## Blur Placeholders

All images include base64-encoded blur placeholders for smooth loading:

- Prevents layout shift
- Provides visual feedback during loading
- Improves perceived performance

## Best Practices Implemented

1. **Lazy Loading**: Non-critical images load when needed
2. **Priority Loading**: Critical images load immediately
3. **Proper Alt Text**: Accessibility compliance
4. **Responsive Sizing**: Optimal images for each device
5. **Modern Formats**: WebP/AVIF when supported
6. **Quality Optimization**: Balanced file size vs. quality
7. **Blur Placeholders**: Smooth loading experience
8. **Error Handling**: Fallbacks for failed loads

## Performance Metrics

Expected improvements:

- **50% smaller** image file sizes (WebP/AVIF)
- **Faster loading** times on mobile
- **Better Core Web Vitals** scores
- **Reduced bandwidth** usage
- **Improved user experience**

## Maintenance

### Adding New Images:

1. Use Next.js `Image` component
2. Set appropriate `quality` value
3. Add responsive `sizes` attribute
4. Include blur placeholder
5. Set proper `loading` strategy

### Image File Guidelines:

- Use JPG for photos
- Use PNG for logos/graphics
- Compress images before upload
- Use descriptive filenames
- Include proper alt text

## Security Considerations

- SVG files are sandboxed with CSP
- Content disposition set to attachment
- Safe handling of user-generated content
- Preventing XSS through image uploads
