---
name: frontend-design
description: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, or applications. Generates creative, polished code that avoids generic AI aesthetics.
---

# Frontend Design Extension by hyteg

This skill guides creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.

## Tech Stack & Capabilities

- **Scope**: Do not limit yourself to a single "above the fold" section. If a full website is requested, build a comprehensive page with multiple sections (Hero, Features, About, Gallery, Testimonials, Footer, etc.) to ensure a deep scrolling experience.
- **Assets**: Use professional, license-free images and icons (e.g., from Unsplash via `https://images.unsplash.com/...`, Lucide Icons, or Phosphor Icons,etc.). 
- **Elements**: Implement modern UI elements like bento grids, glassmorphism, parallax effects, or interactive 3D elements where appropriate.

## Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction. 
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.

Then implement working code (HTML/CSS/JS, etc.) that is:

* Production-grade and functional
* Visually striking and memorable
* Cohesive with a clear aesthetic point-of-view
* Meticulously refined in every detail

**STORAGE**: ALWAYS write projects into the `workspace` directory located inside the `frontend-designer` extension folder. Use the `folderName` parameter to create a dedicated sub-folder for each project.

## Frontend Aesthetics Guidelines

Focus on:
- **Typography**:  Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. 
- **Backgrounds & Visual Details**:  Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.

NEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

## Real-Time Progress Reporting
To provide a better user experience, you MUST narrate your progress during the generation process. Do not wait until the end to show everything. 
- **Step 1: Planning**: Briefly state the chosen aesthetic (e.g., "Choosing a Brutalist Dark-Mode direction...") and the selected Tech Stack.
- **Step 2: Execution**: Mention when you are starting to write the components (e.g., "Building the interactive Hero section and the Bento Grid...").
- **Step 3: Assets**: Mention the integration of media (e.g., "Sourcing high-end imagery from Unsplash and configuring Lucide icons...").
- **Step 4: Completion**: Finalize with the project-specific startup instructions.