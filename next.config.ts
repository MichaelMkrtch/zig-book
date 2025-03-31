import nextra from "nextra";

const withNextra = nextra({
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: "material-theme-ocean",
    },
  },
});

export default withNextra({});
