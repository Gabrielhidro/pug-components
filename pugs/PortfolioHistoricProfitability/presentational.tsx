// Dependencies
import React from 'react';

// Types
import { PortfolioHistoricProfitabilityPresentationalPropsInterface } from './types';

// Styles
import './style.css';

// Component
import component from './component.pug';

function PortfolioHistoricProfitabilityPresentational(
  props: PortfolioHistoricProfitabilityPresentationalPropsInterface
) {
  return <>{component(props)}</>;
}

export default PortfolioHistoricProfitabilityPresentational;
