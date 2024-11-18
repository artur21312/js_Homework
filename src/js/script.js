`use strict`;

class EmailService{

    static email=[];
#logs=[];
    constructor(email,#logs){
        this.email=email;
        this.#logs=this.#logs;

        post.email.push(this);
    }

    _log(message){
    this.#logs.push(message);
    console.log(this.#logs);
    }

    getLogs(){
        return this.#logs;
    }
}

class PremiumEmailService extends EmailService{
    #premiumEmails = [];

    constructor() {
        super();
    }

    addPremiumEmail(email){
    if (email.length===6)console.error('The premium client base is full');
        this.#premiumEmails.push(email);
        this._log(`Added premium email: ${email}`);
    }
    getPremiumEmails() {
        return this.#premiumEmails;
    }

}

class EnterpriseEmailService extends EmailService{

    constructor() {
        super();
    }


    migratePremiumEmails(targetService){
    PremiumEmailService.email.push(targetService);
    }

}

const premiumService1 = new PremiumEmailService();
const premiumService2 = new PremiumEmailService();
const enterpriseService = new EnterpriseEmailService();

premiumService1.addPremiumEmail("vip1@premium.com");
premiumService1.addPremiumEmail("vip2@premium.com");

console.log(premiumService1.getPremiumEmails());
// ["vip1@premium.com", "vip2@premium.com"]

enterpriseService.addPremiumEmail("enterprise@premium.com");

enterpriseService.migratePremiumEmails(premiumService2);

console.log(premiumService2.getPremiumEmails());
// ["enterprise@premium.com"]

console.log(premiumService1.getLogs());
