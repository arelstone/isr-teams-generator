export type DriverCategory = 'AM' | 'PRO'

type Spa = string
type Zandvoort = string

export type Driver = {
    category: DriverCategory
    name: string
    total: string
    times: [Zandvoort, Spa]
}

export type TeamPlayers = {
    pro: Driver
    am: Driver
}