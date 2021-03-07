import React from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt, faCoins, faHandshake, faLeaf, faRocket,
} from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Home.module.scss';

const wenanoAddr = 'nano_34knsjjt5wyhnbn6z7c6ip8brfazg6bf6cwe7hhhaqtu6683nfdfsakrt8d8';
const playNanoLink = `https://playnano.online/?ref=${wenanoAddr}`;
const title = 'Get FREE Nano';
const description = 'NANO is the digital currency for the modern world';

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={playNanoLink} />
        <meta property="og:site_name" content={title} />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>
          NANO is the digital currency for the modern world
          <FontAwesomeIcon icon={faRocket} />
        </h1>
        <h2>
          Nano is perfect for everyday transactions - no fuss,
          no fees, no waiting. This is what simple and easy-to-use
          digital money feels like.
        </h2>
        <a
          className={styles.button}
          href={playNanoLink}
          target="_blank"
          rel="noreferrer"
        >
          Earn Nano now!
          <FontAwesomeIcon icon={faCoins} />
        </a>
      </header>
      <main className={styles.main}>
        <h2>
          It makes money efficient for a more equal world -
          simple to pay with, easy to accept and open to all
        </h2>
        <ul className={styles.featureList}>
          <li>
            <FontAwesomeIcon icon={faHandshake} />
            <h3>Fee-less</h3>
            <p>
              Nano is fee-less, making it practical and inclusive
              for everyone in the world.
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faLeaf} />
            <h3>Eco-friendly</h3>
            <p>
              Without relying on mining, printing or minting,
              Nano is sustainable digital money.
            </p>
          </li>
          <li>
            <FontAwesomeIcon icon={faBolt} />
            <h3>Instant</h3>
            <p>Digital money should be quick and easy-to-use, Nano is ready when you are.</p>
          </li>
        </ul>
        <h2>Other ways to earn Nano</h2>
        <ul className={styles.featureList}>
          <li>
            <h3><a href="https://nano-faucet.org/">Nano-faucet.org</a></h3>
          </li>
          <li>
            <h3><a href="https://www.freenanofaucet.com/">Free Nano faucet</a></h3>
          </li>
          <li>
            <h3><a href="https://nanoquakejs.com/">Nano Quake JS</a></h3>
          </li>
        </ul>
      </main>
      <footer className={styles.footer}>
        Want to learn more? Go to <a href="https://nano.org">nano.org</a>
      </footer>
    </React.Fragment>
  );
}
