// Dependencies
import React from 'react';
import { Story, Meta } from '@storybook/react';

// Component
import HistoricStatistics from '.';

// Types
import { HistoricStatisticsPropsInterface } from './types';
import HistoricStatisticsPresentational from './presentational';

export default {
  title: 'Components/HistoricStatistics/Default',
  component: HistoricStatistics,
} as Meta;

const Template: Story = (props: HistoricStatisticsPropsInterface) => {
  const { title } = props;

  return <HistoricStatisticsPresentational title={title} />;
};

export const Default = Template.bind({});

export const ExampleTitle = Template.bind({});
ExampleTitle.args = {
  title: 'Estatística Histórica',
};
