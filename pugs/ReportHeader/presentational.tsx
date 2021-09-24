// Dependencies
import React from 'react';

// Types
import { ReportHeaderPresentationalPropsInterface } from './types';

// Styles
import './style.css';

// Component
import component from './component.pug';

function ReportHeaderPresentational(
  props: ReportHeaderPresentationalPropsInterface
) {
  return <>{component(props)}</>;
}

export default ReportHeaderPresentational;
