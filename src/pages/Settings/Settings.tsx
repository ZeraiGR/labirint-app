import { Link } from 'react-router-dom';

import { SettingsProps } from './Settings.props';
import styles from './Settings.module.scss';
import { SettingItem, Title } from '../../components';
import { useAppSelector } from '../../hooks/hooks';
import { selectSettingsProps } from '../../store/settings/settingsSelectors';
import { ValueType } from '../../components/SettingItem/SettingItem.props';

export const Settings = (props: SettingsProps) => {
  const { timeForStep, timeBetweenRound, gameName, gameTitle, gameDecription } =
    useAppSelector(selectSettingsProps);

  return (
    <div className={styles.wrapper}>
      <Title className={styles.title} tag="h1">
        Настройки
      </Title>

      <ul className={styles.settings}>
        <li className={styles.setitem}>
          <SettingItem
            title="Скорость шага медвежонка в мс"
            id="time-for-step"
            setType="timestep"
            valueType={ValueType.number}
            defaultData={timeForStep}
          />
        </li>

        <li className={styles.setitem}>
          <SettingItem
            title="Время паузы до запуска следующего раунда в мс"
            id="time-between-round"
            setType="timeround"
            valueType={ValueType.number}
            defaultData={timeBetweenRound}
          />
        </li>

        <li className={styles.setitem}>
          <SettingItem
            title="Название игры"
            id="game-name"
            setType="gamename"
            valueType={ValueType.string}
            defaultData={gameName}
          />
        </li>

        <li className={styles.setitem}>
          <SettingItem
            title="Заголовок"
            id="game-title"
            setType="gametitle"
            valueType={ValueType.string}
            defaultData={gameTitle}
          />
        </li>

        <li className={styles.setitem}>
          <SettingItem
            title="Описание"
            id="game-description"
            setType="gamedescription"
            valueType={ValueType.text}
            defaultData={gameDecription}
          />
        </li>
      </ul>

      <Link className={styles.link} to="/">
        Вернуться в главное меню
      </Link>
    </div>
  );
};
