import React from 'react';
import ThemeProvider from './ThemeProvider';
import Button from '../../Forms/Button/Button';
import CheckBox from '../../Forms/CheckBox/CheckBox';
import RadioButton from '../../Forms/RadioButton/RadioButton';
import RadioButtonSet from '../../Forms/RadioButton/RadioButtonSet';
import TextInput from '../../Forms/TextInput/TextInput';
import Spinner from '../../Loaders/Spinner/Spinner';
import ProgressBar from '../../Loaders/ProgressBar/ProgressBar';
import IconProgressBarCircle from '../../Loaders/IconProgressBarCircle/IconProgressBarCircle';
import DropDownSelect from '../../Forms/DropDownSelect/DropDownSelect';
import { FaBeer } from 'react-icons/fa';
import DateTimePicker from '../../Forms/DateTimePicker/DateTimePicker';
import Switch from '../../Forms/Switch/Switch';

export default {
  title: 'Providers/ThemeProvider',
  component: ThemeProvider,
  args: {
    theme: {
      button: {
        primaryColor: 'black',
        secondaryColor: 'white',
        disabledColor: 'gray',
        disabledSecondaryColor: 'black',
      },
      checkbox: {
        primaryColor: 'black',
        secondaryColor: 'purple',
        disabledColor: 'grey',
      },
      radiobutton: {
        primaryColor: 'green',
        disabledColor: 'lightblue',
        labelColor: 'blue',
        labelDisabledColor: 'lightblue',
      },
      radioButtonSet: {
        labelColor: 'black',
        labelDisabledColor: 'grey',
      },
      textinput: {
        primaryColor: 'black',
        disabledColor: 'gray',
        labelColor: 'blue',
        inputColor: 'purple',
      },
      spinner: {
        primaryColor: 'green',
      },
      progressbar: {
        primaryColor: 'green',
        secondaryColor: 'black',
      },
      iconprogressbarcircle: {
        primaryColor: 'green',
        secondaryColor: 'black',
      },
      dropdownselect: {
        primaryColor: 'green',
        secondaryColor: 'gray',
        textColor: 'red',
      },
      datetimepicker: {
        primaryColor: 'green',
        secondaryColor: 'blue',
        disabledColor: 'tomato',
      },
      switch: {
        primaryColor: 'green',
        secondaryColor: 'blue',
        textColor: 'white',
        selectedTextColor: 'white',
        disabledTextColor: 'white',
        disabledColor: 'lightgray',
      },
    },
  },
};

export const ThemeProviderExample = ({ ...args }) => {
  const options = [
    { label: 'Checked', value: 'hello-world' },
    { label: 'Unchecked', value: 'hello-world-2' },
    { label: 'Disabled', value: 'hello-world-3', disabled: true },
  ];

  const optionsWithToolTip = [
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
    <ThemeProvider theme={args.theme}>
      <section style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '10px' }}>
        <h2>Form Elements</h2>
        <h3>Buttons</h3>
        <Button>Button</Button>
        <Button disabled>Disabled Button</Button>
        <h3>CheckBox</h3>
        <CheckBox label="Unchecked checkbox" />
        <CheckBox label="Checked checkbox" checked />
        <CheckBox label="Checked checkbox positioned Right" right checked />
        <CheckBox label="Checked disabled checkbox" checked disabled />
        <CheckBox label="Unchecked disabled checkbox" disabled />
        <CheckBox label="Checked checkbox with checkboxColor override" checkboxColor={'green'} checked />
        <h3>RadioButton</h3>
        <RadioButton label="Unchecked Radio Button" value="123" />
        <RadioButton label="Checked Radio Button" checked value="123" />
        <RadioButton label="Disabled unchecked Radio Button" disabled value="123" />
        <RadioButton label="Disabled checked Radio Button" checked disabled value="123" />
      </section>
      <h3>RadioButtonSet</h3>
      <RadioButtonSet value={'hello-world'} options={options} label="Radio Button Set" />
      <RadioButtonSet value={'hello-world'} options={optionsWithToolTip} label="Radio Button Set with tool tips" />
      <h3>TextInput</h3>
      <TextInput style={{ margin: '8px', width: '300px' }} label="Text Input" value="abc123" />
      <TextInput style={{ margin: '8px', width: '300px' }} label="Disabled Text Input" disabled value="abc123" />
      <h3>DropDownSelect</h3>
      <DropDownSelect
        value="option2"
        label="DropDownSelect"
        options={[
          {
            label: 'Option 1',
            value: 'option1',
          },
          {
            label: 'Option 2',
            value: 'option2',
          },
          {
            label: 'Option 3',
            value: 'option3',
          },
          {
            label: 'Option 4',
            value: 'option4',
          },
        ]}
        style={{ margin: '8px', width: '300px' }}
      />
      <DropDownSelect
        value="option2"
        label="DropDownSelect"
        disabled
        options={[
          {
            label: 'Option 1',
            value: 'option1',
          },
          {
            label: 'Option 2',
            value: 'option2',
          },
          {
            label: 'Option 3',
            value: 'option3',
          },
          {
            label: 'Option 4',
            value: 'option4',
          },
        ]}
        style={{ margin: '8px', width: '300px' }}
      />
      <h3>DateTimePicker</h3>
      <DateTimePicker style={{ margin: '8px' }} onChange={() => {}} label="DateTimePicker" value={'11/20/2020'} />
      <DateTimePicker
        style={{ margin: '8px' }}
        onChange={() => {}}
        label="DateTimePicker"
        value={'11/20/2020'}
        disabled
      />
      <h3>Switch</h3>
      <Switch
        options={[
          { label: 'option 1', value: 'option1' },
          { label: 'option 2', value: 'option2' },
          { label: 'option 3', value: 'option3' },
        ]}
        value={'option1'}
        style={{ margin: '8px' }}
        onChange={() => {}}
        label="Switch"
      />
      <Switch
        options={[
          { label: 'option 1', value: 'option1' },
          { label: 'option 2', value: 'option2' },
          { label: 'option 3', value: 'option3' },
        ]}
        value={'option1'}
        style={{ margin: '8px' }}
        onChange={() => {}}
        disabled
        label="Disabled Switch"
      />
      <section>
        <h2>Loaders</h2>
        <h3>Spinner</h3>
        <Spinner style={{ margin: '8px' }} />
        <Spinner hasCenter={true} style={{ margin: '8px' }} />
        <h3>Progress Bar</h3>
        <ProgressBar style={{ marginTop: '32px' }} curStep={5} steps={10} />
        <h3>Icon Progress Bar Circle</h3>
        <IconProgressBarCircle progress={20} />
        <IconProgressBarCircle progress={70}>
          <FaBeer size={50} />
        </IconProgressBarCircle>
      </section>
    </ThemeProvider>
  );
};
