const locators = {
    URL: {
        base_url: 'https://app.simulacomex.com.br/admin/usuarios/login',
        dashboard_url: 'https://app.simulacomex.com.br/',
    },
    LOGIN: {
        email_field: "#UsuarioLogin",
        password_field: "#UsuarioPassword",
        btn_login: "button[type='submit'].btn.btn-primary",
        error_message: "div.media-body",
    },
    PROFILE: {
        dropdown_menu: 'a.dropdown-toggle.user.ripple',
        menu_perfil: 'a:contains("Perfil")',
        link_editar: 'a:contains("Editar")',
        campo_senha: 'input[name="data[Usuario][password]"]',
        btn_salvar: 'button[type="submit"].btn.btn-primary',
        btn_sair: 'a[href="/admin/usuarios/logout"]',
    }
};

export default locators;