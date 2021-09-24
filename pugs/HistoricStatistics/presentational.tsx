// Dependencies
import React from 'react';

// Types
import { HistoricStatisticsPresentationalPropsInterface } from './types';

// Styles
import './style.css';

// Component
import component from './component.pug';

function HistoricStatisticsPresentational(
  props: HistoricStatisticsPresentationalPropsInterface
) {
  return <>{component(props)}</>;
}

export default HistoricStatisticsPresentational;
