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
        <button class="aside-link">
            <Home />
            <span>Início</span>
        </button>
    
        <button class="aside-link">
            <CircleOff />
            <span>Ver todos</span>
        </button>
    
        <button class="aside-link">
            <UserRound />
            <span>Perfil</span>
        </button>
    </div>

    <p>
        Developed by Matheus Piovesan as a svelte learning project.
    </p>
</aside>
