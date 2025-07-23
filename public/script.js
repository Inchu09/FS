const zodiacSigns = [
    {
        name: 'Aries',
        date: 'Mar 21 - Apr 19',
        personality: 'Adventurous, energetic, and confident',
        element: 'Fire',
        planet: 'Mars',
        traits: ['Courageous', 'Determined', 'Confident', 'Optimistic'],
        description: 'Aries are known for their energetic and adventurous nature...'
    },
    {
        name: 'Taurus',
        date: 'Apr 20 - May 20',
        personality: 'Reliable, patient, and practical',
        element: 'Earth',
        planet: 'Venus',
        traits: ['Reliable', 'Practical', 'Sensuous', 'Stubborn'],
        description: 'Taurus are known for their reliable and practical nature...'
    },
    {
        name: 'Gemini',
        date: 'May 21 - Jun 20',
        personality: 'Adaptable, outgoing, and intelligent',
        element: 'Air',
        planet: 'Mercury',
        traits: ['Communicative', 'Versatile', 'Unpredictable', 'Superficial'],
        description: 'Geminis are known for their adaptable and outgoing nature...'
    },
    {
        name: 'Cancer',
        date: 'Jun 21 - Jul 22',
        personality: 'Emotional, intuitive, and protective',
        element: 'Water',
        planet: 'Moon',
        traits: ['Emotional', 'Loyal', 'Protective', 'Moody'],
        description: 'Cancers are known for their emotional and intuitive nature...'
    },
    {
        name: 'Leo',
        date: 'Jul 23 - Aug 22',
        personality: 'Charismatic, ambitious, and generous',
        element: 'Fire',
        planet: 'Sun',
        traits: ['Confident', 'Generous', 'Prideful', 'Dominating'],
        description: 'Leos are known for their charismatic and ambitious nature...'
    },
    {
        name: 'Virgo',
        date: 'Aug 23 - Sep 22',
        personality: 'Analytical, practical, and reliable',
        element: 'Earth',
        planet: 'Mercury',
        traits: ['Analytical', 'Practical', 'Critical', 'Perfectionistic'],
        description: 'Virgos are known for their analytical and practical nature...'
    },
    {
        name: 'Libra',
        date: 'Sep 23 - Oct 22',
        personality: 'Diplomatic, social, and fair-minded',
        element: 'Air',
        planet: 'Venus',
        traits: ['Diplomatic', 'Social', 'Balanced', 'Indecisive'],
        description: 'Librans are known for their diplomatic and social nature...'
    },
    {
        name: 'Scorpio',
        date: 'Oct 23 - Nov 21',
        personality: 'Passionate, determined, and intuitive',
        element: 'Water',
        planet: 'Pluto',
        traits: ['Passionate', 'Determined', 'Secretive', 'Vengeful'],
        description: 'Scorpios are known for their passionate and determined nature...'
    },
    {
        name: 'Sagittarius',
        date: 'Nov 22 - Dec 21',
        personality: 'Optimistic, adventurous, and honest',
        element: 'Fire',
        planet: 'Jupiter',
        traits: ['Optimistic', 'Adventurous', 'Honest', 'Blunt'],
        description: 'Sagittarians are known for their optimistic and adventurous nature...'
    },
    {
        name: 'Capricorn',
        date: 'Dec 22 - Jan 19',
        personality: 'Responsible, disciplined, and self-controlled',
        element: 'Earth',
        planet: 'Saturn',
        traits: ['Responsible', 'Disciplined', 'Ambitious', 'Pessimistic'],
        description: 'Capricorns are known for their responsible and disciplined nature...'
    },
    {
        name: 'Aquarius',
        date: 'Jan 20 - Feb 18',
        personality: 'Innovative, independent, and humanitarian',
        element: 'Air',
        planet: 'Uranus',
        traits: ['Innovative', 'Independent', 'Humanitarian', 'Rebellious'],
        description: 'Aquarians are known for their innovative and independent nature...'
    },
    {
        name: 'Pisces',
        date: 'Feb 19 - Mar 20',
        personality: 'Compassionate, artistic, and intuitive',
        element: 'Water',
        planet: 'Neptune',
        traits: ['Compassionate', 'Artistic', 'Intuitive', 'Sensitive'],
        description: 'Pisces are known for their compassionate and artistic nature...'
    }
];

const zodiacGrid = document.getElementById('zodiac-grid');
