import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'One price.',
  description:
    'Pay once and get life-time access to our high quality plugin.',
  plans: [
    {
      id: 'bootstrap',
      title: 'MIDI Converter Plugin',
      description: 'Unlock the full potential of your music with our MIDI Converter Plugin.',
      price: '$ 29.99',
      isRecommended: true,
      features: [
        {
          title: 'Wide Music Selection',
        },
        {
          title: 'High Accuracy',
        },
        {
          title: 'Easy to Use',
        },
        {
          title: 'Quick Conversion',
        },
        null,
      ],
      action: {
        href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Single%20license',
      },
    },
  ],
}
