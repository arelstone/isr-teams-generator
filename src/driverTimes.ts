const times = [
    {
        player: 'dyreborg24',
        times: ['01:38:559','02:21:861',]
    },
    {
        player: 'HadHnSpeeD85_04',
        times:[ '01:36:426','02:19:848',]
    },
    {
        player: 'mazda917',
        times: ['01:37:278','02:20:154',]
    },
    {
        player: 'ISR_EeekDK',
        times:['01:39:435','02:24:651',]
    },
    {
        player: 'Zaligrace',
        times:['01:37:437','02:21:210']
    },
    {
        player: 'Dazza456',
        times: ['01:37:518','02:19:482']
    },
    {
        player: 'Redflyer710',
        times: ['01:41:301','02:26:376']
    },
    {
        player: 'Erazor_DK',
        times: ['01:39:804','02:21:849']
    },
    {
        player: 'daddyfarrell',
        times: ['01:39:012','02:21:372',]
    },
    {
        player: 'whitesnake_91',
        times: ['01:39:555','02:24:372']
    },
    {
        player: 'TheBlast33',
        times: ['01:37:095', '02:19:947',]
    },
]

const res = times.map(entry => {
    const [z, s] = entry.times.map(t => t.split(':'))
    let ms = Number(z[2]) + Number(s[2])
    let sec = Number(z[1]) + Number(s[1])
    let min = Number(z[0]) + Number(s[0])

    if (ms > 999) {
        sec = sec + 1
        ms = ms - 999
    }
    if (sec > 59) {
        min = min + 1
        sec = sec - 59
    }


    const format = (u, v)=> {
        switch(u) {
            case 'ms': 
                if (v < 10) {
                    return `00${v}`
                }
                if (v < 100) {
                    return `0${v}`
                }
                return v
            case 's': 
                if (v < 10) {
                    return `0${v}`
                }
                return v
            case 'm':
            default:
                if (v < 10) {
                    return `0${v}`
                }
                return v
        }
    }

    const t = [
         format('m', min),
         format('s', sec),
         format('ms', ms)
    ]

    return {player: entry.player, total: t.join(':')}
})
.sort((a, b) => Number(a.total.replace(/:/ig, '')) - Number(b.total.replace(/:/ig, '')))
.map((entry, index, arr) =>{
    const chunk = arr.length / 2
    return index < chunk
    ? {...entry, category: 'PRO'}
    : {...entry, category: 'AM'}
})

console.log(res);