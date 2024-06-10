import { CompanyAccount } from './class/CompanyAccount'
import { NewAccount } from './class/NewAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(20)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(50)
console.log(companyAccount)
const newAccountTest = new NewAccount('Nath', 10)
newAccountTest.newDeposit(10)
console.log(newAccountTest)