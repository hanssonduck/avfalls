// @ts-check
import { sveltekit as kit } from '@sveltejs/kit/vite'
import { default as houdini } from 'houdini/vite'

/** @type {import('vite').UserConfig} */
export default {
  plugins: [houdini(), kit()],
}
