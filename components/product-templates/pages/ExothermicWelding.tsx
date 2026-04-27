'use client';

import FlagshipProductTemplate from '../FlagshipProductTemplate';

interface ExothermicWeldingProps {
  image: string;
}

export default function ExothermicWelding({ image }: ExothermicWeldingProps) {
  const product = {
    titleKey: 'ews.title',
    subtitleKey: 'ews.subtitle',
    coreParameterLabelKey: 'ews.coreParameterLabel',
    coreParameterValueKey: 'ews.coreParameterValue',
    descriptionKey: 'ews.description',
    image: image,
    introductionKeys: [
      'ews.introduction1',
      'ews.introduction2',
      'ews.introduction3'
    ],
    featureKeys: [
      'ews.feature1',
      'ews.feature2',
      'ews.feature3',
      'ews.feature4',
      'ews.feature5',
      'ews.feature6'
    ],
    techPrincipleKeys: [
      { titleKey: 'ews.tech1Title', descriptionKey: 'ews.tech1Desc' },
      { titleKey: 'ews.tech2Title', descriptionKey: 'ews.tech2Desc' },
      { titleKey: 'ews.tech3Title', descriptionKey: 'ews.tech3Desc' }
    ],
    productModels: {
      headersKey: ['ews.model', 'ews.powderWeight', 'ews.connectionType', 'ews.application'],
      rows: [
        ['F65', '65g', 'Wire-to-Wire', 'Grounding Wire Connection'],
        ['F115', '115g', 'Wire-to-Rod', 'Grounding Rod Connection'],
        ['F150', '150g', 'Wire-to-Flat', 'Flat Bar Connection'],
        ['F200', '200g', 'Rod-to-Rod', 'Heavy Duty Connection'],
        ['F250', '250g', 'Flat-to-Flat', 'Busbar Connection'],
        ['F450', '450g', 'Cable-to-Cable', 'Large Section Connection'],
      ]
    },
    productTier: 'high-performance' as const,
    productId: 'exothermic-welding'
  };

  return <FlagshipProductTemplate product={product} />;
}
