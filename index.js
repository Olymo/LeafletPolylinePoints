const GLOBAL_OPTIONS = {
  color: "blue",
  bindPopup: false,
  popupContent: "",
};

const addCircularPointToPolyline = (coordinates, map, options) => {
  try {
    if (coordinates == null) {
      throw new Error("[x] Missing required parameter [coordinates].");
    }

    if (!Array.isArray(coordinates)) {
      throw new Error("[x] Coordinates parameter must be an array.");
    }

    if (!coordinates.length) {
      throw new Error("[x] Coordinates can not be an empty array.");
    }

    if (options.color != null) {
      GLOBAL_OPTIONS.color = options.color;
    }

    if (options.bindPopup) {
      GLOBAL_OPTIONS.bindPopup = options.bindPopup;
    }

    if (options.popupContent) {
      GLOBAL_OPTIONS.popupContent = options.popupContent;
    }

    coordinates.forEach((coordinate) => {
      let marker = window.L.marker(
        [coordinate.latitude, coordinate.longitude],
        {
          icon: getPointIcon(),
        }
      );

      if (GLOBAL_OPTIONS.bindPopup) {
        marker.bindPopup(GLOBAL_OPTIONS.popupContent);
      }

      marker.addTo(map);
    });
  } catch (e) {
    console.error(e);
  }
};

const getPointIcon = () => {
  return window.L.divIcon({
    className: "polyline-point",
    bgPos: [5, 5],
    html: `<div style='color:${GLOBAL_OPTIONS.color};'>●</div>`,
  });
};

export { addCircularPointToPolyline };
