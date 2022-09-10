<script setup lang="ts">
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Section', href: '/contact' },
  ];
</script>

<template>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.name">
        <RouterLink :to="link.href">{{ link.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>
