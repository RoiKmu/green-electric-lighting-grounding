'use client';

import FlagshipProductTemplate from '../FlagshipProductTemplate';

interface EarlyDischargeLightningRodProps {
  image: string;
}

export default function EarlyDischargeLightningRod({ image }: EarlyDischargeLightningRodProps) {
  const product = {
    title: 'Early Streamer Emission Lightning Rod',
    subtitle: 'Active Lightning Attraction Technology',
    coreParameterLabel: 'Core Parameter',
    coreParameterValue: 'Protection Radius 120m',
    description: 'Active lightning attraction technology, expanding protection radius through early streamer emission.',
    image: image,
    introduction: [
      'The RZ-T Green Early Streamer Emission Lightning Rod works by generating an upward leader faster than ordinary lightning rods. Before the natural upward leader forms, the RZ-T ESE lightning rod will first generate a leader that quickly propagates towards the lightning direction until it captures the lightning and conducts it to the ground. Laboratory tests have confirmed that the earlier generation of the upward leader, known as the initiation advance time ΔT, gives the RZ-T ESE lightning rod a more effective lightning protection function.',
      'Note: This description only describes negative downward lightning strikes. Under the same conditions, the rapidly approaching upward leader discharge potential is also tens of thousands of volts lower than ordinary lightning rods, meaning the RZ-T ESE lightning rod has lower lightning discharge energy and lower instantaneous grounding impulse current, which is the only application example of the electrical-geometric model. So far, this type of lightning strike is the most frequent.'
    ],
    features: [
      'Complies with GB50057 Building Lightning Protection Design Code and NFC17-102 French National Lightning Protection Standard.',
      'Stainless steel material, corrosion resistant.',
      'Maintenance-free, passive, no radiation.',
      'Lightweight, easy installation.',
      'Fully compatible with "Green" lightning protection system accessories, optional metal strips, wires and anti-cable down conductors.'
    ],
    techPrinciples: [
      { 
        title: 'Early Discharge Technology', 
        description: 'Actively generates upward leader, intercepts lightning current in advance, expands protection radius' 
      },
      { 
        title: 'High Efficiency Lightning Attraction', 
        description: 'Optimized electrode design, significantly improving lightning attraction efficiency and reliability' 
      },
      { 
        title: 'Corrosion Resistant Material', 
        description: 'Aviation grade stainless steel, ensuring long-term stable operation in harsh environments' 
      }
    ],
    productModels: {
      headers: ['Model', 'Advance Time ΔT', 'Length', 'Weight'],
      rows: [
        ['φ22 Standard Rod', '0μs', '0.35m', '2kg'],
        ['RZ-T(25)', '25μs', '0.35m', '2.5kg'],
        ['RZ-T(40)', '40μs', '0.35m', '2.5kg'],
        ['RZ-T(60)', '60μs', '0.35m', '2.5kg']
      ]
    },
    protectionRadiusTables: {
      title: 'Protection Radius for Different Building Classes (Unit: m)',
      subtitle: 'h = Height above the protected object plane (Unit: m)',
      classes: [
        {
          title: 'Class I Lightning Protection Buildings',
          headers: ['Tip Height', '2', '3', '4', '5', '6', '7', '8', '10', '15', '20', '45', '60'],
          rows: [
            { label: 'φ22 Standard', values: [11, 13, 15, 17, 18, 20, 21, 22, 26, 28, '-', '-'] },
            { label: 'RZ-T(25)', values: [17, 25, 34, 42, 43, 43, 43, 44, 45, 45, '-', '-'] },
            { label: 'RZ-T(40)', values: [24, 35, 46, 58, 58, 59, 59, 59, 60, 60, '-', '-'] },
            { label: 'RZ-T(60)', values: [32, 48, 64, 79, 79, 79, 79, 80, 80, 80, '-', '-'] }
          ]
        },
        {
          title: 'Class II Lightning Protection Buildings',
          headers: ['Tip Height', '2', '3', '4', '5', '6', '7', '8', '10', '15', '20', '45', '60'],
          rows: [
            { label: 'φ22 Standard', values: [14, 17, 19, 21, 23, 24, 26, 28, 34, 37, 45, '-'] },
            { label: 'RZ-T(25)', values: [23, 34, 45, 57, 58, 59, 59, 61, 63, 65, 70, '-'] },
            { label: 'RZ-T(40)', values: [30, 45, 60, 75, 76, 76, 77, 77, 80, 81, 85, '-'] },
            { label: 'RZ-T(60)', values: [40, 59, 78, 97, 97, 98, 98, 99, 101, 102, 105, '-'] }
          ]
        },
        {
          title: 'Class III Lightning Protection Buildings',
          headers: ['Tip Height', '2', '3', '4', '5', '6', '7', '8', '10', '15', '20', '45', '60'],
          rows: [
            { label: 'φ22 Standard', values: [16, 19, 22, 24, 26, 66, 67, 69, 72, 75, 84, 85] },
            { label: 'RZ-T(25)', values: [26, 39, 52, 65, 84, 84, 85, 87, 89, 92, 99, 100] },
            { label: 'RZ-T(40)', values: [33, 50, 66, 84, 84, 85, 85, 87, 89, 92, 99, 100] },
            { label: 'RZ-T(60)', values: [44, 65, 87, 107, 107, 108, 108, 109, 111, 113, 119, 120] }
          ]
        }
      ]
    }
  };

  return <FlagshipProductTemplate product={product} />;
}
