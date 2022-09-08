import { instance, instanceWithToken } from "./axios.js";
import { RenderLogin } from "./render.js";
import { Toast } from "./toast.js";
import { renderFooter} from "./utils/enum.js";

export class Api{
    static async getCompanies(){
        const companies = await instance
        .get("companies")
        .then(response => {
                RenderLogin.renderCompanies(response.data)
        })
        .catch(error => {
            console.log(error)
        })
        return companies
    }
    static async signUp(data){
        const signUp = await instance
        .post("auth/register/user", data)
        .then(response => {
            Toast.create("Cadastro realizado!", "#FF8000")
            setTimeout(() => {
                const modalCadastro = document.getElementById("modalSignup")
                modalCadastro.classList.toggle("hidden")
            }, 2000)
        })
        .catch(error =>{
            Toast.create("Falha ao cadastrar", "red")
            console.log(error)
        })
        return signUp
    }
    static async login(data){
        const login = await instance
        .post("auth/login", data)
        .then(response => {
            console.log(response.data)
            localStorage.setItem("kenzie@companies:token", response.data.token)
            localStorage.setItem("kenzie@companies:admin", response.data.is_admin)
            localStorage.setItem("kenzie@companies:uuid", response.data.uuid)
            
            Toast.create("Login realizado com sucesso!", "#FF8000")
            if(localStorage.getItem("kenzie@companies:admin") == "true"){
                setTimeout(() => {
                    window.location.replace("/src/pages/dashboard.html")
                }, 2000)
            }else{
                setTimeout(() => {
                    window.location.replace("/src/pages/userpage.html")
                }, 2000)
            }
        })
        .catch(error =>{
            Toast.create("Falha ao logar!", "red")
            console.log(error)
        })
        return login
    }
    static async getCoworkers(){
        const getCoworkers = await instanceWithToken
        .get("users/departments/coworkers")
        .then(response =>{ 
            console.log(response.data)
            RenderLogin.renderCoworkers(response.data)
        })
        .catch(error =>{
            Toast.create("Falha ao ver funcionarios do seu departamento!", "red")
            console.log(error)
        })
        return getCoworkers
    }
    static async getDepartment(){
        const getDepartment = await instanceWithToken
        .get("users/departments")
        .then(response => {
            RenderLogin.renderDepartment(response.data)
            console.log(response.data)
        })
        .catch(error =>{
            Toast.create("Você não pertence a um departamento!", "red")
            console.log(error)
        })
        return getDepartment
    }
    static async getCompany(){
        const getCompany = await instanceWithToken
        .get("users/departments")
        .then(response => {
            RenderLogin.renderCompany(response.data)
            console.log(response)
        })
        .catch(error =>{
            Toast.create("Você não pertence a uma empresa!", "red")
            console.log(error)
        })
        return getCompany
    }
    static async editUser(data){
        const editUser = await instanceWithToken
        .patch("users", data)
        .then(response => {
            console.log(response.data)
        })
        .catch(error =>{
            Toast.create("Falha ao editar!", "red")
            console.log(error)
        })
        return editUser
    }
    static async getSections(){
        const getSections = await instanceWithToken
        .get("sectors")
        .then(response =>{
            renderFooter.renderListItems(response.data)
        })
        .catch(error =>{
            Toast.create("Falha ao listar!", "red")
            console.log(error)
        })
        return getSections
    }
    static async getSectionsCreate(){
        const getSections = await instanceWithToken
        .get("sectors")
        .then(response =>{
            return response.data
            
        })
        .catch(error =>{
            Toast.create("Falha ao listar!", "red")
            console.log(error)
        })
        return getSections
    }
    static async createCompany(data){
        const createCompany = await instanceWithToken
        .post("companies", data)
        .then(response =>{
            Toast.create("Empresa Criada", "#FF8000")
            console.log(response)
        })
        .catch(error =>{
            Toast.create("Falha ao criar!", "red")
            console.log(error)
        })
        return createCompany
    }
    static async getCompaniesSelect(){
        const companies = await instance
        .get("companies")
        .then(response => {
                return response.data
        })
        .catch(error => {
            Toast.create("Falha ao listar!", "red")
            console.log(error)
        })
        return companies
    }
    static async getCompaniesSector(sector){
        const companySector = await instance
        .get(`companies/${sector}`)
        .then(response =>{
            return response.data
        })
        .catch(error => {
            Toast.create("Falha ao listar!", "red")
            console.log(error)
        })
        return companySector
    }
    static async createDepartment(data){
        const departmentCreate = await instanceWithToken
        .post("departments", data)
        .then(response =>{
            Toast.create("Departamento Criado", "#FF8000")
            return response.data
        })
        .catch(error => {
            Toast.create("Falha ao listar!", "red")
            console.log(error)
        })
        return departmentCreate
    }
    static async listDepartment(data){
        const departmentList = await instanceWithToken
        .get(`departments/${data}`)
        .then(response =>{
            return response.data
        })
        .catch(error => {
            Toast.create("Falha ao listar!", "red")
            console.log(error)
        })
        return departmentList
    }
    static async workersOutOfWork(){
        const workersList = await instanceWithToken
        .get("admin/out_of_work")
        .then(response =>{
            return response.data
        })
        .catch(error => {
            Toast.create("Falha ao listar!", "red")
            console.log(error)
        })
        return workersList
    }
    static async workerForce(){
        const workerForceList = await instanceWithToken
        .get("users")
        .then(response =>{
            return response.data
        })
        .catch(error => {
            Toast.create("Falha ao listar!", "red")
            console.log(error)
        })
        return workerForceList
    }
    static async listDepartmentsAll(){
        const listDepartments = await instanceWithToken
        .get("departments")
        .then(response =>{
            return response.data
        })
        .catch(error => {
            Toast.create("Falha ao listar!", "red")
            console.log(error)
        })
        return listDepartments
    }
    static async contractWorker(data){
        const contractWorker = await instanceWithToken
        .patch("departments/hire/", data)
        .then(response =>{
            Toast.create("Usuario Contratado", "#FF8000")
            return response.data
        })
        .catch(error => {
            Toast.create("Falha ao Contratar!", "red")
            console.log(error)
        })
        return contractWorker
    }
    static async fireWorker(data){
        const fireWorker = await instanceWithToken
        .patch(`departments/dismiss/${data}`)
        .then(response =>{
            Toast.create("Usuario Demitido", "#FF8000")
            console.log(response)
        })
        .catch(error => {
            Toast.create("Falha ao demitir", "red")
            console.log(error)
        })
        return fireWorker
    }
    static async editUserWorking(data, id){
        const editUserWorking = await instanceWithToken
        .patch(`admin/update_user/${id}`, data)
        .then(response =>{
            Toast.create("Usuario Editado", "#FF8000")
            console.log(response)
        })
        .catch(error => {
            Toast.create("Falha ao editar", "red")
            console.log(error)
        })
        return editUserWorking
    }
    static async getUserSettings(){
        const userSettings = await instanceWithToken
        .get("users/profile")
        .then(response =>{
            localStorage.setItem("kenzie@companies:department_uuid", response.data.department_uuid)
            return response
        })
        .catch(error => {
            console.log(error)
        })
    }
    
}
