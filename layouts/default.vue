<template>
  <div>
    <Maintenance v-if="maintenance" />
    <Nuxt v-else/>
    <div class="langs">
      <img :src="require(`~/assets/icons/Flags/${locale}.svg`)" class="menu-icon">
      <LangOption v-for="lang in langs" :key="lang.code" :lang="lang" />
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      maintenance(){
        return this.$store.state.main.maintenance;
      },
      langs(){
        return this.$store.state.main.availableLangs;
      },
      locale(){
        return this.$i18n.locale;
      }
    },
  }
</script>

<style lang="css" scoped>
  .langs {
    cursor: pointer;
    position: fixed;
    left: 24px;
    top: 20px;
    padding: 4px 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .langs img.menu-icon {
    height: 24px;
    width: 32px;
    border: 2px solid var(--secondary-clr);
    border-radius: 5px;
    object-fit: cover;
  }

  .langs:hover,
  .langs:active {
    cursor: default;
    border-radius: 14px;
    background-color: var(--background-clr);
  }

  .langs:hover img.menu-icon,
  .langs:active img.menu-icon {
    display: none;
  }

  .langs:hover *,
  .langs:active * {
    display: flex;
  }
</style>