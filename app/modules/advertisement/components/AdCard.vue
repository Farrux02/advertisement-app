<template>
  <article
    class="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition hover:shadow-md"
  >
    <div class="flex items-center gap-3">
      <UAvatar :src="avatarUrl" size="md" alt="avatar" class="shrink-0" />
      <p class="text-sm font-medium text-slate-600 flex-1 truncate">
        {{ clientFullName }}
      </p>

      <div
        class="inline-flex items-center gap-1 rounded-full bg-rose-100 px-2 py-1 text-sm font-semibold text-rose-700"
        aria-label="Warnings"
        title="Warnings"
      >
        <UIcon name="i-heroicons-flag-20-solid" class="h-4 w-4" />
        <span>{{ warnings }}</span>
      </div>

      <div
        class="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-sm font-semibold text-green-700"
        aria-label="Rating"
        title="Rating"
      >
        <UIcon name="i-heroicons-star-20-solid" class="h-4 w-4" />
        <span>{{ rating }}</span>
      </div>
    </div>

    <h3 class="mt-2 text-lg font-semibold leading-snug text-slate-900">
      {{ title }}
    </h3>

    <div
      class="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-600"
    >
      <span class="inline-flex items-center gap-2 text-sm">
        <UIcon name="i-heroicons-user-group" class="h-5 w-5 text-slate-400" />
        <span class="truncate max-w-[200px]">{{ category }}</span>
      </span>

      <span class="inline-flex items-center gap-2 text-sm">
        <UIcon name="i-heroicons-map-pin" class="h-5 w-5 text-slate-400" />
        <span class="truncate">{{ region }}</span>
      </span>
    </div>

    <div
      class="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-600"
    >
      <span class="inline-flex items-center gap-2 text-sm">
        <UIcon
          name="i-heroicons-calendar-days"
          class="h-5 w-5 text-slate-400"
        />
        <span>{{ formattedFrom }} – {{ formattedTill }}</span>
      </span>

      <span class="inline-flex items-center gap-2 text-sm">
        <UIcon name="i-heroicons-clock" class="h-5 w-5 text-slate-400" />
        <span>{{ days }} days</span>
      </span>
    </div>
  </article>
</template>

<script setup lang="ts">
import { diffDays, formatDate } from '~/shared/utils/date';

const props = defineProps<{
  id: number;
  title: string;
  clientFullName: string;
  avatarUrl: string;
  category: string;
  region: string;
  fromDate: string;
  tillDate: string;
  warnings: number;
  rating: number;
}>();

const formattedFrom = computed(() => formatDate(props.fromDate));
const formattedTill = computed(() => formatDate(props.tillDate));
const days = computed(() => diffDays(props.fromDate, props.tillDate));
</script>
