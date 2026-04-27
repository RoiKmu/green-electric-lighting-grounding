'use client';

import FlagshipProductTemplate from '../FlagshipProductTemplate';

interface CopperBondedRodProps {
  image: string;
}

export default function CopperBondedRod({ image }: CopperBondedRodProps) {
  const product = {
    titleKey: 'cbr.title',
    subtitleKey: 'cbr.subtitle',
    coreParameterLabelKey: 'cbr.coreParameterLabel',
    coreParameterValueKey: 'cbr.coreParameterValue',
    descriptionKey: 'cbr.description',
    image: image,
    introductionKeys: [
      'cbr.introduction1',
      'cbr.introduction2'
    ],
    featureKeys: [
      'cbr.feature1',
      'cbr.feature2',
      'cbr.feature3',
      'cbr.feature4',
      'cbr.feature5',
      'cbr.feature6'
    ],
    techPrincipleKeys: [
      { titleKey: 'cbr.tech1Title', descriptionKey: 'cbr.tech1Desc' },
      { titleKey: 'cbr.tech2Title', descriptionKey: 'cbr.tech2Desc' },
      { titleKey: 'cbr.tech3Title', descriptionKey: 'cbr.tech3Desc' }
    ],
    productModels: {
      headersKey: ['cbr.model', 'cbr.diameter', 'cbr.length', 'cbr.copperThickness', 'cbr.resistance'],
      rows: [
        ['CBR-14.2', '14.2mm', '1.2m / 2.4m / 3.0m', '0.25mm', '< 0.1Ω'],
        ['CBR-17.2', '17.2mm', '1.2m / 2.4m / 3.0m', '0.25mm', '< 0.1Ω'],
        ['CBR-20.0', '20.0mm', '1.2m / 2.4m / 3.0m', '0.25mm', '< 0.1Ω'],
        ['CBR-25.0', '25.0mm', '1.2m / 2.4m / 3.0m', '0.33mm', '< 0.1Ω']
      ]
    },
    productTier: 'high-performance' as const,
    productId: 'copper-bonded-rod'
  };

  return <FlagshipProductTemplate product={product} />;
}
