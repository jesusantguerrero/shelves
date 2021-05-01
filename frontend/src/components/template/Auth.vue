<template>
    <div class="login-box">
        <div class="form-signin">
          <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
:root {
    --primary-color: blue;
}

.login-body {
    background: #fdfdff;
    background-size: cover;
}

.login-box {
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to left bottom,#3a4a73 0,#1b243f);
    background: url(../assets/zen-photo.jpg);
    background-position: center;
    background-size: cover;
    background-size: cover;
    filter: blur(5px), grayscale(70%);
    position: relative;

    &::after {
        content: "";
        background: linear-gradient(to left bottom,#3a4a73 0,#1b243f);
        display: block;
        position: absolute;
        width: 100%;
        top: 0;
        opacity: .85;
        left: 0;
        height: 100%;
    }

    form {
        color: white;
        max-width: 450px;
        border-radius: 4px;
        // box-shadow: 0 0 10px 4px rgba($color: #000000, $alpha: 0.2);
        z-index: 2;
    }

    .btn-action {
        @apply bg-green-600;
        width: 100%;
        color: white;
        border: none;
        margin: 10px 0;
        transition: all ease 0.3s;
        border: 2px solid white;
        height: 40px;

        &:hover {
            @apply bg-green-500;
        }
    }

    input {
        @apply rounded-sm;
        font-weight: bolder;
        min-width: 250px;
        width: 100%;
        height: 40px;

        &:hover,
        &:focus {
            //
        }

        &.error-input {
           @apply border-red-400  text-red-400 border-2
        }
    }

    .login-title {
        @apply text-3xl;
        text-align: center;
        margin-top: 15px;
        margin-bottom: 20px;
    }

    .password-label {
        display: flex;
        justify-content: space-between;
    }

    .google-btn {
        @apply text-gray-400;
        align-items: center;
        padding: 0 0 0 0 !important;
        background: white !important;
        height: 47px !important;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
    }
}

.copyrights {
    @apply text-gray-100;
    height: 10vh;
    text-align: center;
    margin: 5px 0;
    p {
        margin: 0;
    }
}

.splash-screen {
    top: 0;
    left: 0;
    color: #fff;
    background: var(--primary-color);
    position: absolute;
    height: 100vh;
}

.splash-logo {
    width: 300px;
}

.form-group {
    margin: 15px 0;

    label {
        margin: 0.5rem 0;
    };

    &--error {
        @apply text-red-400;
        input {
            @apply shadow-sm;
            @apply border-2;
            @apply border-red-300;
        }
    }
}

.form-control {
    @apply text-gray-400;
    @apply px-2;

    &:focus {
        outline: none;
    }
}

@keyframes fadeSplash {
    0% {
        opacity: 1;
    }
    60% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes loading-circle {
    0% {
        transform: rotate(0deg);
    }
    60% {
        transform: rotate(90deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@media (max-width: 768px) {
    .login-body .login-box div {
        margin-right: 0;
    }
}
</style>
