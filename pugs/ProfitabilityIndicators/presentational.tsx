// Dependencies
import React from 'react';

// Types
import { ProfitabilityIndicatorsPresentationalPropsInterface } from './types';

// Styles
import './style.css';

// Component
import component from './component.pug';

function ProfitabilityIndicatorsPresentational(
  props: ProfitabilityIndicatorsPresentationalPropsInterface
) {
  return <>{component(props)}</>;
}

export default ProfitabilityIndicatorsPresentational;
