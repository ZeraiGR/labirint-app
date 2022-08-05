import React from 'react';

import styles from './styles/App.module.scss';
import { Button, Info, Title, P, Field, StepList } from './components';

//todo 1) Сверстать поле для игры

function App() {
  return (
    <div className={styles.wrapper}>
      <Title tag="h1">Игра - лабиринт</Title>
      <Info className={styles.info}>
        <Title className={styles.title} tag="h2">
          Как играть?
        </Title>
        <P>
          Как только начнётся игра, ты увидишь поле 3х3 и начальную точку, в которой находится
          медвежонок. Ниже будет генерироваться путь медвежонка по стрелочкам. Твоя задача -
          отследить движение медвежонка и указать, в какой клетке он в итоге оказался.
        </P>
      </Info>
      <Field />
      <StepList />
      <Button>Начать игру</Button>
    </div>
  );
}

export default App;
