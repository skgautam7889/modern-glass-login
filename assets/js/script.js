
$(function () {
    const STORAGE = {
        mode: 'modernLoginThemeMode',
        color: 'modernLoginAccentColor'
    };

    const colors = [
        { name: 'Indigo', primary: '#6366f1', dark: '#4338ca', secondary: '#ec4899' },
        { name: 'Blue', primary: '#2563eb', dark: '#1d4ed8', secondary: '#06b6d4' },
        { name: 'Cyan', primary: '#0891b2', dark: '#0e7490', secondary: '#14b8a6' },
        { name: 'Green', primary: '#16a34a', dark: '#15803d', secondary: '#22c55e' },
        { name: 'Orange', primary: '#ea580c', dark: '#c2410c', secondary: '#f59e0b' },
        { name: 'Rose', primary: '#e11d48', dark: '#be123c', secondary: '#f43f5e' },
        { name: 'Purple', primary: '#9333ea', dark: '#7e22ce', secondary: '#d946ef' },
        { name: 'Teal', primary: '#0d9488', dark: '#0f766e', secondary: '#06b6d4' }
    ];

    $.each(colors, function (_, color) {
        $('<button>', {
            type: 'button',
            class: 'color-swatch',
            title: color.name,
            'data-color': color.name
        }).css('background', 'linear-gradient(135deg,' + color.primary + ',' + color.secondary + ')')
            .appendTo('#colorList');
    });

    function rgba(hex, alpha) {
        const n = parseInt(hex.replace('#', ''), 16);
        return 'rgba(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + alpha + ')';
    }

    function setColor(color) {
        document.documentElement.style.setProperty('--primary', color.primary);
        document.documentElement.style.setProperty('--primary-dark', color.dark);
        document.documentElement.style.setProperty('--secondary', color.secondary);
        document.documentElement.style.setProperty('--input-focus', color.primary);
        document.documentElement.style.setProperty('--input-ring', rgba(color.primary, .18));
        localStorage.setItem(STORAGE.color, color.name);
        $('.color-swatch').removeClass('active');
        $('.color-swatch[data-color="' + color.name + '"]').addClass('active');
    }

    function setTheme(mode) {
        let theme = mode;
        if (mode === 'auto') {
            theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        if (theme === 'dark') $('html').attr('data-theme', 'dark');
        else $('html').removeAttr('data-theme');

        localStorage.setItem(STORAGE.mode, mode);
        $('#themeMode').val(mode);
        $('#themeToggle i').attr('class', theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon');
    }

    const savedColor = localStorage.getItem(STORAGE.color);
    setColor(colors.find(c => c.name === savedColor) || colors[0]);
    setTheme(localStorage.getItem(STORAGE.mode) || 'auto');

    $('#paletteToggle').on('click', function (e) {
        e.stopPropagation();
        $('#colorPanel').toggleClass('show');
    });

    $('#colorPanel').on('click', function (e) { e.stopPropagation(); });
    $(document).on('click', function () { $('#colorPanel').removeClass('show'); });

    $('#colorList').on('click', '.color-swatch', function () {
        const color = colors.find(c => c.name === $(this).data('color'));
        if (color) setColor(color);
    });

    $('#themeMode').on('change', function () { setTheme($(this).val()); });

    $('#themeToggle').on('click', function () {
        const current = $('html').attr('data-theme') === 'dark' ? 'dark' : 'light';
        setTheme(current === 'dark' ? 'light' : 'dark');
    });

    let isSignUp = false;

    function setAuthMode(signUp) {
        isSignUp = signUp;
        clearErrors();

        if (signUp) {
            $('#tabSignIn').removeClass('active').attr('aria-selected', 'false');
            $('#tabSignUp').addClass('active').attr('aria-selected', 'true');
            $('#formHeading').text('Create an account');
            $('#formSubheading').text('Start your 14-day free trial, no credit card required');
            $('#nameGroup').slideDown(180);
            $('#submitBtnText').text('Create Account');
            $('#footerPrompt').text('Already have an account?');
            $('#footerActionLink').text('Sign in');
            $('#password').attr('autocomplete', 'new-password');
        } else {
            $('#tabSignUp').removeClass('active').attr('aria-selected', 'false');
            $('#tabSignIn').addClass('active').attr('aria-selected', 'true');
            $('#formHeading').text('Welcome back');
            $('#formSubheading').text('Sign in to manage your account and workspace');
            $('#nameGroup').slideUp(180);
            $('#submitBtnText').text('Sign In');
            $('#footerPrompt').text("Don't have an account?");
            $('#footerActionLink').text('Sign up');
            $('#password').attr('autocomplete', 'current-password');
        }
    }

    $('#tabSignIn').on('click', function () { setAuthMode(false); });
    $('#tabSignUp').on('click', function () { setAuthMode(true); });
    $('#footerActionLink').on('click', function (e) {
        e.preventDefault();
        setAuthMode(!isSignUp);
    });

    $('#togglePassword').on('click', function () {
        const input = $('#password');
        const show = input.attr('type') === 'password';
        input.attr('type', show ? 'text' : 'password');
        $(this).find('i').attr('class', show ? 'fa-regular fa-eye-slash' : 'fa-regular fa-eye');
    });

    function validEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }

    function showError(input, error, message) {
        $('#' + input).addClass('is-invalid');
        $('#' + error).addClass('visible').find('span').text(message);
    }

    function clearError(input, error) {
        $('#' + input).removeClass('is-invalid');
        $('#' + error).removeClass('visible').find('span').text('');
    }

    function clearErrors() {
        clearError('email', 'emailError');
        clearError('password', 'passwordError');
        clearError('userName', 'nameError');
    }

    $('#email,#password,#userName').on('input', function () {
        const map = { email: 'emailError', password: 'passwordError', userName: 'nameError' };
        clearError(this.id, map[this.id]);
    });

    let toastTimer;
    function showToast(message, type) {
        type = type || 'success';
        clearTimeout(toastTimer);
        $('#toastNotification').removeClass('show success error').addClass(type);
        $('#toastMsg').text(message);
        $('#toastNotification').find('i').attr('class',
            type === 'error' ? 'fa-solid fa-circle-exclamation' : 'fa-solid fa-circle-check'
        );
        setTimeout(function () { $('#toastNotification').addClass('show'); }, 10);
        toastTimer = setTimeout(function () { $('#toastNotification').removeClass('show'); }, 3200);
    }

    $('#authForm').on('submit', function (e) {
        e.preventDefault();
        clearErrors();

        let hasError = false;
        const name = $('#userName').val().trim();
        const email = $('#email').val().trim();
        const password = $('#password').val();

        if (isSignUp && !name) {
            showError('userName', 'nameError', 'Please enter your full name');
            hasError = true;
        }
        if (!email) {
            showError('email', 'emailError', 'Email address is required');
            hasError = true;
        } else if (!validEmail(email)) {
            showError('email', 'emailError', 'Please enter a valid email address');
            hasError = true;
        }
        if (!password) {
            showError('password', 'passwordError', 'Password is required');
            hasError = true;
        } else if (password.length < 6) {
            showError('password', 'passwordError', 'Password must be at least 6 characters');
            hasError = true;
        }

        if (hasError) return;

        $('#submitBtn').addClass('loading').prop('disabled', true);
        setTimeout(function () {
            $('#submitBtn').removeClass('loading').prop('disabled', false);
            showToast(isSignUp ? 'Account created successfully!' : 'Signed in successfully!');
            if (isSignUp) {
                $('#userName,#email,#password').val('');
            }
        }, 1000);
    });

    $('.btn-social').on('click', function () {
        showToast($(this).attr('title') + ' (demo)');
    });

    $('#forgotLink').on('click', function (e) {
        e.preventDefault();
        const email = $('#email').val().trim();
        if (email && validEmail(email)) {
            showToast('Password reset link sent to ' + email);
        } else {
            showToast('Please enter your email above to reset password', 'error');
            $('#email').trigger('focus');
        }
    });

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', function () {
        if ((localStorage.getItem(STORAGE.mode) || 'auto') === 'auto') setTheme('auto');
    });
});