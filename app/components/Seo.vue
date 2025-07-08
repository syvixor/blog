<script lang="ts" setup>
const { title, description, url, image } = defineProps<{
    title: string;
    description: string;
    url: string;
    image: string;
}>();
</script>

<template>
    <Head>
        <Title>Blog - {{ title }}</Title>
        <Meta name="description" :content="description" />
        <Meta name="author" content="Syvixor" />
        <Meta name="robots" content="index,follow" />
        <Meta property="og:title" :content="title" />
        <Meta property="og:description" :content="description" />
        <Meta property="og:image" :content="image" />
        <Meta property="og:type" content="website" />
        <Meta property="og:url" :content="url" />
        <Meta name="og:email" content="syvixor@proton.me" />
        <Meta name="twitter:title" :content="title" />
        <Meta name="twitter:description" :content="description" />
        <Meta name="twitter:card" content="summary_large_image" />
        <Meta name="twitter:image" :content="image" />
        <Meta name="twitter:creator" content="@syvixor" />
    </Head>
</template>