export interface LoginResponse {
    ok:      boolean;
    usuario: Usuario;
    token:   string;
    msg?: string;
}

export interface Usuario {
    name:   string;
    email:  string;
    online: boolean;
    uid:    string;
}