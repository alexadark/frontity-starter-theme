const settings = {
  name: "my-app",
  state: {
    frontity: {
      url: "https://test.frontity.io",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development"
    }
  },
  packages: [
    {
      name: "frontity-starter-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Nature", "/category/nature/"],
            ["Travel", "/category/travel/"],
            ["Japan", "/tag/japan/"],
            ["About Us", "/about-us/"]
          ],
          logo:
            "https://demo-wp.alexaspalato.website/wp-content/uploads/2020/02/logo.svg",
          autoPreFetch: "hover",
          showSocialLinks: {
            header: false,
            footer: true
          },
          socialLinks: [
            ["pinterest", "https://www.pinterest.com/frontity/"],
            ["facebook", "https://www.facebook.com/frontity/"],
            ["twitter", "https://www.twitter.com/frontity/"],
            ["instagram", "https://www.instagram.com/frontity/"]
          ],
          featured: {
            showOnArchive: true,
            showOnPost: true
          },
          postInfo: {
            showOnArchive: true,
            showOnPost: true
          },
          postMeta: {
            showOnArchive: true,
            showOnPost: false
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://test.frontity.io/wp-json",
          params: {
            per_page: 12
          }
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
