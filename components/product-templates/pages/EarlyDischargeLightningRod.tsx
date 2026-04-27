'use client';

import FlagshipProductTemplate from '../FlagshipProductTemplate';

interface EarlyDischargeLightningRodProps {
  image: string;
}

export default function EarlyDischargeLightningRod({ image }: EarlyDischargeLightningRodProps) {
  const product = {
    titleKey: 'ese.title',
    subtitleKey: 'ese.subtitle',
    coreParameterLabelKey: 'ese.coreParameterLabel',
    coreParameterValueKey: 'ese.coreParameterValue',
    descriptionKey: 'ese.description',
    image: image,
    introductionKeys: [
      'ese.introduction1',
      'ese.introduction2'
    ],
    featureKeys: [
      'ese.feature1',
      'ese.feature2',
      'ese.feature3',
      'ese.feature4',
      'ese.feature5'
    ],
    techPrincipleKeys: [
      { titleKey: 'ese.tech1Title', descriptionKey: 'ese.tech1Desc' },
      { titleKey: 'ese.tech2Title', descriptionKey: 'ese.tech2Desc' },
      { titleKey: 'ese.tech3Title', descriptionKey: 'ese.tech3Desc' }
    ],
    productModels: {
      headersKey: ['ese.model', 'ese.advanceTime', 'ese.length', 'ese.weight'],
      rows: [
        ['φ22 Standard Rod', '0μs', '0.35m', '2kg'],
        ['RZ-T(25)', '25μs', '0.35m', '2.5kg'],
        ['RZ-T(40)', '40μs', '0.35m', '2.5kg'],
        ['RZ-T(60)', '60μs', '0.35m', '2.5kg']
      ]
    },
    protectionRadiusTables: {
      titleKey: 'ese.protectionRadiusTitle',
      subtitleKey: 'ese.protectionRadiusSubtitle',
      classes: [
        {
          titleKey: 'ese.class1',
          headers: ['Tip Height', '2', '3', '4', '5', '6', '7', '8', '10', '15', '20', '45', '60'],
          rows: [
            { label: 'φ22 Standard', values: [11, 13, 15, 17, 18, 20, 21, 22, 26, 28, '-', '-'] },
            { label: 'RZ-T(25)', values: [17, 25, 34, 42, 43, 43, 43, 44, 45, 45, '-', '-'] },
            { label: 'RZ-T(40)', values: [24, 35, 46, 58, 58, 59, 59, 59, 60, 60, '-', '-'] },
            { label: 'RZ-T(60)', values: [32, 48, 64, 79, 79, 79, 79, 80, 80, 80, '-', '-'] }
          ]
        },
        {
          titleKey: 'ese.class2',
          headers: ['Tip Height', '2', '3', '4', '5', '6', '7', '8', '10', '15', '20', '45', '60'],
          rows: [
            { label: 'φ22 Standard', values: [14, 17, 19, 21, 23, 24, 26, 28, 34, 37, 45, '-'] },
            { label: 'RZ-T(25)', values: [23, 34, 45, 57, 58, 59, 59, 61, 63, 65, 70, '-'] },
            { label: 'RZ-T(40)', values: [30, 45, 60, 75, 76, 76, 77, 77, 80, 81, 85, '-'] },
            { label: 'RZ-T(60)', values: [40, 59, 78, 97, 97, 98, 98, 99, 101, 102, 105, '-'] }
          ]
        },
        {
          titleKey: 'ese.class3',
          headers: ['Tip Height', '2', '3', '4', '5', '6', '7', '8', '10', '15', '20', '45', '60'],
          rows: [
            { label: 'φ22 Standard', values: [16, 19, 22, 24, 26, 66, 67, 69, 72, 75, 84, 85] },
            { label: 'RZ-T(25)', values: [26, 39, 52, 65, 84, 84, 85, 87, 89, 92, 99, 100] },
            { label: 'RZ-T(40)', values: [33, 50, 66, 84, 84, 85, 85, 87, 89, 92, 99, 100] },
            { label: 'RZ-T(60)', values: [44, 65, 87, 107, 107, 108, 108, 109, 111, 113, 119, 120] }
          ]
        }
      ]
    },
    productTier: 'high-performance' as const,
    productId: 'ese-air-terminal'
  };

  return <FlagshipProductTemplate product={product} />;
}
