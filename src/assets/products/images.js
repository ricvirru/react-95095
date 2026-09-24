import remera from "./remera.jpg";
import pantalon from "./pantalon.jpg";
import zapatilla from "./zapatilla.jpg";
import campera from "./campera.jpg";
import musculosa from "./musculosa.jpg";
import bolso01 from "./bolso01.jpg";
import botines from "./botines.jpg";
import medias from "./medias.jpg";

const imagenes = {
  remera,
  pantalon,
  zapatilla,
  campera,
  musculosa,
  bolso01,
  botines,
  medias,
};

const nombresImagen = {
  remera: remera,
  pantalon: pantalon,
  zapatillas: zapatilla,
  zapatilla: zapatilla,
  campera: campera,
  musculosa: musculosa,
  bolso: bolso01,
  botines: botines,
  medias: medias,
};

export const resolveProductImage = (imagePath, name = "") => {
  if (imagePath) {
    const key = imagePath
      .split(/[\\/]/)
      .pop()
      .replace(/\.[^.]+$/, "")
      .toLowerCase();
    if (imagenes[key]) {
      return imagenes[key];
    }
  }

  const nameKey = (name || "").trim().toLowerCase();
  if (nombresImagen[nameKey]) {
    return nombresImagen[nameKey];
  }

  return imagePath;
};