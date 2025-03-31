import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: "material-theme-ocean",
    },
  },
});

export default withNextra({});
