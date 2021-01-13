# Vue Wait For

A loader manager for vuejs 3 with reactive method

## Installation

```bash
# yarn
yarn add @meforma/vue-wait-for

# npm
npm install @meforma/vue-wait-for
```

## Import

```js
// In you main.js
// ... considering that your app creation is here
import wait from "@meforma/vue-wait-for";

createApp(App).use(wait).mount("#app");
```

## Usage

```html
<template>
  <div class="c-dogs">
    <div v-if="$wait.is('waiting-dogs-time')">Waiting Dogs Time...</div>
    <div v-else>Dogs are ready!!</div>
  </div>
</template>

<script>
  export default {
    name: "dogs",
    mounted() {
      this.$wait.start("waiting-dogs-time");
      let timeoute = setTimeout(() => {
        console.log(
          "time in milliseconds:",
          this.$wait.end("waiting-dogs-time"),
        );

        clearTimeout(timeoute);
        timeoute = null;
      }, 5000);
    },
  };
</script>
```

## Methods

### start(name)

Starts the wait for some word (string). You can't start the same wait more than one time, before execute end.

```js
this.$wait.start("something");
```

### end(name)

Kills the wait for some word (string), and returns the duration time of the wait in milliseconds.

```js
this.$wait.end("something");
```

### is(name)

Checks if exists a wait for some word (string).

```js
this.$wait.is("something");
```

### any()

Checks if exists any wait.

```js
this.$wait.any();
```

### clear()

Kills all waits, and returns a object with the duration time of all waits in milliseconds.

```js
this.$wait.clear();
```

## License

[MIT](LICENSE.txt) License
