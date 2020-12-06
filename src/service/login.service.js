import HttpClient from './base-http';

export class LoginService {

    static loginByEmailPassword(email, password) {
        return HttpClient.httpPost('https://localhost:44359/User/Login', { email: email, password: password });
    }

    //static agoraLogin(email, password) {
    //    return HttpClient.httpPost('https://www.agorastore.fr/login', { Email: email, Password: password });
    //}

    //static registrer() {
    //    return HttpClient.httpPost('https://www.agorastore.fr/portail/inscription.aspx', {
    //        Mail: email,
    //        MotDePasse: password,
    //        MotDePasse2: password2,
    //        Civilite: civilite,
    //        Nom: firstname,
    //        Prenom: lastname,
    //        JourNaissance: dayBirth,
    //        MoisNaissance: monthBirth,
    //        AnneeNaissance: yearBirth,
    //        Tel: tel,
    //        Adresse: adress,
    //        CP: cp,
    //        Ville: city,
    //        Pays: country
    //    });
    //}
}
