import { Api } from "./api.js";
import { RenderLogin } from "./render.js";

const token = localStorage.getItem("kenzie@companies:token");
const admin = localStorage.getItem("kenzie@companies:admin")




if(!token){
    window.location.replace("/index.html")
}else if(admin == "false"){
    window.location.replace("/src/pages/userpage.html")
}



const toggleDarkMode = document.querySelector(".main__button--darkmode")
toggleDarkMode.addEventListener("click", event => {
    event.preventDefault()
    const html = document.querySelector("html")
    html.classList.toggle("dark_mode")
    const coverDark = document.getElementById("cover__dark--mode")
    coverDark.classList.toggle("main__darkmode--over")
    coverDark.classList.toggle("main__darkmode--over2")
})

const createCompany = document.getElementById("createCompany")
createCompany.addEventListener("click", async event =>{
    event.preventDefault()
    const data = await Api.getSectionsCreate()
    RenderLogin.renderModalCreate(data)
})
const listCompanies = document.getElementById("listCompanies")
listCompanies.addEventListener("click",async event =>{
    event.preventDefault()
    const data = await Api.getCompaniesSelect()
    RenderLogin.renderMyCompanies(data)
})

const listCompaniesBtn = document.getElementById("listCompaniesSelect")
listCompaniesBtn.addEventListener("click",async event =>{
    event.preventDefault()
    const listCompaniesSelect = document.getElementById("CompanySelect")
    const idSelect = listCompaniesSelect.selectedOptions[0].id
    const listCompany = await Api.getCompaniesSelect()
    RenderLogin.createModalCompany(listCompany, idSelect)

})
const listSectorsBtn = document.getElementById("listSectorsBtn")
listSectorsBtn.addEventListener("click",async event =>{
    event.preventDefault()
    const listSectorSelect = document.getElementById("SectorSelect")
    const sectorSelect = listSectorSelect.selectedOptions[0].value
    const companiesSector = await Api.getCompaniesSector(sectorSelect)
    RenderLogin.renderMyCompanies(companiesSector)

})
const createDepartment = document.getElementById("departmentCreateBtn")
createDepartment.addEventListener("click", event =>{
    event.preventDefault()
    const departmentSelect = document.getElementById("DepartmentCreateSelect")
    const companySelect = departmentSelect.selectedOptions[0].id
    RenderLogin.renderModalDepartment(companySelect)

})
const listDepartmentsBtn = document.getElementById("listDepartmentsBtn")
listDepartmentsBtn.addEventListener("click", async event =>{
    event.preventDefault()
    const departmentListSelect = document.getElementById("DepartmentListSelect")
    const companySelect = departmentListSelect.selectedOptions[0].id
    const listDepartments = await Api.listDepartment(companySelect)
    RenderLogin.listDepartmentsCompany(listDepartments)
})
const contractEmployee = document.getElementById("employeeContractBtn")
contractEmployee.addEventListener("click",async event =>{
    event.preventDefault()
    const selectOption = document.getElementById("employeeContractDepartment")
    const selectedId = selectOption.selectedOptions[0].id
    const selectDepartmentOption = document.getElementById("employeeContractCompany")
    const selectedDepartmentId = selectDepartmentOption.selectedOptions[0].id

    const data = {
        "user_uuid": selectedId,
        "department_uuid": selectedDepartmentId
    }
    await Api.contractWorker(data)
    RenderLogin.renderAllUnemployed()
})
const fireEmployee = document.getElementById("fireEmployeeBtn")
fireEmployee.addEventListener("click", async event =>{
    event.preventDefault()
    const selectOption = document.getElementById("fireEmployeeDepartment")
    const selectedId = selectOption.selectedOptions[0].id
    await Api.fireWorker(selectedId)
    RenderLogin.renderAllEmployed()
})
const listUsers = document.getElementById("listUsers")
listUsers.addEventListener("click",async event =>{
    event.preventDefault()
    const data = await Api.workersOutOfWork()
    RenderLogin.renderListUnemployed(data)
})

const selectUser = document.getElementById("editUsers")
selectUser.addEventListener("click", event =>{
    event.preventDefault()
    const selectOption = document.getElementById("editUser")
    const selectedId = selectOption.selectedOptions[0].id

    RenderLogin.renderModalEdit(selectedId)
})
const exitButton = document.querySelector(".header__container--logout")
exitButton.addEventListener("click", event  =>{
    event.preventDefault()
    localStorage.clear()
    window.location.replace("/index.html")
})
RenderLogin.renderOptions()
RenderLogin.renderOptionsSectors()
RenderLogin.renderOptionsDepartment()
RenderLogin.renderOptionsCompaniesDepartment()
RenderLogin.renderAllDepartment()
RenderLogin.renderAllUnemployed()
RenderLogin.renderAllEmployed()
RenderLogin.renderListWorkers()
Api.getSections()
