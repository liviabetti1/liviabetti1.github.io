// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research and volunteer projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-new-preprint-ot-on-the-map-on-quantifying-domain-shifts-in-geographic-space-is-out-on-arxiv",
          title: 'New preprint: OT on the Map, on quantifying domain shifts in geographic space,...',
          description: "",
          section: "News",},{id: "news-new-preprint-what-s-in-an-earth-embedding-an-explainability-analysis-of-location-encoders-is-out-on-arxiv",
          title: 'New preprint: What’s in an Earth Embedding?, an explainability analysis of location encoders,...',
          description: "",
          section: "News",},{id: "news-our-paper-mapping-on-a-budget-was-accepted-to-aaai-2026",
          title: 'Our paper Mapping on a Budget was accepted to AAAI 2026!',
          description: "",
          section: "News",},{id: "projects-boulder-trailhead-camera-map",
          title: 'Boulder Trailhead Camera Map',
          description: "Interactive web application mapping trailhead camera locations throughout Boulder, Colorado",
          section: "Projects",handler: () => {
              window.location.href = "/projects/boulder-trailhead-cameras/";
            },},{id: "projects-optimized-spatial-data-collection",
          title: 'Optimized Spatial Data Collection',
          description: "Balancing quantity and representativeness in constrained geospatial dataset design for machine learning applications",
          section: "Projects",handler: () => {
              window.location.href = "/projects/spatial-data-collection/";
            },},{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=XMFF300AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
