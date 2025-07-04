<script lang="ts" setup>
import type { ButtonProps } from "@nuxt/ui";

const currentYear = new Date().getFullYear();

const links: ButtonProps[] = [
    {
        to: "https://x.com/syvixor",
        icon: "i-simple-icons-x",
        label: "X",
        variant: "ghost"
    },
    {
        to: "https://instagram.com/syvixor",
        icon: "i-simple-icons-instagram",
        label: "Instagram",
        variant: "ghost"
    },
    {
        to: "https://github.com/syvixor",
        icon: "i-simple-icons-github",
        label: "Github",
        variant: "ghost"
    }
];
</script>

<template>
    <div class="flex justify-between items-center">
        <p class="text-base font-normal opacity-90">&copy; {{ currentYear }}, Syvixor</p>
        <div class="flex items-center gap-2">
            <UButton :to="link.to" target="_blank" :aria-label="link.label" :icon="link.icon" :variant="link.variant"
                v-for="link in links" />
        </div>
    </div>
</template>