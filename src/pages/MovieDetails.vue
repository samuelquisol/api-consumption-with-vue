<template>
    <h1>DETALLES DE LA PELICULA</h1>
    <MovieDetails />
</template>

<script setup lang="ts">
import MovieDetails from "@/components/movies/DetailsMovie.vue";

</script>

<style lang="scss" scoped>
h1 {
    color: $white;
    text-align: center;
    margin-top: 50px;
}
</style>