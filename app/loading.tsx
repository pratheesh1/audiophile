import styles from "./loading.module.css";

export default function Loading() {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen dark:bg-gray-500">
        <div className={styles.hourglass}></div>
      </div>
    </>
  );
}
