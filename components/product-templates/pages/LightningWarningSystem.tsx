'use client';

import FlagshipProductTemplate from '../FlagshipProductTemplate';

interface LightningWarningSystemProps {
  image: string;
}

export default function LightningWarningSystem({ image }: LightningWarningSystemProps) {
  const product = {
    titleKey: 'lws.title',
    subtitleKey: 'lws.subtitle',
    coreParameterLabelKey: 'lws.coreParameterLabel',
    coreParameterValueKey: 'lws.coreParameterValue',
    descriptionKey: 'lws.description',
    image: image,
    introductionKeys: [
      'lws.introduction1',
      'lws.introduction2'
    ],
    featureKeys: [
      'lws.feature1',
      'lws.feature2',
      'lws.feature3',
      'lws.feature4',
      'lws.feature5',
      'lws.feature6'
    ],
    techPrincipleKeys: [
      { titleKey: 'lws.tech1Title', descriptionKey: 'lws.tech1Desc' },
      { titleKey: 'lws.tech2Title', descriptionKey: 'lws.tech2Desc' },
      { titleKey: 'lws.tech3Title', descriptionKey: 'lws.tech3Desc' }
    ],
    productModels: {
      headersKey: ['lws.model', 'lws.detectionRange', 'lws.warningTime', 'lws.communication'],
      rows: [
        ['LWS-100', '15km radius', '15-20 min', '4G/WiFi'],
        ['LWS-200', '20km radius', '20-30 min', '4G/WiFi/Ethernet'],
        ['LWS-300', '30km radius', '25-35 min', '4G/5G/WiFi/Ethernet'],
        ['LWS-500', '50km radius', '30-45 min', '4G/5G/Satellite']
      ]
    },
    protectionRadiusTables: {
      titleKey: 'lws.warningLevelTitle',
      subtitleKey: 'lws.warningLevelSubtitle',
      classes: [
        {
          titleKey: 'lws.warningLevelStandards',
          headers: ['Level', 'Electric Field (kV/m)', 'Warning Status', 'Recommended Action'],
          rows: [
            { label: 'Level 1', values: ['< 1.0', 'Normal', 'Continue monitoring'] },
            { label: 'Level 2', values: ['1.0 - 3.0', 'Attention', 'Prepare for protection'] },
            { label: 'Level 3', values: ['3.0 - 5.0', 'Warning', 'Implement protection measures'] },
            { label: 'Level 4', values: ['> 5.0', 'Danger', 'Immediate evacuation'] }
          ]
        },
        {
          titleKey: 'lws.systemResponseTime',
          headers: ['Parameter', 'LWS-100', 'LWS-200', 'LWS-300', 'LWS-500'],
          rows: [
            { label: 'Detection Response', values: ['< 1s', '< 0.5s', '< 0.3s', '< 0.1s'] },
            { label: 'Warning Delay', values: ['< 3s', '< 2s', '< 1s', '< 0.5s'] },
            { label: 'Data Update Rate', values: ['1s', '0.5s', '0.2s', '0.1s'] }
          ]
        }
      ]
    }
  };

  return <FlagshipProductTemplate product={product} />;
}
