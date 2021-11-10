export type DriverCategory = 'AM' | 'PRO'

export type Driver = {
    category: DriverCategory
    name: string
    time: string
}

export type TeamPlayers = {
    pro: Driver
    am: Driver
}