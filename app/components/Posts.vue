<script lang="ts" setup>
const { data: posts } = defineProps<{ data: any }>();
</script>

<template>
    <div class="flex flex-col justify-start">
        <div class="flex items-center gap-2">
            <div class="w-1.5 h-6 bg-primary" />
            <h1 class="text-3xl font-bold">Recent Posts</h1>
        </div>
        <p class="text-base font-normal">
            Browse recent posts, and articles to stay informed and inspired.
        </p>
    </div>
    <div class="grid grid-cols-1 gap-4">
        <NuxtLink :to="`/${post.full_slug}`" class="group grid grid-cols-1 md:grid-cols-6 gap-4" v-for="post in posts"
            :key="post.id">
            <div class="md:col-span-2">
                <img :src="post.content.cover.filename" :alt="post.content.cover.title"
                    class="rounded-lg transition-transform group-hover:scale-[98%]" />
            </div>
            <div class="md:col-span-4 space-y-2">
                <div class="flex items-center gap-1">
                    <UIcon name="i-lucide-clock" />
                    <p class="text-base font-normal">{{ formatDate(post.content.published as string) }}</p>
                </div>
                <div class="space-y-1">
                    <h2 class="text-xl font-semibold line-clamp-2 transition-colors group-hover:text-primary">
                        {{ post.content.caption }}</h2>
                    <p class="text-sm font-normal line-clamp-2">{{ post.content.summary }}</p>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>