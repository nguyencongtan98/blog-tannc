import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Tan } from "./Tan";
export default {
    title: 'Example/Tan',
    component: Tan,
  } as Meta;

const Template: Story = (args) => <Tan {...args} />;
export const Tan1 = Template.bind({});
Tan1.args = {
  user: {},
};

