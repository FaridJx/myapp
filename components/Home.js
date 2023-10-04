import styles from '../styles/Home.module.css';
import CounterButton from '../components/CounterButton';
import CounterDisplay from './CounterDisplay';

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <CounterDisplay/>
          <CounterButton/>
        </h1>
      </main>
    </div>
  );
}

export default Home;
