// Ask the user to input basic salary and benefits
let basicSalary = prompt("Enter basic salary");
let benefits = prompt("Enter benefits");

// Calculate tax 
function calculateTax(salary) {
    let tax = 0
    if (salary <= 24000) {
        tax = (salary * 0.1)
    } else if (salary >= 24001 && salary <= 32333) {
        tax = (salary * 0.25)
    } else if (salary >= 32334 && salary <= 500000) {
        tax = (salary * 0.3)
    } else if (salary >= 500001 && salary <= 800000) {
        tax = (salary * 0.325)
    } else {
        tax = (salary * 0.35)
    }
    return tax;

}
console.log("tax:", calculateTax(basicSalary));

// Calculate NHIF deductions
function calculateNHIFDeductions(basicSalary) {
    let NHIFrate = 0
    if (basicSalary <= 5999) {
        NHIFrate = (150)
    } else if (basicSalary >= 6000 && basicSalary <= 7999) {
        NHIFrate = (300)
    } else if (basicSalary >= 8000 && basicSalary <= 11999) {
        NHIFrate = (400)
    } else if (basicSalary >= 6000 && basicSalary <= 7999) {
        NHIFrate = (300)
    } else if (basicSalary >= 8000 && basicSalary <= 11999) {
        NHIFrate = (400)
    } else if (basicSalary >= 12000 && basicSalary <= 14999) {
        NHIFrate = (500)
    } else if (basicSalary >= 15000 && basicSalary <= 19999) {
        NHIFrate = (600)
    } else if (basicSalary >= 20000 && basicSalary <= 24999) {
        NHIFrate = (750)
    } else if (basicSalary >= 25000 && basicSalary <= 29999) {
        NHIFrate = (850)
    } else if (basicSalary >= 30000 && basicSalary <= 34999) {
        NHIFrate = (900)
    } else if (basicSalary >= 35000 && basicSalary <= 39999) {
        NHIFrate = (950)
    } else if (basicSalary >= 40000 && basicSalary <= 45999) {
        NHIFrate = (1000)

    } else {
        NHIFrate = (1700)
    }
    return NHIFrate
}
console.log("NHIFDeductions:",calculateNHIFDeductions(basicSalary));

// Calculate NSSF deductions
function calculateNSSFContributions(pensionablePay) {
    const tierIRate = 0.06;
    const tierIILowerLimit = 70001

    if (pensionablePay <= tierIILowerLimit) {
        NSSFrate = pensionablePay * tierIRate;
    }
    else {
        NSSFrate = tierIILowerLimit * tierIRate;
    }
    return NSSFrate
}
console.log("NSSFrate:",calculateNSSFContributions(basicSalary));

//Calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = parseInt(basicSalary) + parseInt(benefits);
    const tax = calculateTax(grossSalary);
    const NHIFDeductions = calculateNHIFDeductions(basicSalary);
    const NSFFDeductions = calculateNSSFContributions(basicSalary);
    const netSalary = grossSalary - tax - NHIFDeductions - NSFFDeductions;

    return {
        grossSalary,
        tax,
        NHIFDeductions,
        NSFFDeductions,
        netSalary
    };
}
// Output the net salary
const netSalaryData = calculateNetSalary(basicSalary, benefits);
console.log("Net Salary:", netSalaryData);

window.alert(`Gross Salary:${netSalaryData.grossSalary},
Tax:${netSalaryData.tax},
NHIF Deduction:${netSalaryData.NHIFDeductions},
NSSF Deduction:${netSalaryData.NSFFDeductions},
Net Salary:${netSalaryData.netSalary}`);