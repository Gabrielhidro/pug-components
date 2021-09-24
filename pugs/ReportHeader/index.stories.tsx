// Dependencies
import React from 'react';
import { Story, Meta } from '@storybook/react';

// Component
import ReportHeader from '.';

// Types
import { ReportHeaderPropsInterface } from './types';
import ReportHeaderPresentational from './presentational';

export default {
  title: 'Components/ReportHeader/Default',
  component: ReportHeader,
} as Meta;

const Template: Story = (props: ReportHeaderPropsInterface) => {
  const { title } = props;

  return <ReportHeaderPresentational title={title} />;
};

export const Default = Template.bind({});

export const ExampleTitle = Template.bind({});
ExampleTitle.args = {
  title: 'Histórico de Rentabilidade da Carteira (%)',
};
