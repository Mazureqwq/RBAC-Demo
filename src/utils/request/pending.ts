import axios from "axios";

const pendingMap = new Map();

function getKey(config: any) {
  return config.url + "&" + config.method;
}

export function addPending(config: any) {
  const key = getKey(config);

  if (pendingMap.has(key)) {
    const cancel = pendingMap.get(key);
    cancel();
  }
  config.cancelToken = new axios.CancelToken((cancel) => {
    pendingMap.set(key, cancel);
  });
}

export function removePending(config: any) {
  const key = getKey(config);
  pendingMap.delete(key);
}
