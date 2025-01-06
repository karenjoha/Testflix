const content = [
  {
    id: 1,
    title: 'DRIVE TO SURVIVE',
    type: 'series',
    genre: 'Sci-Fi',
    year: 2010,
    poster: 'https://s3-alpha-sig.figma.com/img/45f4/8f2f/61339bdba5997b4851869ca8428cf829?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NvMWHK6dZBeHBSIFeNyEJKGKqXu3qPxTF653gPLRHJm3h~8-odVBmgVNn5ZuDNc6X3D2z~e8vHFSEkAoNTzEXD9KnKL~CfyC1iHvpcYvSRJnEkqKJ9u1ZHqLyUd77nqzTfL5-wHlQQBl7rn2PwpwlmYSC59rI-02Zjnk6-5GP~Ex2QCGUxCQTde0NnECcan~0xVro-vFO9SYTZKWsGI9724HF9v~ODenZDQrUa4f8UElbTTcsaZNYaQuAW5G1AKIjfet1PM5GgOB~N4i7ChwOiTwM1tkeMwf2EvtXrf0jeZSXutA3pdr4fA63KK3vqmjPDriY48-FRcgchU5DZC~sw__',
    description: "Explora la emocionante vida de los pilotos de Fórmula 1, revelando los desafíos, rivalidades y la adrenalina que enfrentan durante las temporadas de carreras.",
    qualification: "8.7"
  },
  {
    id: 2,
    title: 'BLACK MIRROR',
    type: 'series',
    genre: 'Action',
    year: 2008,
    poster: 'https://s3-alpha-sig.figma.com/img/2734/978c/593f4894ea54fe5a5db261f470228998?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bDj1f8y~-2-Gq~j90OJXIK5ifUkcxkFLF1cIdGcCbChvf2nBpGykmaJ1Ahz8bpnueJ9oer5kwj3jn-ImHCSLWRfdjZ7aaK6cE0ahgBTG-N4lKUYNOeAU-cQhrVnp7UDJhqKiv327WBSs0egoPa~tztkYXEyaXjquJaCl7j2WeeHm38XIzI35fzOmocWoyT100Ad3xWgzBeHQ7-S21dDyueZhT51YN3Q8cscL18mwK6Muh8DJSic75UClKvo1IXMqeOPDSAVs3aaiUBf6GbS92LKu5ZFF506Ipr8CTBm~kmfehU0A-syYLO10CDrnJDMqHqAd8KFguCCxQq-uT42rRA__',
    description: "Su vida depende del status en las redes sociales y la boda elitista de una amiga...",
    qualification: "7.8"
  },
  {
    id: 3,
    title: 'GRISELDA',
    type: 'series',
    genre: 'Horror',
    year: 2016,
    poster: 'https://s3-alpha-sig.figma.com/img/855e/f8e1/c1ae36e6aa1b06639c36bdba6a2c44fc?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K~Op2MsgC~Pq-6FTdyvyu23sEj2R5~PhHcQsK3lQVYo5-sJbncaHbfTOUiX~H24va1Fc-08PBDweTVvgGlvAkV1OSYv0SUBLHltBRHlKsnfw3GL3aAU4PiGfoI~ctWxCOnTzTxJf66aiVydPaoEoYzurBcE~9C-JmJJ0YfdgpfKERgsg2d98RyuVpIWZY4SrhLkNzrq~PNVK3H5G1BK~diNbr3CdDIDu563fyRfK1zLEOab9M-a7QrtAaxOa9nVmWhlN7KtXNySADSw32~DxJ9zAM2Eihx1UYMDZpJePFERMvX7zRU6cVH4x89Wz3fST6yY4u6znUjh4QqwxqIXAQA__',
    description: "Una historia macabra basada en hechos reales, que sigue los oscuros eventos que rodean a la figura de Griselda Blanco, una de las mayores narcotraficantes de Colombia.",
    qualification: "7.6"
  },
  {
    id: 4,
    title: 'EL MARGINAL',
    type: 'series',
    genre: 'Sci-Fi',
    year: 2019,
    poster: 'https://s3-alpha-sig.figma.com/img/712a/ed2f/3ce596478e227fe2012fd7f41d318de6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NUeYqESOzQEv-drV~Y5WdyYVeXyDd0XGRc4LXc2OmoMBSGgQ1L~MR~kh8q9Y2JH20b36fgMpqe0b7QYXOJDGnsRyLQAutDYXXxU9Bci~lNug4tFX8bYrMSTM35vqO5joi51kaNSkMscGZHEpPdC1WOgLI5ajfNmoG8bt0Du~e1Nz4bGYEUYrmDByMSrAaYjsE9zX9FVRcq9aO4EO2Rcdz-tw2FDrOOzO9fuE9T6bwCow1FuoCyjZYmjM18Lk8PW2IbpvS4EglcOiRE8-XPYTH1RkmRK3hDSinkeZxxsMQjZhS-ajs6REv1-p6wf~szPN3AuueP1RZf-SRPUpDGj4Ow__',
    description: "Un grupo de prisioneros de una cárcel argentina lucha por sobrevivir, mientras navegan las tensiones dentro del sistema penitenciario.",
    qualification: "8.2"
  },
  {
    id: 5,
    title: 'PEAKY BLINDERS',
    type: 'movie',
    genre: 'Sci-Fi',
    year: 2014,
    poster: 'https://s3-alpha-sig.figma.com/img/34ed/0f2f/d224d6d1d8cbfa08c06a39fc3f828cf2?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GW2uCEmkqLK90k1jaDvC6LAtSQRuxm1biCLngqk-RXAN6h9BOe~i61z26WnT4bB9HTNp4KcMTkzq3lOaHqpXljpeJENezOkUlB3lj8FlxZ524iZaDpD3Nvo4gUm~PfdPoBZmrZiniDRlrYReQpz5CAJLr04aVEfn7dxuWtVlxUMGC20A1gxhZ8FNlV4SUyNOf4sFdl3MpRhvFE5EGMALj1hzwLDdWjHgK5xarX3m8MadVCEIKf39vXC3xcICGbTAGVZdjUPmPripy42vyPXLYoPiRiJC4uKgGad5axY2R9qexp1HnAb~YrJJMgq1WoHzEQuCxipHBGewT~Ss9rDKGw__',
    description: "Los Peaky Blinders, una familia criminal de Birmingham en el siglo XX, luchan por expandir su imperio mientras enfrentan a la policía y otros rivales.",
    qualification: "8.8"
  },
  {
    id: 6,
    title: 'ACTIVIDAD PARANORMAL',
    type: 'movie',
    genre: 'Terror',
    year: 2014,
    poster: 'https://img.asmedia.epimg.net/resizer/v2/B626BCSI2VMZVNULSNWJFXVXSI.jpg?auth=5f0d93381dee19afc2c0a7913ad09006f1476226b84bf6f90fb61a0d212c6544&width=644',
    description: "Un grupo de amigos graba eventos paranormales que ocurren en su casa, lo que pronto se convierte en una amenaza mortal.",
    qualification: "6.2"
  },
  {
    id: 7,
    title: 'BREAKING BAD',
    type: 'series',
    genre: 'Suspence',
    year: 2024,
    poster: 'https://s3-alpha-sig.figma.com/img/c588/2a3e/e0dee9fe05fddbf70ea5543612590b45?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dt47Itx57h8r2eBQ0xF~urXZYqtvbuW025oMqRjhjW2nGe9xDUwjK6tTVYdo-xTq7DDEixiq0LMeF5YoB6YplAaPGkbGLLKlbXnr7LH7gBUc78recnmIm17rlGdrS9wPrb~fB0UE-87LaHR5YFWvQs3jpJTljAQdLTeE9lXMdMr7idjQK7YzJ2vqrn3zYNiX6T5TcXUOhNfq32YhAsels1YDtl9vTJ~54XR~KbCJZA~SBNqUtyoGP-1gqnj8jwj04SrJPEyxrwz-2GbHr8hDNuwgtd~qnlBt37u5qzuaGmNZJTup2uGG4DYJW0Hy~reO4JUIxHvqI3AbzypuaI0kDA__',
    description: "Un hombre común se convierte en un químico productor de metanfetaminas para garantizar el futuro de su familia mientras lucha con las consecuencias morales de sus decisiones.",
    qualification: "9.5"
  }
];

export default content;
