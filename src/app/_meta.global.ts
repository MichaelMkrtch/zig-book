import type { MetaRecord } from "nextra";

const chapter1: MetaRecord = {
  "ch-01-01-installation": "1.1 Installation",
  "ch-01-02-hello-world": "1.2 Hello, World!",
  "ch-01-03-zig-build": "1.3 The Zig Build System",
};

const meta = {
  index: "The Zig Book",
  "chapter-1": { items: chapter1 },
};

export default meta;
