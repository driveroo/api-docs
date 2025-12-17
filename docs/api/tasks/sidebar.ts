import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/tasks/roo-tasks-api-poc",
    },
    {
      type: "category",
      label: "Tasks",
      items: [
        {
          type: "doc",
          id: "api/tasks/list-tasks",
          label: "List tasks",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/tasks/create-a-task",
          label: "Create a task",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/tasks/get-task-by-id",
          label: "Get task by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/tasks/update-task",
          label: "Update task",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      items: [
        {
          type: "doc",
          id: "api/tasks/list-tasks-for-a-user",
          label: "List tasks for a user",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
