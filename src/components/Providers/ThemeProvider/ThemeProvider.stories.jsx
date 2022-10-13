import React from 'react';
import ThemeProvider from './ThemeProvider';
import Button from '../../Forms/Button/Button';
import CheckBox from '../../Forms/CheckBox/CheckBox';

// Loaders
import ProgressBar from '../../Loaders/ProgressBar/ProgressBar';
import Spinner from '../../Loaders/Spinner/Spinner';
import RadioButton from '../../Forms/RadioButton/RadioButton';
import RadioButtonSet from '../../Forms/RadioButton/RadioButtonSet';
import TextInput from '../../Forms/TextInput/TextInput';
import Tooltip from '../../Overlays/Tooltip/Tooltip';

export default {
  title: 'Providers/ThemeProvider',
  component: ThemeProvider,
  args: {
    button: {
      primaryColor: '#ff0062',
      secondaryColor: 'black',
    },
    progressBar: {
      primaryColor: '#ff0062',
      secondaryColor: 'lightgray',
    },
    spinner: {
      primaryColor: '#ff0062',
    },
    checkBox: {
      primaryColor: '#ff0062',
      contentColor: 'green',
      disabledColor: 'lightgray',
    },
    radioButton: {
      primaryColor: '#ff0062',
      contentColor: 'green',
      disabledColor: 'lightgray',
    },
    textInput: {
      primaryColor: '#ff0062',
      secondaryColor: 'green',
      contentColor: 'black',
    },
  },
};

export const ThemeProviderExample = ({ ...args }) => {
  const options = [
    { label: 'Hello World', value: 'hello-world' },
    { label: 'Hello World 2', value: 'hello-world-2' },
    {
      label: 'Hello World 3 with a somewhat longer text that should wrap without interfering with the helptip',
      value: 'hello-world-3',
      helptip: {
        title: 'hello world 3',
        text: 'this is hello world 3',
        helpTipOptions: { place: 'right' },
      },
    },
  ];
  return (
    <ThemeProvider theme={args}>
      <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '10px' }}>
        <Button>Button</Button>
        <TextInput onChange={() => {}} value="text input" label="Text Input" labelPosition="inside" />
        <TextInput disabled onChange={() => {}} value="disabled text input" label="Text Input" labelPosition="inside" />
        <CheckBox label="Checked Check Box" onClick={() => {}} checked />
        <CheckBox label="Unchecked Check Box" onClick={() => {}} />
        <CheckBox label="Disabled Check Box" onClick={() => {}} disabled />
        <CheckBox label="Disabled Check Box" checked onClick={() => {}} disabled />

        <RadioButton label="Unchecked Radio Button" value="345" onChange={() => {}} />
        <RadioButton label="Checked Radio Button" value="123" checked onChange={() => {}} />
        <RadioButton label="Checked Disabled Radio Button" value="123" checked disabled onChange={() => {}} />
        <RadioButton label="Unchecked Disabled Radio Button" value="123" disabled onChange={() => {}} />

        <RadioButtonSet
          value={'hello-world'}
          label="RadioButtonSet"
          name="hello world"
          options={options}
          onChange={() => {}}
        />

        <>
          <Tooltip>"tool tip with colors"</Tooltip>
        </>
        <ProgressBar steps={10} curStep={6} />
        <Spinner />
      </div>
    </ThemeProvider>
  );
};
