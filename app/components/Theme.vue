<script setup lang="ts">
const colorMode = useColorMode();

const isLoading = ref(true);
onMounted(() => isLoading.value = false);

const onThemeSwitch = () => {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark"
}
</script>

<template>
    <ClientOnly v-if="!isLoading">
        <UButton :icon="colorMode.preference === 'dark' ? 'i-lucide-moon' : 'i-lucide-sun'"
            aria-label="Theme" color="neutral" variant="ghost" @click="onThemeSwitch" />
    </ClientOnly>
    <UButton aria-label="Loading" color="neutral" variant="ghost" loading v-else />
</template>