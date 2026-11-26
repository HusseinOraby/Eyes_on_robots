# Eyes on Robots project page

Static site for GitHub Pages. No build step.

## Already included in this zip
static/images/
  banner.png                  lab and university banner
  poster.jpg                  hero poster image (shown until the hero video loads)
  fig-architecture.png        system architecture diagram (slide 7)
  training-curves.png         training / eval loss curves (slide 8)
  per-field-accuracy.png      per-field accuracy chart (slide 8)
  scout-2.jpg                 Scout 2.0 ground robot
  dji-tello.jpg               DJI Tello drone
  glasses-specs.jpg           INMO Air3 specifications
  operator-with-glasses.jpg   your photo with the glasses, robot and drone
  poster-hardware.jpg         cover image for the two-robot experiment video
  poster-config.jpg           cover image for the app configuration video
static/videos/
  poster-animation.mp4        2 s poster animation (hero), cropped and cleaned

## You still need to add (3 videos)
Put these in static/videos/ with exactly these names (MP4, H.264, muted, under 25 MB each):

  demo-drone-ground.mp4        the ~7 s sped-up clip: drone flies above the ground robot and they move forward together
  experiment-two-robots.mp4    hardware experiment with the Scout 2.0 and the DJI Tello (slide 12)
  app-configuration.mp4        app configuration for the two robots (slide 11)

Until a video is added, its slot shows a still image or a grey box with the missing file name.

## Publish
1. Create a public repo on GitHub and upload everything in this folder (index.html, README.md and the static folder).
2. Settings > Pages > Source: Deploy from a branch > main / (root) > Save.
3. The site appears at https://<your-username>.github.io/<repo-name>/

## Editing later
After you change static/js/main.js, bump the number in index.html (main.js?v=1 -> ?v=2) so browsers load the new file.
