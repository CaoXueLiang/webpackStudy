import { cereateDiv, createSpan } from "./js/cereatElement";

const tmpDiv = cereateDiv();
const tmpSpan = createSpan();
document.body.appendChild(tmpDiv);
tmpDiv.appendChild(tmpSpan);
