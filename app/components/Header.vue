<script lang="ts" setup>
import { motion } from "motion-v";
</script>

<template>
    <motion.div :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ delay: 0.1 }"
        class="flex justify-center items-center gap-2">
        <UButton to="/" icon="i-lucide-paperclip" label="Posts" variant="ghost" />
        <UButton to="https://syvixor.com" target="_blank" icon="i-lucide-external-link" label="Portfolio"
            variant="ghost" />
        <Theme />
    </motion.div>
</template>