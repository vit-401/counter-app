import React from "react";
import {Meta, Story} from "@storybook/react";
import {CounterBtn} from "../components/CounterBtn/CounterBtn";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Test',
    component: CounterBtn
} as Meta

const Template: Story<any> = (args) => <CounterBtn {...args}/>

export const FirstTest = Template.bind({});
FirstTest.args = {
    title: 'ТЕСТ',
    handler: action('click to button')
}

