import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "petstore/petstore-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      collapsible: true,
      items: [
        {
          type: "doc",
          id: "petstore/list-all-pets",
          label: "List all pets",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
