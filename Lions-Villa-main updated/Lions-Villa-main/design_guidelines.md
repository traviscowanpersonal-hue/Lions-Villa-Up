{
  "brand": {
    "name": "Lion's Villa",
    "tagline": "Your Pride of Place in May Pen",
    "attributes": [
      "regal",
      "powerful",
      "warm",
      "trustworthy",
      "conversion-first",
      "mobile-native"
    ],
    "voice": {
      "tone": "confident, welcoming, direct",
      "cta_style": "short verbs + benefit (Call Now, Check Availability, Book Now)"
    }
  },
  "information_architecture": {
    "single_page_anchors": [
      "#home",
      "#amenities",
      "#rooms",
      "#reviews",
      "#gallery",
      "#about",
      "#contact"
    ],
    "primary_success_actions": [
      "tap click-to-call",
      "submit booking inquiry form",
      "tap Book Now to open contact section / dialog"
    ],
    "conversion_principles": [
      "Phone number visible in header + hero + sticky mobile bar",
      "Repeat CTAs at the end of each section",
      "Use social proof (3.8 rating + review count + quotes) above the fold on mobile (after amenities)",
      "Keep forms short; use date pickers; show reassurance copy: 'We respond fast'"
    ]
  },
  "design_personality": {
    "style_fusion": [
      "Luxury hospitality (Aman-like restraint: big type, negative space)",
      "Regal lion motif (subtle crown/paw watermark)",
      "Warm Jamaican sun (gold/amber highlights on deep cocoa/near-black)"
    ],
    "layout_principles": [
      "Mobile-first single column; upgrade to 12-col grid on desktop",
      "Bento-like cards for amenities/rooms",
      "Section dividers: thin gold diagonal/wave separators (decorative only; keep gradients under 20% viewport)"
    ],
    "texture": {
      "noise_overlay": "Use subtle grain/noise overlay on hero + dark sections to avoid flat blacks. Keep opacity 0.06–0.10.",
      "material": "Dark lacquer + brushed gold accents; avoid glossy gradients on small elements"
    }
  },
  "typography": {
    "font_pairing": {
      "headings": {
        "family": "Playfair Display",
        "fallback": "Georgia, serif",
        "usage": "Hero headline, section titles, room names"
      },
      "body": {
        "family": "Manrope",
        "fallback": "Inter, system-ui, sans-serif",
        "usage": "Body copy, labels, nav, buttons"
      }
    },
    "google_fonts_import": {
      "instructions": "In /app/frontend/src/index.css add @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap'); at the very top (before tailwind directives).",
      "note": "Project uses .js; no TSX-specific steps."
    },
    "type_scale_tailwind": {
      "h1": "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.02em]",
      "h2": "text-base md:text-lg font-medium text-muted-foreground",
      "section_title": "text-2xl sm:text-3xl font-semibold tracking-[-0.01em]",
      "body": "text-sm sm:text-base leading-relaxed",
      "small": "text-xs sm:text-sm"
    }
  },
  "color_system": {
    "notes": [
      "Theme requested: bold gold (#D4A017), amber accents, deep rich browns, near-black backgrounds.",
      "Use gold as accent + CTA fill; keep reading surfaces mostly solid dark or warm off-white.",
      "No purple. No saturated gradients."
    ],
    "palette": {
      "gold_primary": "#D4A017",
      "amber_accent": "#F2B84B",
      "cocoa": "#2A1E16",
      "espresso": "#1A120D",
      "near_black": "#0B0A08",
      "sand": "#F4EFE6",
      "warm_white": "#FFF9EE",
      "success": "#2E7D32",
      "danger": "#B42318"
    },
    "semantic_tokens_hsl_for_shadcn": {
      "instructions": "Update /app/frontend/src/index.css :root and .dark tokens to match below. Default site should run in dark mode (apply className='dark' on html/body/root).",
      "root_dark_mode_tokens": {
        "--background": "30 25% 4%",
        "--foreground": "40 60% 96%",
        "--card": "28 28% 6%",
        "--card-foreground": "40 60% 96%",
        "--popover": "28 28% 6%",
        "--popover-foreground": "40 60% 96%",
        "--primary": "43 74% 55%",
        "--primary-foreground": "30 25% 6%",
        "--secondary": "28 18% 12%",
        "--secondary-foreground": "40 60% 96%",
        "--muted": "28 16% 10%",
        "--muted-foreground": "40 10% 72%",
        "--accent": "38 70% 55%",
        "--accent-foreground": "30 25% 6%",
        "--destructive": "0 72% 45%",
        "--destructive-foreground": "0 0% 98%",
        "--border": "35 25% 18%",
        "--input": "35 25% 18%",
        "--ring": "43 74% 55%",
        "--radius": "0.75rem"
      },
      "extra_css_vars": {
        "--lv-gold": "#D4A017",
        "--lv-amber": "#F2B84B",
        "--lv-ink": "#0B0A08",
        "--lv-cocoa": "#2A1E16",
        "--lv-sand": "#F4EFE6",
        "--shadow-elev-1": "0 10px 30px rgba(0,0,0,0.35)",
        "--shadow-elev-2": "0 18px 60px rgba(0,0,0,0.45)",
        "--focus-ring": "0 0 0 3px rgba(212,160,23,0.35)"
      }
    },
    "allowed_gradients": {
      "rule": "Gradients only as section background accents; never on small UI elements; never exceed 20% viewport.",
      "hero_overlay": "radial-gradient(1200px 600px at 20% 10%, rgba(212,160,23,0.22), transparent 60%), linear-gradient(180deg, rgba(11,10,8,0.35), rgba(11,10,8,0.92))",
      "divider_accent": "linear-gradient(90deg, rgba(212,160,23,0.0), rgba(212,160,23,0.55), rgba(212,160,23,0.0))"
    }
  },
  "layout_and_grid": {
    "container": {
      "max_width": "max-w-6xl",
      "padding": "px-4 sm:px-6 lg:px-8",
      "section_spacing": "py-14 sm:py-18 lg:py-24",
      "vertical_rhythm": "Use 2–3x more spacing than default; keep sections breathable."
    },
    "grid": {
      "desktop": "12-col grid; cards typically span 4 cols (3-up) or 6 cols (2-up)",
      "mobile": "single column; avoid side-by-side content under 360px"
    },
    "section_dividers": {
      "style": "Thin gold wave/diagonal SVG between major sections (Amenities→Rooms, Rooms→Reviews).",
      "implementation": "Use <Separator /> plus an absolutely-positioned SVG. Keep it decorative; do not reduce text contrast."
    }
  },
  "components": {
    "component_path": {
      "shadcn": "/app/frontend/src/components/ui",
      "use": [
        "button.jsx",
        "card.jsx",
        "badge.jsx",
        "separator.jsx",
        "sheet.jsx (mobile nav)",
        "navigation-menu.jsx (desktop nav)",
        "carousel.jsx (gallery/rooms)",
        "form.jsx + input.jsx + textarea.jsx + label.jsx",
        "calendar.jsx (check-in/check-out)",
        "sonner.jsx (toasts)",
        "dialog.jsx (optional Book Now quick form)",
        "accordion.jsx (FAQ optional)",
        "tooltip.jsx (rating info)"
      ]
    },
    "header_nav": {
      "structure": [
        "Left: lion mark + Lion's Villa wordmark",
        "Center (desktop): anchor links",
        "Right: phone number + Book Now button",
        "Mobile: hamburger opens Sheet with links; phone + Book remain visible"
      ],
      "sticky": "Sticky top with backdrop blur: bg-[hsl(var(--background)/0.72)] backdrop-blur-md border-b border-border",
      "phone_link": {
        "href": "tel:+18769867353",
        "display": "(876) 986-7353",
        "data_testid": "header-phone-link"
      },
      "book_button_data_testid": "header-book-now-button"
    },
    "hero": {
      "layout": "Full-screen (min-h-[92vh]) with background image + dark overlay + gold radial accent.",
      "headline": "Lion's Villa Guest House",
      "subheadline": "Clean, affordable rooms in May Pen, Clarendon — quick check-in and a quiet, secure stay.",
      "cta": [
        {
          "label": "Call Now",
          "data_testid": "hero-call-now-button",
          "variant": "primary"
        },
        {
          "label": "Book Now",
          "data_testid": "hero-book-now-button",
          "variant": "secondary"
        }
      ],
      "trust_row": [
        "3.8 ★ (36 reviews)",
        "17 Chapleton Road, May Pen",
        "Private & secure (grill entry)"
      ],
      "motif": "Add a very subtle paw-print watermark SVG in the hero overlay (opacity 0.06)"
    },
    "amenities": {
      "cards": [
        "Clean & affordable rooms",
        "Quick & easy check-in",
        "Quiet & comfortable environment",
        "Private & secure (grill entry)"
      ],
      "card_style": "Card with bg-card, border border-[hsl(var(--border))], hover: border-[hsl(var(--primary))] and slight lift",
      "icons": "Use lucide-react icons (e.g., Sparkles, KeyRound, Volume2, ShieldCheck). No emojis.",
      "data_testid_prefix": "amenity-card"
    },
    "rooms": {
      "room_types": [
        {
          "name": "Standard Room",
          "price": "$— / night",
          "data_testid": "room-card-standard"
        },
        {
          "name": "Deluxe Room",
          "price": "$— / night",
          "data_testid": "room-card-deluxe"
        },
        {
          "name": "Suite-style",
          "price": "$— / night",
          "data_testid": "room-card-suite"
        }
      ],
      "cta": {
        "label": "Check Availability",
        "data_testid": "rooms-check-availability-button"
      },
      "microcopy": "Add a small line under pricing: 'Call for best rates and availability.'"
    },
    "reviews": {
      "rating_block": {
        "display": "3.8",
        "stars": "render 5 stars with partial fill (or 4 full + 1 half) visually; keep accessible text",
        "review_count": "36 reviews",
        "data_testid": "reviews-rating-summary"
      },
      "quotes": [
        "\"clean rooms, cheap prices\"",
        "\"quick check-in, approachable staff\"",
        "\"quiet comfortable, no obnoxious odor\""
      ],
      "quote_card": "Use Card with subtle gold top border (border-t-2 border-t-[hsl(var(--primary))])",
      "data_testid_prefix": "review-quote"
    },
    "gallery": {
      "layout": "Responsive masonry-like grid using CSS columns on desktop; simple 2-col grid on mobile.",
      "interaction": "Click opens Dialog with larger image + caption; include keyboard close.",
      "data_testid": "gallery-grid"
    },
    "about": {
      "layout": "Split on desktop: story text + highlight card (address/phone/check-in). Single column on mobile.",
      "motif": "Use a thin gold rule + small crown icon near section title"
    },
    "contact_form": {
      "fields": [
        "name",
        "email",
        "phone",
        "check-in (Calendar)",
        "check-out (Calendar)",
        "message"
      ],
      "form_layout": "On desktop: 2-col grid for name/email/phone; dates side-by-side; message full width.",
      "submit": {
        "label": "Send Booking Inquiry",
        "data_testid": "contact-form-submit-button"
      },
      "success_toast": "Use sonner toast: 'Thanks — we’ll get back to you shortly.'",
      "error_toast": "Use sonner toast: 'Please check the form and try again.'",
      "data_testid_prefix": {
        "form": "contact-form",
        "name": "contact-form-name-input",
        "email": "contact-form-email-input",
        "phone": "contact-form-phone-input",
        "checkin": "contact-form-checkin-input",
        "checkout": "contact-form-checkout-input",
        "message": "contact-form-message-textarea"
      }
    },
    "footer": {
      "content": [
        "Lion's Villa",
        "17 Chapleton Road Clarendon, May Pen, Jamaica",
        "(876) 986-7353",
        "Map embed"
      ],
      "map": {
        "implementation": "Use an iframe embed in a Card with aspect-ratio component; add title attribute for accessibility.",
        "data_testid": "footer-map-embed"
      }
    },
    "sticky_mobile_bar": {
      "visibility": "Mobile only (sm:hidden). Fixed bottom with safe-area padding.",
      "buttons": [
        {
          "label": "Call",
          "href": "tel:+18769867353",
          "data_testid": "sticky-call-button"
        },
        {
          "label": "Book",
          "href": "#contact",
          "data_testid": "sticky-book-button"
        }
      ],
      "style": "bg-[hsl(var(--background)/0.86)] backdrop-blur-md border-t border-border shadow-[var(--shadow-elev-1)]"
    }
  },
  "buttons_and_states": {
    "button_style": {
      "primary": {
        "shape": "rounded-xl",
        "base": "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]",
        "hover": "hover:brightness-105",
        "active": "active:scale-[0.98]",
        "focus": "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))]",
        "transition": "transition-colors duration-200"
      },
      "secondary": {
        "base": "bg-transparent border border-[hsl(var(--border))] text-foreground",
        "hover": "hover:border-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.08)]",
        "active": "active:scale-[0.98]",
        "transition": "transition-colors duration-200"
      },
      "ghost": {
        "base": "bg-transparent text-foreground",
        "hover": "hover:bg-[hsl(var(--primary)/0.08)]",
        "transition": "transition-colors duration-200"
      }
    },
    "do_not": [
      "Do not use transition: all",
      "Do not use gradients on buttons smaller than 100px wide",
      "Do not use neon glows; keep regal"
    ]
  },
  "motion_and_microinteractions": {
    "library": {
      "name": "framer-motion",
      "why": "Entrance animations for sections, hover lift for cards, subtle CTA emphasis.",
      "install": "npm i framer-motion",
      "usage_notes": "Use reduced-motion media query; keep durations 0.25–0.45s; ease [0.22,1,0.36,1]."
    },
    "patterns": [
      "Hero: fade-up for headline + CTAs (stagger 60ms)",
      "Cards: hover translate-y-[-2px] + shadow elevation",
      "Section reveal: on-scroll once; keep subtle",
      "Sticky call button: gentle pulse ring every 8–12s (opacity only)"
    ]
  },
  "iconography": {
    "library": {
      "name": "lucide-react",
      "install": "npm i lucide-react"
    },
    "motifs": [
      "Use a custom inline SVG paw print as watermark",
      "Use crown icon sparingly near headings"
    ]
  },
  "imagery": {
    "image_urls": {
      "hero_background": [
        {
          "url": "https://images.unsplash.com/photo-1567985035039-9ed62cab6783?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
          "description": "Palm silhouette at sunset; works as dramatic hero background with dark overlay.",
          "category": "hero"
        }
      ],
      "rooms": [
        {
          "url": "https://images.pexels.com/photos/5461582/pexels-photo-5461582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "description": "Modern minimalist hotel room; use for Deluxe/Suite placeholder.",
          "category": "rooms"
        },
        {
          "url": "https://images.pexels.com/photos/36360471/pexels-photo-36360471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "description": "Warm bedside lighting; use for Standard room placeholder.",
          "category": "rooms"
        }
      ],
      "gallery": [
        {
          "url": "https://images.unsplash.com/photo-1594244112673-d9170887430d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
          "description": "Sunset over water; use as one of the gallery tiles.",
          "category": "gallery"
        },
        {
          "url": "https://images.unsplash.com/photo-1584672957624-18d85b3c397d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85",
          "description": "Palm at dusk; gallery tile.",
          "category": "gallery"
        }
      ],
      "about_or_exterior": [
        {
          "url": "https://images.pexels.com/photos/36486532/pexels-photo-36486532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "description": "Warm exterior facade; use in About section as a supporting image.",
          "category": "about"
        }
      ]
    },
    "image_treatment": [
      "Always apply dark overlay on hero images for text contrast",
      "Use AspectRatio component for consistent crops",
      "Add subtle border: border border-[hsl(var(--border))] and rounded-2xl"
    ]
  },
  "seo_and_structured_data": {
    "meta": [
      "Title: Lion's Villa Guest House | May Pen, Clarendon",
      "Description: Clean, affordable rooms with quick check-in in May Pen, Jamaica. Call (876) 986-7353 to book.",
      "OpenGraph image: hero background"
    ],
    "json_ld": {
      "type": "LodgingBusiness",
      "fields": [
        "name",
        "address",
        "telephone",
        "aggregateRating (3.8, 36)",
        "url",
        "image"
      ]
    }
  },
  "accessibility": {
    "requirements": [
      "WCAG AA contrast: gold text only on very dark backgrounds; avoid gold on sand for body text",
      "Visible focus rings using --ring token",
      "Tap targets >= 44px height",
      "Respect prefers-reduced-motion",
      "All icons have aria-hidden unless labeled"
    ]
  },
  "implementation_notes_for_main_agent": {
    "instructions_to_main_agent": [
      "Remove default CRA App.css centering patterns; do not center the whole app container.",
      "Set site to dark mode by default (apply 'dark' class at root).",
      "Implement sticky mobile bottom bar with Call + Book; ensure it does not cover form submit (add pb-20 to page wrapper on mobile).",
      "Every interactive element must include data-testid (kebab-case).",
      "Use shadcn/ui components from /app/frontend/src/components/ui (Button, Card, Sheet, Form, Calendar, Dialog, Sonner).",
      "Use lucide-react for icons; no emoji icons.",
      "Keep gradients limited to hero overlay + thin dividers only (<=20% viewport)."
    ],
    "recommended_new_components_js": [
      "/app/frontend/src/components/StickyMobileBar.jsx",
      "/app/frontend/src/components/SectionHeader.jsx",
      "/app/frontend/src/components/WaveDivider.jsx",
      "/app/frontend/src/components/RatingStars.jsx"
    ]
  }
}

