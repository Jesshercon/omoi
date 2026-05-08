import classNames from "classnames";
import { Button, ButtonVariant } from "./Button/Button";

export const Home = () => {
  const classes = {
    generalContainer: classNames("min-h-screen py-44 px-52 text-center"),
    titleClass: classNames("text-5xl font-montserrat text-red-400 text-center"),
    subtitle: classNames("text-vulcanised text-xl pt-8 font-edunswact"),
  };
  return (
    <div className={classes.generalContainer}>
      <h1 className={classes.titleClass}>
        Más que un regalo <br />
        <span className="text-7xl">Es una experiencia</span>
      </h1>
      <p className={classes.subtitle}>
        Encuentra regalos que transforman ocasiones especiales en experiencias
        únicas
      </p>
      <div className="pt-8">
        <Button variant={ButtonVariant.Primary}>EXPLORA DETALLES</Button>
      </div>
      <img src="/assets/paginaweb-02.svgz" />
    </div>
  );
};
