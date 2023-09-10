export interface LoginResponse {
    ok:      boolean;
    usuario: User;
    token:   string;
    msg?: string;
}

export interface User {
    name:   string;
    email:  string;
    online: boolean;
    uid:    string;
}