import "../css/normal.css";

export function cereateDiv() {
  const tmpDiv = document.createElement("div");
  tmpDiv.className = "divContent";
  return tmpDiv;
}

export function createSpan() {
  const tmpSpan = document.createElement("span");
  tmpSpan.className = "spanContent";
  return tmpSpan;
}
