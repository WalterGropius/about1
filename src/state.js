const state = {
  top: 0,
  pages: 0,
  threshold: 4,
  mouse: [0, 0],
  content: [
    {
      tag: 'Umělecká agentura s komplexním portfoliem služeb',
      text: `2media`,
      images: ['/images/2mi01.jpg', '/images/2mi02.jpg', '/images/2mi03.jpg'],
    },
    {
      tag: '     Mediální  a umělecké zastoupení',
      text: `PR,TV,\nRADIO,\nAR,AI...`,
      images: ['/images/2mi06.jpg', '/images/2mi05.jpg', '/images/2mi04.jpg'],
    },
    {
      tag: 'Online',
      text: `TikTok,\n   Facebook,\nInstagram,\n      2mag...`,
      images: ['/images/2mi07.jpg', '/images/2mi08.jpg', '/images/2mi09.jpg'],
    },
  ],
  depthbox: [
    {
      depth: 0,
      color: '#FFFFFF',
      textColor: '#ffffff',
      text: 'Poskytujeme servis a zázemí zkušeným i začínajícím umělcům, akcím, projektům, službám, značkám i produktům. ',
      image: '/images/2mi11.jpg',
    },
    {
      depth: -5,
      textColor: '#ffffff',
      text:
        'Zaměřujeme se na kulturu, hudbu,film,divadlo, výtvarné umění, literaturu, tanec,design,lifestyle, módu,kosmetiku, gastronomii, cestování, ekologii...',
      image: '/images/04zTfWB.jpg',
    },
  ],
  lines: [
    {
      points: [
        [-20, 0, 0],
        [-9, 0, 0],
      ],
      color: '#6766B6',
      lineWidth: 3,
    },
    {
      points: [
        [20, 0, 0],
        [9, 0, 0],
      ],
      color: '#6766B6',
      lineWidth: 3,
    },
  ],
}

export default state
