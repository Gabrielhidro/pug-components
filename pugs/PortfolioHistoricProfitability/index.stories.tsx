// Dependencies
import React from 'react';
import { Story, Meta } from '@storybook/react';

// Component
import PortfolioHistoricProfitability from '.';

// Types
import { PortfolioHistoricProfitabilityPropsInterface } from './types';
import PortfolioHistoricProfitabilityPresentational from './presentational';

export default {
  title: 'Components/PortfolioHistoricProfitability/Default',
  component: PortfolioHistoricProfitability,
} as Meta;

const Template: Story = (props: PortfolioHistoricProfitabilityPropsInterface) => {
  const { title } = props;

  return <PortfolioHistoricProfitabilityPresentational title={title} />;
};

export const Default = Template.bind({});

export const ExampleTitle = Template.bind({});
ExampleTitle.args = {
  title: 'Histórico de Rentabilidade da Carteira (%)',
};
