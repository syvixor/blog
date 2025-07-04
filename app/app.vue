<script lang="ts" setup>
const { color } = useAppConfig();
useHead({ htmlAttrs: { lang: "en" } });
</script>

<template>
    <NuxtLoadingIndicator :color="color" />
    <UApp>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </UApp>
</template>