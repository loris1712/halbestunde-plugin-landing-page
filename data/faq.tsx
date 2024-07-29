import * as React from 'react'

const faq = {
  title: 'Frequently asked questions',
  // description: '',
  items: [
    {
      q: 'What types of sheet music can I convert to MIDI files?',
      a: (
        <>
          Our service supports a wide range of sheet music, from classical pieces by composers like Bach to contemporary jazz licks and more.
        </>
      ),
    },
    {
      q: 'How accurate are the MIDI files generated from the sheet music?',
      a: "We ensure high accuracy in our MIDI files, faithfully representing the original sheet music with precise note and timing conversion.",
    },
    {
      q: 'How easy is it to use your sheet music to MIDI conversion service?',
      a: 'Our service is designed to be user-friendly. Simply upload your sheet music file, and we\'ll take care of the rest, delivering a MIDI file quickly.',
    },
    {
      q: 'What is the typical processing time for converting sheet music to a MIDI file?',
      a: 'We pride ourselves on fast processing times, ensuring you receive your MIDI files without delay, ready for use in your projects.',
    },
  ],
}

export default faq
