import config from "../config/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint("https://cloud.appwrite.io/v1")
            .setProject(config.appwriteProjectId);

        this.account = new Account(this.client);
    }

    // async sendEmail(name, email, password) { try { const user = await account.create('unique()', email, password, ""); console.log(user); // Success } catch (error) { console.log(error); // Failure } }
    async createAccount({email, password,name}) {
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if (userAccount) {
                // call another method
                console.log(email,password);
                return this.login({email, password});
            } else {
               return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }


    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;    
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();
export default authService;
