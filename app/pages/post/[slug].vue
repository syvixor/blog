<script lang="ts" setup>
const { value } = await useAsyncStoryblok("/post/" + useRoute().params.slug, { version: "draft" });
const seo = {
    title: value.content.caption,
    description: value.content.summary,
    url: "https://blog.syvixor.com/" + value.full_slug,
    image: value.content.cover.filename
}
</script>

<template>
    <Seo :title="seo.title" :description="seo.description" :url="seo.url" :image="seo.image" />
    <StoryblokComponent :blok="value.content" />
</template>