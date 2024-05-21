<script lang="ts">
  import type { PageData } from './$houdini'

  const { data }: { data: PageData } = $props()
  const { Ping } = $derived(data)
</script>

<pre>{JSON.stringify($Ping, null, 2)}</pre>
