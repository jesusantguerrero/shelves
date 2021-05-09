<template>
  <FeedTemplate mainTitle="Feed" leftTitle="By Genres" rightTitle="My List">
    <template #topBooks>
      <div>
        <div class="flex space-x-5">
          <shelve-volume
            v-for="volume in volumes"
            :key="volume.id"
            :volume="volume"
          />
        </div>

        <div class="">
          <SectionHeader title="Genres" linkLabel="More" :linkRoute="{name: 'genres'}" class="mb-2" />

          <div class="grid grid-cols-2 grid-rows-2 gap-5">
            <div class="h-16 w-36 bg-gray-300 flex justify-center items-center">
               Action and Adventure
            </div>
            <div class="w-36 h-16 bg-gray-300 flex justify-center items-center">
               Science Fiction
            </div>
            <div class="w-36 h-16 bg-gray-300 flex justify-center items-center">
               Romance
            </div>
            <div class="w-36 h-16 bg-gray-300 flex justify-center items-center">
               Young Adult
            </div>
          </div>

        </div>
      </div>
    </template>

    <template #byCategory>
      <div class="flex space-x-5 overflow-hidden">
        <shelve-volume
          v-for="volume in volumes"
          :key="volume.id"
          :volume="volume"
        />
      </div>
    </template>

    <template #myReads>
      <div class="flex space-x-5 overflow-auto w-full">
        <shelve-volume
          v-for="volume in volumes"
          :key="volume.id"
          :volume="volume"
        />
      </div>
    </template>
  </FeedTemplate>
</template>

<script>
import SectionHeader from '../components/molecules/SectionHeader.vue';
import ShelveVolume from '../components/organisms/Volume.vue';
import FeedTemplate from "../components/template/Feed.vue";

export default {
  name: "Login",
  components: {
    FeedTemplate,
    ShelveVolume,
    SectionHeader,
  },
  setup() {
    return {
      volumes: [
        {
          kind: "books#volume",
          id: "_ojXNuzgHRcC",
          etag: "OTD2tB19qn4",
          selfLink: "https://www.googleapis.com/books/v1/volumes/_ojXNuzgHRcC",
          volumeInfo: {
            title: "Flowers",
            authors: ["Vijaya Khisty Bodach"],
          },
        },
        {
          kind: "books#volume",
          id: "RJxWIQOvoZUC",
          etag: "NsxMT6kCCVs",
          selfLink: "https://www.googleapis.com/books/v1/volumes/RJxWIQOvoZUC",
          volumeInfo: {
            title: "Flowers",
            authors: ["Gail Saunders-Smith"],
          },
        },
        {
          kind: "books#volume",
          id: "zaRoX10_UsMC",
          etag: "pm1sLMgKfMA",
          selfLink: "https://www.googleapis.com/books/v1/volumes/zaRoX10_UsMC",
          volumeInfo: {
            title: "Flowers",
            authors: ["Paul McEvoy"],
          },
        },
        {
          kind: "books#volume",
          id: "_ojXNuzgHRcC",
          etag: "OTD2tB19qn4",
          selfLink: "https://www.googleapis.com/books/v1/volumes/_ojXNuzgHRcC",
          volumeInfo: {
            title: "Flowers",
            authors: ["Vijaya Khisty Bodach"],
          },
        },
        {
          kind: "books#volume",
          id: "RJxWIQOvoZUC",
          etag: "NsxMT6kCCVs",
          selfLink: "https://www.googleapis.com/books/v1/volumes/RJxWIQOvoZUC",
          volumeInfo: {
            title: "Flowers",
            authors: ["Gail Saunders-Smith"],
          },
        },
        {
          kind: "books#volume",
          id: "zaRoX10_UsMC",
          etag: "pm1sLMgKfMA",
          selfLink: "https://www.googleapis.com/books/v1/volumes/zaRoX10_UsMC",
          volumeInfo: {
            title: "Flowers",
            authors: ["Paul McEvoy"],
          },
        },
        {
          kind: "books#volume",
          id: "_ojXNuzgHRcC",
          etag: "OTD2tB19qn4",
          selfLink: "https://www.googleapis.com/books/v1/volumes/_ojXNuzgHRcC",
          volumeInfo: {
            title: "Flowers",
            authors: ["Vijaya Khisty Bodach"],
          },
        },
        {
          kind: "books#volume",
          id: "RJxWIQOvoZUC",
          etag: "NsxMT6kCCVs",
          selfLink: "https://www.googleapis.com/books/v1/volumes/RJxWIQOvoZUC",
          volumeInfo: {
            title: "Flowers",
            authors: ["Gail Saunders-Smith"],
          },
        },
        {
          kind: "books#volume",
          id: "zaRoX10_UsMC",
          etag: "pm1sLMgKfMA",
          selfLink: "https://www.googleapis.com/books/v1/volumes/zaRoX10_UsMC",
          volumeInfo: {
            title: "Flowers",
            authors: ["Paul McEvoy"],
          },
        },
      ],
    };
  },
};
</script>
