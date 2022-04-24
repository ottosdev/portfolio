export function retornar(value: string[]): string {
  let nome = "";
  value.forEach((element) => {
    if (element === "angular") {
      nome = "Angular";
    }
    if (element === "react") {
      nome = "React Native";
    }
    if (element === "reactjs") {
      nome = "Reactjs";
    }
    if (element === "nestjs") {
      nome = "Nestjs";
    }
  });
  return nome;
}
