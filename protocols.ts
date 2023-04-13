export type License = {
model: string,
licensePlate: string,
year: number,
color: string
}


export type Job = Omit<License, "id">

