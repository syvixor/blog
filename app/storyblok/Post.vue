<script lang="ts" setup>
const { blok } = defineProps(["blok"]);
</script>

<template>
    <div class="space-y-4">
        <div class="flex flex-col">
            <h1 class="text-3xl font-bold">{{ blok.caption }}</h1>
            <p class="text-lg font-medium">{{ blok.summary }}</p>
        </div>
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
                <UAvatar src="https://avatars.githubusercontent.com/u/191499017?v=4" size="lg" />
                <div class="-space-y-2">
                    <p class="text-xs font-light">Author</p>
                    <p class="text-lg font-semibold">syvixor</p>
                </div>
            </div>
            <div class="flex items-center gap-2">
                <UIcon name="i-lucide-clock" />
                <p class="text-base font-normal">{{ formatDate(blok.published as string) }}</p>
            </div>
        </div>
        <div class="flex justify-between items-center">
            <img :src="blok.cover.filename" :alt="blok.cover.title" class="rounded-xl" />
        </div>
        <div class="space-y-2" id="content">
            <StoryblokRichText :doc="blok.content" />
        </div>
    </div>
</template>

<style>
#content {
    ul {
        list-style-type: disc;
        margin-left: 1.25rem;
    }
}
</style>