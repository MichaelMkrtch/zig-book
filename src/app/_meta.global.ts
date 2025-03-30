import type { MetaRecord } from "nextra";

const chapter1: MetaRecord = {
  "ch-01-01-installation": "1.1 Installation",
  "ch-01-02-hello-world": "1.2 Hello, World!",
};

const meta = {
  book: {
    type: "page",
    title: "The Zig Book",
    items: {
      title: "",
      "chapter-1": { items: chapter1 },
    },
  },
};

export default meta;
