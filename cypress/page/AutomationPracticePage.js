export default class AutomationPracticePage {

    countriesSelect = ".ui-autocomplete-input"
    courseInstructorColumn = "[name='courses'] > tbody > tr > :nth-child(1)"
    courseContentColumn = "[name='courses'] > tbody > tr > :nth-child(2)"
    coursePriceColumn = "[name='courses'] > tbody > tr > :nth-child(3)"
    employeeAmountColumn = '.tableFixHead > #product > tbody > tr >:nth-child(4)'
    totalAmountCollectedLabel = ".totalAmount"
    courseIframe = "#courses-iframe"

    constructor() {

    }

    getCountriesSelect() {

        return cy.get(this.countriesSelect)
    }

    getCourseInstructorColumn() {

        return cy.get(this.courseInstructorColumn)
    }

    getCourseContentColumn() {

        return cy.get(this.courseContentColumn)
    }

    getCoursePriceColumn() {

        return cy.get(this.coursePriceColumn)
    }

    getEmployeeAmountColumn() {

        return cy.get(this.employeeAmountColumn)
    }

    getTotalAmountCollectedLabel() {

        return cy.get(this.totalAmountCollectedLabel)
    }

    getCourseIframe() {

        return cy.get(this.courseIframe)
    }
}