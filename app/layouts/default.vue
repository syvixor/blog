<script lang="ts" setup>
const isReady = ref(false);
onMounted(() => isReady.value = true);
</script>

<template>
    <div class="space-y-8 py-4 px-6" v-show="isReady">
        <Header />
        <slot />
        <Footer />
    </div>
    <div class="flex justify-center items-center h-screen" v-show="!isReady">
        <UButton label="Loading" color="neutral" variant="link" size="xl" loading />
    </div>
</template>