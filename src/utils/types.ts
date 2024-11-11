export interface PokemonSprite {
    front_default: string | null;
}

export interface Sprites {
    other: {
        showdown: {
            front_default: string | null;
        };
    };
}

export interface Pokemon {
    name: string;
    url: string;
    sprites: Sprites;
}

export interface PokemonApiResponse {
    results: { name: string, url: string }[];
}