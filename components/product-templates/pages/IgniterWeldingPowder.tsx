'use client';

import FlagshipProductTemplate from '../FlagshipProductTemplate';

interface IgniterWeldingPowderProps {
  image: string;
}

export default function IgniterWeldingPowder({ image }: IgniterWeldingPowderProps) {
  const product = {
    titleKey: 'iwp.title',
    subtitleKey: 'iwp.subtitle',
    coreParameterLabelKey: 'iwp.coreParameterLabel',
    coreParameterValueKey: 'iwp.coreParameterValue',
    descriptionKey: 'iwp.description',
    image: image,
    introductionKeys: [
      'iwp.introduction1',
      'iwp.introduction2'
    ],
    featureKeys: [
      'iwp.feature1',
      'iwp.feature2',
      'iwp.feature3',
      'iwp.feature4',
      'iwp.feature5',
      'iwp.feature6'
    ],
    techPrincipleKeys: [
      { titleKey: 'iwp.tech1Title', descriptionKey: 'iwp.tech1Desc' },
      { titleKey: 'iwp.tech2Title', descriptionKey: 'iwp.tech2Desc' },
      { titleKey: 'iwp.tech3Title', descriptionKey: 'iwp.tech3Desc' }
    ],
    productModels: {
      headersKey: ['iwp.model', 'iwp.powderWeight', 'iwp.application', 'iwp.connectionType'],
      rows: [
        ['IWP-65', '65g', 'Grounding Wire', 'Wire-to-Wire'],
        ['IWP-115', '115g', 'Grounding Rod', 'Wire-to-Rod'],
        ['IWP-150', '150g', 'Flat Bar', 'Wire-to-Flat'],
        ['IWP-200', '200g', 'Heavy Duty', 'Rod-to-Rod'],
        ['IWP-250', '250g', 'Busbar', 'Flat-to-Flat'],
        ['IWP-450', '450g', 'Large Section', 'Cable-to-Cable']
      ]
    },
    productTier: 'high-performance' as const,
    productId: 'remote-igniter'
  };

  return <FlagshipProductTemplate product={product} />;
}
