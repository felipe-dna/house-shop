<template>
  <container>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="sr-only">Products</h2>

        <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a v-for="product in products" :key="product.id" :href="product.href" class="group">
            <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
          </a>
        </div>
      </div>
    </div>
  </container>
</template>

<script setup>
import Container from '/src/components/Container.vue'

const products = [
  {
    id: 1,
    name: 'Casa ampla com 10 cômodos',
    href: '#',
    price: 'R$ 800.000,00',
    imageSrc: '/src/assets/house-1.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Duplex com piscina',
    href: '#',
    price: 'R$ 450.000,00',
    imageSrc: '/src/assets/house-2.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Casa familiar com 4 quartos',
    href: '#',
    price: 'R$ 300.000,00',
    imageSrc: '/src/assets/house-3.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Imóvel comercial amplo',
    href: '#',
    price: 'R$ 1.500.000,00',
    imageSrc: '/src/assets/house-4.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]
</script>



