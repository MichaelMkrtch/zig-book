import type { MetaRecord } from "nextra";

const chapter1: MetaRecord = {
  "ch-01-01-installation": "1.1 Installation",
  "ch-01-02-hello-world": "1.2 Hello, World!",
  "ch-01-03-zig-build": "1.3 The Zig Build System",
};

const chapter2: MetaRecord = {
  "ch-02-01-variables": "2.1 Variables",
  "ch-02-02-primitive-data-types": "2.2 Primitive Data Types",
  "ch-02-03-arrays": "2.3 Arrays",
};

const meta = {
  index: "The Zig Book",
  "chapter-1": { items: chapter1 },
  "chapter-2": { items: chapter2 },
};

export default meta;
