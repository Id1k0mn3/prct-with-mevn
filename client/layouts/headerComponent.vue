<template>
  <header>
    <ul style="display: flex; column-gap: 15px; padding: 25px;">
      <li v-for="menu, key in menus" :key="key">
        <NuxtLink :to="menu.href">{{ menu.name }}</NuxtLink>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: 'Registration',
          href: 'registration',
        },
        {
          name: 'About',
          href: 'about-us',
        },
        {
          name: 'Contact us',
          href: 'contact-us',
        },
      ],
    }
  }
}
</script>
