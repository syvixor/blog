<script lang="ts" setup>
const { value } = await useAsyncStoryblok("/post/" + useRoute().params.slug, { version: "draft" });
</script>

<template>
    <Seo :title="value.content.caption" :description="value.content.summary"
        :url="`https://blog.syvixor.com/${value.full_slug}`" :image="value.content.cover.filename" />
    <StoryblokComponent :blok="value.content" />
</template>