<script lang="ts" setup>
const { data } = await useStoryblokApi().getStories({ version: "published" });
</script>

<template>
    <Seo title="Exploring Technology, News, and Innovation"
        description="Stay updated with the latest in tech, innovation, and global digital trends."
        url="https://blog.syvixor.com"
        image="https://a.storyblok.com/f/285509672342890/1200x628/2848753c72/f3875f2c-98c3-4a4e-8c30-18529b1f68e5.webp" />
    <Posts :data="data.stories" />
</template>