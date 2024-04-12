<script setup lang="ts">
definePageMeta({
  title: "Sobre nós",
  middleware: "auth-routes",
});
</script>

<template>
  <section
    class="w-full h-full bg-[#151515] p-4 default-rounded overflow-y-auto scrollbar-inbox"
  >
    <article>
      <h1 class="text-2xl text-white mb-3">Rampart Exploitation</h1>
      <div class="mb-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          maxime iure labore maiores, provident consequatur iusto similique
          doloribus culpa corrupti, a sequi sunt quisquam explicabo delectus
          natus. Iure, esse itaque! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ut, laboriosam omnis! Quaerat sint libero sunt quia
          similique porro voluptatibus eligendi voluptates veritatis nam. Rem,
          ex nostrum quasi atque quibusdam natus! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Excepturi consectetur voluptate facilis
          sequi, totam, rerum ipsam maiores, labore assumenda aut eaque.
          Corporis vero vel unde ad fugit veritatis reprehenderit quas.
        </p>
      </div>
      <div class="mb-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          maxime iure labore maiores, provident consequatur iusto similique
          doloribus culpa corrupti, a sequi sunt quisquam explicabo delectus
          natus. Iure, esse itaque! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ut, laboriosam omnis! Quaerat sint libero sunt quia
          similique porro voluptatibus eligendi voluptates veritatis nam. Rem,
          ex nostrum quasi atque quibusdam natus! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Excepturi consectetur voluptate facilis
          sequi, totam, rerum ipsam maiores, labore assumenda aut eaque.
          Corporis vero vel unde ad fugit veritatis reprehenderit quas.
        </p>
      </div>

      <h2 class="text-xl text-white mb-3">Rampart Enterprise</h2>
      <div class="mb-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          maxime iure labore maiores, provident consequatur iusto similique
          doloribus culpa corrupti, a sequi sunt quisquam explicabo delectus
          natus. Iure, esse itaque! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ut, laboriosam omnis! Quaerat sint libero sunt quia
          similique porro voluptatibus eligendi voluptates veritatis nam. Rem,
          ex nostrum quasi atque quibusdam natus! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Excepturi consectetur voluptate facilis
          sequi, totam, rerum ipsam maiores, labore assumenda aut eaque.
          Corporis vero vel unde ad fugit veritatis reprehenderit quas.
        </p>
      </div>
      <div class="mb-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          maxime iure labore maiores, provident consequatur iusto similique
          doloribus culpa corrupti, a sequi sunt quisquam explicabo delectus
          natus. Iure, esse itaque! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Ut, laboriosam omnis! Quaerat sint libero sunt quia
          similique porro voluptatibus eligendi voluptates veritatis nam. Rem,
          ex nostrum quasi atque quibusdam natus! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Excepturi consectetur voluptate facilis
          sequi, totam, rerum ipsam maiores, labore assumenda aut eaque.
          Corporis vero vel unde ad fugit veritatis reprehenderit quas.
        </p>
      </div>

      <div class="">
        <ul class="flex gap-1 flex-col">
          <li class="inline-flex gap-2 items-center transition hover:text-white">
            <nuxt-link to="mailto:geral@rampart.ao">
              <Icon name="heroicons:envelope" /> geral@rampart.ao
            </nuxt-link>
          </li>
          <li class="inline-flex gap-2 items-center transition hover:text-white">
            <nuxt-link to="call:955955388">
              <Icon name="heroicons:phone" /> +244 955 955 399
            </nuxt-link>
          </li>
          <li class="inline-flex gap-2 items-center transition hover:text-white">
            <nuxt-link to="https://www.rampart.ao" target="_blank" external>
              <Icon name="heroicons:globe-alt" /> www.rampart.ao
            </nuxt-link>
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>