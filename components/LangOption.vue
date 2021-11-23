<template>
    <NuxtLink :to="switchLocalePath(`${lang.code}`)" class="lang" :class="{ active: isActive }">
        <img :src="require(`~/assets/icons/Flags/${lang.code}.svg`)">
        {{lang.name}}
    </NuxtLink>
</template>

<script>
    export default {
        name: 'LangOption',
        props: ['lang'],
        computed: {
            isActive(){
                return this.$i18n.locale == this.lang.code;
            },
        },
    }
</script>

<style lang="css" scoped>
    .lang {
        display: none;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        margin: 4px 0;
        padding: 12px 24px;
        border-radius: 7px;
        color: var(--white-clr);
        background-color: var(--gray-clr);
        text-decoration: none;
        border: 2px solid var(--gray-clr);
        transition: border-color .3s;
    }

    .lang.active {
        border-color: var(--primary-clr);
    }

    .lang img {
        width: 24px;
        border-radius: 3px;
        margin-right: 10px;
    }
</style>