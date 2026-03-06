'use client';

import FlagshipProductTemplate from '../FlagshipProductTemplate';

interface LightningWarningSystemProps {
  image: string;
}

export default function LightningWarningSystem({ image }: LightningWarningSystemProps) {
  const product = {
    title: 'Lightning Warning System',
    subtitle: 'Atmospheric Electric Field Monitoring',
    coreParameterLabel: 'Core Parameter',
    coreParameterValue: 'Warning Time 20 min',
    description: 'Comprehensive atmospheric electric field monitoring, providing 20 minutes advance warning time for lightning activities.',
    image: image,
    introduction: [
      'The Green Lightning Warning System is an advanced atmospheric electric field monitoring device that can detect changes in atmospheric electric field intensity in real-time and accurately predict the occurrence of lightning activities. Through high-precision sensors and intelligent algorithms, the system can issue early warnings 20 minutes before lightning strikes, providing valuable time for personnel evacuation and equipment protection.',
      'The system adopts a multi-level warning mechanism, automatically triggering different levels of alarms based on the intensity of atmospheric electric field changes. When the electric field intensity reaches a preset threshold, the system will issue sound and light alarms and can be linked with other safety systems to achieve automatic power-off, equipment shutdown and other protective measures, minimizing the losses caused by lightning.'
    ],
    features: [
      'Real-time monitoring of atmospheric electric field intensity changes, accurately capturing lightning formation signals.',
      'AI intelligent algorithm based on big data analysis, accurately predicting lightning activity 20 minutes in advance.',
      'Multi-level graded warning mechanism, providing different levels of alerts based on lightning intensity.',
      'Supports multiple alarm methods including sound, light, SMS and network push notifications.',
      'Can be linked with automation systems to achieve automatic power-off and equipment protection.',
      'Remote monitoring and management via web platform and mobile APP.'
    ],
    techPrinciples: [
      { 
        title: 'Atmospheric Field Monitoring', 
        description: 'Real-time monitoring of atmospheric electric field intensity changes, accurately capturing lightning formation signals' 
      },
      { 
        title: 'Intelligent Warning Algorithm', 
        description: 'AI algorithm based on big data, accurately warning of lightning activity 20 minutes in advance' 
      },
      { 
        title: 'Multi-level Alarm Mechanism', 
        description: 'Graded warning system, providing different levels of alerts based on lightning intensity' 
      }
    ],
    productModels: {
      headers: ['Model', 'Detection Range', 'Warning Time', 'Communication'],
      rows: [
        ['LWS-100', '15km radius', '15-20 min', '4G/WiFi'],
        ['LWS-200', '20km radius', '20-30 min', '4G/WiFi/Ethernet'],
        ['LWS-300', '30km radius', '25-35 min', '4G/5G/WiFi/Ethernet'],
        ['LWS-500', '50km radius', '30-45 min', '4G/5G/Satellite']
      ]
    },
    protectionRadiusTables: {
      title: 'Warning Level Configuration',
      subtitle: 'Electric field intensity threshold and corresponding warning level',
      classes: [
        {
          title: 'Warning Level Standards',
          headers: ['Level', 'Electric Field (kV/m)', 'Warning Status', 'Recommended Action'],
          rows: [
            { label: 'Level 1', values: ['< 1.0', 'Normal', 'Continue monitoring'] },
            { label: 'Level 2', values: ['1.0 - 3.0', 'Attention', 'Prepare for protection'] },
            { label: 'Level 3', values: ['3.0 - 5.0', 'Warning', 'Implement protection measures'] },
            { label: 'Level 4', values: ['> 5.0', 'Danger', 'Immediate evacuation'] }
          ]
        },
        {
          title: 'System Response Time',
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
