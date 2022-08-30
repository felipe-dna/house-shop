<template>
  <container>
    <div class="bg-white">
      <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-3xl">
          Imóveis
        </h1>
        <br>
        <br>

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
    name: 'Prédio de 3 andares com estacionamento',
    href: '#',
    price: 'R$ 800.000,00',
    imageSrc: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Aluga-se capela para casamentos',
    href: '#',
    price: 'R$ 500,00',
    imageSrc: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Casa familiar com 4 quartos',
    href: '#',
    price: 'R$ 300.000,00',
    imageSrc: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Linda casa amarela familiar',
    href: '#',
    price: 'R$ 300.000,00',
    imageSrc: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Casa de pedra com lindo jardim',
    href: '#',
    price: 'R$ 800.000,00',
    imageSrc: 'https://images.pexels.com/photos/463996/pexels-photo-463996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 6,
    name: 'Lindo duplex na beira da praia',
    href: '#',
    price: 'R$ 450.000,00',
    imageSrc: 'https://images.pexels.com/photos/2091166/pexels-photo-2091166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 7,
    name: 'Casa de alvenaria com jardim perfeito',
    href: '#',
    price: 'R$ 1.300.000,00',
    imageSrc: 'https://images.pexels.com/photos/259685/pexels-photo-259685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 8,
    name: 'Linda casa com pequeno lago cheio de peixes',
    href: '#',
    price: 'R$ 1.500.000,00',
    imageSrc: 'https://images.pexels.com/photos/280216/pexels-photo-280216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 24,
    name: 'Linda casa azul',
    href: '#',
    price: 'R$ 500.000,00',
    imageSrc: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 9,
    name: 'Linda casa na beira do rio',
    href: '#',
    price: 'R$ 1.450.000,00',
    imageSrc: 'https://images.pexels.com/photos/65225/boat-house-cottage-waters-lake-65225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 10,
    name: 'Cabana de madeira com lindo jardim',
    href: '#',
    price: 'R$ 300.000,00',
    imageSrc: 'https://images.pexels.com/photos/2416472/pexels-photo-2416472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 11,
    name: 'Casa com lago',
    href: '#',
    price: 'R$ 1.800.000,00',
    imageSrc: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 12,
    name: 'Linda casa de madeira com chaminé',
    href: '#',
    price: 'R$ 800.000,00',
    imageSrc: 'https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 13,
    name: 'Linda propriedade com casa colonial',
    href: '#',
    price: 'R$ 1.450.000,00',
    imageSrc: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 14,
    name: 'Casa americana com garagem',
    href: '#',
    price: 'R$ 600.000,00',
    imageSrc: 'https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 15,
    name: 'Linda casa com quintal limpo',
    href: '#',
    price: 'R$ 1.250.000,00',
    imageSrc: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 16,
    name: 'Casa gigante com quintal amplo',
    href: '#',
    price: 'R$ 850.000,00',
    imageSrc: 'https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 17,
    name: 'Casa de madeira aconchegante',
    href: '#',
    price: 'R$ 450.000,00',
    imageSrc: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 18,
    name: 'Casa colonial com quintal aberto',
    href: '#',
    price: 'R$ 350.000,00',
    imageSrc: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/src/assets/house-3.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 19,
    name: 'Casa de campo dupla',
    href: '#',
    price: 'R$ 1.300.000,00',
    imageSrc: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 20,
    name: 'Linda casa na beira de um lago',
    href: '#',
    price: 'R$ 500.000,00',
    imageSrc: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 21,
    name: 'Linda casa de campo',
    href: '#',
    price: 'R$ 450.000,00',
    imageSrc: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 22,
    name: 'Casa familiar com 4 quartos',
    href: '#',
    price: 'R$ 300.000,00',
    imageSrc: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 23,
    name: 'Imóvel  amplo',
    href: '#',
    price: 'R$ 1.500.000,00',
    imageSrc: '/src/assets/house-4.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]
</script>



