<template>
  <div class="">
    <div class="py-4">
      <div class="rounded-b-xl p-2 container mx-auto">
        <UTabs
          v-model="active"
          :items="items"
          variant="link"
          :ui="{
            trigger: 'grow',
            content: 'bg-[#e3e3e3]',
            root: 'bg-white rounded-t-lg gap-0',
          }"
          class="w-full"
        >
          <template #tasks="{ item }">
            <div class="container mx-auto">
              <div class="py-4 px-4 bg-white">
                <Filter />
              </div>
              <div
                class="mt-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                <template v-for="ad in data?.data" :key="ad.id">
                  <AdCard
                    :title="ad.title"
                    :client-full-name="ad.clientFullName"
                    :avatar-url="ad.avatarUrl"
                    :category="ad.category"
                    :region="ad.region"
                    :from-date="ad.fromDate"
                    :till-date="ad.tillDate"
                    :warnings="ad.warnings"
                    :rating="ad.rating"
                    :id="ad.id"
                  />
                </template>
              </div>
            </div>
          </template>
        </UTabs>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";
import { AdCard } from "~/modules/advertisement";
import Filter from "~/shared/components/filter/Filter.vue";
const items: TabsItem[] = [
  {
    label: "Tasks",
    value: "tasks",
    slot: "tasks",
  },
  {
    label: "Requests",
    value: "requests",
    slot: "requests",
  },
];

const route = useRoute();
const router = useRouter();

const active = computed({
  get() {
    return (route.query.tab as string) || "tasks";
  },
  set(tab) {
    router.push({
      path: "/",
      query: { tab },
    });
  },
});

const searchQuery = computed(() => route.query.search || "");

const { data } = await useAsyncData(
  "ads",
  () => $fetch("/api/ads", { params: { search: searchQuery.value } }),
  { watch: [searchQuery] }
);

useSeoMeta({
  title: 'Recent tasks — Ad Management',
  ogTitle: 'Recent tasks — Ad Management',
  description: 'Browse recent tasks, filter by region, date and category.',
  ogDescription: 'Browse recent tasks, filter by region, date and category.',
  twitterTitle: 'Recent tasks — Ad Management',
  twitterDescription: 'Browse recent tasks, filter by region, date and category.',
})
</script>

<style scoped></style>
