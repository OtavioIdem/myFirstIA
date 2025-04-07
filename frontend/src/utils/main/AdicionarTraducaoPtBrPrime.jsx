import { addLocale } from "primereact/api";
import {
  dayNames,
  dayNamesShort,
  dayNamesMin,
  monthNames,
  monthNamesShort,
  paginator,
} from "./private/data/LocaleData";

export default function adicionarTraducaoPtBrPrime() {
  addLocale("ptbr", {
    firstDayOfWeek: 0,
    dayNames: dayNames,
    dayNamesShort: dayNamesShort,
    dayNamesMin: dayNamesMin,
    monthNames: monthNames,
    monthNamesShort: monthNamesShort,
    today: "Hoje",
    clear: "Limpar",
    weekHeader: "Semana",
    searchPlaceholder: "Pesquisar",
    emptyMessage: "Nenhum resultado encontrado",
    noResultsFound: "Nenhum resultado encontrado",
    paginator: paginator,
  });
}
