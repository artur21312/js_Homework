Розшир задачі зі спадкуванням новими функціями та логікою:

Загальні вимоги:
Singleton:
Клас EmailService повинен бути реалізований як Singleton (тільки один екземпляр може бути створений для базового класу).
Обмеження преміум email:
У класі PremiumEmailService встанови обмеження: не більше 5 преміум email. Якщо ліміт перевищено, метод addPremiumEmail повинен кидати помилку.
Взаємодія між екземплярами:
Додай клас EnterpriseEmailService, який також успадковує EmailService.
EnterpriseEmailService повинен мати метод migratePremiumEmails(targetService), який переносить всі преміум email до іншого екземпляра PremiumEmailService.
Додаткові функції:
Кожен клас має логіку логування (через захищений метод _log(message)), який додає запис в масив приватної властивості #logs та виводить його в консоль.
Створи метод getLogs() для отримання всіх записів логів.
Приклад використання

Copy code
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