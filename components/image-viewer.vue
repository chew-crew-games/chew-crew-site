<script setup lang="ts">
import { SwipeDirection, useSwipe } from "@vueuse/core";
import { onMounted, onUnmounted, Ref, ref } from "vue";
import { ComicPages, Post } from "../models/metadata";

const props = defineProps<{
  posts?: Post[];
  comics?: ComicPages[];
}>();
const imageIndex = ref(0);
const comicIndex = ref(0);
const openedPost: Ref<Post | null> = ref(null);
const modalOpen = ref(false);
const imageContent: Ref<HTMLElement | null> = ref(null);

useSwipe(imageContent, {
  onSwipeEnd(_, direction) {
    if (direction === SwipeDirection.LEFT) {
      clickNext();
    } else if (direction === SwipeDirection.RIGHT) {
      clickPrev();
    }
  },
});

const openModal = (index: number) => {
  if (props.comics) {
    comicIndex.value = index;
    imageIndex.value = 0;
    openedPost.value = props.comics![comicIndex.value].comicpages[0];
  } else {
    imageIndex.value = index;
    setOpenedPost();
  }
  modalOpen.value = true;
};

const closeModal = () => {
  modalOpen.value = false;
};

const clickNext = () => {
  const totalImages =
    props.posts?.length ?? props.comics![comicIndex.value].comicpages.length;
  if (imageIndex.value < totalImages - 1) {
    imageIndex.value++;
    setOpenedPost();
  }
};

const clickPrev = () => {
  if (imageIndex.value > 0) {
    imageIndex.value -= 1;
    setOpenedPost();
  }
};

const setOpenedPost = () => {
  openedPost.value = props.posts
    ? props.posts[imageIndex.value]
    : props.comics![comicIndex.value].comicpages[imageIndex.value];
};

const keyListener = (event: KeyboardEvent) => {
  if (modalOpen.value) {
    switch (event.key) {
      case "ArrowLeft":
        clickPrev();
        break;
      case "ArrowRight":
        clickNext();
        break;
      case "Escape":
        closeModal();
        break;
    }
  }
};

onMounted(() => {
  window.addEventListener("keyup", keyListener);
});
onUnmounted(() => {
  window.removeEventListener("keyup", keyListener);
});
</script>

<template>
  <div>
    <div
      class="columns is-multiline is-mobile is-variable"
      @keyup.left="clickPrev"
      @keyup.right="clickNext"
    >
      <div
        v-for="[index, post] in Object.entries(props.posts ?? [])"
        :key="index"
        class="column is-one-third"
        @click="openModal(parseInt(index))"
      >
        <p class="image is-square">
          <img :src="post.image.replace('uploads', 'thumbs')" />
        </p>
      </div>
      <div
        v-for="[index, comic] in Object.entries(props.comics ?? [])"
        :key="index"
        class="column is-one-third"
        @click="openModal(parseInt(index))"
      >
        <p class="image is-square">
          <img
            :src="
              (comic.thumbnail ?? comic.comicpages[0].image).replace(
                'uploads',
                'thumbs'
              )
            "
          />
        </p>
      </div>
    </div>

    <teleport to="body">
      <div v-if="modalOpen" class="is-active modal">
        <div class="modal-content" ref="imageContent">
          <i
            @click="clickPrev"
            class="is-size-1 has-text-white mdi is-hidden-mobile"
            :class="{
              'mdi-menu-left': imageIndex > 0,
            }"
          />
          <p class="image" @click="clickNext">
            <img :src="openedPost?.image" loading="lazy" />
          </p>
          <i
            @click="clickNext"
            class="is-size-1 has-text-white mdi is-hidden-mobile"
            :class="{
              'mdi-menu-right':
                (props.posts?.length ??
                  (props.comics ?? [])[comicIndex].comicpages.length) -
                  1 >
                imageIndex,
            }"
          />
        </div>
        <button
          class="modal-close is-large"
          aria-label="close"
          @click="closeModal"
        />
        <p class="description">{{ openedPost?.description }}</p>
        <div class="modal-background" @click="closeModal" />
      </div>
    </teleport>
  </div>
</template>

<style lang="scss" scoped>
.column {
  .image {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: white;
      opacity: 0;
      z-index: 1;
      -o-transition: 0.5s;
      -ms-transition: 0.5s;
      -moz-transition: 0.5s;
      -webkit-transition: 0.5s;
      transition: 0.5s;
    }
    &:hover {
      cursor: pointer;
      &:before {
        opacity: 0.2;
      }
    }
    img {
      object-fit: cover;
    }
  }
}
.modal {
  .modal-content {
    user-select: none;
    display: flex;
    align-items: center;
    width: auto;
    // pointer-events: none;
    i {
      pointer-events: bounding-box;
      width: 32px;
      color: $white;
      cursor: pointer;
      padding-right: 0 2rem;
      margin: 0 2rem;
    }
    .image {
      width: 100%;
      height: 100%;
      display: flex;
      img {
        max-width: 100%;
        max-height: 98%;
        margin: auto;
        object-fit: contain;
      }
    }
  }
  .modal-background {
    z-index: -9999;
  }
  .description {
    z-index: 1;
    color: $white;
    max-width: 80vw;
    padding: 1em 0;
    font-size: 0.8rem;
  }
}
@include until($tablet) {
  .modal-content span {
    display: none;
  }
}
</style>
