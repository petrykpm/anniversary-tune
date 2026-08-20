import { useEffect, useState } from "react";
import { dataInicio } from "./config";

export type Together = {
  anos: number;
  meses: number;
  dias: number;
  horas: number;
  minutos: number;
  segundos: number;
};

function diff(from: Date, to: Date): Together {
  let anos = to.getFullYear() - from.getFullYear();
  let meses = to.getMonth() - from.getMonth();
  let dias = to.getDate() - from.getDate();
  let horas = to.getHours() - from.getHours();
  let minutos = to.getMinutes() - from.getMinutes();
  let segundos = to.getSeconds() - from.getSeconds();

  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }
  if (minutos < 0) {
    minutos += 60;
    horas--;
  }
  if (horas < 0) {
    horas += 24;
    dias--;
  }
  if (dias < 0) {
    const prevMonth = new Date(to.getFullYear(), to.getMonth(), 0).getDate();
    dias += prevMonth;
    meses--;
  }
  if (meses < 0) {
    meses += 12;
    anos--;
  }
  return { anos, meses, dias, horas, minutos, segundos };
}

/** Contador em tempo real desde a data de início (atualiza a cada segundo) */
export function useTogether(): Together {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return diff(dataInicio, now ?? dataInicio);
}