---

<General UI UX Design Guidelines>  
    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms
    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text
   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json

 **GRADIENT RESTRICTION RULE**
NEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc
NEVER use dark gradients for logo, testimonial, footer etc
NEVER let gradients cover more than 20% of the viewport.
NEVER apply gradients to text-heavy content or reading areas.
NEVER use gradients on small UI elements (<100px width).
NEVER stack multiple gradient layers in the same viewport.

**ENFORCEMENT RULE:**
    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors

**How and where to use:**
   • Section backgrounds (not content backgrounds)
   • Hero section header content. Eg: dark to light to dark color
   • Decorative overlays and accent elements only
   • Hero section with 2-3 mild color
   • Gradients creation can be done for any angle say horizontal, vertical or diagonal

- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**

</Font Guidelines>

- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. 
   
- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.

- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.
   
- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly
    Eg: - if it implies playful/energetic, choose a colorful scheme
           - if it implies monochrome/minimal, choose a black–white/neutral scheme

**Component Reuse:**
	- Prioritize using pre-existing components from src/components/ui when applicable
	- Create new components that match the style and conventions of existing components when needed
	- Examine existing components to understand the project's component patterns before creating new ones

**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component

**Best Practices:**
	- Use Shadcn/UI as the primary component library for consistency and accessibility
	- Import path: ./components/[component-name]

**Export Conventions:**
	- Components MUST use named exports (export const ComponentName = ...)
	- Pages MUST use default exports (export default function PageName() {...})

**Toasts:**
  - Use `sonner` for toasts"
  - Sonner component are located in `/app/src/components/ui/sonner.tsx`

Use 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.
</General UI UX Design Guidelines>
