const AutomationPracticePage = require("../page/AutomationPracticePage.js")
const CountryBuilder = require("../builder/CountryBuilder.js")

const automationPracticePage = new AutomationPracticePage()
const country = new CountryBuilder().contry().build()

describe("PSH Automation Test Boichetta Alejandro", () => {

    it("Get 'Venezuela' from Suggestion Class Example input", () => {

        cy.visit(Cypress.env("AutomationPracticeSite"))
        automationPracticePage.getCountriesSelect().type(country.vene + "{pageDown}{pageDown}").then(($countrySelect) => {
            expect($countrySelect).to.have.value(country.venezuela)
        })
    })

    it("Get the information of courses with a price higher than 30", () => {

        cy.visit(Cypress.env("AutomationPracticeSite"))
        automationPracticePage.getCoursePriceColumn().each(($row, index, $rows) => {
            if ($row.text() > 30) {
                automationPracticePage.getCourseInstructorColumn().eq(index).then(($instructor) => {
                    automationPracticePage.getCourseContentColumn().eq(index).then(($course) => {
                        const instructor = $instructor.text()
                        const course = $course.text()
                        cy.log("The price of the course number " + index + " is " + $row.text() + ". It's instructor is " + instructor + ", and the content of the course is: " + course)
                    })
                })
            }
        })
    })

    it("Get the sum of the 'Amount' values to validate if it's equal to 296", () => {

        cy.visit(Cypress.env("AutomationPracticeSite"))
        let amountSum = 0
        automationPracticePage.getEmployeeAmountColumn().each(($row, index, $rows) => {
            amountSum += parseInt($row.text())
        })
        automationPracticePage.getTotalAmountCollectedLabel().invoke("text").then(($totalAmount) => {
            expect($totalAmount).to.contain(amountSum)
        })
    })

    it("Get the elements from the header of the iframe and add them to an array", () => {

        cy.visit(Cypress.env("AutomationPracticeSite"))
        let headerArray = []
        cy.frameLoaded("#courses-iframe")
        cy.iframe("#courses-iframe").find(".nav-outer > .main-menu > .navbar-collapse > ul > li").each(($row, index, $rows) => { //acordate de agregar los get de los localizadores
            headerArray.push($row.text())
        }).then(() => {
            cy.log(headerArray.join(', '))
        })
    })

})
