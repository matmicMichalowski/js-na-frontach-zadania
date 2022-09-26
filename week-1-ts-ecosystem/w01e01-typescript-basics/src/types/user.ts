export class User {
    constructor(private userData: UserInfo) {
    }

    hasAddress(): boolean {
        return !!this.userData.address
    }

    hasGivenAge(requiredAge: number): boolean {
        return this.userData.age >= requiredAge
    }

    get name() {
        return this.userData.name
    }
}

export type UserInfo = {
    name: string,
    age: number,
    email: string,
    address?: Address
}

export type Address = {
    street: string
    no: number
}
