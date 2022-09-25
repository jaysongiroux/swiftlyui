// .storybook/manager.js

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import swiftlyui_theme from './swiftlyui_theme';

addons.setConfig({
  theme: swiftlyui_theme,
});
