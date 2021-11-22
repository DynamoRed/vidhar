<template>
    <div class="maintenance-page">
        <img src="~assets/images/maintenance.png" class="illustration">
        <h2>Whoops !</h2>
        <span>{{$t('maintenance.description')}} 😓</span>
        <footer>
            <a href="https://dynamored.com">https://dynamored.com</a>
            <a href="mailto:contact@dynamored.com">contact@dynamored.com</a>
            <a target="_blank" href="https://github.com/DynamoRed">https://github.com/DynamoRed</a>
        </footer>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: this.$t('maintenance.title'),
            }
        },
    }
</script>

<style lang="css" scoped>
    ::selection {
        background-clip: unset;
        -webkit-background-clip: unset;
    }
    
    .maintenance-page {
        top: 0;
        left: 0;
        position: absolute;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(to top right, var(--background-clr), #161A1D);
    }

    .maintenance-page h2 {
        font-size: 48px;
        text-align: center;
        letter-spacing: 0.05em;
        line-height: 72px;
        color: #A4161A;
        background: linear-gradient(to top right, var(--secondary-clr), var(--tertiary-clr)), -webkit-linear-gradient(#660708, #E5383B);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .maintenance-page span {
        font-size: 24px;
        text-align: center;
        max-width: 50vw;
        font-weight: 500;
        color: var(--white-clr);
    }

    .maintenance-page footer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 24px;
    }

    .maintenance-page footer a {
        font-size: 16px;
        text-align: center;
        max-width: 32vw;
        color: #B1A7A6;
        text-decoration: none;
        display: flex;
        align-items: center;
        line-height: 32px;
        font-weight: 500;
    }

    .maintenance-page footer a:hover {
        color: var(--primary-clr);
    }

    .maintenance-page footer a::before {
        content: '';
        display: block;
        border-radius: 50%;
        background: linear-gradient(to top right, var(--primary-clr), var(--tertiary-clr));
        height: 5px;
        width: 5px;
        margin: 0 15px -4px;
    }

    .maintenance-page footer a:first-child::before {
        display: none;
    }

    @media screen and (max-width: 930px) {
        .maintenance-page span {
            max-width: none;
            margin: 0 48px;
        }

        .maintenance-page footer {
            flex-direction: column;
            align-items: flex-start;
            margin-top: 48px;
        }

        .maintenance-page footer a {
            max-width: none;
        }

        .maintenance-page footer a:first-child::before {
            display: block;
        }
    }

    @media screen and (max-width: 450px) {
        .maintenance-page img {
            width: 100%;
        }
    }
</style>