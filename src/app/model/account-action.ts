export enum actionEnum {
    input = "input",
    output = "output",
    loan = "loan"
}

export class AccountAction {
    id: number
    AccountId: number
    type: actionEnum
    amount: number
}
