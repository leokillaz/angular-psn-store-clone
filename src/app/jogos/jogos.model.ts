export interface Jogo {
    id: number;
    gameCover: string;
    gameLabel: string;
    gameType: string;
    gamePrice: string;
    gameDescription: string;
    gameVideo: string;
    gameClassificacao: number;
    gameCapa: string;
    gameVersao: string;
    gameJogadores: string;
    gameFavorito: boolean;
}

export type Jogos = Array<Jogo>;
