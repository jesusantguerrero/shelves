<template>
  <FeedTemplate mainTitle="Feed" leftTitle="By Genres" rightTitle="My List">
    <template #topBooks>
      <div>
        <div class="flex space-x-5 overflow-auto">
          <shelve-volume
            v-for="volume in volumes"
            :key="volume.id"
            :volume="volume"
          />
        </div>

        <div class="">
          <SectionHeader title="Genres" linkLabel="More" :linkRoute="{name: 'genres'}" class="mb-2" />

          <div class="overflow-auto">
            <div class="grid grid-rows-2 grid-flow-col gap-5">
              <genre-card :title="genre" v-for="genre in genres" :key="genre"/>
            </div> 
          </div>

        </div>
      </div>
    </template>

    <template #byCategory>
      <div class="flex space-x-5 overflow-auto">
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
import GenreCard from '../components/molecules/GenreCard.vue';
import SectionHeader from '../components/molecules/SectionHeader.vue';
import ShelveVolume from '../components/organisms/Volume.vue';
import FeedTemplate from "../components/template/Feed.vue";

export default {
  name: "Login",
  components: {
    FeedTemplate,
    ShelveVolume,
    SectionHeader,
    GenreCard,
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
      genres: ['Action and Adventure', 'Science Fiction', 'Young Adult', 'Romance', 'Horror', 'Historical', 'Religion And Mitology', 'Supernatural', 'Health And Fitness', 'Westerns', 'Social Science', 'Literary', 'Mystery & Detective', 'Short Stories', 'Fantasy', 'Drama', 'Human Science', 'Humorous', 'Biography & Autpbiography', 'Science & Techs', 'War', 'Travel']
    };
  },
};
</script>