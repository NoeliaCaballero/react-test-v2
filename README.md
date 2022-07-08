# Seta Workshop Pokémon test

![screenshot-localhost_4200-2022 01 20-09_33_21](https://user-images.githubusercontent.com/8492873/152158903-8c2b17f5-79f2-4852-8115-9fae8980bd00.png)

The goal is to implement a basic version of the Pokédex, which is made of two big components: the Pokémon list and the Pokémon viewer.
Inside the project you'll find the core structure of the app with some files needed to be filled with the missing code, and some of them need to be fully implemented.

Your task is to correctly build the Pokédex as faithful as possible to the screenshots posted here.

Keep in mind that some of the existing code in the app may not only be incomplete but also have some bugs that you'll need to identify and fix.

## You must build the following:

The **PokemonList** component must display a scrollable list with the first gen Pokémon (first 151 ones). In order to fetch the data you'll need to implement the **useGetFirstGen** hook.
You can find further instructions inside those files.

The input inside the PokemonList component should work as filter for the list.

Clicking on one of the Pokémon should make the app display some basic info on the **PokemonViewer** component. Once again, to fetch that data you must implement the **usePokemon** hook. You can find the needed API base endpoint to fetch the data inside the hook file and instructions
about how to fetch specific Pokémon info in the official [API documentation](https://pokeapi.co/docs/v2)

## Additional info:
Once you fetch the detailed Pokémon info, you can access the pokemon type like this: response.types[0].type.name.
You can find some handy libraries already installed in the project by checking out the package.json file.
You are free to add any kind of third-party library you choose.
You can test some responses in the [API homepage](https://pokeapi.co)
The Pokémon font family is 'Pokemon GB'

## Screenshots:
### Selected Pokémon
![screenshot-localhost_4200-2022 01 20-09_33_21](https://user-images.githubusercontent.com/8492873/152158903-8c2b17f5-79f2-4852-8115-9fae8980bd00.png)

### Initial state
![screenshot-localhost_4200-2022 01 20-09_33_41](https://user-images.githubusercontent.com/8492873/152182082-fc5af44d-88bf-4908-aa85-7d95c4ba5327.png)

### Initial state with filter empty state
![image](https://user-images.githubusercontent.com/8492873/152182515-fdc98637-899f-4512-a5e4-1cb0f7e2d569.png)

### Selected Pokémon with active filter
![image](https://user-images.githubusercontent.com/8492873/152183562-cf4fce30-0553-4bbd-a938-f9d8d32e73ae.png)


