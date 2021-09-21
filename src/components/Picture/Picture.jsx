import React from 'react'
import styles from './styles.module.scss';


export const Picture = ({picture, name}) => {
    const styleTooltip = {backgroundImage: `url(${ picture.large})`};

    return (
        <div className={styles.picture}>
            <img src={picture.thumbnail} alt={name} />

            <div className={styles.big} style={styleTooltip}></div>
        </div>
    )
}
