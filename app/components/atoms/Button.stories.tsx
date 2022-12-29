// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Import component dependencies
import { Button as ButtonComponent, ConfigProvider, theme } from "antd";

const DefaultAlgorithm = {
  algorithm: theme.defaultAlgorithm,
};

const DarkAlgorithm = {
  algorithm: theme.darkAlgorithm,
};

const CompactAlgorithm = {
  algorithm: theme.compactAlgorithm,
};

const DarkCompactAlgorithm = {
  algorithm: [theme.compactAlgorithm, theme.darkAlgorithm],
};

const CustomTheme = {
  token: {
    borderRadius: 100,
    colorPrimary: "#dd0092",
    colorBgBase: "#000000",
  },
};

export default {
  title: "Ant Design System/Components/General/Button",
  component: ButtonComponent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    theme: {
      type: { name: "object", required: false },
      defaultValue: undefined,
      description:
        "Ant Design theme, see: <a href='https://ant.design/docs/react/customize-theme' target='_blank'>customize theme</a>.",
      control: {
        type: "multi-select",
        labels: {
          DefaultAlgorithm: "Default",
          DarkAlgorithm: "Dark",
          CompactAlgorithm: "Compact",
          DarkCompactAlgorithm: "Dark + Compact",
          CustomTheme: "Custom Theme",
        },
      },
      options: [
        "DefaultAlgorithm",
        "DarkAlgorithm",
        "CompactAlgorithm",
        "DarkCompactAlgorithm",
        "CustomTheme",
      ],
      mapping: {
        DefaultAlgorithm,
        DarkAlgorithm,
        CompactAlgorithm,
        DarkCompactAlgorithm,
        CustomTheme,
      },
      table: {
        type: {
          summary: "object",
        },
        defaultValue: undefined,
      },
    },
    children: {
      type: { name: "string", required: true },
      defaultValue: undefined,
      description: "Button content.",
      control: "text",
      table: {
        type: {
          summary: "ReactNode",
        },
        defaultValue: { summary: undefined },
      },
    },
    block: {
      type: { name: "boolean", required: false },
      defaultValue: false,
      description: "Option to fit button width to its parent width.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: false },
      },
    },
    danger: {
      type: { name: "boolean", required: false },
      defaultValue: false,
      description: "Set the danger status of button.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      type: { name: "boolean", required: false },
      defaultValue: false,
      description: "Disabled state of button.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: false },
      },
    },
    ghost: {
      type: { name: "boolean", required: false },
      defaultValue: false,
      description:
        "Make background transparent and invert text and border colors.",
      control: {
        type: "boolean",
      },
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: false },
      },
    },
    href: {
      type: { name: "string", required: false },
      defaultValue: undefined,
      description: "Redirect url of link button.",
      control: "text",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: undefined },
      },
    },
    htmlType: {
      type: { name: "string", required: false },
      defaultValue: "button",
      description:
        "Set the original html type of button, see: <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type' target='_blank'>MDN</a>.",
      control: "select",
      options: ["button", "reset", "submit"],
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "button" },
      },
    },
    icon: {
      type: { name: "string", required: false },
      defaultValue: undefined,
      description: "Set the icon component of button.",
      control: "text",
      table: {
        type: {
          summary: "ReactNode",
        },
        defaultValue: { summary: undefined },
      },
    },
    loading: {
      type: { name: "boolean", required: false },
      defaultValue: false,
      description: "Set the loading status of button.",
      control: {
        type: "object",
      },
      table: {
        type: {
          summary: "boolean | { delay: number }",
        },
        defaultValue: { summary: false },
      },
    },
    shape: {
      type: { name: "string", required: false },
      defaultValue: "default",
      description: "Can be set button shape.",
      control: "select",
      options: ["default", "circle", "round"],
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "default | circle | round" },
      },
    },
    size: {
      type: { name: "string", required: false },
      defaultValue: "middle",
      description: "Set the size of button.",
      control: "select",
      options: ["large", "middle", "small"],
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "large | middle | small" },
      },
    },
    target: {
      type: { name: "string", required: false },
      defaultValue: undefined,
      description:
        "Same as target attribute of a, works when href is specified.",
      control: "text",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: undefined },
      },
    },
    type: {
      type: { name: "string", required: false },
      defaultValue: "default",
      description:
        "Can be set to <code>primary</code> <code>ghost</code> <code>dashed</code> <code>link</code> <code>text</code> <code>default</code>.",
      control: "select",
      options: ["primary", "ghost", "dashed", "link", "text", "default"],
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "primary | ghost | dashed | link | text | default",
        },
      },
    },
    onClick: {
      type: { name: "string", required: false },
      defaultValue: undefined,
      description: "Set the handler to handle <code>click</code> event.",
      control: "text",
      table: {
        type: {
          summary: "(event) => void",
        },
        defaultValue: { summary: undefined },
      },
    },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ConfigProvider theme={args.theme}>
    <ButtonComponent {...args}>{args.children}</ButtonComponent>
  </ConfigProvider>
);

export const Button = Template.bind({});
Button.args = {
  children: `Button`,
};
