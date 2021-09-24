// Dependencies
import React from 'react';
import { Story, Meta } from '@storybook/react';

// Component
import ProfitabilityIndicators from '.';

// Types
import { ProfitabilityIndicatorsPropsInterface } from './types';
import ProfitabilityIndicatorsPresentational from './presentational';

export default {
  title: 'Components/ProfitabilityIndicators/Default',
  component: ProfitabilityIndicators,
} as Meta;

const Template: Story = (props: ProfitabilityIndicatorsPropsInterface) => {
  const { title } = props;

  return <ProfitabilityIndicatorsPresentational title={title} />;
};

export const Default = Template.bind({});

export const ExampleTitle = Template.bind({});
ExampleTitle.args = {
  title: 'Histórico de Rentabilidade da Carteira (%)',
};
