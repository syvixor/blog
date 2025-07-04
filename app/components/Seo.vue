<script lang="ts" setup>
const { title, description, url } = defineProps<{ title: string; description: string; url: string; }>();
</script>

<template>
    <Head>
        <Title>{{ title }}</Title>
        <Meta name="description" :content="description" />
        <Meta name="author" content="Syvixor" />
        <Meta name="robots" content="index,follow" />
        <Meta property="og:title" :content="title" />
        <Meta property="og:description" :content="description" />
        <Meta property="og:type" content="website" />
        <Meta property="og:url" :content="url" />
        <Meta name="og:email" content="syvixor@proton.me" />
        <Meta name="twitter:title" :content="title" />
        <Meta name="twitter:description" :content="description" />
        <Meta name="twitter:card" content="summary_large_image" />
        <Meta name="twitter:creator" content="@syvixor" />
    </Head>
</template>