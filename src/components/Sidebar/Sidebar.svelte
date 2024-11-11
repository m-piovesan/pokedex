<script lang="ts">
    import './styles.scss'
    import { Home, CircleOff, UserRound } from 'lucide-svelte/icons'
    import Logo from '../logo/Logo.svelte'
  </script>
  
<aside>
    <Logo />    

    <p>
        "Pokémon são criaturas fictícias que fazem parte de um universo criado pela Nintendo, Game Freak e Creatures. A palavra "Pokémon" é uma abreviação de "Pocket Monsters" (Monstros de Bolso) e se refere tanto aos próprios seres quanto à franquia multimídia que gira em torno deles. Cada Pokémon possui características distintas, como tipos (por exemplo, Fogo, Água, Planta), habilidades e, frequentemente, uma capacidade única de evoluir para formas mais poderosas."
    </p>

    <div class="links-group">
        <a class="aside-link" href="/">
            <Home />
            <span>Início</span>
        </a>
    
        <a class="aside-link" href="./all">
            <CircleOff />
            <span>Ver todos</span>
        </a>
    
        <a class="aside-link" href="./profile">
            <UserRound />
            <span>Perfil</span>
        </a>
    </div>

    <p>
        Developed by Matheus Piovesan as a svelte learning project.
    </p>
</aside>
