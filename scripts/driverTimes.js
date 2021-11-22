#!/usr/bin/env node

function format (u, v) {
    switch(u) {
        case 'ms': 
            if (v < 10) { return `00${v}` }
            if (v < 100) { return `0${v}`}
            
            return v
        case 's': 
            if (v < 10) { return `0${v}` }
        
            return v
        case 'm':
            default:
                if (v < 10) { return `0${v}` }
                
                return v
    }
}

const times = [
    {
        name: 'dyreborg24',
        times: ['01:38:559','2:20:724',]
    },
    {
        name: 'HadHnSpeeD85_04',
        times:[ '01:36:426','02:19:848',]
    },
    {
        name: 'mazda917',
        times: ['01:37:278','02:20:154',]
    },
    {
        name: 'ISR_EeekDK',
        times:['01:38:892','02:24:651',]
    },
    {
        name: 'Zaligrace',
        times:['01:37:437','02:21:210']
    },
    {
        name: 'Dazza456',
        times: ['01:37:518','02:19:482']
    },
    {
        name: 'Redflyer710',
        times: ['01:41:301','02:26:376']
    },
    {
        name: 'Erazor_DK',
        times: ['01:39:804','02:21:849']
    },
    {
        name: 'daddyfarrell',
        times: ['01:39:012','02:21:372',]
    },
    {
        name: 'whitesnake_91',
        times: ['01:39:555','02:24:372']
    },
    {
        name: 'TheBlast33',
        times: ['01:37:095', '02:19:947',]
    },
    {
        name: 'CaGa-TaCoS',
        times: ['1:37:050', '2:21:666',]
    },
    {
        name: 'shawnsuresh',
        times: ['1:37:482', '2:20:340',]
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

    const t = [
         format('m', min),
         format('s', sec),
         format('ms', ms)
    ]

    return {
        ...entry,
        total: t.join(':')
    }
})
.sort((a, b) => Number(a.total.replace(/:/ig, '')) - Number(b.total.replace(/:/ig, '')))
.map((entry, index, arr) =>{
    const chunk = arr.length / 2
    return index < chunk
    ? {...entry, category: 'PRO'}
    : {...entry, category: 'AM'}
})

console.log(JSON.stringify(res, null, 2))