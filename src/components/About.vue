<template>
  <container>
    <div class="bg-white py-12">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-lg font-semibold text-indigo-600">HouseShop</h2>
          <p class="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            A melhor maneira de encontrar o imóvel perfeito
          </p>
          <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Nossa missão é ligar você ao seu sonho!
          </p>
        </div>

        <div class="mt-10">
          <dl class="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            <div v-for="feature in features" :key="feature.name" class="relative">
              <dt>
                <div class="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                  <component :is="feature.icon" class="h-6 w-6" aria-hidden="true" />
                </div>
                <p class="ml-16 text-lg font-medium leading-6 text-gray-900">{{ feature.name }}</p>
              </dt>
              <dd class="mt-2 ml-16 text-base text-gray-500">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </container>
</template>

<script lang="ts" setup>
import Container from "./Container.vue";
import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Todas as localizações',
    description: 'Contamos com todos as localizações da cidade. Sabemos que o importante no mercado imobiliário é localização, localização e localização!',
    icon: GlobeAltIcon,
  },
  {
    name: 'Totalmente legal e seguro',
    description:
        'Todos os nossos corretores são certificados e legalmente cadastrados. Todas as transações são feitas por meio de contrato e garantimos máxima transparência.',
    icon: ScaleIcon,
  },
  {
    name: 'Velocidade nas transações',
    description:
        'A velocidade é tão importante quanto a segurança. Nosso foco é não perder o tempo de mercado.',
    icon: BoltIcon,
  },
  {
    name: 'Comunicação ativa',
    description:
        'Todas as mensagens e notificações são entregues na hora e não desncasamos até que todas as conversas tenham o mínimo de latência.',
    icon: ChatBubbleBottomCenterTextIcon,
  },
]
</script>