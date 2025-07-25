// Copyright (c) 2025 The Jaeger Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react';
import { getConfigValue } from '../../utils/config/get-config';
import './TraceId.css';
import ClickToCopy from './ClickToCopy';

type Props = {
  traceId: string;
  className?: string;
};

export function TraceId({ traceId, className = '' }: Props) {
  const traceIdDisplayLength = getConfigValue('traceIdDisplayLength') || 7;
  const traceIdDisplay = traceId ? traceId.slice(0, traceIdDisplayLength) : '';
  const lengthClass = traceIdDisplayLength === 7 ? 'TraceIDLength--short' : 'TraceIDLength--full';

  return (
    <ClickToCopy text={traceId} className={`TraceIDLength ${lengthClass} u-tx-muted  ${className}`}>
      {traceIdDisplay}
    </ClickToCopy>
  );
}

export default TraceId;
