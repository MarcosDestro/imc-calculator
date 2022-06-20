export interface LevelProps{
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number; // Vai ser adicionado no loop
}

export const levels: LevelProps[] = [
    { title: 'Magreza', color: '#96a3ab', icon: 'down', imc: [0, 18.5] },
    { title: 'Normal', color: '#0ead69', icon: 'up', imc: [18.6, 24.9] },
    { title: 'Sobrepeso', color: '#e2b036', icon: 'down', imc: [25, 30] },
    { title: 'Obesidade', color: '#c3423f', icon: 'down', imc: [30.1, 99] },
];

export function calculateImc(height: number, weight: number) {
    const imc = weight / (height * height);

    for (let i in levels) {
        if(imc >= levels[i].imc[0] &&
            imc <= levels[i].imc[1] ){
                let newLevel = { ...levels[i] };
                newLevel.yourImc = imc;
                return newLevel;
            }
    }

    // caso não calcula
    return null;
}