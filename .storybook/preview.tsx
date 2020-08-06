// .storybook/preview.js
import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import "../src/styles/index.scss";
import "./fix_info_style.scss";

const wrapperStyle: React.CSSProperties = {
  padding: "20px 40px",
};

const storyWrapper = (storyFn: any) => (
  <div style={wrapperStyle}>
    <h3>Component Demo</h3>
    {storyFn()}
  </div>
);

addDecorator(storyWrapper);
addDecorator(withInfo);
addParameters({ info: { inline: true, header: false } });
