<template>
    <div class="nova-media-field">
        <div
            class="inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
            :style="boxStyle"
        >
            <img
                v-if="field.value && !imageFailed"
                :src="field.value"
                :alt="field.altText || field.name"
                class="h-full w-full object-contain"
                loading="lazy"
                decoding="async"
                @error="imageFailed = true"
            />
            <span
                v-else
                class="max-w-full px-1 text-center text-xs leading-tight text-gray-500 dark:text-gray-300"
                role="img"
                :aria-label="fallbackText"
                :title="fallbackText"
            >
                {{ fallbackText }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['resourceName', 'field'],

    watch: {
        'field.value'() {
            this.imageFailed = false
        },
    },

    data: () => ({
        imageFailed: false,
    }),

    computed: {
        fallbackText() {
            return this.field.fallbackText || this.field.name || 'Preview unavailable'
        },

        boxStyle() {
            const width = Number(this.field.thumbnailWidth) || 64
            const height = Number(this.field.thumbnailHeight) || 64

            return {
                width: `${width}px`,
                height: `${height}px`,
            }
        },
    },
}
</script>
