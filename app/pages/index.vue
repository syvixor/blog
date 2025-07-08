<script lang="ts" setup>
const { data } = await useStoryblokApi().getStories({ version: "published" });
const seo = {
    title: "Exploring Technology, News, and Innovation",
    description: "Stay updated with the latest in tech, innovation, and global digital trends.",
    url: "https://blog.syvixor.com",
    image: "https://blog.syvixor.com/og.png"
}
</script>

<template>
    <Seo :title="seo.title" :description="seo.description" :url="seo.url" :image="seo.image" />
    <Posts :data="data.stories" />
</template>