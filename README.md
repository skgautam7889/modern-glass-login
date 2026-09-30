# Modern Glass Login UI

A free, reusable **glassmorphism Login & Sign-Up HTML template** built with Bootstrap, jQuery and Font Awesome.

The original visual direction is intentionally preserved: glass card, animated ambient gradients, compact authentication tabs, soft inputs, social buttons and responsive layout.

## Template Name

**Modern Glass Login UI**

Recommended project/repository slug:

```text
modern-glass-login
```

## Suggested Static Deployment Names

Use the same project name on both platforms for consistency:

### Vercel

Recommended Vercel project name:

```text
modern-glass-login
```

Expected default deployment URL:

```text
https://modern-glass-login.vercel.app
```

Vercel provides `vercel.app` deployment URLs for projects; the exact generated URL can vary depending on the account/team/project naming configuration. For production, use a custom domain when available.

### Netlify

Recommended Netlify site/project name:

```text
modern-glass-login
```

Expected default Netlify URL:

```text
https://modern-glass-login.netlify.app
```

Netlify documents that the default production subdomain follows the `[site-name].netlify.app` format, and the site name can be customized from the project settings.

## Features

- Original glassmorphism design
- Bootstrap 5 grid system
- Font Awesome icons
- jQuery interactions
- Sign In / Sign Up switch
- Password show/hide
- Client-side validation
- Forgot-password demo interaction
- Google / GitHub / Apple social-login UI
- Multiple accent gradient colors
- Light / Dark / Auto theme
- Theme mode saved to `localStorage`
- Selected accent color saved to `localStorage`
- Automatically follows system color preference in Auto mode
- Animated background gradient orbs
- Responsive mobile design
- Developer information and social links
- No build process required
- Easy to connect with Laravel, PHP, Node.js or any backend API

## Project Structure

```text
modern-glass-login/
├── login.html
├── README.md
├── LICENSE
└── .gitignore
```

## Quick Start

Simply open:

```text
login.html
```

in a browser.

No npm installation or build command is required.

## Customization

### Change template colors

Click the palette button in the top-right corner.

Available accent palettes include:

- Indigo
- Blue
- Cyan
- Green
- Orange
- Rose
- Purple
- Teal

The selected color is stored locally in the browser.

### Theme mode

The template supports:

- Auto (System)
- Light
- Dark

The selected mode is stored in `localStorage`.

## Backend Integration

The current authentication submit action is a frontend demo.

Replace the demo `setTimeout()` inside `login.html` with your API request.

Example integration targets:

- Laravel authentication API
- Laravel Sanctum
- Laravel Passport
- Next.js API
- Node.js / Express
- PHP
- Any REST API

The social buttons are UI placeholders and should be connected to the actual OAuth provider flow before production use.

## Developer

### Suraj Kumar

**PHP Full Stack & MERN Full Stack Software Developer**

Portfolio:

https://skgautam7889.vercel.app/

### Social Profiles

- GitHub: https://github.com/skgautam7889
- LinkedIn: https://www.linkedin.com/in/skgautam7889/
- Facebook: https://www.facebook.com/skgautam7889/
- X: https://x.com/skgautam7889

The portfolio, GitHub and LinkedIn profile information above was verified from publicly available profile information during this template update.

## Deployment

### Vercel

This is a static HTML project, so it does not require a framework build step.

1. Create a Git repository.
2. Upload the project files.
3. Import the repository into Vercel.
4. Use the project name `modern-glass-login`.
5. Deploy.

Suggested default URL:

```text
https://modern-glass-login.vercel.app
```

### Netlify

You can deploy the project from a Git repository or by using Netlify's drag-and-drop workflow.

Suggested site name:

```text
modern-glass-login
```

Suggested default URL:

```text
https://modern-glass-login.netlify.app
```

For a public template, keeping the repository name, Vercel project name and Netlify site name identical makes the project easier to identify.

## CDN Dependencies

This template currently uses CDN versions of:

- Bootstrap 5.3.3
- Font Awesome 6.6.0
- jQuery 3.7.1
- Google Fonts — Plus Jakarta Sans

If you need an offline/self-hosted version, download these assets and replace the CDN URLs.

## License

This project is released under the MIT License.

See `LICENSE` for the complete license text.

## Credits

Developed by **Suraj Kumar**

Portfolio:
https://skgautam7889.vercel.app/

If you redistribute this template, keeping the original `LICENSE` file is recommended.
